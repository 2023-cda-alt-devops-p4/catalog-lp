import { useEffect, useState } from "react";
import { MeriseData } from "./data/MeriseData";
import Modal from "./Modal";
import "./css/UmlStyle.css";

function MainUml() {
  const [search, setSearch] = useState("");
  const [selectedItemTitles, setSelectedItemTitles] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [zoomOut, setZoomOut] = useState(false);

  const schemaConcept = MeriseData.filter(
    (item) => item.categorie === "schemas conceptuels"
  );
  const shcemaOrga = MeriseData.filter(
    (item) => item.categorie === "schemas organisationels"
  );
  const schemaFlux = MeriseData.filter(
    (item) => item.categorie === "schemas de flux"
  );
  const shcemaArchi = MeriseData.filter(
    (item) => item.categorie === "schemas d'architecture"
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

  const allUmlItems = MeriseData.map((item, index) => (
    <div className={`umlCard ${zoomOut ? "zoom-out" : ""}`} key={index}>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <button className="plusInfos" onClick={() => handleModalOpen(item)}>
        Voir un exemple
      </button>
    </div>
  ));
  const selectedUmlItems = MeriseData.filter((item) =>
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
    <div key={index} className="selected-item">
      {title}
      <button onClick={() => removeSelectedItem(title)}>©</button>
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
        <div className="selectedItemsContainer">
          <p>{selectedItemsList}</p>
        </div>
        <input
          type="text"
          placeholder="Recherche"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="umlSearch">
        <div className="blockDiag">
          <h3>Schémas Conceptuels</h3>
          <div className="items">
            {schemaConcept
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
          <h3>Schémas Organisationels</h3>
          <div className="items">
            {shcemaOrga
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
          <h3>Schémas de Flux</h3>
          <div className="items">
            {schemaFlux
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
          <h3>Diagramme d'Architetures</h3>
          <div className="items">
            {shcemaArchi
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
