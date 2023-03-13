import React, { Component } from "react";
import "./Projectdeck.css";
import Project from "./Project";
import projectdata from "../models/projectdata";

export class Projectdeck extends Component {
  render() {
    return (
      <>
        <a href="https://www.w3schools.com" target="_blank">
          {" "}
          <div className="Projectdex">
            <div className="Projectdex-cards">
              {projectdata.map((p, i) => (
                <Project
                  id={p.id}
                  name={p.name}
                  type={p.type}
                  image={p.image}
                />
              ))}
            </div>
          </div>
        </a>
      </>
    );
  }
}

export default Projectdeck;
