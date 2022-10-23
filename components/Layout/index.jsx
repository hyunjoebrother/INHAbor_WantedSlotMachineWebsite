import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "../Flex";

const Width = styled.div`
  height: 100% !important;
  min-height: 550px;
  //max-width: 400px;
  max-width: 500px;
  margin: 0 auto;
  padding: 50px;
  min-height: ${(props) => (props.minHeight ? props.minHeight : "550px")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

const StyledFlex = styled(Flex)`
  height: 100% !important;
`;

const Layout = ({ children, backgroundColor, minHeight }) => (
  <Width backgroundColor={backgroundColor} minHeight={minHeight}>
    <StyledFlex justify="center" align="center" direction="column">
      {children}
    </StyledFlex>
  </Width>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
