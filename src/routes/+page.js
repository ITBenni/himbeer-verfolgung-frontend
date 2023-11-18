/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import { stations } from '../stores.js'

let API_ENDPOINT = `https://37dff9c1-b164-4821-93d5-59684591f4f0.ma.bw-cloud-instance.org/api`; 

export async function load({ fetch, params }) {
	// Necessary for #&^@^!@&#*#^ CORS to work
	const fetchOptions = { mode: 'cors' };

	try {
		const [stationsResponse, tagsReponse] = await Promise.all([
			fetch(`${API_ENDPOINT}/stations`, fetchOptions),
			fetch(`${API_ENDPOINT}/tags`, fetchOptions)
		]);	
		
		if (!stationsResponse.ok || !tagsReponse.ok)
			throw error(400, 'Some endpoints not reachable');	
		
		const s = await stationsResponse.json();
		const tags = await tagsReponse.json();
	
		stations.set(s); 

		return { stations: s, tags: tags }; 
	} catch (error) {
		console.error(`Failed to fetch initial data for station: ${error.message}`);
	}
} 