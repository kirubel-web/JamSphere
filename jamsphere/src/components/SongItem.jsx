import React, { useState } from "react";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { deleteSongThunk } from "../redux/songs/songsSlice";
import Button from "./Button";
import SongForm from "./SongForm";

const StyledItem = styled.li`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SongInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const SongTitle = styled.h3`
  margin: 0;
  color: ${(props) => props.theme.colors.text};
`;

const SongArtist = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.textLight};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const SongItem = ({ song }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteSongThunk(song._id)); // Using _id as it's commonly used in MongoDB.
  };

  if (isEditing) {
    return (
      <StyledItem>
        <SongForm songToEdit={song} />
        <Button secondary onClick={() => setIsEditing(false)}>
          Cancel
        </Button>
      </StyledItem>
    );
  }

  return (
    <StyledItem>
      <SongInfo>
        <div>
          <SongTitle>{song.title}</SongTitle>
          <SongArtist>{song.artist}</SongArtist>
        </div>
        <ButtonGroup>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button secondary onClick={handleDelete}>
            Delete
          </Button>
            </ButtonGroup>
          </SongInfo>
        </StyledItem>
      );
    };

    export default SongItem;
