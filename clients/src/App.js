import './App.css';
import CreatePost from './CreatePost';
import PostList from './PostList';

function App() {
  return (
    <div className="container">
      <h2>Create Post</h2>
      <CreatePost />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
