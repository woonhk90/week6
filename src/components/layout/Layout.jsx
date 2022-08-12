import Container from "@mui/material/Container";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Container>
      <StContainer>{children}</StContainer>
    </Container>
  );
};

export default Layout;

const StContainer = styled.div`
  padding: 20px;
`;
