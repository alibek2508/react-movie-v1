import axios from 'axios';
import { useEffect, useState } from 'react';
import { Movies } from '../components/Movies';
import { Search } from '../components/Search';

export const Main = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [searchText, setSearchText] = useState('Matrix');
	const addHandleSearchText = text => {
		if (text.trim()) {
			setSearchText(text.trim());
		}
	};
	useEffect(() => {
		const URL = `http://www.omdbapi.com/?i=tt3896198&apikey=7ff8bfac&s=${searchText}`;
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
	}, [error, searchText]);
	if (error) {
		return <h1>Error: {error}</h1>;
	}
	return (
		<div className="content container">
			<Search addHandleSearch={addHandleSearchText} />
			{loading ? <h1>Loading ... </h1> : <Movies movies={movies} />}
		</div>
	);
};
