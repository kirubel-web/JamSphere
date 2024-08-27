import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../api/songsApi";

const initialState = {
  list: [],
  status: "idle",
  error: null,
};

// Async thunks
export const fetchSongsThunk = createAsyncThunk("songs/fetchSongs", async () => {
  const response = await api.fetchSongs();
  return response;
});

export const addSongThunk = createAsyncThunk("songs/addSong", async (song) => {
  const response = await api.addSong(song);
  return response;
});

export const updateSongThunk = createAsyncThunk("songs/updateSong", async (song) => {
  const response = await api.updateSong(song);
  return response;
});

export const deleteSongThunk = createAsyncThunk("songs/deleteSong", async (id) => {
  const response = await api.deleteSong(id);
  return response;
});

// Slice
const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchSongs
      .addCase(fetchSongsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSongsThunk.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchSongsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // addSong
      .addCase(addSongThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addSongThunk.fulfilled, (state, action) => {
        state.list.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addSongThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // updateSong
      .addCase(updateSongThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateSongThunk.fulfilled, (state, action) => {
        const index = state.list.findIndex((song) => song._id === action.payload._id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(updateSongThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // deleteSong
      .addCase(deleteSongThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteSongThunk.fulfilled, (state, action) => {
        state.list = state.list.filter((song) => song._id !== action.payload);
        state.status = "succeeded";
      })
      .addCase(deleteSongThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default songsSlice.reducer;