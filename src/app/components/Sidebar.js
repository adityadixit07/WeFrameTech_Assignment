// // components/Sidebar.js

// import { FiHome, FiSettings, FiUsers, FiMail, FiBell, FiHelpCircle, FiLogOut } from 'react-icons/fi';
// import MainContent from './MainContent';

// const Sidebar = () => {
//   const links = [
//     { text: 'DashBoard', icon: <FiHome size={20} />, href: '#' },
//     { text: 'Content', icon: <FiSettings size={20} />, href: '#' },
//     { text: 'Team', icon: <FiUsers size={20} />, href: '#' },
//     { text: 'User', icon: <FiMail size={20} />, href: '#' },
//     { text: 'App/Web', icon: <FiBell size={20} />, href: '#' },
//     { text: 'Analytics', icon: <FiHelpCircle size={20} />, href: '#' },
//     { text: 'Media', icon: <FiLogOut size={20} />, href: '#' },
//     { text: 'Notifications', icon: <FiLogOut size={20} />, href: '#' },
//     { text: 'Settings', icon: <FiLogOut size={20} />, href: '#' },
//     { text: 'Customer Support', icon: <FiHelpCircle size={20} />, href: '#' },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100 text-white">
//       <div className="w-16 md:w-64 p-4 bg-gray-900">
//         <div className="flex flex-col space-y-4 mt-[1rem] ">
//           {links.map((link, index) => ( 
//             <a key={index} href={link.href} className="flex flex-row gap-4 items-center group duration-300 ease-in-out hover:bg-purple-600 hover:border-purple-700 hover:rounded-md p-2">
//               {link.icon}
//               <span className="text-xs mt-1 group-hover:text-gray-300">{link.text}</span>
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="flex-1 p-8">
//         <MainContent/>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




// components/Sidebar.js

import { FiHome, FiSettings, FiUsers, FiMail, FiBell, FiHelpCircle, FiLogOut } from 'react-icons/fi';
import MainContent from './MainContent';

const Sidebar = () => {
  const links = [
    { text: 'DashBoard', icon: <FiHome size={20} />, href: '#' },
    { text: 'Content', icon: <FiSettings size={20} />, href: '#' },
    { text: 'Team', icon: <FiUsers size={20} />, href: '#' },
    { text: 'User', icon: <FiMail size={20} />, href: '#' },
    { text: 'App/Web', icon: <FiBell size={20} />, href: '#' },
    { text: 'Analytics', icon: <FiHelpCircle size={20} />, href: '#' },
    { text: 'Media', icon: <FiLogOut size={20} />, href: '#' },
    { text: 'Notifications', icon: <FiLogOut size={20} />, href: '#' },
    { text: 'Settings', icon: <FiLogOut size={20} />, href: '#' },
    { text: 'Customer Support', icon: <FiHelpCircle size={20} />, href: '#' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 text-white">
      {/* Fixed Sidebar */}
      <div className="w-16 md:w-64 p-4 bg-gray-900 fixed h-full overflow-y-auto">
        <div className="flex flex-col space-y-4 mt-[1rem]">
          {links.map((link, index) => ( 
            <a key={index} href={link.href} className="flex flex-row gap-4 items-center group duration-300 ease-in-out hover:bg-purple-600 hover:border-purple-700 hover:rounded-md p-2">
              {link.icon}
              <span className="text-xs mt-1 group-hover:text-gray-300">{link.text}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Scrollable Main Content */}
      <div className="flex-1 p-8 ml-64 overflow-y-auto">
        <MainContent />
      </div>
    </div>
  );
};

export default Sidebar;
