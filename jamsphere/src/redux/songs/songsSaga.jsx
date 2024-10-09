import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from '../../api/songsApi';
import { fetchSongsSuccess, fetchSongsFailure, addSongSuccess, addSongFailure, updateSongSuccess, updateSongFailure, deleteSongSuccess, deleteSongFailure } from './songsSlice';


function* fetchSongsSaga() {
  try {
    const response = yield call(api.fetchSongs);
    yield put(fetchSongsSuccess(response));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

function* addSongSaga(action) {
  try {
    const response = yield call(api.addSong, action.payload);
    yield put(addSongSuccess(response));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

function* updateSongSaga(action) {
  try {
    const response = yield call(api.updateSong, action.payload);
    yield put(updateSongSuccess(response));
  } catch (error) {
    yield put(updateSongFailure(error.message));
  }
}

function* deleteSongSaga(action) {
  try {
    const response = yield call(api.deleteSong, action.payload);
    yield put(deleteSongSuccess(response));
  } catch (error) {
    yield put(deleteSongFailure(error.message));
  }
}


function* songsSaga() {
  yield takeLatest('songs/fetchSongs', fetchSongsSaga);
  yield takeLatest('songs/addSong', addSongSaga);
  yield takeLatest('songs/updateSong', updateSongSaga);
  yield takeLatest('songs/deleteSong', deleteSongSaga);
}

export default songsSaga;