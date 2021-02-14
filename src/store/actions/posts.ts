import { Post } from '../reducers/posts';

export const postLoading = () => ({
  type: 'START_LOADING',
});

export const postFetchSuccess = (posts: Post[]) => ({
  type: 'FETCH_SUCCESS',
  payload: posts,
});

export const postFetchFailed = (error: string) => ({
  type: 'FETCH_FAILED',
  payload: error,
});

export const fetchedPosts = () => ({
  type: 'FETCHED_POSTS',
});
