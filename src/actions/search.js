import axios from 'axios';
let timerConst;
export const searchQuery = (queryStr,currPage=0) => {

  const url = `https://hn.algolia.com/api/v1/search?query=${queryStr}&tags=story&page=${currPage}`;
  return (dispatch) => {
    dispatch({
      type:'SEARCH_QUERY',
      queryStr,
      isSearching:true,
      currPage
    });
    if(timerConst){
      clearTimeout(timerConst);
    }
    timerConst = setTimeout(() => {
      axios.get(url).then(({status, data}) => {
          const {nbPages, nbHits, page, hits, hitsPerPage} = data;
          const result = hits.map(item => {
          const {title, author, objectID, story_text, url} = item;
          return {title, author, id:objectID, storyText:story_text, url};
        });

        const pageLength = hitsPerPage;
        dispatch({
          type:'RESULT_SUCCESS',
          result,
          totalItems:nbHits,
          totalPages:nbPages,
          currPage:page,
          pageLength
        });
      }).catch(response =>{
        dispatch({
          type:'RESULT_FAILURE',
          error:response
        });
      })
    },300);
  }
}
export const maximiseResultItem = (id) =>({type:'MAXIMISE_RESULT_ITEM',id})
