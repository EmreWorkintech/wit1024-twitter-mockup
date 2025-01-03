import { useEffect } from "react";
import LeftColumn from "../layouts/LeftColumn";
import MainColumn from "../layouts/MainColumn";
import RightColumn from "../layouts/RightColumn";
import { useDispatch } from "react-redux";
import { getPosts } from "../store/actions/userActions";

function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="flex w-10/12 mx-auto">
      <LeftColumn />
      <MainColumn />
      <RightColumn />
    </div>
  );
}

export default Feed;
