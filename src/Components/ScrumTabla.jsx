// src/Components/ScrumTabla.jsx
import React from "react";
import "./ScrumTabla.css";

const ScrumTabla = ({ data }) => {
  return (
    <section className="scrum-section">
      <h2 className="section-title">Metodología Scrum Diario </h2>
      <p className="py-3">Este tendra un aproximado de 10 Min </p>
      <div className="table-wrapper">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Paso</th>
              <th>Tiempo</th>
              <th>Rol Principal</th>
              <th>Foco / Misión</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.paso}</td>
                <td>{item.tiempo}</td>
                <td>{item.rol}</td>
                <td>{item.actividad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ScrumTabla;
