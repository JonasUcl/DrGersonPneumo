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

const pageTransition = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

export default function App() {
  const [active, setActive] = useState(1);
  const [menuOpen, setMenuOpen] = useState(true);

  const renderContent = () => {
    switch (active) {
      case 1:
        return (
          <motion.div className="content-wrapper" {...pageTransition}>
            <h1>Pneumologista em São Paulo</h1>
              <motion.div className="hero">
                <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
                  
                  <p className="highlight">Cuidar da respiração é cuidar da vida.</p>
                  <p className="text">
                    Atendimento especializado em doenças respiratórias com foco em diagnóstico preciso e tratamento individualizado.
                  </p>

                  <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    <a href="https://wa.me/5511937748269?text=Olá,%20gostaria%20de%20agendar%20consulta" className="cta">
                      Agendar consulta
                    </a>
                    <a href="#contato" className="cta secondary">
                      Entrar em contato
                    </a>
                  </div>
                </motion.div>

                <motion.div className="hero-image" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                  <img src={pneumo} alt="Dr. Gerson" />
                </motion.div>
              </motion.div>

          </motion.div>
          
        );

      case 2:
        return (
          <motion.div className="content-wrapper" {...pageTransition}>
            <h1>Sobre o Médico</h1>
            <p className="text">
              Médico pneumologista com formação pela UFES e especialização pelo HC-FMUSP.
              Atendimento focado em escuta ativa, diagnóstico preciso e tratamento baseado em evidência.
            </p>
          </motion.div>
        );

      case 3:
        return (
          <motion.div className="content-wrapper" {...pageTransition}>
            <h1>Consulta Pneumológica</h1>
            <p className="text">
              Avaliação completa da saúde respiratória, incluindo análise clínica detalhada e solicitação de exames quando necessário.
            </p>
          </motion.div>
        );

      case 4:
        return (
          <motion.div className="content-wrapper" {...pageTransition}>
            <h1>Quando procurar</h1>
            <ul className="list">
              <li>Tosse persistente</li>
              <li>Falta de ar</li>
              <li>Chiado no peito</li>
              <li>Cansaço ao respirar</li>
            </ul>
          </motion.div>
        );

      case 5:
        return (
          <motion.div className="content-wrapper" {...pageTransition}>
            <h1>Doenças Respiratórias</h1>
            <div className="grid">
              {["Asma", "DPOC", "Bronquite", "Pneumonia", "Apneia do sono"].map((d, i) => (
                <motion.div
                  className="card"
                  key={d}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {d}
                </motion.div>
              ))}
            </div>
          </motion.div>
        );

      case 6:
        return (
          <motion.div className="content-wrapper" {...pageTransition}>
            <h1>Avaliações</h1>
            <p className="text">Avaliações disponíveis em breve via Google e Doctoralia.</p>
          </motion.div>
        );

      case 7:
        return (
          <motion.div className="content-wrapper" {...pageTransition}>
            <h1>Blog</h1>
            <p className="text">Conteúdos educativos sobre saúde respiratória em breve.</p>
          </motion.div>
        );

      case 8:
        return (
          <motion.div className="content-wrapper" {...pageTransition} id="contato">
            <h1>Contato</h1>
            <p className="text">📍 Rua Frei Caneca, 1380 - São Paulo</p>
            <p className="text">📞 (11) 3289-3195</p>
            <p className="text">📱 (11) 93774-8269</p>
            <p className="text">✉️ gerson.pneumo@gmail.com</p>

            <iframe
              title="mapa"
              src="https://www.google.com/maps?q=Rua+Frei+Caneca,+1380+São+Paulo&output=embed"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "12px", marginTop: "20px" }}
              loading="lazy"
            />
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container">
      <motion.aside
        className={menuOpen ? "sidebar" : "sidebar collapsed"}
        animate={{ width: menuOpen ? 260 : 70 }}
      >
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {menuItems.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`menu-item ${active === item.id ? "active" : ""}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {menuOpen ? item.title : item.title.charAt(0)}
          </motion.button>
        ))}
      </motion.aside>

      <main className="main">
        <AnimatePresence mode="wait">
          <div key={active}>{renderContent()}</div>
        </AnimatePresence>
      </main>

      <motion.a
        href="https://wa.me/5511937748269?text=Olá,%20gostaria%20de%20agendar%20consulta"
        target="_blank"
        className="whatsapp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        WhatsApp
      </motion.a>
    </div>
  );
}
