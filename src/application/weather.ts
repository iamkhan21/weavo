import wretch from 'wretch';
import { setWeather, setWeatherLoading } from '@stores/weather';
import { setLocation } from '@stores/location';
import type { LocationInfo } from '@/domains/location';
import type { Weather } from '@/domains/weather';
import { locationAdapter } from '@services/location.adapter';
import { of } from 'await-of';

export async function loadWeatherData() {
	// navigator.geolocation.getCurrentPosition()
	// Intl.DateTimeFormat().resolvedOptions().timeZone

	setWeatherLoading(true);

	const [data, error] = await of(locationAdapter().getCurrentPosition());

	if (error) {
		return;
	}

	const [weather, position] = await Promise.allSettled([
		wretch('/weather')
			.get()
			.json((res) => res.current_weather),

		// https://api.mapbox.com/geocoding/v5/mapbox.places/27,53.json?limit=1&types=address&language=en&access_token=YOUR_MAPBOX_ACCESS_TOKEN/v1/geocoding/Reverse
		wretch('/location').get().json()
	]);

	if (weather.status === 'fulfilled') {
		setWeather(weather.value as Weather);
	}

	if (position.status === 'fulfilled') {
		setLocation(position.value as LocationInfo);
	}else{
		console.log(position);
	}

	setWeatherLoading(false);
}
