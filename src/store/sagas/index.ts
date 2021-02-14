import { takeLatest } from 'redux-saga/effects';
import { fetchPostsAsync } from './posts';

export default function* sagas() {
  yield takeLatest('FETCHED_POSTS', fetchPostsAsync);
}
