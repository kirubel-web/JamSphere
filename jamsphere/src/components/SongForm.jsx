import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { addSong, updateSong } from "../redux/songs/songsSlice";
import Button from "./Button";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 30px;
  background-color: ${(props) => props.theme.colors.background};
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  max-width: 500px;
  margin: 20px;
`;

const Input = styled.input`
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

const ButtonStyled = styled(Button)`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 12px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
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
        dispatch(updateSong({ _id: songToEdit._id, title, artist }));
      } else {
        dispatch(addSong({ title, artist }));
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
      <Button gradient type="submit">
        {songToEdit ? "Update Song" : "Add Song"}
      </Button>
    </Form>
  );
};

export default SongForm;
