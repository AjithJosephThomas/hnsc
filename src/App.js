import React from 'react';
import './App.css';
import 'rc-pagination/assets/index.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Search from './components/search';
import Result from './components/result';
import {searchQuery, maximiseResultItem} from './actions/search';
import Pagination from './components/pagination';
class App extends React.PureComponent {
  componentDidMount(){
    this.props.searchQuery("");
  }
  render (){
    const {result, totalPages, totalItems, currPage, pageLength, maximisedItem, maximiseResultItem, searchQuery,queryStr, isSearching } = this.props;
      return (<div className="app container">
          <div className="row">
            <div className="col-md-12">
              <Search
                onSubmitAction={searchQuery}
                isSearching={isSearching}
                queryStr={queryStr}/>
            </div>
            <div className="col-md-12">
              <Result
                result={result}
                maximiseResultItem={maximiseResultItem}
                maximisedItem={maximisedItem} />
            </div>
            <div className="col-md-12">
            <Pagination
              isSearching={isSearching}
              totalItems={totalItems}
              currPage={currPage}
              totalPages={totalPages}
              pageLength={pageLength}
              onPaginate={(t)=>{searchQuery(queryStr,t-1);}} />
            </div>
          </div>
        </div>);
  }
}

  const mapStateToProps = (state) => {
    const {search, result} = state;
    return {...search, ...result};
  }
  const mapDispatchToProps = (dispatch) => (bindActionCreators({maximiseResultItem, searchQuery},dispatch))
  export default connect(mapStateToProps, mapDispatchToProps)(App);
