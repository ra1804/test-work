interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  isLoading: boolean;
  error: string;
}

interface Action {
  type: string;
  payload?: string | Post[];
}

const initialState = {
  posts: [],
  isLoading: false,
  error: '',
};
const postsReducer = (state = initialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case 'START_LOADING':
      return {
        ...state,
        isLoading: true,
        error: '',
      };

    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
        error: '',
      };

    case 'FETCH_FAILED':
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
export type { PostState, Post };
