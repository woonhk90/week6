import styled, { css } from "styled-components";

const Button = ({
  text,
  btntype,
  type,
  onClick,
  children,
  uibutton,
  disabled,
}) => {
  return (
    <StButton type={type} onClick={onClick} btntype={btntype}>
      {children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  border-radius: 8px;
  cursor: pointer;
  ${(props) => {
    return (
      props.btntype === "login" &&
      css`
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        :hover {
          border: 1px solid rgb(254, 83, 31);
        }
        width: 100%;
        height: 50px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btntype === "signup" &&
      css`
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        :hover {
          border: 1px solid rgb(254, 83, 31);
        }
        width: 100%;
        height: 50px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btntype === "signSubmit" &&
      css`
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        :hover {
          border: 1px solid rgb(254, 83, 31);
        }
        width: 100%;
        height: 50px;
      `
    );
  }}
  ${(props) => {
    return (
      props.btntype === "back" &&
      css`
        border: 1px solid rgb(221, 221, 221);
        background-color: white;
        :hover {
          border: 1px solid rgb(254, 83, 31);
        }
        width: 100%;
        height: 50px;
      `
    );
  }}
`;
