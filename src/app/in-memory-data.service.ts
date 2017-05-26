import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let heroes = [
			{ id: 11, name: 'makan' },
			{ id: 12, name: 'nasi' },
			{ id: 13, name: 'ayam' },
			{ id: 14, name: 'sambal' },
			{ id: 15, name: 'belacan' },
			{ id: 16, name: 'tempoyak' },
			{ id: 17, name: 'durian' },
			{ id: 18, name: 'crepe' },
			{ id: 19, name: 'chocolate' },
			{ id: 20, name: 'cake' }
		];
		return {heroes};
	}
}