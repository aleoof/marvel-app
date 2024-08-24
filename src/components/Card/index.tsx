interface ICardProps {
	image: {
		path: string;
		extension: string;
	};
	name: string;
}

export const Card = ({ image, name }: ICardProps) => {
	return (
		<div className="flex border border-grey rounded-lg overflow-hidden">
			<div className="relative h-20 min-w-20">
				<img
					className="h-full w-full"
					src={`${image.path}/standard_xlarge.${image.extension}`}
					alt={name}
				/>
			</div>
			<h3>{name}</h3>
		</div>
	);
};
