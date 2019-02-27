import React,{Fragment} from 'react';
import Parser from 'html-react-parser';
const resultItem = ({maximisedItem, item, onItemClick}) => (<Fragment>
      {item.storyText?
        <button onClick={onItemClick} aria-expanded="false" className="pull-right btn btn-sm">
          <span className={maximisedItem===item.id? "fa fa-caret-up":"fa fa-caret-down"}></span>
        </button>
        :null
      }
      {item.url?
        <a className="btn btn-sm" target="_blank" rel="noopener noreferrer" href={item.url}>{item.title}</a>
        :<span>{item.title}</span>
      }
      {item.storyText?
        <div className={maximisedItem===item.id?'':'collapse'}>
          <div className="card mt-3">
            <div className="card-body">
              {Parser(item.storyText)}
              </div>
            </div>
        </div>
        :null
      }
    </Fragment>);
export default resultItem;
