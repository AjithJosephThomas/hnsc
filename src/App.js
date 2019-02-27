import React from 'react';
import './App.css';
import 'rc-pagination/assets/index.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Search from './component/search';
import Result from './component/result';
import {searchQuery, maximiseResultItem} from './actions/search';
import Pagination from './component/pagination';
class App extends React.PureComponent {
  componentDidMount(){
    this.props.searchQuery("");
  }
  render (){
    const {result, totalPages, totalItems, currPage, pageLength, maximisedItem, maximiseResultItem, searchQuery,queryStr, isSearching } = this.props;
      return (<div className="app container">
          <div className="row">
            <div className="col-md-12">
              <Search onSubmitAction={searchQuery} isSearching={isSearching} queryStr={queryStr}/>
            </div>
            <div className="col-md-12">
              <Result result={result} maximiseResultItem={maximiseResultItem} maximisedItem={maximisedItem} />
              <Pagination isSearching={isSearching} totalItems={totalItems} currPage={currPage} totalPages={totalPages} pageLength={pageLength} onPaginate={(t,r)=>{searchQuery(queryStr,t-1);}} />
            </div>
          </div>
        </div>);
  }
}

  const mapStateToProps = (state) => {
    const {queryStr, isSearching} = state.search;
    const {result, totalPages, currPage, pageLength, totalItems, maximisedItem} = state.result;
    return {result, totalPages, currPage, pageLength, totalItems, maximisedItem, queryStr, isSearching};
  }
  const mapDispatchToProps = (dispatch) => (bindActionCreators({maximiseResultItem, searchQuery},dispatch))
  export default connect(mapStateToProps, mapDispatchToProps)(App);
