import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { formatDistanceToNow } from "date-fns";
import { tr } from "date-fns/locale";

function Profile() {
  const { user, logOutUser } = useContext(UserContext);

  const lastLogInDate =
    user &&
    formatDistanceToNow(user.createdAt, {
      addSuffix: true,
      locale: tr,
    });

  if (!user) {
    return <div></div>;
  }

  return (
    <div>
      <div className="flex my-4 font-bold gap-2 items-start">
        <img className="rounded-full w-12" src="https://picsum.photos/100" />
        <div>
          <p>{user.email}</p>
          <p
            className="text-slate-400 cursor-pointer"
            onClick={() => logOutUser()}
          >
            Log out
          </p>
        </div>
      </div>
      <p>Last log in: {lastLogInDate}</p>
    </div>
  );
}

export default Profile;
