import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

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
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width; initial-scale = 1.0; maximum-scale=1.0; user-scalable=no"
        />
      </Helmet>

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
