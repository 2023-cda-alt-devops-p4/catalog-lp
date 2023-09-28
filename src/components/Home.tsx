import { useContext, useEffect, useState } from "react";
import Logo2Light from "../assets/images/logo2.png";
import Logo2Dark from "../assets/images/logoo2.png";
import "./css/Home.css";
import { IThemeContext, ThemeContext } from "../context/ThemeProvider";

function Home() {
  const [zoomOut, setZoomOut] = useState(false);
  const { theme } = useContext<IThemeContext>(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setZoomOut(true);
      } else {
        setZoomOut(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`home-page ${theme === "dark" && "dark"}`}>
      <div className="title">
        <img src={theme === "light" ? Logo2Light : Logo2Dark} alt="logo" />
        <h1>
          Bienvenue sur Diagram Hub! Des explications rapides et claires sur
          deux méthodologies essentielles : <span>UML</span> et{" "}
          <span>Merise</span>.
        </h1>
      </div>
      <div className={`home-page-contain ${zoomOut ? "zoom-out" : ""}`}>
        <div className="section-uml-merise">
          <h1 className="title">UML</h1>
          <div className="text-uml-home">
            <p>
              Découvrez UML, le langage de modélisation universel utilisé pour
              <span> concevoir</span> et <span>visualiser</span> des systèmes
              logiciels. Comment créer des diagrammes de classe, d'objet, de
              séquence et plus encore pour représenter des structures et des
              comportements de logiciels de manière compréhensible.
            </p>
            <p>
              L'UML, ou Unified Modeling Language, est un langage graphique qui
              aide les personnes travaillant sur des projets informatiques, à
              dessiner des schémas pour comprendre et concevoir des logiciels de
              manière plus facile. Cela ressemble un peu à dessiner des plans
              pour une maison avant de la construire. L'UML utilise différents
              types de dessins pour montrer comment les parties d'un logiciel
              fonctionnent ensemble, ce qui aide à éviter les erreurs et à mieux
              collaborer en équipe.
            </p>
          </div>
          <hr />
          <div className="text-merise-home">
            <h1 className="title">Merise</h1>
            <p>
              Explorez Merise, une méthodologie de{" "}
              <span>gestion de projet</span> informatique qui vous guide dans la
              <span>conception</span> des systèmes d'information. Découvrez
              comment élaborer des modèles conceptuels, logiques et physiques
              pour planifier et développer des bases de données et des
              applications.
            </p>
            <p>
              La méthode MERISE est une approche de modélisation des systèmes
              d'information utilisée en génie logiciel. Elle aide à concevoir
              des systèmes d'information de manière organisée et structurée.
              Voici une explication simple :
              <br />
              <br />
              Imaginez que vous voulez construire une maison. Avant de
              commencer, vous avez besoin de plans détaillés pour savoir comment
              la maison sera structurée. MERISE, c'est un peu comme ces plans,
              mais pour les systèmes d'information. Elle vous aide à :
              <br />
              <br />
              <ul>
                <li>
                  1 - Identifier ce que votre système doit faire (les besoins)
                  en interrogeant les utilisateurs.
                </li>
                <li>
                  2 - Organiser ces besoins en modules ou en parties du système
                  (comme les pièces d'une maison).
                </li>
                <li>
                  3 - Définir comment ces modules vont communiquer entre eux
                  (les flux d'informations).{" "}
                </li>
                <li>
                  4 - Créer des schémas et des diagrammes pour représenter ces
                  idées de manière claire (comme un plan de maison).{" "}
                </li>
                <li>
                  5 - Enfin, une fois que tout est bien compris et organisé,
                  vous pouvez commencer à construire votre système
                  d'information.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <hr />
        <p className="text-bot">
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
