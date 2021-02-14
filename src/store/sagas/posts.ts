import { call, put } from 'redux-saga/effects';
import { postLoading, postFetchFailed, postFetchSuccess } from '../actions';
import axios from 'axios';

function* fetchPostsAsync() {
  try {
    yield put(postLoading());
    const data = yield call(async () => {
      const posts = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      return posts.data;
    });
    yield put(postFetchSuccess(data));
  } catch (error) {
    yield put(postFetchFailed(error.message));
  }
}

export { fetchPostsAsync };
