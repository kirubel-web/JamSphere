import axios from "axios";

const API_URL = "http://jamsphere-backend.vercel.app/api";

export const fetchSongs = async () => {
  const response = await axios.get(`${API_URL}/songs`);
  return response.data;
};

export const addSong = async (song) => {
  const response = await axios.post(`${API_URL}/songs`, song);
  return response.data;
};

export const updateSong = async (song) => {
  const response = await axios.patch(`${API_URL}/songs/${song._id}`, song);
  return response.data;
};

export const deleteSong = async (id) => {
  if (!id) {
    throw new Error("Invalid song ID");
  }
  await axios.delete(`${API_URL}/songs/${id}`);
  return id;
};