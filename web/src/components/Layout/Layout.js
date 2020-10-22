import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';

//

const Layout = ({ children }) => {
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
      <Header title={siteMeta.site.siteMetadata.title} />
      <main role="main">{children}</main>
    </>
  );
};

export default Layout;

//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
