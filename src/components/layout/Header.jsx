import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StContainer>
      <StHeaderTitle to='/'>Header</StHeaderTitle>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #efefef;
`;

const StHeaderTitle = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  margin: 16px 0;
  display: inline-block;
  cursor: pointer;
`;
