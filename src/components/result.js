import React, {Fragment} from 'react';
import ResultItem from './resultItem';

const result = ({result, maximisedItem, maximiseResultItem})=>(
  <Fragment>
      <h6>Result:</h6>
      <ul className="list-group">
      {
        result.map(item => (
          <li className="list-group-item list-group-item-action" key={item.id} >
            <ResultItem item={item}  maximisedItem={maximisedItem} onItemClick={()=>maximiseResultItem(item.id)} />
          </li>
        ))
      }
      </ul>
</Fragment>);
export default result;
