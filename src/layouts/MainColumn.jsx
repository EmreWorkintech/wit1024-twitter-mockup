import Posts from "../components/Posts";

function MainColumn() {
  return (
    <div className="w-8/12 border-l-2 border-r-2 border-gray-200 py-4">
      <Posts />
    </div>
  );
}

export default MainColumn;
