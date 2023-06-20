export default function StnProcessos() {
  <>
    <sectio className="processos">
      <h2 className="processos-titulo">Nossos Processo de Trabalho</h2>
      <ul className="processos-lista">
        <li className="processos-lista-card">
          <div className="processos-lista-card-circulo">1°</div>
          <div className="div processos-lista-card-conteudo">
            <h3 className="div processos-lista-card-conteudo-titulo">
              Inspeção e diagnóstico
            </h3>
            <p className="div processos-lista-card-conteudo-descricao">
              Realizamos os testes em bancada para encontrar o defeito e
              elaborar o orçamento.
            </p>
          </div>
        </li>
        <li className="processos-lista-card">
          <div className="processos-lista-card-circulo">2°</div>
          <div className="div processos-lista-card-conteudo">
            <h3 className="div processos-lista-card-conteudo-titulo">
              Reparo necessário
            </h3>
            <p className="div processos-lista-card-conteudo-descricao">
              Após aprovação do orçamento iniciamos o reparo, substituindo
              somente as peças danificadas.
            </p>
          </div>
        </li>
        <li className="processos-lista-card">
          <div className="processos-lista-card-circulo">3°</div>
          <div className="div processos-lista-card-conteudo">
            <h3 className="div processos-lista-card-conteudo-titulo">
              Limpeza completa
            </h3>
            <p className="div processos-lista-card-conteudo-descricao">
              Terminando o reparo, o equipamento passa por uma limpeza, para
              eliminar qualquer tipo de e riscos de problemas futuros.
            </p>
          </div>
        </li>
        <li className="processos-lista-card">
          <div className="processos-lista-card-circulo">4°</div>
          <div className="div processos-lista-card-conteudo">
            <h3 className="div processos-lista-card-conteudo-titulo">
              Testes e controle de qualidade
            </h3>
            <p className="div processos-lista-card-conteudo-descricao">
              Realizaremos diversos testes de usabilidade, se for encontrado
              qualquer problema, o cliente será avisado e o equipamento
              retornará à etapa 2 do processo para que seja realizado ajustes
              adicionais.
            </p>
          </div>
        </li>
      </ul>
    </sectio>
  </>;
}
