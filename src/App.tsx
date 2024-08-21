import { useEffect } from 'react';
import { API } from './api/api';

function App() {
	async function responseData() {
		try {
			const response = await API.get('/characters', {
				params: {
					orderBy: 'name',
					limit: '10',
				},
			});
			console.log('API response => ', response.data);
			return response.data;
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		responseData();
	}, []);
	return (
		<>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem
			magnam ullam, debitis vitae provident veniam ipsa deleniti doloribus est
			maxime minima quia, iste enim illo aliquid nemo obcaecati animi?
		</>
	);
}

export default App;
