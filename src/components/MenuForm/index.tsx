import React from 'react';
import { Container, Navigation, DropBoxLogo, Form } from './styles';

const MenuForm: React.FC = () => {
  const handleToggle = () => {
    if(window.toggleActiveMenu) window.toggleActiveMenu();
  }
  return (
    <Container>
      <Navigation>
        <h1>
          <DropBoxLogo />
          <span>Dropbox</span>
        </h1>
        <button className="action--close" onClick={handleToggle}>✕</button>
      </Navigation>
      <Form>
        <span className="title">Registre-se</span>
        <span className="subtile">preencha o formulário abaixo</span>
        <input type="text" placeholder="Nome"/>
        <input type="text" placeholder="Sobrenome"/>
        <input type="text" placeholder="Email"/>
        <input type="password" placeholder="Senha"/>
        <button>Prosseguir</button>
        <span className="terms">
          Esta página é protegida pelo reCAPTCHA e está sujeita à Política de privacidade e aos Termos de serviço do Google.
        </span>
      </Form>
    </Container>
  );
}

export default MenuForm;
