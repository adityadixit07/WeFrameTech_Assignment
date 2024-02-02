// // import React from 'react';
// // import Image from 'next/image';
// // import advertise from '../assets/icons/advertise.png';
// // import Button from './Button';

// // const AdvertisementCard = ({ imageUrl, title, description }) => {
// //   return (
// //     <div className="h-400 rounded-md overflow-hidden shadow-md flex bg-white gap-10">
// //       <div className="flex items-center justify-center rounded-md">
// //         <Image width={400} height={400} src={advertise} alt="Advertise" className='rounded-md'  />
// //       </div>
// //       <div className="flex flex-col ">
// //         <h1 className="text-xl font-semibold">{title}</h1>
// //         <p className="text-gray-600">{description}</p>
// //         <Button />
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdvertisementCard;


// import React from 'react';
// import Image from 'next/image';
// import advertise from '../assets/icons/advertise.png';
// import Button from './Button';

// const AdvertisementCard = ({ title, description }) => {
//   return (
//     <div className="rounded-md overflow-hidden shadow-md flex bg-white gap-3 ">
//       <div className="flex items-center justify-center rounded-md ">
//         <Image height={500} src={advertise} alt="Advertise" className='rounded-md object-cover' />
//       </div>
//       <div className="flex flex-col my-4 mx-4" >
//         <h1 className="text-[15px] font-semibold text-black">{title}</h1>
//         <p className="text-gray-600 text-sm">{description}</p>
//         <Button />
//       </div>
//     </div>
//   );
// };

// export default AdvertisementCard;

import React from 'react';
import Image from 'next/image';
import advertise from '../assets/icons/advertise.png';
import Button from './Button';

const AdvertisementCard = ({ title, description }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-md flex bg-white gap-3 transform hover:scale-105 transition-transform duration-300">
      <div className="flex items-center justify-center rounded-md overflow-hidden w-1/2">
        <Image
          height={400}
          src={advertise}
          alt="Advertise"
          className='rounded-md object-contain'
        />
      </div>
      <div className="flex flex-col my-4 mx-4 w-1/2">
        <h1 className="text-[15px] font-semibold text-black">{title}</h1>
        <p className="text-gray-600 text-sm">{description}</p>
        <Button />
      </div>
    </div>
  );
};

export default AdvertisementCard;

