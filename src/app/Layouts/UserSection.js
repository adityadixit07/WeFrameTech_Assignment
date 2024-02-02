import { FiUser, FiChevronDown } from "react-icons/fi";

const UserSection = () => {
  return (
    <div className="flex items-center">
      {/* Avatar on the left */}
      <div className="flex items-center">
        <FiUser className="text-gray-300 mr-2" />
      </div>

      {/* Welcome Back, Name, and Dropdown on the right */}
      <div className="flex flex-col text-right">
        <span className="text-xs text-black">Welcome Back</span>
        <div className="flex items-center text-black text-xs font-semibold cursor-pointer">
          Aditya Dixit <FiChevronDown className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default UserSection;
