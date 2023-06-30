import Perfil1 from "../components/img/feedbacks-1.png";
import Perfil2 from "../components/img/feedbacks-2.png";
import Perfil3 from "../components/img/feedbacks-3.png";

export default function StnFeedbaks() {
  return (
    <section className="feedbacks">
      <h2 className="feedbacks-titulo">Avaliações no Google Business</h2>
      <ul className="feedbacks-lista">
        <li className="feedbacks-lista-card">
          <img src={Perfil1} alt="feedbacks de cliente" />
          <h2 className="feedbacks-lista-card-titulo">Monique Ruis</h2>
          <p className="feedbacks-lista-card-comentario">
            Melhor loja do vale do Paraíba, está presente na minha vida desde
            sempre . Atendente Bia sempre simpática com um sorriso e um carisma
            único 💛🙏🙌 …
          </p>
        </li>
        <li className="feedbacks-lista-card">
          <h2 className="feedbacks-lista-card-titulo"></h2>
          <p className="feedbacks-lista-card-comentario"></p>
        </li>
        <li className="feedbacks-lista-card">
          <h2 className="feedbacks-lista-card-titulo"></h2>
          <p className="feedbacks-lista-card-comentario"></p>
        </li>
      </ul>
    </section>
  );
}
