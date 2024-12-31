import PostItem from "./PostItem";
import { usePosts } from "../services/queries";

function Posts() {
  const { data: posts, error, isError, isPending } = usePosts();

  if (isPending) return <span className="loader"></span>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div>
      {posts.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Posts;
