import { Button } from "./";

import { useAuth } from "../contexts/AuthContext";

const UserBox = () => {
  const { userData, dispatch } = useAuth();

  const handleLogout = () => {
    dispatch({ type: "auth/logout" });
  };

  return (
    <div className="bg-gray-700 gap-4 text-white flex items-center rounded-[7px] py-2.5 px-3.5">
      <img
        className="h-10 w-10 rounded-full"
        src={userData?.avatarUrl}
        alt={`avatar of ${userData?.firstName}`}
      />
      <span className="font-bold text-base">Welcome, {userData?.firstName}!</span>
      <Button onClick={handleLogout} buttonType="tertiary">
        Logout
      </Button>
    </div>
  );
};

export default UserBox;
