import Logo from "./img/logo-oficina-do-micro.png";

export default function StnSobre() {
  return (
    <section className="sobre">
      <div className="sobre-container">
        <img
          src={Logo}
          alt="Logo Oficina do Micro"
          className="sobre-container-logo"
        />
        <p className="sobre-container-autoridade">
          A Primeira Assistência Técnica de Notebooks de Jacareí | Atendemos
          Todas as Marcas
        </p>
        <p className="sobre-container-atendimento">
          Nosso atendimento é especializado, buscamos entender sua prioridade e
          atendê-la de forma profissional e com toda a qualidade que oferecemos.
        </p>
        <ul className="sobre-container-lista">
          <li className="sobre-container-lista-card">
            <h2 className="sobre-container-lista-card-categoria">
              Atendimento
            </h2>
            <ul className="sobre-container-lista-card-atendimento-lista">
              <li className="sobre-container-lista-card-categoria-lista-processos">
                Acesso ao Técnico para Detalhes
              </li>
              <li className="sobre-container-lista-card-categoria-lista-processos">
                Orçamentos Express
              </li>
              <li className="sobre-container-lista-card-categoria-lista-processos">
                Atendimento Humanizado
              </li>
              <li className="sobre-container-lista-card-categoria-lista-processos">
                Profissionais Capacitados
              </li>
            </ul>
          </li>
          <li className="sobre-container-lista-card">
            <h2 className="sobre-container-lista-card-categoria">
              Reparos Técnicos
            </h2>
            <p className="sobre-container-lista-card-desricao">
              Oficina de ponta para consertos em placa mãe, reparos de carcaça,
              troca de tela, teclado, bateria, tudo isso de forma extremamente
              profissional e transparente, acompanhe nosso trabalho no Instagram
            </p>
          </li>
          <li className="sobre-container-lista-card">
            <h2 className="sobre-container-lista-card-categoria">
              Pagamento Facilitado
            </h2>
            <p className="sobre-container-lista-card-descricao">
              Além de toda a excelência no processo, você pode pagar seu
              conserto em até 12x de forma facilitada, os detalhes desta
              condição é informada em cada orçamento.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
