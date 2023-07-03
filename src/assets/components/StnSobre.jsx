import Logo from "./img/logo-oficina-do-micro.png";

export default function StnSobre() {
  return (
    <section id="quem-somos" className="sobre">
      <img src={Logo} alt="Logo Oficina do Micro" className="sobre-logo" />
      <p className="sobre-autoridade">
        A Primeira Assistência Técnica de Notebooks de Jacareí | Atendemos Todas
        as Marcas
      </p>
      <p className="sobre-atendimento">
        Nosso atendimento é especializado, buscamos entender sua prioridade e
        atendê-la de forma profissional e com toda a qualidade que oferecemos.
      </p>
      <ul className="sobre-lista">
        <li className="sobre-lista-card">
          <h2 className="sobre-lista-card-categoria">Atendimento</h2>
          <ul className="sobre-lista-card-categoria-lista">
            <li className="sobre-lista-card-categoria-lista-processos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              Acesso ao Técnico para Detalhes
            </li>
            <li className="sobre-lista-card-categoria-lista-processos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              Orçamentos Express
            </li>
            <li className="sobre-lista-card-categoria-lista-processos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              Atendimento Humanizado
            </li>
            <li className="sobre-lista-card-categoria-lista-processos">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-lg"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              Profissionais Capacitados
            </li>
          </ul>
        </li>
        <li className="sobre-lista-card">
          <h2 className="sobre-lista-card-categoria">Reparos Técnicos</h2>
          <p className="sobre-lista-card-descricao">
            Oficina de ponta para consertos em placa mãe, reparos de carcaça,
            troca de tela, teclado, bateria, tudo isso de forma extremamente
            profissional e transparente, acompanhe nosso trabalho no Instagram
          </p>
        </li>
        <li className="sobre-lista-card">
          <h2 className="sobre-lista-card-categoria">Pagamento Facilitado</h2>
          <p className="sobre-lista-card-descricao">
            Além de toda a excelência no processo, você pode pagar seu conserto
            em até 12x de forma facilitada, os detalhes desta condição é
            informada em cada orçamento.
          </p>
        </li>
      </ul>
    </section>
  );
}
