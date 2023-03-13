import React, { Component } from "react";
import "./Projectdeck.css";
import Project from "./Project";
import projectdata from "../models/projectdata";

export class Projectdeck extends Component {
  render() {
    return (
      <div className="Projectdex">
        <h1>{this.props.title}</h1>

        <div className="Projectdex-cards">
          {projectdata.map((p, i) => (
            <a
              href="https://www.w3schools.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Project id={p.id} name={p.name} type={p.type} image={p.image} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Projectdeck;
