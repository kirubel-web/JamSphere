import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: 'idle',
  error: null,
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongs: (state) => {
      state.status = 'loading';
    },
    fetchSongsSuccess: (state, action) => {
      state.list = action.payload;
      state.status = 'succeeded';
    },
    fetchSongsFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    addSong: (state) => {
      state.status = 'loading';
    },
    addSongSuccess: (state, action) => {
      state.list.push(action.payload);
      state.status = 'succeeded';
    },
    addSongFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    updateSong: (state) => {
      state.status = 'loading';
    },
    updateSongSuccess: (state, action) => {
      const index = state.list.findIndex((song) => song._id === action.payload._id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
      state.status = 'succeeded';
    },
    updateSongFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
    deleteSong: (state) => {
      state.status = 'loading';
    },
    deleteSongSuccess: (state, action) => {
      state.list = state.list.filter((song) => song._id !== action.payload);
      state.status = 'succeeded';
    },
    deleteSongFailure: (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    },
  },
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSong,
  addSongSuccess,
  addSongFailure,
  updateSong,
  updateSongSuccess,
  updateSongFailure,
  deleteSong,
  deleteSongSuccess,
  deleteSongFailure,
} = songsSlice.actions;

export default songsSlice.reducer;