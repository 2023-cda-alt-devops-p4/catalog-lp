import { Component, useState } from "react";
import { UMLData } from "./data/UMLData";
import "./css/UmlStyle.css";

function MainUml() {
  const [search, setSearch] = useState("");

  const diagrammesStructure = UMLData.filter(
    (item) => item.categorie === "diagramme de structure"
  );

  const diagrammesComportement = UMLData.filter(
    (item) => item.categorie === "diagramme de comportement"
  );

  return (
    <div className="UmlMain">
      <input
        type="text"
        placeholder="Rechercher par titre..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="umlContain">
        <div className="blockDiag">
          <h3>Diagrame de Structure</h3>
          <div className="items">
            {diagrammesStructure
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <a key={index} href={`#${item.title} || `}>
                  {item.title}
                </a>
              ))}
          </div>
        </div>
        <div className="blockDiag">
          <h3>Diagrame de Comportement</h3>
          <div className="items">
            {diagrammesComportement
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <a key={index} href={`#${item.title} || `}>
                  {item.title}
                </a>
              ))}
          </div>
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

export default MainUml;
