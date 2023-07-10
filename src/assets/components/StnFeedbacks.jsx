import Perfil1 from "../components/img/feedbacks-1.png";
import Perfil2 from "../components/img/feedbacks-2.png";
import Perfil3 from "../components/img/feedbacks-3.png";
import Estrelas from "../components/img/estrelas.png";

export default function StnFeedbaks() {
  return (
    <section className="feedbacks">
      <h2 className="feedbacks-titulo">Avaliações no Google Business</h2>
      <ul className="feedbacks-lista">
        <li className="feedbacks-lista-card">
          <div className="feedbacks-lista-card-container">
            <img
              src={Perfil1}
              className="feedbacks-lista-card-container-perfil"
              alt="feedbacks de cliente"
            />
            <div>
              <h2 className="feedbacks-lista-card-nome">Monique Ruis</h2>
              <img
                src={Estrelas}
                className="feedbacks-lista-card-container-avaliacao"
                alt="5 estrelas"
              />
            </div>
          </div>
          <p className="feedbacks-lista-card-comentario">
            Melhor loja do vale do Paraíba, está presente na minha vida desde
            sempre . Atendente Bia sempre simpática com um sorriso e um carisma
            único 💛🙏🙌 …
          </p>
          <a
            target="_blank"
            href="https://www.google.com/search?q=oficinadomicrojacarei&oq=of&aqs=chrome.2.69i60j69i57j69i59l2j69i60l2j69i65j69i60.8165j0j7&sourceid=chrome&ie=UTF-8#lrd=0x94cdcbe08cfd486f:0xbb117272cf5918d5,1,,,,"
            className="link"
          >
            Mais avaliações
          </a>
        </li>
        <li className="feedbacks-lista-card">
          <div className="feedbacks-lista-card-container">
            <img
              src={Perfil2}
              className="feedbacks-lista-card-container-perfil"
              alt="feedbacks de cliente"
            />
            <div>
              <h2 className="feedbacks-lista-card-nome">Max Martins</h2>
              <img
                src={Estrelas}
                className="feedbacks-lista-card-container-avaliacao"
                alt="5 estrelas"
              />
            </div>
          </div>
          <p className="feedbacks-lista-card-comentario">
            Ótimo trabalho, e super rápido! Beatriz e João são ótimos e super
            prestativos! Super indico!
          </p>
          <a
            target="_blank"
            href="https://www.google.com/search?q=oficinadomicrojacarei&oq=of&aqs=chrome.2.69i60j69i57j69i59l2j69i60l2j69i65j69i60.8165j0j7&sourceid=chrome&ie=UTF-8#lrd=0x94cdcbe08cfd486f:0xbb117272cf5918d5,1,,,,"
            className="link"
          >
            Mais avaliações
          </a>
        </li>
        <li className="feedbacks-lista-card">
          <div className="feedbacks-lista-card-container">
            <img
              src={Perfil3}
              className="feedbacks-lista-card-container-perfil"
              alt="feedbacks de cliente"
            />
            <div>
              <h2 className="feedbacks-lista-card-nome">Felipe Correa</h2>
              <img
                src={Estrelas}
                className="feedbacks-lista-card-container-avaliacao"
                alt="5 estrelas"
              />
            </div>
          </div>
          <p className="feedbacks-lista-card-comentario">
            Sou técnico em informática, monto e dou manutenção nas minhas
            próprias máquinas. <br /> <br />
            Mas quando vejo que o problema é sério e precisa de alguém com mais
            experiência que eu sempre mando pra Oficina do Micro. Serviço de
            qualidade, com experiência e expertise na área.
          </p>
          <a
            target="_blank"
            href="https://www.google.com/search?q=oficinadomicrojacarei&oq=of&aqs=chrome.2.69i60j69i57j69i59l2j69i60l2j69i65j69i60.8165j0j7&sourceid=chrome&ie=UTF-8#lrd=0x94cdcbe08cfd486f:0xbb117272cf5918d5,1,,,,"
            className="link"
          >
            Mais avaliações
          </a>
        </li>
      </ul>
    </section>
  );
}
