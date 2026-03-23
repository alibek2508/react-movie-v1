import { useState } from 'react';

export const Search = ({ addHandleSearch }) => {
	const [text, setText] = useState('');
	const handleChangeInputText = e => {
		setText(e.target.value);
	};
	const handleSubmitText = e => {
		e.preventDefault();
		addHandleSearch(text);
		setText('');
	};
	return (
		<>
			<form className="col s12" onSubmit={handleSubmitText}>
				<input
					placeholder="Начать искать фильмы"
					type="search"
					className="inputIn"
					value={text}
					onChange={handleChangeInputText}
				/>
				<button>Search</button>
			</form>
		</>
	);
};
