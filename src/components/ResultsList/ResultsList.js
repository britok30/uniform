import React from 'react';
import ResultsCard from '../ResultsCard/ResultsCard';
import PropTypes from 'prop-types';
import { ToastProvider } from 'react-toast-notifications';
import { FixedSizeList as List } from 'react-window';
import './ResultsList.scss';

const ResultsList = ({ results }) => {
    /* 
        This was my original implementation of the list rendering. I switched to 
        React-Window in order to handle the large data-set for me. 
        Benefits:
        1. Reduces the amout of work (and time) required to render the initial view
        2. Reduces the memory footprint by avoiding over-allocation of DOM Nodes.

        These issues were present when I loaded up the complete set of data and as I 
        was filtering. Other potential avenues I could've implemented: Pagination :) 

        Source: github.com/bvaughn/react-window
    */

    // const personResult = results.map((person) => {
    //     return (
    //         <ToastProvider>
    //             <ResultsCard key={person.id} person={person} />
    //         </ToastProvider>
    //     );
    // });

    const personResult = (
        <List
            className="list"
            itemCount={results.length}
            width={400}
            height={500}
            itemSize={100}
        >
            {({ index, style }) => (
                <ToastProvider>
                    <div style={style}>
                        <ResultsCard person={results[index]} />
                    </div>
                </ToastProvider>
            )}
        </List>
    );

    return (
        <div className="results">
            <div className="results__container">{personResult}</div>
            <div className="results__total">
                {results.length === 0
                    ? 'No Results Found :('
                    : ` Total: ${results.length} results found`}
            </div>
        </div>
    );
};

ResultsList.propTypes = {
    results: PropTypes.array.isRequired,
};

export default ResultsList;
