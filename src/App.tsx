import { useState } from "react";
import "./styles.css";

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
  const [menuOpen, setMenuOpen] = useState(true);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const Section = ({ title, children, id }: any) => (
    <div className="section">
      <button onClick={() => toggleSection(id)} className="section-title">
        {title}
      </button>
      {openSections[id] && <div className="section-content">{children}</div>}
    </div>
  );

  const renderContent = () => {
    switch (active) {
      case 1:
        return (
          <div className="content-wrapper">
            <h1>Pneumologista em São Paulo</h1>
            <p className="highlight">Cuidar da respiração é cuidar da vida.</p>
          </div>
        );

      case 2:
        return (
          <div className="content-wrapper">
            <h1>Sobre o Médico</h1>

            <Section title="Formação médica" id="formacao">
              <p>Graduação UFES e residência no HC-FMUSP.</p>
            </Section>

            <Section title="Experiência" id="experiencia">
              <p>Atuação ambulatorial e hospitalar.</p>
            </Section>

            <Section title="Filosofia" id="filosofia">
              <p>Atendimento individualizado e baseado em evidência.</p>
            </Section>
          </div>
        );

      case 3:
        return (
          <div className="content-wrapper">
            <h1>Consulta Pneumológica</h1>
            <Section title="Como funciona" id="consulta1">
              <p>Avaliação completa com histórico e exame físico.</p>
            </Section>
          </div>
        );

      case 4:
        return (
          <div className="content-wrapper">
            <h1>Quando procurar</h1>
            <Section title="Sintomas" id="sintomas">
              <ul>
                <li>Tosse persistente</li>
                <li>Falta de ar</li>
                <li>Chiado no peito</li>
              </ul>
            </Section>
          </div>
        );

      case 5:
        return (
          <div className="content-wrapper">
            <h1>Doenças</h1>
            <Section title="Principais" id="doencas">
              <ul>
                <li>Asma</li>
                <li>DPOC</li>
                <li>Bronquite</li>
              </ul>
            </Section>
          </div>
        );

      case 6:
        return <h1>Avaliações</h1>;
      case 7:
        return <h1>Blog</h1>;
      case 8:
        return <h1>Contato</h1>;
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
