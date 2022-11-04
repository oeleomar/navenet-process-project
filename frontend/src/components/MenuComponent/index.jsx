import { Link } from "react-router-dom";

export const MenuComponent = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/setor/suporte">Suporte</Link>
        </li>
        <li>
          <Link to="/setor/suporte2">Suporte 2</Link>
        </li>
        <li>
          <Link to="/setor/financeiro">Financeiro</Link>
        </li>
        <li>
          <Link to="/setor/comercial">Comercial</Link>
        </li>
        <li>
          <Link to="/setor/posvendas">Pós Vendas</Link>
        </li>
        <li>
          <Link to="/setor/qualidade">Qualidade</Link>
        </li>
        <li>
          <Link to="/setor/noc">Network Operation Center</Link>
        </li>
        <li>
          <Link to="/setor/recursoshumanos">Recursos Humanos</Link>
        </li>
        <li>
          <Link to="/setor/almoxarifado">Almoxarifado</Link>
        </li>
        <li>
          <Link to="/setor/tecnico">Técnico</Link>
        </li>
        <li>
          <Link to="/setor/cancelamento">Cancelamento</Link>
        </li>
      </ul>
    </nav>
  );
};
