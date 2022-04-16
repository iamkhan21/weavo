import { writable } from 'svelte/store';
import type { LocationInfo } from '@domain/location';

export const location = writable<LocationInfo>(null);

export const setLocation = (position: LocationInfo) => location.set(position);
