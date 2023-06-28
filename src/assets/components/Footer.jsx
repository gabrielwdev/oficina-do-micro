import Logo from "./img/logo-oficina-do-micro.png";

export default function Footer() {
  return (
    <footer class="footer">
      <nav class="footer-navbar">
        <img src={Logo} alt="Logo da Hytech Vale" class="footer-navbar-logo" />
        <div class="footer-navbar-complementos">
          <p>
            © 2023 Oficina do Micro. Todos os direitos reservados | Site
            Desenvolvido por
            <a class="footer-navbar-complementos-link" href="">
              Gabriel BS
            </a>
          </p>
          <address>
            R. Cap. Antônio de Oliveira, 41 - Parque Brasil, Jacareí - SP,
            <a class="footer-navbar-complementos-link" href="">
              12328-420
            </a>
          </address>
        </div>
        <a href="#top" class="footer-navbar-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-arrow-up-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
}
