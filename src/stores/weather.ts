import { writable } from 'svelte/store';
import type { Weather } from '@domain/weather';

export const weather = writable<Weather>(null);
export const weatherLoading = writable(false);

export const setWeather = (weatherData: Weather) => weather.set(weatherData);

export const setWeatherLoading = (state: boolean) => weatherLoading.set(state);
