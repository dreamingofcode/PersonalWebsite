import React from 'react';
import {
  Footer,
  FooterDropDownSection,
  FooterSection,
  FooterLinkList,
  Grid,
  Cell,
} from 'react-mdl';
const Footers = () => {
  return (
    <div>
      <Footer size="mega">
        <FooterSection type="top" style={{ marginRight: '-290px' }}>
          <Cell col={3} phone={3} tablet={4} offsetDesktop={0} offsetTablet={0}>
            <FooterDropDownSection
              title="Resume"
              style={{ marginRight: '0px', marginLeft: '0px' }}
            >
              <FooterLinkList>
                <a
                  href="https://www.canva.com/design/DADtArBgofY/owdWTSezIHEjPMvjqDH8lg/view?utm_content=DADtArBgofY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                  target="_blank"
                >
                  {' '}
                  <i class="fas fa-file fa-5x"></i>
                </a>
              </FooterLinkList>
            </FooterDropDownSection>
          </Cell>

          <Cell
            col={3}
            phone={4}
            tablet={4}
            offsetDesktop={2}
            offsetTablet={0}
          >
            <FooterDropDownSection
              title="Github"
              style={{ marginRight: '0px' }}
            >
              <FooterLinkList>
                <a href="https://github.com/dreamingofcode" target="_blank">
                  {' '}
                  <i className="fab fa-github-square fa-5x"></i>
                </a>
              </FooterLinkList>
            </FooterDropDownSection>
          </Cell>

          <Cell col={3} phone={4} tablet={4} offsetDesktop={4}>
            <FooterDropDownSection
              title="Linked in"
              style={{ marginRight: '0px' }}
            >
              <FooterLinkList>
                <a
                  href="https://www.linkedin.com/in/cesar-mota365/"
                  target="_blank"
                >
                  <i class="fab fa-linkedin fa-5x"></i>
                </a>
              </FooterLinkList>
            </FooterDropDownSection>
          </Cell>
          <Cell col={3} phone={4} tablet={4} offsetDesktop={6}>
            <FooterDropDownSection
              title="Medium"
              style={{ marginRight: '00px' }}
            >
              <FooterLinkList>
                <a href="https://medium.com/@cesarmota922" target="_blank">
                  <i class="fab fa-medium fa-5x"></i>
                </a>
              </FooterLinkList>
            </FooterDropDownSection>
          </Cell>
          <Cell col={3} phone={4} tablet={4} offsetDesktop={8}>
            <FooterDropDownSection
              title="Email"
              style={{ marginRight: '0px' }}
            >
              <FooterLinkList>
                <a href="mailto:cesarmota922@gmail.com" target="_blank">
                  <i class="fas fa-envelope-square fa-5x"></i>
                </a>
              </FooterLinkList>
            </FooterDropDownSection>
          </Cell>


        </FooterSection>
        <Cell
          shadow={2}
          col={12}
          offsetTablet={0}
          phone={12}
          tablet={12}
          offsetPhone={0}

        >
          <FooterSection type="top">
            <FooterLinkList>
              <a href="/">Home</a>
              <a href="/About">About</a>
              <a href="/Blog">Blog</a>
              <a href="/Algorithms">Algorithms</a>
              <a href="/Contact">Contact</a>
            </FooterLinkList>
          </FooterSection>
        </Cell>

      </Footer>
    </div>
  );
};
export default Footers;
