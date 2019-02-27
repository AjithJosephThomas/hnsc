import React, {PureComponent} from 'react';


const search = ({queryStr, isSearching, onSubmitAction}) =>(
  <div className="form-group text-left">
      <h6>Search:</h6>

      <div className="input-group">
        <input type="text"
          className="form-control"
          value={queryStr}
          onChange={(event)=>{
            const {value} = event.currentTarget;
            onSubmitAction(value);
          }}/>
          <div className="input-group-append">
            <span className="input-group-text">
            {
              isSearching?<i className="fa fa-spinner fa-spin"></i>:<i className="fa fa-search"></i>
            }
            </span>
          </div>
        </div>
  </div>
)

export default search;
