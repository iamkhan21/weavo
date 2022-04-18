import { writable } from 'svelte/store';
import type { LocationInfo } from '@/domains/location';

export const location = writable<LocationInfo>(null);
export const locationLoading = writable(true);
export const locationError = writable<string>(null);

export const setLocation = (position: LocationInfo) => location.set(position);
export const setLocationLoading = (state: boolean) => locationLoading.set(state);
export const setLocationError = (error: string) => locationError.set(error);
