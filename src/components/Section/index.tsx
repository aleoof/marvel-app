import { useEffect, useState } from 'react';
import { API } from '../../api/api';
import { Container } from '../Container';
import { Card } from '../Card';

export const Section = () => {
	const [characterList, setCharacterList] = useState([]);

	async function responseData(callback: any) {
		try {
			const response = await API.get('/characters', {
				params: {
					orderBy: 'name',
					limit: '20',
				},
			});
			console.log('API response => ', response.data);
			callback(response.data.data.results);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		responseData(setCharacterList);
	}, []);
	return (
		<Container>
			<div className="grid grid-cols-12 gap-4">
				{characterList.map((character) => (
					<div className="col-span-3">
						<Card image={character.thumbnail} name={character.name} />
					</div>
				))}
			</div>
		</Container>
	);
};
