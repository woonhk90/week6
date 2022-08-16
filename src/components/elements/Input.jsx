import styled from "styled-components";

const Input = (props) => {
  const {
    maxLength,
    pattern,
    title,
    id,
    type,
    value,
    name,
    onChange,
    placeholder,
    width,
    margin,
    autoFocus,
  } = props;
  return (
      <StInput
        maxLength={maxLength}
        pattern={pattern}
        title={title}
        id={id}
        type={type}
        defaultValue={value}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        width={width}
        margin={margin}
        autoFocus={autoFocus}
      />
  );
};

export default Input;

const StInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  word-wrap: break-word;
  box-sizing: border-box;
  border: 1px solid #eee;
  margin: ${(props) => props.margin};
  /* justify-content: center; */
  /* align-items: center; */
  /* display: flex; */
  height: 46px;
  padding: 12px;
  border-radius: 8px;
  font-size: 14px;
  outline-color: rgb(254, 83, 31);
  :hover {
    border: 1px solid rgb(254, 83, 31);
  }
`;
