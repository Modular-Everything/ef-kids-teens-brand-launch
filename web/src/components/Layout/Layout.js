import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import Footer from '../Footer';

//

const Layout = ({ children, location }) => {
  const siteMeta = useStaticQuery(graphql`
    query siteMeta {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header
        title={siteMeta.site.siteMetadata.title}
        back={location.pathname !== '/'}
      />
      <main role="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};
