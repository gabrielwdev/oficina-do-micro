export default function StnContato() {
  return (
    <section class="informacoes">
      <div class="informacoes-loja">
        <h2>SOBRE NÓS</h2>
        <p>Trabalhamos com</p>
      </div>
      <div class="informacoes-canais">
        <h2>WHATSAPP</h2>
        <a
          target="_blank"
          href="https://wa.me/5512"
          class="informacoes-link numero"
        >
          (12)
        </a>
        <div class="informacoes-link">
          <address>
            <a target="_blank" href=""></a>
          </address>
        </div>
        <div class="informacoes-link">
          <a target="_blank" href="mailto:"></a>
        </div>
        <ul>
          <li class="informacoes-canais-lista-instagram">
            <a target="_blank" href="https://www.instagram.com/"></a>
          </li>
          <li class="informacoes-canais-lista-whatsapp">
            <a target="_blank" href="https://wa.me/5512"></a>
          </li>
          <li class="informacoes-canais-lista-linkedin">
            <a target="_blank" href=""></a>
          </li>
        </ul>
      </div>

      <div class="informacoes-maps">
        <iframe
          src=""
          class="mapa"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
