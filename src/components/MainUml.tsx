import { Component } from "react";
import { UMLData } from "./data/UMLData";
import "./css/UmlStyle.css";

class MainUml extends Component {
  render() {
    const diagrammesStructure = UMLData.filter(
      (item) => item.categorie === "diagramme de structure"
    );
    const diagrammesComportement = UMLData.filter(
      (item) => item.categorie === "diagramme de comportement"
    );
    return (
      <div className="UmlMain">
        <div className="blockDiag">
          <h3>Diagrame de Structure</h3>
          <div className="items">
            {diagrammesStructure.map((item, index) => (
              <a key={index} href={`#${item.title} || `}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="blockDiag">
          <h3>Diagrame de Comportement</h3>
          <div className="items">
            {diagrammesComportement.map((item, index) => (
              <a key={index} href={`#${item.title} || `}>
                {item.title}
              </a>
            ))}
          </div>
        </div>

        {/* <ul>
          {UMLData.map((item, index) => {
            return (
              <li className="umlItems">
                <h1>{item.title}</h1>
                <div className="bloc-img-desc">
                  <img src={item.image} alt="" />
                  <p>{item.description}</p>
                </div>
                <a href={item.url}></a>
              </li>
            );
          })}
        </ul> */}
      </div>
    );
  }
}

export default MainUml;
