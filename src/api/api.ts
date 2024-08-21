import axios from 'axios';

export const API = axios.create({
	baseURL: 'https://gateway.marvel.com/v1/public/',
	params: {
		apikey: '86d5e98a3b5a802024ba6795892e9b64',
	},
});
