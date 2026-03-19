import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";
import pneumo from "./assets/pneumo.jpg";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const fade = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const renderContent = () => {
    switch (active) {
      case 1:
        return (
          <section className="hero">
            <motion.div {...fade}>
              <h1>Pneumologista em São Paulo</h1>
              <p className="highlight">Cuidar da respiração é cuidar da vida.</p>
              <p className="text">
                Atendimento especializado em doenças respiratórias com foco em precisão diagnóstica, tecnologia e cuidado individualizado.
              </p>
              <a href="https://wa.me/5511937748269" className="cta">Agendar consulta</a>
            </motion.div>

            <motion.div className="hero-image" {...fade}>
              <img src={pneumo} alt="Dr. Gerson" />
            </motion.div>
          </section>
        );

      case 2:
        return (
          <motion.div className="content-wrapper" {...fade}>
            <h1>Sobre o Médico</h1>
            <p className="text">
              Médico pneumologista com formação em centros de excelência, atuando no diagnóstico e tratamento das doenças respiratórias com abordagem moderna e baseada em evidências.
            </p>
          </motion.div>
        );

      case 3:
        return (
          <motion.div className="content-wrapper" {...fade}>
            <h1>Consulta Pneumológica</h1>
            <p className="text">
              Avaliação completa com histórico clínico detalhado, exame físico e solicitação de exames quando necessário.
            </p>
          </motion.div>
        );

      case 4:
        return (
          <motion.div className="content-wrapper" {...fade}>
            <h1>Quando procurar</h1>
            <ul className="list">
              <li>Tosse persistente</li>
              <li>Falta de ar</li>
              <li>Chiado no peito</li>
              <li>Infecções respiratórias frequentes</li>
            </ul>
          </motion.div>
        );

      case 5:
        return (
          <motion.div className="content-wrapper" {...fade}>
            <h1>Doenças Respiratórias</h1>
            <div className="grid">
              {["Asma", "DPOC", "Bronquite", "Pneumonia", "Apneia", "Fibrose"].map(d => (
                <div className="card" key={d}>{d}</div>
              ))}
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div className="content-wrapper" {...fade}>
            <h1>Avaliações</h1>
            <p className="text">Em breve avaliações reais de pacientes.</p>
          </motion.div>
        );

      case 7:
        return (
          <motion.div className="content-wrapper" {...fade}>
            <h1>Blog</h1>
            <p className="text">Conteúdos educativos sobre saúde respiratória.</p>
          </motion.div>
        );

      case 8:
        return (
          <motion.div className="content-wrapper" {...fade}>
            <h1>Contato</h1>
            <p>📞 (11) 93774-8269</p>
            <p>📧 gerson.pneumo@gmail.com</p>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <header className="header">
        <h3>Dr. Gerson</h3>

        <nav className="nav-desktop">
          {menuItems.map(item => (
            <button key={item.id} onClick={() => setActive(item.id)}>
              {item.title}
            </button>
          ))}
        </nav>

        <a href="https://wa.me/5511937748269" className="cta small">Agendar</a>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>⋯</button>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActive(item.id);
                  setMenuOpen(false);
                }}
              >
                {item.title}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main">
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <a href="https://wa.me/5511937748269" className="whatsapp">WhatsApp</a>
    </div>
  );
}
