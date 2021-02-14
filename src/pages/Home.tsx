import React, { useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchedPosts } from '../store/actions';
import { preparePost } from '../utils/preparePost';
import { PostState, Post } from '../store/reducers/posts';

interface Props {
  fetchedPosts: () => void;
  state: PostState;
}

function Home(props: Props) {
  const {
    fetchedPosts,
    state: { posts, isLoading, error },
  } = props;

  const [textSearch, setTextSearch] = useState<string>('');
  const [postsList, setPostsList] = useState<Post[]>([]);

  const search = () => {
    const postsFiltered = posts.filter(
      (item: Post) =>
        item.title.indexOf(textSearch) !== -1 ||
        item.body.indexOf(textSearch) !== -1
    );
    setPostsList(postsFiltered);
  };

  useEffect(() => {
    setPostsList(posts);
    setTextSearch('');
  }, [posts]);

  useEffect(() => {
    fetchedPosts();

    const interval = setInterval(() => {
      fetchedPosts();
    }, 300000);

    return () => clearInterval(interval);
  }, [fetchedPosts]);

  return (
    <>
      <div className="search">
        <input
          value={textSearch}
          onChange={(e) => setTextSearch(e.target.value)}
        />
        <button onClick={() => search()}>SEARCH</button>
        <button onClick={() => setTextSearch('')}>CLEAR</button>
      </div>

      {error && <div className="error">{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        postsList.map((post: Post) => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <div className="post">
              <div className="title">{post.title}</div>
              <div className="body">{preparePost(post.body)}</div>
            </div>
          </Link>
        ))
      )}
    </>
  );
}

const mapStateToProps = (state: { posts: PostState }) => ({
  state: state.posts,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchedPosts: () => dispatch(fetchedPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
