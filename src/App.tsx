import { useState } from "react";
import { motion } from "framer-motion";

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
          <div className="space-y-8 max-w-5xl">
            <h1 className="text-4xl md:text-5xl font-bold">
              Pneumologista em São Paulo
            </h1>
            <p className="text-xl text-gray-600">
              Cuidar da respiração é cuidar da vida.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-2">
                  Dr. Gerson de Almeida
                </h2>
                <p className="font-medium text-gray-500">
                  Pneumologista em São Paulo
                </p>
                <p className="mt-4">
                  Sou médico pneumologista dedicado ao diagnóstico e tratamento
                  das doenças respiratórias em adultos, com foco em avaliação
                  cuidadosa e individualizada.
                </p>
                <p className="mt-2 font-semibold">CRM-SP 199278</p>
              </div>

              <div className="h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                Foto do médico
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold">Sobre o Médico</h1>

            {["Formação médica", "Experiência", "Filosofia"].map((item) => (
              <details
                key={item}
                className="bg-white shadow-md rounded-2xl p-4"
              >
                <summary className="cursor-pointer font-semibold">
                  {item}
                </summary>
                <p className="mt-2 text-gray-600">
                  Conteúdo detalhado sobre {item.toLowerCase()}.
                </p>
              </details>
            ))}
          </div>
        );

      case 3:
        return (
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold">Consulta Pneumológica</h1>
            <p>
              Avaliação completa da saúde respiratória com abordagem
              individualizada.
            </p>
          </div>
        );

      case 4:
        return (
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl font-bold">Quando procurar</h1>
            <ul className="list-disc ml-6">
              <li>Tosse persistente</li>
              <li>Falta de ar</li>
              <li>Chiado no peito</li>
            </ul>
          </div>
        );

      case 5:
        return (
          <div className="max-w-4xl">
            <h1 className="text-3xl font-bold mb-4">
              Doenças Respiratórias
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Asma", "DPOC", "Bronquite", "Pneumonia", "Apneia"]
                .map((d) => (
                  <div
                    key={d}
                    className="bg-white p-4 rounded-xl shadow"
                  >
                    {d}
                  </div>
                ))}
            </div>
          </div>
        );

      case 6:
        return <h1 className="text-3xl">Avaliações em breve</h1>;
      case 7:
        return <h1 className="text-3xl">Blog em breve</h1>;

      case 8:
        return (
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-bold">Contato</h1>
            <p>WhatsApp: (11) 93774-8269</p>
            <p>Email: gerson.pneumo@gmail.com</p>

            <input
              placeholder="Seu nome"
              className="w-full p-3 rounded-xl border"
            />
            <input
              placeholder="Telefone"
              className="w-full p-3 rounded-xl border"
            />

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Enviar
            </button>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="md:w-64 w-full bg-gray-900 text-white p-4 flex md:flex-col overflow-x-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`p-2 m-1 rounded-lg whitespace-nowrap ${
              active === item.id ? "bg-blue-500" : "bg-gray-800"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 md:p-10 bg-gray-100">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {renderContent()}
        </motion.div>
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/5511937748269"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
    </div>
  );
}
