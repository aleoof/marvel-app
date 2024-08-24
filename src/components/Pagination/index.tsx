import { useState } from 'react';

export const Pagination = ({ totalItems, offset, limit }) => {
	const [pageNumber, setPageNumber] = useState(0);

	const handlePreview = () => {
		if (pageNumber > 0) setPageNumber((prevState) => prevState - 1);
	};
	const handleNext = () => {
		if (pageNumber < totalItems / limit)
			setPageNumber((prevState) => prevState + 1);
	};

	return (
		<div className="flex justify-between">
			<button type="button" onClick={handlePreview}>
				preview
			</button>
			<div className="grid grid-cols-5 gap-x-6 w-fit">
				<button
					className="rounded-full bg-slate-600 w-8 h-8 text-white font-bold"
					type="button"
				>
					{pageNumber - 2}
				</button>
				<button
					className="rounded-full bg-slate-600 w-8 h-8 text-white font-bold"
					type="button"
				>
					{pageNumber - 1}
				</button>
				<button
					className="rounded-full bg-slate-600 w-8 h-8 text-white font-bold"
					type="button"
				>
					{pageNumber}
				</button>
				<button
					className="rounded-full bg-slate-600 w-8 h-8 text-white font-bold"
					type="button"
				>
					{pageNumber + 1}
				</button>
				<button
					className="rounded-full bg-slate-600 w-8 h-8 text-white font-bold"
					type="button"
				>
					{pageNumber + 2}
				</button>
			</div>
			<button type="button" onClick={handleNext}>
				next
			</button>
		</div>
	);
};
