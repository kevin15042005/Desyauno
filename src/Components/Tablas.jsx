// src/Components/Tablas.jsx
import React from 'react';
import './Tablas.css';

const Tablas = ({ data }) => {
    return (
        <section className="table-section">
            <h2 className="section-title">
                Módulo Central de Pedidos 
            </h2>
            <div className="table-wrapper">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Fase del Cliente</th>
                            <th>Requisito Funcional del Sistema Web</th>
                            <th>Objetivo de la Misión</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index}>
                                <td>{item.fase}</td>
                                <td>{item.requisito}</td>
                                <td className="mission-objective">{item.objetivo}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Tablas;
