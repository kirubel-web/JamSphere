import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchSongs } from "../../redux/songs/songsSlice";
import SongItem from "../../components/SongItem";
import styled from "styled-components";

const StyledList = styled.div``;

const Message = styled.div``;

const SongList = () => {
  const dispatch = useDispatch();
  const { songs, status, error } = useSelector((state) => state.songs);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchSongs());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <Message>Loading songs...</Message>;
  }

  if (status === "failed") {
    return <Message error>Error: {error}</Message>;
  }

  if (!songs || songs.length === 0) {
    return <Message>No songs found. Add some!</Message>;
  }

  return (
    <StyledList>
      {songs.map((song) => (
        <SongItem key={song.id} song={song} />
      ))}
    </StyledList>
  );
};

export default SongList;

