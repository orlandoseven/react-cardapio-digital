import Card from "../card/Card";
import "./Cards.css";
import { pratosPrincipais, sobremesas, bebidas } from "../../assets/cardapio";

function Cards({ categoriaSelecionada }) {
  const itensCategoria = [pratosPrincipais, sobremesas, bebidas];

  return (
    <div className="cards">
      {itensCategoria[categoriaSelecionada].map((itemCategoria, index) => (
        <Card key={index} itemCategoria={itemCategoria} />
      ))}
    </div>
  );
}
export default Cards;
