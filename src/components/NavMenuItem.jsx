/* eslint-disable react/prop-types */
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function NavMenuItem(props) {
  const { item } = props;
  return (
    <div className="flex my-4 text-2xl items-center hover:text-blue-400">
      <div className="text-center p-2 w-10">
        <i className={item.class}></i>
      </div>
      <Link className="ml-4" to={item.url}>
        {item.name}
      </Link>
    </div>
  );
}

export default NavMenuItem;
