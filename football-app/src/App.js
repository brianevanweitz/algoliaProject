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
            <a href="/">NFL Player Statistics</a>
          </h1>
          <p className="header-subtitle">
            using{' '}
            <a href="https://github.com/algolia/react-instantsearch">
              React InstantSearch
            </a>
          </p>
        </header>
        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="Football">
            <div className="left-panel">
              <ClearRefinements />
              <h2>Filter By Position</h2>
              <RefinementList attribute="position" />
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

function Hit(props) {
  return (
    <div className='player-card'>
      <div className='player-position'>
        <h1>
          {props.hit.position}
        </h1>
      </div>
      <h3>
        <Highlight attribute="name" hit={props.hit} />
      </h3>
    </div>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
