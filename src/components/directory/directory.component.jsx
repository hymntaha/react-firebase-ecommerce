import React, {Component} from 'react';
import MenuItem from "../menu-item/menu-item.component";
import './directory.style.scss';

class Directory extends Component {
  constructor(){
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className='directory-menu'>
        {
          this.state.sections.map(({id, ...otherSectionsProps})=>(
            <MenuItem key={id} {...otherSectionsProps}/>
          ))
        }
      </div>
    );
  }
}

export default Directory;
