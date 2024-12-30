import { menuItems } from "../data";
import NavMenuItem from "./NavMenuItem";

function NavMenu() {
  return (
    <div>
      <i className="fa-brands fa-twitter text-blue-400 fa-2xl mb-6"></i>
      <div>
        {menuItems.map((item, index) => (
          <NavMenuItem key={index} item={item} />
        ))}
      </div>
      <div className="bg-blue-400 rounded-full p-4 text-center text-white text-lg">
        Tweet
      </div>
    </div>
  );
}

export default NavMenu;
