import style from "styled-components";

const FooterContainer = style.div`
margin: 100px 0;
text-align: center;
width: 100%;
`;

const Text = style.p`
color: black;
`;

function Footer() {
  return (
    <FooterContainer>
      <Text>© 2021 | Stop Reacting Lab</Text>
    </FooterContainer>
  );
}

export default Footer;
