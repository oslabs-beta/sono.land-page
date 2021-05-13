import React from 'react';
import SEO from '@rocketseat/gatsby-theme-docs/src/components/SEO';
// Path to the logo file on your project
import rocketseatLogo from './assets/sonologofinal.png';

const Logo = () => (
  <img src={rocketseatLogo} alt="Rocketseat logo" style={{ width: 180 }} />
);

export default Logo;