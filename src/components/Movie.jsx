export const Movie = ({ Poster, Title, Year }) => {
	const placeholder = `https://placehold.co/300x450?text=${Title}`;
	return (
		<div className="card movie">
			<div className="card-image waves-effect waves-block waves-light">
				<img
					className="activator"
					src={Poster === 'N/A' ? placeholder : Poster}
					alt={Title}
					onError={e => {
						e.target.onerror = null;
						e.target.src = placeholder;
					}}
				/>
			</div>
			<div className="card-content">
				<span className="card-title activator grey-text text-darken-4">
					{Title}
				</span>
				<p>
					<span>{Year}</span>
				</p>
			</div>
		</div>
	);
};
