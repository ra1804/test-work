import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { PostState, Post } from '../store/reducers/posts';

interface Params {
  id?: string;
}

interface PropsItemPost {
  posts: Post[];
}

function ItemPost(props: PropsItemPost) {
  const { id } = useParams<Params>();
  const post = props.posts.find((item: Post) => `${item.id}` === id);

  return (
    <>
      <Link to="/">
        <div className="navigate">Home</div>
      </Link>
      <div className="title">{post?.title}</div>
      <div className="body">{post?.body}</div>
    </>
  );
}

const mapStateToProps = (state: { posts: PostState }) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(ItemPost);
