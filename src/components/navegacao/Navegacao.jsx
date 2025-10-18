import React from "react";
import "./Navegacao.css";

const Navegacao = ({ setCategoriaSelecionada, categoriaSelecionada }) => {
  const categorias = ["Pratos Principais", "Sobremesas", "Bebidas"];

  return (
    <div className="categorias">
      {categorias.map((categoria, index) => (
        <p
          onClick={() => setCategoriaSelecionada(index)}
          key={index}
          className={`categoria${
            index === categoriaSelecionada ? " categoria--selecionada" : ""
          }`}
        >
          {categoria}
        </p>
      ))}
    </div>
  );
};
export default Navegacao;
