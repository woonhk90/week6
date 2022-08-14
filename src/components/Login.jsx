import React from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { __postLogin } from "../redux/modules/todoSlice";

import Button from "./elements/Button";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, setLogin] = React.useState({
    userId: "",
    userPw: "",
  });
  const onSubmitEventHandler = () => {};
  const onChangeEventHandler = (e) => {
    const { name, value } = e.target;
    dispatch(__postLogin(login));
  };
  return (
    <>
      <LoginWrap>
        <LoginTitle>로그인</LoginTitle>
        <LoginForm>
          <div>
            <label htmlFor='user_id'>아이디: </label>
            <input
              id='user_id'
              name='user_id'
              className='user_id'
              type='text'
              onChange={onChangeEventHandler}
              placeholder='아이디를 입력하세요.'
            />
          </div>
          <div>
            <label htmlFor='user_pw'>비밀번호: </label>
            <input
              id='user_pw'
              name='user_pw'
              className='user_pw'
              type='text'
              onChange={onChangeEventHandler}
              placeholder='비밀번호를 입력하세요.'
            />
          </div>
          {/* <button onClick={()=>(onSubmitEventHandler())}>로그인</button> */}
          <Button btntype='login' onClick={() => onSubmitEventHandler()}>
            로그인
          </Button>
          <Button btntype='signup' onClick={() => navigate("/api/signup")}>
            회원가입
          </Button>
        </LoginForm>
      </LoginWrap>
    </>
  );
};

export default Login;

const LoginWrap = styled.div`
  width: 800px;
  height: 500px;
  margin: 50px auto 0;
  background-color: purple;
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const LoginTitle = styled.h1`
  line-height: 80px;
  font: 40px/80px "Arial", "sans-serif";
  letter-spacing: 10px;
`;
const LoginForm = styled.div`
  width: 600px;
  padding: 15px;
  box-sizing: border-box;
  margin: 0 auto;
  background-color: white;
  text-align: center;
`;

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [login, setLogin] = React.useState({
//     userId: "",
//     userPw: "",
//   });
//   const onSubmitEventHandler = () => {};
//   const onChangeEventHandler = (e) => {
//     const { name, value } = e.target;
//     dispatch(__postLogin(login));
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <div>
//         <div>
//           <label htmlFor='user_id'>아이디: </label>
//           <input
//             id='user_id'
//             name='user_id'
//             className='user_id'
//             type='text'
//             onChange={onChangeEventHandler}
//           />
//         </div>
//         <div>
//           <label htmlFor='user_pw'>비밀번호: </label>
//           <input
//             id='user_pw'
//             name='user_pw'
//             className='user_pw'
//             type='text'
//             onChange={onChangeEventHandler}
//           />
//         </div>
//         <button onClick={() => onSubmitEventHandler()}>로그인</button>
//         <button onClick={() => navigate("/api/signup")}>회원가입</button>
//       </div>
//     </div>
//   );
// };
// export default Login;

// import Button from './elements/Button';
// import Input from './elements/Input';

// import bgImg from '../img/bg_img.jpg';

// const Login = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [login, setLogin] = React.useState({
//         userId: '',
//         userPw: '',
//     });
//     const onSubmitEventHandler = () => {

//     }
//     const onChangeEventHandler = (e) => {
//         const { name, value } = e.target;
//         dispatch(__postLogin(login));
//     }
//     return (
//         <>
//             <ImgDiv>
//                 <LoginWrap>
//                     <LoginTitle>로그인</LoginTitle>
//                     <LoginForm>
//                         <div>
//                             <Input width={'500px'} id={'user_id'} name={'user_id'} maxLength={'20'} onChange={onChangeEventHandler} placeholder={"아이디를 입력하세요."} />
//                         </div>
//                         <div>
//                             <Input width={'500px'} id={'user_pw'} name={'user_pw'} maxLength={'20'} onChange={onChangeEventHandler} placeholder={"비밀번호를 입력하세요."} />
//                         </div>
//                         <Button btntype="login" onClick={() => (onSubmitEventHandler())}>로그인</Button>
//                         <Button btntype="signup" onClick={() => (navigate('/api/signup'))}>회원가입</Button>
//                     </LoginForm>
//                 </LoginWrap>
//             </ImgDiv>
//         </>
//     )
// }

// export default Login;

// const ImgDiv = styled.div`
//   width:100vw;
//   height:100vh;
//   overflow:hidden;
//   background:url(${bgImg}) no-repeat 50% 50%;background-size:cover;

//   display:flex;
//   justify-content:center;
//   align-items:center;
// `;

// const LoginWrap = styled.div`
//     width:1000px;
//     background-color:rgba(0,0,0,0.4);
//     text-align:center;
//     display:flex;
//     flex-direction:column;
// `;
// const LoginTitle = styled.h1`
//     line-height:80px;
//     font:40px/80px 'Arial','sans-serif';
//     letter-spacing: 10px;
// `;
// const LoginForm = styled.div`
//     font:20px/80px 'Arial','sans-serif';
//     letter-spacing: 5px;
//     padding:15px;
//     box-sizing:border-box;
// `;
