import { writable } from 'svelte/store';
import type { LocationInfo } from '@/domains/location';

export const location = writable<LocationInfo>(null);

export const setLocation = (position: LocationInfo) => location.set(position);
