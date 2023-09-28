import { useContext, useEffect, useState } from "react";
import { UMLData } from "./data/UMLData";
import { TiDelete } from "react-icons/ti";
import Modal from "./Modal";
import "./css/UmlStyle.css";
import { IThemeContext, ThemeContext } from "../context/ThemeProvider";

function MainUml() {
  const [search, setSearch] = useState("");
  const [selectedItemTitles, setSelectedItemTitles] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [zoomOut, setZoomOut] = useState(false);
  const { theme, HandleTheme } = useContext<IThemeContext>(ThemeContext);

  const diagrammesStructure = UMLData.filter(
    (item) => item.categorie === "diagramme de structure"
  );
  const diagrammesComportement = UMLData.filter(
    (item) => item.categorie === "diagramme de comportement"
  );

  const handleLinkClick = (title: string) => {
    if (selectedItemTitles.includes(title)) {
      setSelectedItemTitles((prevTitles) =>
        prevTitles.filter((item) => item !== title)
      );
    } else {
      setSelectedItemTitles((prevTitles) => [...prevTitles, title]);
    }
  };

  const handleModalOpen = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const allUmlItems = UMLData.map((item, index) => (
    // <div className="umlCard" key={index}>
    <div className={`umlCard ${zoomOut ? "zoom-out" : ""}`} key={index}>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <button className="plusInfos" onClick={() => handleModalOpen(item)}>
        Voir un exemple
      </button>
    </div>
  ));
  const selectedUmlItems = UMLData.filter((item) =>
    selectedItemTitles.includes(item.title)
  ).map((item, index) => (
    <div className={`umlCard ${zoomOut ? "zoom-out" : ""}`} key={index}>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <button className="plusInfos" onClick={() => handleModalOpen(item)}>
        Voir un exemple
      </button>
    </div>
  ));

  const removeSelectedItem = (title: string) => {
    setSelectedItemTitles((prevTitles) =>
      prevTitles.filter((item) => item !== title)
    );
  };
  const selectedItemsList = selectedItemTitles.map((title, index) => (
    <div
      key={index}
      className="selected-item"
      onClick={() => removeSelectedItem(title)}
    >
      {title}

      <TiDelete className="icons-delete" />
    </div>
  ));

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
    <div className="UmlMain">
      <div className="searchContain">
        <input
          type="text"
          placeholder="Recherche"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="selectedItemsContainer">
          <p>{selectedItemsList}</p>
        </div>
      </div>

      <div className="umlSearch">
        <div className="blockDiag">
          <h3>Diagramme de Structure</h3>
          <div className="items">
            {diagrammesStructure
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((item, index) => (
                <a
                  key={index}
                  href={`#${item.title}`}
                  onClick={() => handleLinkClick(item.title)}
                  className={
                    selectedItemTitles.includes(item.title) ? "selected" : ""
                  }
                >
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
                  : item.title.toLowerCase().includes(search.toLowerCase());
              })
              .map((item, index) => (
                <a
                  key={index}
                  href={`#${item.title}`}
                  onClick={() => handleLinkClick(item.title)}
                  className={
                    selectedItemTitles.includes(item.title) ? "selected" : ""
                  }
                >
                  {item.title}
                </a>
              ))}
          </div>
        </div>
      </div>

      <div className={`umlContain ${theme === "dark" && "dark"}`}>
        {selectedItemTitles.length > 0 ? selectedUmlItems : allUmlItems}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={selectedItem?.title || ""}
        imageUrl={selectedItem?.image || ""}
      />
    </div>
  );
}

export default MainUml;
