import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import cesar from './assets/icons/cesar.jpg';
import Main from './components/main';
import Footers from './components/footer';
import './App.css';
import MobileHeader from './components/mobileResponsive.js/mobileHeader';

function App() {
  return (
    <div className="App">
      <div style={{ height: '300px', position: 'relative' }}>
        <Layout
          className="header"
          style={{
            background:
              'url(https://media.giphy.com/media/5dYqPVcoq9mKuxleyR/giphy.gif) center / cover',
            backgroundPosition: '00px',
            overflowY: 'hidden',
            overscrollBehaviorY: 'none',
          }}
        >
          <Header
            transparent
            title="Software-Engineer"
            style={{ color: 'white' }}
          >
            <Navigation style={{ fontFamily: 'sans-serif' }}>
              <a href="/About">About</a>
              <a href="/Portfolio">Portfolio</a>
              <a href="/Blog">Blog</a>
              <a href="/Algorithms">Algorithms</a>
              <a href="/Contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
              <a href="/About">About</a>
              <a href="/Portfolio">Portfolio</a>
              <a href="/Blog">Blog</a>
              <a href="/Algorithms">Algorithms</a>
              <a href="/Contact">Contact</a>
            </Navigation>
          </Drawer>
          <a href="/">
            <i className="fas fa-angle-double-right fa-7x my-div">Cesar Mota</i>
            <img
              className="mydiv"
              src={cesar}
              alt="cesar's animated character"
              height="250px"
              width="250px"
              style={{
                border: 'purple solid 7px',
                borderRadius: ' 1000px 1000px 1000px 1000px ',
                position: 'relative',
                alignContent: 'center',
                marginLeft: '0px',
                marginTop: '-30px',
                imageRendering: 'crisp-edges',
              }}
            />
          </a>
          <Content />
        </Layout>
        <MobileHeader />
      </div>
      <Main />

      <Footers />
    </div>
  );
}

export default App;
