import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "../redux/songs/songsSlice";
import SongItem from "./SongItem";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Message = styled.p`
  text-align: center;
  color: ${(props) => (props.error ? "#ff4d4f" : "#007bff")};
  font-size: 1.2rem;
  font-weight: bold;
  margin: 2rem 0;
`;

const SongItemContainer = styled.li`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition:
    box-shadow 0.3s ease,
    transform 0.2s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`;

const SongList = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  if (status === "loading") {
    return <Message>Loading...</Message>;
  }

  if (status === "failed") {
    return <Message error>{error}</Message>;
  }

  return (
    <StyledList>
      {list.map((song) => (
        <SongItemContainer key={song._id}>
          <SongItem song={song} />
        </SongItemContainer>
      ))}
    </StyledList>
  );
};

export default SongList;
