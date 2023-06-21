import Logo from "./img/logo-oficina-do-micro.png";

export default function Div() {
  return (
    <div className="principal">
      <img src={Logo} alt="Logo Oficina do Micro" className="principal-logo" />
      <p className="principal-descricao">
        Oficina do micro há mais de 25 anos entregando soluções em manutenções
        de computadores e notebooks.
      </p>
    </div>
  );
}
