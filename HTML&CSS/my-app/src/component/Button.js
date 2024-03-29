import React from "react";
import "./Button.css";

export default class Button extends React.Component {
  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    const { name, orange, wide } = this.props;
    const className = [
      "component-button",
      orange ? "orange" : "",
      wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ")}>
        <button onClick={this.handleClick}>{name}</button>
      </div>
    );
  }
}
