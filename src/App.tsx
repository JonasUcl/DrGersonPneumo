import { useState } from "react";
import "../src/styles.css";

const menuItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Sobre o médico" },
  { id: 3, title: "Consulta" },
  { id: 4, title: "Quando procurar" },
  { id: 5, title: "Doenças" },
  { id: 6, title: "Avaliações" },
  { id: 7, title: "Blog" },
  { id: 8, title: "Contato" },
];

export default function App() {
  const [active, setActive] = useState(1);

  const renderContent = () => {
    switch (active) {
      case 1:
        return (
          <div>
            <h1>Pneumologista em São Paulo</h1>
            <p className="highlight">Cuidar da respiração é cuidar da vida.</p>
            <h2>Dr. Gerson de Almeida</h2>
            <p>Pneumologista em São Paulo</p>
            <p>
              Sou médico pneumologista dedicado ao diagnóstico e tratamento das doenças respiratórias em adultos.
            </p>
          </div>
        );

      case 2:
        return (
          <div>
            <h1>Sobre o Médico</h1>
            <details>
              <summary>Formação médica</summary>
              <p>UFES, residência em SP, HC-FMUSP.</p>
            </details>
          </div>
        );

      case 3:
        return <h1>Consulta Pneumológica</h1>;
      case 4:
        return <h1>Quando procurar</h1>;
      case 5:
        return <h1>Doenças</h1>;
      case 6:
        return <h1>Avaliações</h1>;
      case 7:
        return <h1>Blog</h1>;
      case 8:
        return <h1>Contato</h1>;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Menu</h2>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={active === item.id ? "active" : ""}
          >
            {item.title}
          </button>
        ))}
      </aside>

      <main className="content">{renderContent()}</main>

      <a
        href="https://wa.me/5511937748269"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        WhatsApp
      </a>
    </div>
  );
}
