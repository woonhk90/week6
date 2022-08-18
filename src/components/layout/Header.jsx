import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getLogout } from "../../actions/cookie";
import Cookies from "universal-cookie";

const Header = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const refresh_token = cookies.get("Authorization");
  console.log("refresh_token=>", refresh_token);
  console.log("refresh_token=>", cookies);
  return (
    <StContainer>
      <StHeaderTitle to='/main'>DEVELOPMENT WIKI</StHeaderTitle>
    </StContainer>
  );
};

export default Header;

const StContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #efefef;
  margin: 0px 0 100px 0;
`;

const StHeaderTitle = styled(Link)`
  font-size: 30px;
  font-weight: bold;
  margin: 16px 0;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: black;
  letter-spacing: 5px;
`;
