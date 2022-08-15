import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setRefreshTokenToCookie } from "../../components/Login";

<<<<<<< HEAD
const initialState = {
  overChk:false,
=======

const initialState = {
  overChk:[],
>>>>>>> a083abaa92bca3f8c87897d04915509126abdfa6
  userInfo:[],
  response:[],
  todo:[],
};

export const __postUserInfo = createAsyncThunk("todos/postSignin", async (payload, thunkAPI) => {
  try {
    console.log('__postUserInfo=>',payload);
    const data = await axios.post(`http://52.78.17.178/api/member/signup`, payload);
    console.log("로그인데이터:",data);
    // return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    // return thunkAPI.rejectWithValue(error);
  }
});
let token=null;
export const __postLogin = createAsyncThunk("todos/postTodos", async (payload, thunkAPI) => {
  try {
    console.log('__postLogin=>',payload);
    const data = await axios.post("http://52.78.17.178/api/member/login", payload);
    // const data = await axios.post("http://13.125.104.11:8080/api/member/login", payload);//테스트아이피
    console.log("로그인성공데이터1:",data);
    
    token = data.headers.authorization;
    setRefreshTokenToCookie(data.headers.authorization);

    // return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    // return thunkAPI.rejectWithValue(error);
  }
});
export const __postOverlapChk = createAsyncThunk("todos/postOverlap", async (payload, thunkAPI) => {
  try {
    console.log("__postOverlapChk__postOverlapChk=>",payload);
    const data = await axios.post("http://52.78.17.178/api/member/checkup", payload);
    console.log("__postOverlapChk1=>",data)
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
<<<<<<< HEAD
    return thunkAPI.rejectWithValue(error);
=======
    // return thunkAPI.rejectWithValue(error);
>>>>>>> a083abaa92bca3f8c87897d04915509126abdfa6
  }
});





export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: {
    [__postUserInfo.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.todos.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postUserInfo.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.overChk = 'success';
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },[__postLogin.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postLogin.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
<<<<<<< HEAD
      console.log('로그인하면1=>',state);
      console.log('로그인하면2=>',action.payload);
      state.response.push(action.payload);
=======
      state.todos.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
>>>>>>> a083abaa92bca3f8c87897d04915509126abdfa6
    },
    [__postLogin.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },[__postOverlapChk.pending]: (state) => {
      state.isLoading = true;
    },
    [__postOverlapChk.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log('__postOverlapChk2=>',action.payload);
      state.overChk=action.payload;
    },
    [__postOverlapChk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;