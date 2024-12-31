import NavMenu from "../components/NavMenu";
import Profile from "../components/Profile";

function LeftColumn() {
  return (
    <div className="w-2/12 h-screen p-4 flex flex-col">
      <NavMenu />
      <Profile />
    </div>
  );
}

export default LeftColumn;
