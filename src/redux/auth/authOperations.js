import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, setAuthHeader, clearAuthHeader } from '../../api/authApi';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      // Создание нового пользователя с авто-генерированным токеном
      const { data } = await api.post('/users', {
        email: credentials.email,
        password: credentials.password,
        name: credentials.email.split('@')[0],
        token: `token_${Date.now()}`,
      });
      setAuthHeader(data.token);
      return { user: { email: data.email, id: data.id }, token: data.token };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      // Получаем всех пользователей и фильтруем на фронте
      const { data } = await api.get('/users');
      const user = data.find(u => u.email === credentials.email);
      
      if (!user) {
        throw new Error('User not found');
      }
      if (user.password !== credentials.password) {
        throw new Error('Invalid password');
      }
      setAuthHeader(user.token);
      return { user: { email: user.email, id: user.id }, token: user.token };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    // Logout — просто очищаем заголовок (MockAPI нет logout эндпоинта)
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
