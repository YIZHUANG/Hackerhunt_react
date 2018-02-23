import React, { Component } from "react";
import Icon from "../icons.png";

class TopicList extends Component {
  IconStyle(backgroundPosition) {     // Icon is the file that contains all the icons needed
    return {
      backgroundPosition: backgroundPosition,
      backgroundImage: "url(" + Icon + ")",
      display: "inline-block",
      verticalAlign: "middle",
      width: "16px",
      height: "16px",
      backgroundSize: "627px 16px",
      marginRight: "8px"
    };
  }

  render() {
    let topic = this.props.items;
    let onTopicSelect = this.props.onTopicSelect;
    return (
      <li key={topic.name} className="side-nav__item" onClick={onTopicSelect()}>
        <a href="" className="side-nav__link">
          <span
            className="thumb"
            style={this.IconStyle(topic.backgroundPosition)}
          />
          <span className="side-nav__topic-text">{topic.name}</span>
        </a>
      </li>
    );
  }
}

export default TopicList;
