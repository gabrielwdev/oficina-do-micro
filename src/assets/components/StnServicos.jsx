import preventiva from "./img/manutencao-preventiva.png";
import resina from "./img/reparo-carcaca.png";
import eletronica from "./img/reparo-eletronico.png";
import limpeza from "./img/lp.jpg";
import ssd from "./img/ssd.jpg";
import tela from "./img/troca-de-tela.jpg";
import mainbord from "./img/troca-de-placa-mae.png";
import teclado from "./img/troca-teclado.jpg";

export default function StnServicos() {
  return (
    <section className="servicos">
      <h2 className="servicos-titulo">Nossos Serviços</h2>
      <ul className="servicos-lista">
        <li className="servicos-lista-card">
          <a className="servicos-lista-card-link" href="">
            <img
              src={ssd}
              alt="Troca de HD por SSD"
              className="servicos-lista-card-link-img"
            />
            <h3 className="servicos-lista-card-link-titulo">
              Troca de HD x SSD
            </h3>
          </a>
        </li>
        <li className="servicos-lista-card">
          <a
            className="servicos-lista-card-link"
            href="servicos-lista-card-link"
          >
            <img
              src={teclado}
              alt="Troca de Teclado"
              className="servicos-lista-card-link-img"
            />
            <h3 className="servicos-lista-card-link-titulo">
              Troca de Teclado
            </h3>
          </a>
        </li>
        <li className="servicos-lista-card">
          <a
            className="servicos-lista-card-link"
            href="servicos-lista-card-link"
          >
            <img
              src={mainbord}
              alt="Troca de Placa-Mãe"
              className="servicos-lista-card-link-img"
            />
            <h3 className="servicos-lista-card-link-titulo">
              Troca de Placa-Mãe
            </h3>
          </a>
        </li>
        <li className="servicos-lista-card">
          <a className="servicos-lista-card-link" href="">
            <img
              src={tela}
              alt="Troca de Tela"
              className="servicos-lista-card-link-img"
            />
            <h3 className="servicos-lista-card-link-titulo">Troca de Tela</h3>
          </a>
        </li>
        <li className="servicos-lista-card">
          <a className="servicos-lista-card-link" href="">
            <img
              src={eletronica}
              alt="Reparo em Placa"
              className="servicos-lista-card-link-img"
            />
            <h3 className="servicos-lista-card-link-titulo">Reparo em Placa</h3>
          </a>
        </li>
        <li className="servicos-lista-card">
          <a className="servicos-lista-card-link" href="">
            <img
              src={resina}
              alt="Reparo de Carcaça"
              className="servicos-lista-card-link-img"
            />
            <h3 className="servicos-lista-card-link-titulo">
              Reparo de Carcaça
            </h3>
          </a>
        </li>
        <li className="servicos-lista-card">
          <a className="servicos-lista-card-link" href="">
            <img
              src={limpeza}
              alt="Limpeza interna"
              className="servicos-lista-card-link-img"
            />
            <h3 className="servicos-lista-card-link-titulo">Limpeza interna</h3>
          </a>
        </li>
        <li className="servicos-lista-card">
          <a className="servicos-lista-card-link" href="">
            <img
              src={preventiva}
              alt="Manutenção Preventiva"
              className="servicos-lista-card-link-img"
            />
            <h3 className="servicos-lista-card-link-titulo">
              Manutenção Preventiva
            </h3>
          </a>
        </li>
      </ul>
    </section>
  );
}
