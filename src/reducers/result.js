const result = (state= { maximisedItem:"", result:[], totalPages:0, currPage:0, pageLength:0, totalItems:0}, action) => {
  const {type} = action;
  switch (type) {
    case 'RESULT_SUCCESS':
        const { totalPages, totalItems, currPage, pageLength, result } = action;
        return {...state, totalPages, totalItems, currPage, pageLength, result, error:''};
    case 'RESULT_FAILURE':
        const {error} = action;
        return {...state, totalPages:0, totalItems, currPage:0, pageLength:0, result:[], error};
    case 'MAXIMISE_RESULT_ITEM':
      const {id} = action;
      const maximisedItem = (state.maximisedItem === id)?"":id
      return {...state, maximisedItem};
    default:
      return state;
  }
};
export default result;
