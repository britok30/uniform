import React, { useState, useEffect } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ResultsList from './ResultsList/ResultsList';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import axios from 'axios';
import './App.scss';

const App = () => {
    const [results, setResults] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredSearch, setFilteredSearch] = useState([]);

    // useEffect to get and set the default results'
    // Executes once
    useEffect(() => {
        const retrieveData = async () => {
            const uniformUrl = 'http://127.0.0.1:8080/';
            const response = await axios.get(uniformUrl);
            setResults(response.data);
        };

        retrieveData();
    }, []);

    // useEffect to filter searched
    // Rerenders upon changes to search & results
    useEffect(() => {
        setFilteredSearch(
            results.filter((result) => {
                const filterName = result.name
                    .toLowerCase()
                    .includes(search.toLowerCase());
                const filterEmail = result.email
                    .toLowerCase()
                    .includes(search.toLowerCase());

                return filterName || filterEmail;
            })
        );
    }, [search, results]);

    return (
        <div className="app">
            <div className="app__container">
                <Header />
                <Searchbar setSearch={setSearch} />
                <ResultsList results={filteredSearch} />
                <Footer />
            </div>
        </div>
    );
};

export default App;
