import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { addSongThunk, updateSongThunk } from "../redux/songs/songsSlice";
import Button from "./Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.border};
  font-size: 16px;
`;

const SongForm = ({ songToEdit = null }) => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (songToEdit) {
      setTitle(songToEdit.title);
      setArtist(songToEdit.artist);
    }
  }, [songToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && artist) {
      if (songToEdit) {
        dispatch(updateSongThunk({ _id: songToEdit._id, title, artist }));
      } else {
        dispatch(addSongThunk({ title, artist }));
      }
      setTitle("");
      setArtist("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <Button type="submit">{songToEdit ? "Update Song" : "Add Song"}</Button>
    </Form>
  );
};

export default SongForm;
