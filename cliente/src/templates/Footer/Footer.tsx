import React, { FC } from 'react';
import * as Styles from './Footer.styles';

const Footer: FC = () => {
  const content = {
    logo: '',
    title: 'BATATARIA KEFI LTDA',
    description: 'CNPJ: 22.724.541/0001-03*',
    advertisementSession: '*Empresa fictícia',
    contactSession: 'Contatos',
    doubtsSession: {
      title: 'Dúvidas',
      link: '@batatariakefi',
      address: 'Av. Orosimbo Maia, 2600 Cambuí, Campinas - SP',
      cep: 'CEP: 13024 - 045',
    },
    socialMedia: [
      {
        icon: '',
        link: '',
      },
    ],
  };

  return (
    <Styles.Grid>
      <Styles.Container>
        <Styles.LogoContainer>
          <img src="/images/kefi_horizontal.png" alt="logo-kefi" />
          <Styles.Title>{content.title}</Styles.Title>
          <Styles.Description>{content.description}</Styles.Description>
        </Styles.LogoContainer>
        <Styles.Column>
          <Styles.Title>{content.advertisementSession}</Styles.Title>
          <Styles.Link href="/">Quem somos</Styles.Link>
        </Styles.Column>
        <Styles.Column>
          <Styles.Title>{content.contactSession}</Styles.Title>
          <Styles.Link href="/">Admisnistração</Styles.Link>
          <Styles.Link href="/">Web Design</Styles.Link>
          <Styles.Link href="/">Programação</Styles.Link>
        </Styles.Column>
        <Styles.Column>
          <Styles.Title>{content.doubtsSession.title}</Styles.Title>
          <Styles.Link href="/">{content.doubtsSession.link}</Styles.Link>
          <Styles.Description>
            {content.doubtsSession.address}
          </Styles.Description>
          <Styles.Description>{content.doubtsSession.cep}</Styles.Description>
        </Styles.Column>
        <Styles.SocialMediaContainer>
          <img src="/images/instagram.png" alt="instagram" />
          <img src="/images/linkedin.png" alt="linkedin" />
        </Styles.SocialMediaContainer>
      </Styles.Container>
      <Styles.Suport>All rights reserved ©2021</Styles.Suport>
    </Styles.Grid>
  );
};

export default Footer;
