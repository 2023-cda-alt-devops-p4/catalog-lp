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
        placeholder="Recherche"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="umlSearch">
        <div className="blockDiag">
          <h3>Diagramme de Structure</h3>
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
          <h3>Diagramme de Comportement</h3>
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

      <div className="umlContain">
        {UMLData.map((item, index) => {
          return (
            <div className="umlCard">
              <div className="umlItems">
                <h4>{item.title}</h4>
                {/* <img src={item.image} alt="" /> */}
                <p>{item.description}</p>
                <button className="plusInfos">Voir un exemple</button>
              </div>
              <a href={item.url}></a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainUml;
