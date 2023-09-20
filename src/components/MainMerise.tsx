import React, { useState } from "react";
import { MeriseData } from "./data/MeriseData";

function MainMerise() {
  const [search, setSearch] = useState("");

  const schemaConceptuel = MeriseData.filter(
    (item) => item.categorie === "schemas conceptuels"
  );
  const schemaOrga = MeriseData.filter(
    (item) => item.categorie === "schemas organisationels"
  );
  const schemaFlux = MeriseData.filter(
    (item) => item.categorie === "schemas de flux"
  );
  const schemaArchi = MeriseData.filter(
    (item) => item.categorie === "schemas d'architecture"
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
          <h3>Schéma Conceptuels</h3>
          <div className="items">
            {schemaConceptuel
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
          <h3>Schémas Organisationels</h3>
          <div className="items">
            {schemaOrga
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
          <h3>Schémas de Flux</h3>
          <div className="items">
            {schemaFlux
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
          <h3>Schémas d'Architectures</h3>
          <div className="items">
            {schemaArchi
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
        {MeriseData.map((item, index) => {
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

export default MainMerise;
