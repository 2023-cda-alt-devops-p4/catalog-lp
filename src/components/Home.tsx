import React from "react";
import Logo from "../assets/images/logo.png";
import "./css/Home.css";

function Home() {
  return (
    <div className="home-page">
      <div className="title">
        <img src={Logo} alt="logo" />
        <h1>
          Bienvenue sur Diagram Hub! Des explications rapides et claires sur
          deux méthodologies essentielles : <span>UML</span> et{" "}
          <span>Merise</span>.
        </h1>
      </div>
      <div className="home-page-contain">
        <div className="section-uml-merise">
          <p>
            Découvrez UML, le langage de modélisation universel utilisé pour
            concevoir et visualiser des systèmes logiciels. Comment créer des
            diagrammes de classe, d'objet, de séquence et plus encore pour
            représenter des structures et des comportements de logiciels de
            manière compréhensible.
          </p>
          <p>
            Explorez Merise, une méthodologie de gestion de projet informatique
            qui vous guide dans la conception des systèmes d'information.
            Découvrez comment élaborer des modèles conceptuels, logiques et
            physiques pour planifier et développer des bases de données et des
            applications.
          </p>
        </div>
        <p>
          Simplifiez votre compréhension des concepts informatiques essentiels
          avec nos ressources faciles à suivre sur UML et Merise. Commencez dès
          maintenant pour renforcer vos compétences en modélisation et en
          conception de systèmes informatiques.
        </p>
      </div>
    </div>
  );
}

export default Home;
