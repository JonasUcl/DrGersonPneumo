import { useState } from "react";
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
