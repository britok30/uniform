import React from 'react';
import PropTypes from 'prop-types';

import './Searchbar.scss';

const Searchbar = ({ setSearch }) => {
    return (
        <div className="searchbar">
            <input
                className="searchbar__input"
                type="text"
                name="search"
                placeholder="Search Results Here"
                onChange={(e) => setSearch(e.target.value)}
                autocomplete="off"
            />
        </div>
    );
};

Searchbar.propTypes = {
    setSearch: PropTypes.func.isRequired,
};

export default Searchbar;
