import { useSelector } from "react-redux";
import PostItem from "./PostItem";

function Posts() {
  const posts = useSelector((store) => store.posts);
  const loading = useSelector((store) => store.loading);
  const error = useSelector((store) => store.error);

  if (loading) return <span className="loader"></span>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {posts.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Posts;
