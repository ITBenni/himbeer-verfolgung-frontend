import { writable } from "svelte/store";
import { derived } from 'svelte/store';

const stationStore = (initial = {}) => {
	const { subscribe, set, update } = writable(initial); // create the underlying writable store

	return {
		subscribe,
		set,
		update,
		updateTags: (id, tags) => {
			update((state) => {
				state[id].tags = tags; 
				return state

				const modified = state[id]; 
				modified.tags = tags;
				
				console.log('id', id);
				console.log('modified:', { 23: modified });
				console.log('original:', );
				
				return { ...state, ...{ id: modified }};
			}); 
		}
	};
}; 
export const stations = stationStore(); 

// Create a list of all tags in each station
export const tags = derived(stations, $stations => Object.values($stations).reduce((acc, entry) => acc.concat(Object.values(entry.tags)), [])); 

export const stationIDs = derived(stations, $stations => Object.keys($stations)); 

//export const stationIDs = derived(stations, ($stations) => $stations.map((obj) => obj.uuid));
//export const stationIDs = derived(stations, Object.values($stations).reduce((acc, entry) => acc.concat(Object.values(entry.tags)), []));


