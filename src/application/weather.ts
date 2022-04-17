import { setWeather, setWeatherLoading } from '@stores/weather';
import { setLocation } from '@stores/location';
import { locationAdapter } from '@services/location.adapter';
import { of } from 'await-of';
import { geocodingAdapter } from '@services/geocoding.adapter';
import { weatherAdapter } from '@services/weather.adapter';

export async function loadWeatherData() {
	setWeatherLoading(true);

	const [data, error] = await of(locationAdapter().getCurrentPosition());
	const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

	if (error) {
		console.log(error);
		return;
	}

	const [weather, position] = await Promise.allSettled([
		weatherAdapter().getCurrentWeather(data, timezone),
		geocodingAdapter().getCoordinatesAddress(data)
	]);

	if (weather.status === 'fulfilled') {
		const data = weatherAdapter().convertRawToWeather(weather.value);
		setWeather(data);
	} else {
		console.log(weather);
	}

	if (position.status === 'fulfilled') {
		const data = geocodingAdapter().convertRawToLocation(position.value);
		setLocation(data);
	} else {
		console.log(position);
	}

	setWeatherLoading(false);
}
