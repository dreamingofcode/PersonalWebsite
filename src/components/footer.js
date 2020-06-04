import React from 'react';
import {
  Footer,
  FooterDropDownSection,
  FooterSection,
  FooterLinkList,
} from 'react-mdl';
const Footers = () => {
  return (
    <div>
      <Footer size="mega">
        <FooterSection type="middle" style={{marginRight:"-290px"}} >
        <FooterDropDownSection title="Resume" style={{marginRight:"-170px"}}>
            <FooterLinkList>
              <a href="https://www.canva.com/design/DADtArBgofY/owdWTSezIHEjPMvjqDH8lg/view?utm_content=DADtArBgofY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton" target="_blank">
                {' '}
                <i class="fas fa-file fa-5x"></i>
              </a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Github" style={{marginRight:"-170px"}}>
            <FooterLinkList>
              <a href="https://github.com/dreamingofcode" target="_blank">
                {' '}
                <i className="fab fa-github-square fa-5x"></i>
              </a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Linked in" style={{marginRight:"-170px"}}>
            <FooterLinkList>
              <a href="https://www.linkedin.com/in/cesar-mota365/" target="_blank">
                <i class="fab fa-linkedin fa-5x"></i>
              </a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Medium" style={{marginRight:"-170px"}}>
            <FooterLinkList>
              <a href="https://medium.com/@cesarmota922" target="_blank">
                <i class="fab fa-medium fa-5x"></i>
              </a>
            </FooterLinkList>
          </FooterDropDownSection>
          <FooterDropDownSection title="Email">
            <FooterLinkList>
              <a href="mailto:cesarmota922@gmail.com" target="_blank"><i class="fas fa-envelope-square fa-5x"></i></a>
            </FooterLinkList>
          </FooterDropDownSection>
        </FooterSection>
        <FooterSection type="bottom" logo="Title">
          <FooterLinkList>
            <a href="#">Help</a>
            <a href="#">Privacy & Terms</a>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    </div>
  );
};
export default Footers;
