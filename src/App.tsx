import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';
import data from './data/index'

function App() {
  return (
    <>
      <Section
      varient="blue"
      title={data[0].title}
      description={data[0].description}
      />

      <Section
      varient="beige"
      title={data[1].title}
      description={data[1].description}
      />

      <Section
      varient="blue"
      title={data[2].title}
      description={data[2].description}
      />

      <Section
      varient="white"
      title={data[3].title}
      description={data[3].description}
      />

      <Section
      varient="black"
      title={data[4].title}
      description={data[4].description}
      />

      <SideMenu>
        <MenuForm />
      </SideMenu>
      <GlobalStyles />
    </>
  );
}

export default App;
