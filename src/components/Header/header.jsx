import S from "./header.module.scss";

export default function Header() {
  return (
    <header>
        <h1>Meu Portfólio</h1>
      <nav className={S.boxMenu}>
        <ul>
          <li>Início</li>
          <li>Sobre mim</li>
          <li>Tecnologias</li>
          <li>Projetos</li>
          <li>Currículo</li>
          <li>Botão</li>
        </ul>
      </nav>
    </header>
  );
}
