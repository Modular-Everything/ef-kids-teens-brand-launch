import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Header from '../Header';

//

const Layout = ({ children, location, title }) => {
  const siteMeta = useStaticQuery(graphql`
    query siteMeta {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = siteMeta.site.siteMetadata.title;
  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale = 1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Helmet>

      <Header title={pageTitle} back={location.pathname !== '/'} />
      <main role="main">{children}</main>
    </>
  );
};

export default Layout;

//

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
  title: PropTypes.string,
};

Layout.defaultProps = {
  title: null,
};
