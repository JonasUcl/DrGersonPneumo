import { useState } from "react";
import "./styles.css";

const menuItems = [
  { id: 1, title: "Home" },
  { id: 2, title: "Sobre" },
  { id: 3, title: "Consulta" },
  { id: 4, title: "Quando procurar" },
  { id: 5, title: "Doenças" },
  { id: 6, title: "Avaliações" },
  { id: 7, title: "Blog" },
  { id: 8, title: "Contato" },
];

export default function App() {
  const [active, setActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(true);

  const renderContent = () => {
    switch (active) {
      case 1:
        return (
          <div className="hero">
            <div>
              <h1>Pneumologista em São Paulo</h1>
              <p className="highlight">
                Cuidar da respiração é cuidar da vida.
              </p>
              <p className="text">
                Atendimento especializado em doenças respiratórias.
              </p>
              <a href="https://wa.me/5511937748269" className="cta">
                Agendar consulta
              </a>
            </div>
            <div className="hero-image">Foto do médico</div>
          </div>
        );

      case 2:
        return (
          <div className="content-wrapper">
            <h1>Sobre o Médico</h1>
            <p className="text">Atendimento humanizado e baseado em evidência.</p>
          </div>
        );

      case 3:
        return (
          <div className="content-wrapper">
            <h1>Consulta Pneumológica</h1>
            <p className="text">Avaliação completa da saúde respiratória.</p>
          </div>
        );

      case 4:
        return (
          <div className="content-wrapper">
            <h1>Quando procurar</h1>
            <ul className="list">
              <li>Tosse persistente</li>
              <li>Falta de ar</li>
              <li>Chiado no peito</li>
            </ul>
          </div>
        );

      case 5:
        return (
          <div className="content-wrapper">
            <h1>Doenças Respiratórias</h1>
            <div className="grid">
              {["Asma", "DPOC", "Bronquite", "Pneumonia", "Apneia"].map((d) => (
                <div className="card" key={d}>{d}</div>
              ))}
            </div>
          </div>
        );

      case 6:
        return <h1>Avaliações em breve</h1>;
      case 7:
        return <h1>Blog em breve</h1>;

      case 8:
        return (
          <div className="content-wrapper">
            <h1>Contato</h1>
            <p className="text">WhatsApp: (11) 93774-8269</p>
            <p className="text">Email: gerson.pneumo@gmail.com</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container">
      <aside className={menuOpen ? "sidebar" : "sidebar collapsed"}>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`menu-item ${active === item.id ? "active" : ""}`}
          >
            {menuOpen ? item.title : item.title.charAt(0)}
          </button>
        ))}
      </aside>

      <main className="main">{renderContent()}</main>

      <a href="https://wa.me/5511937748269" target="_blank" className="whatsapp">
        WhatsApp
      </a>
    </div>
  );
}

