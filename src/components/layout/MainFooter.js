import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "shards-react";

const MainFooter = ({ contained, copyright }) => (
  <footer className="main-footer p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      <Row style={{ margin: "20px 300px" }}>
        <span className="copyright">{copyright}</span>
      </Row>
    </Container>
  </footer>
);

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,

  copyright: PropTypes.string
};

MainFooter.defaultProps = {
  contained: false,
  copyright: "Công nghệ web tiên tiến © 2019 BKCOOK Group 5"
};

export default MainFooter;
