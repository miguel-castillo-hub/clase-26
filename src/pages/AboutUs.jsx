import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";

const AboutUs = () => {
  return (
    <Layout>
      <section className="about-us">
        <h1>¿Qué es este proyecto?</h1>
        <p>Tienda virtual es un proyecto inspirado en tiendas virtuales como Mercado Libre o Aliexpress, con una interfaz sencilla donde los usuarios que iniciaron sesión pueden importar sus propios productos y editar los ya existentes.</p>
        <p>Este producto está dirigido para quienes desean aprender un poco sobre React y sus propiedades, con el propósito de practicar mejor el proceso de codificar una página web, contando con tecnologías como:</p>
        <ul>
          <li>
            <p className="elemento-react">Visual Studio Code</p>
          </li>
          <li>
            <p className="elemento-react">Biblioteca React y sus derivados</p>
          </li>
          <li>
            <p className="elemento-react">Terminal Git</p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export { AboutUs }