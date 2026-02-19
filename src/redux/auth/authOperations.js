import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setAuthHeader, clearAuthHeader } from '../../api/authApi';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/signup', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/users/login', credentials);
      setAuthHeader(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await api.post('/users/logout');
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
