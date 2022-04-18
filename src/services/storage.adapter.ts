import { get, set } from 'idb-keyval';
import { location } from '@stores/location';
import type { LocationInfo } from '@domains/location';

export function storageAdapter() {
	return {
		saveLocation(location: LocationInfo) {
			set('location', location);
		},
		getLocation(): Promise<LocationInfo> {
			return get('location');
		}
	};
}
