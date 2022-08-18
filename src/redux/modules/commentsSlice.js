import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState = {
  comments: [],
  isLoading: false,
  error: null,
};

export const __postComments = createAsyncThunk(
  "comments/postComment",
  async (payload, thunkAPI) => {
    try {
      console.log('__postComments1=>', payload);//userId 게시글 번호
      console.log('__postComments2=>', payload.userId);//userId 게시글 번호
      const refresh_token = cookies.get("Authorization");
      console.log('댓글쓸때 토큰', refresh_token);
      const data = await axios.post(`${process.env.REACT_APP_IP_ADDRESS}/comment/auth/${payload.userId}`, payload, {
        headers: {
          Authorization: refresh_token
        },
      });
      // const data = await axios.post("http://localhost:3001/comments", payload);
      //const data = await axios.post(`${API_COMMENT}`, payload);
      // return thunkAPI.fulfillWithValue(payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue("ERROR=>", error);
    }
  }
);

export const __getComments = createAsyncThunk(
  "comments/getComments",
  async (payload, thunkAPI) => {
    try {
      console.log('__getComments=>');
      const refresh_token = cookies.get("Authorization");
      const data = await axios.get(`${process.env.REACT_APP_IP_ADDRESS}/comment/all`,{
        headers: {
          Authorization: refresh_token
        },
      });
      //const data = await axios.get(`${API_COMMENT}`);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteComments = createAsyncThunk(
  "comments/delteComments",
  async (payload, thunkAPI) => {
    try {
      const refresh_token = cookies.get("Authorization");
      await axios.delete(`${process.env.REACT_APP_IP_ADDRESS}/comment/auth/${payload}`,{
        headers: {
          Authorization: refresh_token
        },
      });
      //await axios.delete(`${API_COMMENT}/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateComments = createAsyncThunk(
  "comments/updatecomments",
  async (payload, thunkAPI) => {
    try {
      console.log('__updateComments=>',payload);
      const refresh_token = cookies.get("Authorization");
      await axios.patch(
        `${process.env.REACT_APP_IP_ADDRESS}/comment/auth/${payload.id}`,payload,{
          headers: {
            Authorization: refresh_token
          },
        });
      //await axios.patch(`${API_TODOS}/${payload.id}`, payload);
      thunkAPI.dispatch(__getComments());
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [__postComments.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },
    [__postComments.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.comments.push(action.payload); // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
    },
    [__postComments.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__getComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comments = state.comments.filter((v) => v.id !== action.payload);
    },
    [__deleteComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__updateComments.pending]: (state) => {
      state.isLoading = true;
    },
    [__updateComments.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [__updateComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addComment } = commentsSlice.actions;
export default commentsSlice.reducer;
