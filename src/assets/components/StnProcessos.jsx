export default function StnProcessos() {
  return (
    <section className="processos">
      <h2 className="processos-titulo">Nossos Processo de Trabalho</h2>
      <ul className="processos-lista">
        <li className="processos-lista-card">
          <div className="processos-lista-card-circulo">1°</div>
          <div className="processos-lista-card-container">
            <div className="div processos-lista-card-container-conteudo">
              <h3 className="div processos-lista-card-container-conteudo-titulo">
                Inspeção e diagnóstico
              </h3>
              <p className="div processos-lista-card-container-conteudo-descricao">
                Realizamos os testes em bancada para encontrar o defeito e
                elaborar o orçamento.
              </p>
            </div>
          </div>
        </li>
        <li className="processos-lista-card">
          <div className="processos-lista-card-circulo">2°</div>
          <div className="processos-lista-card-container">
            <div className="div processos-lista-card-container-conteudo">
              <h3 className="div processos-lista-card-container-conteudo-titulo">
                Reparo necessário
              </h3>
              <p className="div processos-lista-card-container-conteudo-descricao">
                Após aprovação do orçamento iniciamos o reparo, substituindo
                somente as peças danificadas.
              </p>
            </div>
          </div>
        </li>
        <li className="processos-lista-card">
          <div className="processos-lista-card-circulo">3°</div>
          <div className="processos-lista-card-container">
            <div className="div processos-lista-card-container-conteudo">
              <h3 className="div processos-lista-card-container-conteudo-titulo">
                Limpeza completa
              </h3>
              <p className="div processos-lista-card-container-conteudo-descricao">
                Terminando o reparo, o equipamento passa por uma limpeza, para
                eliminar qualquer tipo de e riscos de problemas futuros.
              </p>
            </div>
          </div>
        </li>
        <li className="processos-lista-card">
          <div className="processos-lista-card-circulo">4°</div>
          <div className="processos-lista-card-container">
            <div className="div processos-lista-card-container-conteudo">
              <h3 className="div processos-lista-card-container-conteudo-titulo">
                Testes e controle de qualidade
              </h3>
              <p className="div processos-lista-card-container-conteudo-descricao">
                Realizaremos diversos testes de usabilidade, afim de garantir
                que o problema tenha sido 100% resolvido
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
