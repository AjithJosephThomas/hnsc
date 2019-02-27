const search = (state= {queryStr:'',isSearching:false}, action)=>{
  const {type} = action;
  switch (type) {
    case 'SEARCH_QUERY':
        const {queryStr} = action;

        return {...state, queryStr,isSearching:true};
    case 'RESULT_SUCCESS':
        return {...state, isSearching:false};
        case 'RESULT_FAILURE':
        return {...state, isSearching:false};
    default:
      return state;
  }
};
export default search;
