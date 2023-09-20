import { Component, useState } from "react";
import { UMLData } from "./data/UMLData";
import Modal from "./Modal";
import "./css/UmlStyle.css";

function MainUml() {
  const [search, setSearch] = useState("");
  const [selectedItemTitles, setSelectedItemTitles] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

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
                  : item.title.toLowerCase().includes(search);
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

      <div className="umlContain">
        {UMLData.filter((item) => selectedItemTitles.includes(item.title)).map(
          (item, index) => (
            <div className="umlCard" key={index}>
              <div className="umlItems">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <button
                  className="plusInfos"
                  onClick={() => handleModalOpen(item)}
                >
                  Voir un exemple
                </button>
              </div>
              <a href={item.url}></a>
            </div>
          )
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title={selectedItem?.title || ""}
        imageUrl={selectedItem?.image || ""}
        description={selectedItem?.description || ""}
      />
    </div>
  );
}

export default MainUml;
