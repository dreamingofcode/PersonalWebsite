import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import cesar from '../../assets/icons/cesar.jpg';

function MobileHeader() {
  return (
    <div className="App">
      <div style={{ height: '400px', position: 'relative' }}>
        <Layout className="mobile-header">
          <Header title="Software-Engineer" style={{ color: 'white' }}>
            <Navigation style={{ fontFamily: 'sans-serif' }}>
              <a href="/About">About</a>
              <a href="/Porfolio">Porfolio</a>
              <a href="/Blog">Blog</a>
              <a href="/Algorithms">Algorithms</a>
              <a href="/Contact">Contact</a>
            </Navigation>
          </Header>
          <Drawer>
            <Navigation>
              <a href="/About">About</a>
              <a href="/Porfolio">Porfolio</a>
              <a href="/Blog">Blog</a>
              <a href="/Algorithms">Algorithms</a>
              <a href="/Contact">Contact</a>
            </Navigation>
          </Drawer>
          <a href="/">
            <img
              className="mydiv"
              src={cesar}
              alt="cesar's animated character"
              height="200px"
              width="200px"
              style={{
                  border: 'purple solid 7px',
                  borderRadius: ' 1000px 1000px 1000px 1000px ',
                  position: 'relative',
                  alignContent: 'center',
                  marginBottom: '30px',
                  marginTop: '20px',
                  imageRendering: 'crisp-edges',
                }}
            />
                <i className="fas fa-angle-double-right fa-4x my-div">Cesar Mota</i>
          </a>{' '}
          <Content />
        </Layout>
      </div>
    </div>
  );
}

export default MobileHeader;
