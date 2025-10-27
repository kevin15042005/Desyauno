// src/App.jsx
import React from "react";
import ProcessTable from "./Components/Tablas";
import ScrumTable from "./Components/ScrumTabla";
import { procesosData, scrumData } from "./data";
import ADTECO from "../src/assets/adteco.jpeg";

const App = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed font-sans text-gray-800 px-6 py-10 flex flex-col items-center"
      style={{ backgroundImage: `url(${ADTECO})` }}
    >
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg text-center p-8 mb-12 w-full max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Propuesta: Estructura de Procesos y Software
        </h1>
        <p className="text-lg text-gray-600">
          Objetivo: Garantizar Rentabilidad, Calidad y Tiempo.
        </p>
      </header>

      {/* Main */}
      <main className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-5xl">
        <ProcessTable data={procesosData} />
        <div className="my-10 border-t border-gray-300"></div>
        <ScrumTable data={scrumData} />
      </main>

      {/* Footer */}
      <footer className="text-center text-gray-600 text-sm mt-10 bg-white/70 backdrop-blur-md py-4 px-6 rounded-xl shadow-md">
        Desarrollado con <span className="font-semibold">React</span>,{" "}
        <span className="font-semibold">Vite</span> y{" "}
        <span className="font-semibold">TailwindCSS</span>
      </footer>
    </div>
  );
};

export default App;
