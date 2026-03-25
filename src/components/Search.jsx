import { useState } from 'react';

export const Search = ({ addHandleSearch }) => {
	const [text, setText] = useState('');
	const [type, setType] = useState('');
	const handleChangeInputText = e => {
		setText(e.target.value);
	};
	const handleSubmitText = e => {
		e.preventDefault();
		addHandleSearch(text, type);
		setText('');
	};
	const handleFilterMovies = e => {
		const newType = e.target.dataset.type;
		setType(newType);
		addHandleSearch(text, newType);
	};
	return (
		<>
			<div>
				<form className="col s12 inputIn" onSubmit={handleSubmitText}>
					<input
						placeholder="Начать искать фильмы"
						type="search"
						className="validate "
						value={text}
						onChange={handleChangeInputText}
					/>
					<button
						type="submit"
						className="waves-effect waves-light btn-small btn-search"
					>
						Search
					</button>
				</form>
			</div>
			<div className="radio-btn">
				<label>
					<input
						className="with-gap"
						name="type"
						type="radio"
						data-type=""
						checked={type === ''}
						onChange={handleFilterMovies}
					/>
					<span>All</span>
				</label>
				<label>
					<input
						className="with-gap"
						name="type"
						type="radio"
						data-type="movie"
						checked={type === 'movie'}
						onChange={handleFilterMovies}
					/>
					<span>Movies only</span>
				</label>
				<label>
					<input
						className="with-gap"
						name="type"
						type="radio"
						data-type="series"
						checked={type === 'series'}
						onChange={handleFilterMovies}
					/>
					<span>Series only</span>
				</label>
			</div>
		</>
	);
};
