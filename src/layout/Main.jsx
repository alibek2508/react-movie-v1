import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';
import { Preloader } from '../components/Preloader';

export const Main = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [searchText, setSearchText] = useState('Matrix');
	const [type, setType] = useState('');
	const addHandleSearchText = (text, movieType) => {
		if (text.trim()) {
			setSearchText(text.trim());
		}
		setType(movieType);
	};
	useEffect(() => {
		const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=7ff8bfac&s=${searchText}&type=${type} `;
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await axios.get(URL);
				if (response.data.Response === 'True') {
					setMovies(response.data.Search);
					setError(null);
				} else {
					setError(response.data.Error);
				}
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, [error, searchText, type]);
	if (error) {
		return <h1>Error: {error}</h1>;
	}
	return (
		<div className="content container">
			<Search addHandleSearch={addHandleSearchText} />
			{loading ? <Preloader /> : <Movies movies={movies} />}
		</div>
	);
};
