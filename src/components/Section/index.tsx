import { useEffect, useState } from 'react';
import { API } from '../../api/api';
import { Container } from '../Container';
import { Card } from '../Card';
import { Pagination } from '../Pagination';

export const Section = () => {
	const [characterList, setCharacterList] = useState([]);
	const [totalItems, setTotalItems] = useState([]);
	const [offset, setOffset] = useState([]);
	const [limit, setLimit] = useState([]);

	async function responseData(callback: any) {
		try {
			const response = await API.get('/characters', {
				params: {
					orderBy: 'name',
					limit: '20',
				},
			});
			callback(response.data.data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		responseData((data) => setCharacterList(data.results));
		responseData((data) => setTotalItems(data.total));
		responseData((data) => setOffset(data.offset));
		responseData((data) => setLimit(data.limit));
	}, []);
	return (
		<Container>
			<div className="grid grid-cols-12 gap-4">
				{characterList?.map((character) => (
					<div className="col-span-3">
						<Card image={character.thumbnail} name={character.name} />
					</div>
				))}
				<div className="col-span-12">
					<Pagination totalItems={totalItems} offset={offset} limit={limit} />
				</div>
			</div>
		</Container>
	);
};
