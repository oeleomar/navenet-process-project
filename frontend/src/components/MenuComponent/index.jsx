import { Link } from "react-router-dom";

export const MenuComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/suporte">Suporte</Link>
        </li>
        <li>
          <Link to="/suporte2">Suporte 2</Link>
        </li>
        <li>
          <Link to="/financeiro">Financeiro</Link>
        </li>
        <li>
          <Link to="/comercial">Comercial</Link>
        </li>
        <li>
          <Link to="/posvendas">Pós Vendas</Link>
        </li>
        <li>
          <Link to="/qualidade">Qualidade</Link>
        </li>
        <li>
          <Link to="/noc">Network Operation Center</Link>
        </li>
        <li>
          <Link to="/recursoshumanos">Recursos Humanos</Link>
        </li>
        <li>
          <Link to="/almoxarifado">Almoxarifado</Link>
        </li>
        <li>
          <Link to="/tecnico">Técnico</Link>
        </li>
        <li>
          <Link to="/cancelamento">Cancelamento</Link>
        </li>
      </ul>
    </nav>
  );
};
