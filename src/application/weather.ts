import { setWeather, setWeatherError, setWeatherLoading } from '@stores/weather';
import { setLocation, setLocationError, setLocationLoading } from '@stores/location';
import { locationAdapter } from '@services/location.adapter';
import { of } from 'await-of';
import { geocodingAdapter } from '@services/geocoding.adapter';
import { weatherAdapter } from '@services/weather.adapter';
import { storageAdapter } from '@services/storage.adapter';
import type { RawLocation } from '@domains/location';
import { isGeolocationEqualSaved } from '@domains/location';

export async function loadWeatherData() {
	const [coordinates, err1] = await of(locationAdapter().getCurrentPosition());
	const [savedCoordinates, err2] = await of(storageAdapter().getLocation());

	if ((err1 && err2) || (err1 && savedCoordinates)) {
		console.log(err1);
		console.log(err2);
		setLocationError(`Can't get your location`);
		return;
	}
	let locationNotChanged = false;

	if (err1) locationNotChanged = true;
	else if (!err2 && savedCoordinates)
		locationNotChanged = isGeolocationEqualSaved(coordinates, savedCoordinates);

	setLocationLoading(false);

	const point = locationNotChanged ? savedCoordinates.location : coordinates;

	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	const [weather, position] = await Promise.allSettled([
		weatherAdapter().getCurrentWeather(point, timezone),
		locationNotChanged
			? Promise.resolve(savedCoordinates)
			: geocodingAdapter().getCoordinatesAddress(coordinates)
	]);

	if (weather.status === 'fulfilled') {
		const data = weatherAdapter().convertRawToWeather(weather.value);
		setWeather(data);
	} else {
		console.log(weather);
		setWeatherError(`Can't get weather`);
		return;
	}

	if (position.status === 'fulfilled') {
		let data;
		if (locationNotChanged) {
			data = savedCoordinates;
		} else {
			data = geocodingAdapter().convertRawToLocation(position.value as RawLocation);
			storageAdapter().saveLocation(data);
		}
		setLocation(data);
	} else {
		console.log(position);
	}

	setWeatherLoading(false);
}
