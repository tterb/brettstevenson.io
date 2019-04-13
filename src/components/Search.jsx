import React from "react";
import PropTypes from "prop-types";
import { InstantSearch, SearchBox, Hits, Stats, Pagination } from "react-instantsearch-dom";


const SearchWrapper = ({ algolia }) => (
  <>
    <hr/>
    <div>
      {algolia && algolia.appId && (
        <InstantSearch
          appId={algolia.appId}
          apiKey={algolia.searchOnlyApiKey}
          indexName={algolia.indexName}>
          <SearchBox translations={{ placeholder: "Search" }} />
          <Stats />
          <Hits />
        </InstantSearch>
      )}
    </div>
  </>
)

const Search = ({ classes, algolia, searchHidden }) => {
  return (
    <>
      { searchHidden ? '' : <SearchWrapper algolia={algolia} /> }
    </>
  )
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
  algolia: PropTypes.object.isRequired,
  searchHidden: PropTypes.bool.isRequired
}

export default Search