import React, { Component } from "react";
import "./Project.css";

export class Project extends Component {
  render() {
    return (
      <div className="Projectcard">
        <h1 className="Projectcard-title">{this.props.name}</h1>
        <div className="Projectcard-image">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className="Projectcard-data">Type: {this.props.type}</div>
      </div>
    );
  }
}

export default Project;
