export type Weather = {
	temperature: number;
	windspeed: number;
	weathercode: number;
	winddirection: number;
	apparent_temperature: number;
	time: string;
};

export type RawWeather = {
	current_weather: {
		weathercode: number;
		temperature: number;
		windspeed: number;
		time: string;
		winddirection: number;
	};
	hourly: {
		apparent_temperature: number[];
		time: string[];
	};
};

const WMOInterpretation = {
	0: 'Clear sky',
	1: 'Mainly clear',
	2: 'Partly cloudy',
	3: 'Overcast',
	45: 'Fog',
	48: 'Depositing rime fog',
	51: 'Light drizzle',
	53: 'Moderate drizzle',
	55: 'Dense drizzle',
	56: 'Light freezing drizzle',
	57: 'Dense freezing drizzle',
	61: 'Slight rain',
	63: 'Moderate rain',
	65: 'Heavy rain',
	66: 'Light freezing rain',
	67: 'Heavy freezing rain',
	71: 'Slight snow fall',
	73: 'Moderate snow fall',
	75: 'Heavy snow fall',
	77: 'Snow grains',
	80: 'Slight rain showers',
	81: 'Moderate rain showers',
	82: 'Violent rain showers',
	85: 'Slight snow showers',
	86: 'Heavy snow showers',
	95: 'Thunderstorm',
	96: 'Thunderstorm with slight hail',
	99: 'Thunderstorm with heavy hail'
};

export function getActualTemperature(weather: Weather) {
	if (!weather) return null;
	return weather.temperature;
}

export function getApparentTemperature(weather: Weather) {
	if (!weather) return null;
	return weather.apparent_temperature;
}

export function getWeatherState(weather: Weather) {
	if (!weather) return null;
	return WMOInterpretation[weather.weathercode];
}

export function getWindSpeed(weather: Weather) {
	if (!weather) return null;
	return weather.windspeed;
}

export function getWindDirection(weather: Weather) {
	if (!weather) return null;

	const { winddirection } = weather;

	switch (winddirection) {
		case 0:
		case 360:
			return 'north (N)';
		case 90:
			return 'east (E)';
		case 180:
			return 'south (S)';
		case 270:
			return 'west (W)';
	}

	if (winddirection > 0 && winddirection < 90) return 'northeast (NE)';
	if (winddirection > 90 && winddirection < 180) return 'southeast (SE)';
	if (winddirection > 180 && winddirection < 270) return 'southwest (SW)';
	if (winddirection > 270 && winddirection < 360) return 'northwest (NW)';

	return '-';
}
