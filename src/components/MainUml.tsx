import { Component } from "react";
import { UMLData } from "./data/UMLData";

class MainUml extends Component {
  render() {
    return (
      <ul className="umlItems">
        {UMLData.map((item, index) => {
          return (
            <li>
              <h1>{item.title}</h1>
              <img src={item.image} alt="" />
              <a href={item.url}></a>
              <p>{item.description}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MainUml;
