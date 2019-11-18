import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.style.scss";
import { connect } from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {createStructuredSelector} from "reselect";


const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionsProps }) => (
      <MenuItem key={id} {...otherSectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
