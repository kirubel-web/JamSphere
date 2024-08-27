import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSongsThunk } from '../redux/songs/songsSlice';
import SongItem from './SongItem';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Message = styled.p`
  
`;

const SongList = () => {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.songs);

  useEffect(() => {
    dispatch(fetchSongsThunk());
  }, [dispatch]);

  if (status === 'loading') {
    return <Message>Loading...</Message>;
  }

  if (status === 'failed') {
    return <Message error>{error}</Message>;
  }

  return (
    <StyledList>
      {list.map((song) => (
        <SongItem key={song._id} song={song} />
      ))}
    </StyledList>
  );
};

export default SongList;