import LeftColumn from "../layouts/LeftColumn";
import MainColumn from "../layouts/MainColumn";
import RightColumn from "../layouts/RightColumn";

function Feed() {
  return (
    <div className="flex w-10/12 mx-auto">
      <LeftColumn />
      <MainColumn />
      <RightColumn />
    </div>
  );
}

export default Feed;
