import { writable } from 'svelte/store';
import type { Weather } from '@/domains/weather';

export const weather = writable<Weather>(null);
export const weatherLoading = writable(true);
export const weatherError = writable<string>(null);

export const setWeather = (weatherData: Weather) => weather.set(weatherData);
export const setWeatherLoading = (state: boolean) => weatherLoading.set(state);
export const setWeatherError = (error: string) => weatherError.set(error);
