import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  ClearRefinements,
  RefinementList,
  Configure,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch(
  'SUBOWRZLGG',
  'fb6db33342b6784aeb99b46dc9f997f4'
);

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">NFL Player Database</a>
          </h1>
          <img className='fb-clipart' src='https://lh3.googleusercontent.com/proxy/jFbNaySUwBkAFgcBPakoLhJ8K4tNkbKXcuvv1WuU4b_zLEoYBBjZnXFkq-mWDq9JTDGEVQkK3OPGTHI-8ZT1xXpS1HbzFGc' />
        </header>
        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="Football">
            <div className="left-panel">
              <ClearRefinements />
              <h2>Filter By Position</h2>
              <RefinementList attribute="position" />
              <h2>Filter By Team</h2>
              <RefinementList attribute="current_team" />
              <Configure hitsPerPage={12} />
            </div>
            <div className="search-panel">
              <div className="search-panel__results">
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: '',
                  }}
                />
                <Hits hitComponent={Hit} />

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

function getAge(birthdate) {
  const birthYear = parseInt(birthdate.substr(0, 4));
  const currentYear = new Date().getFullYear();
  return (currentYear - birthYear)
}

function Hit(props) {
  return (
    <div className='player-card'>
      <div className='player-position'>
        <h1>
          {props.hit.position}
        </h1>
      </div>
      <h2>
        <Highlight attribute="name" hit={props.hit} />
      </h2>
      {props.hit.current_team ? (<p>{props.hit.current_team}</p>) : (<p>No current team</p>)}
      {props.hit.draft_round ? (<p>Round Drafted: {props.hit.draft_round}</p>) : (<p>No draft data</p>)}
      {props.hit.birth_date ? (<p>Age: {getAge(props.hit.birth_date)}</p>) : (<p>No age data</p>)}
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
