import React from 'react';
import { Container, Content, HeaderWrapper, Header, DropBoxLogo } from "./styles";

interface Props {
  varient: 'blue' | 'beige' | 'white' | 'black';
  title: string;
  description: string;
}
const Section: React.FC<Props> = ({ varient, title, description }) => {
  const handleToggle = () => {
    if(window.toggleActiveMenu) window.toggleActiveMenu();
  }

  const buttonVariant = Math.round(Math.random());

  return (
    <Container className={varient}>
      <HeaderWrapper>
        <Header>
          <h1>
            <DropBoxLogo />
            <span>DropBox</span>
          </h1>
          <button onClick={handleToggle}>{ buttonVariant === 0 ? 'Acessar' :  'Interagir' }</button>
        </Header>
      </HeaderWrapper>
      <Content>
        <h2>{title}</h2>
        <p>{description}</p>
      </Content>
    </Container>
  );
};

export default Section;
