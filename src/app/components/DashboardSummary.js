import advertisement from '../assets/icons/advertisement.png';
import Group from '../assets/icons/Group.png';
import newspaper from '../assets/icons/newspaper.png';
import application from '../assets/icons/application.png';
import Image from 'next/image';

const DashboardSummary = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hello Admin,</h2>
      <p className="text-sm text-gray-500 mb-6">
        This is what we got you for today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard title="Articles" count="4,950 New Updates" imgUrl={application} />
        <SummaryCard title="Categories" count="10,275 New Updates" imgUrl={Group} />
        <SummaryCard title="Stories" count="4,193 New Updates" imgUrl={newspaper} />
        <SummaryCard title="Advertisements" count="928 New Updates" imgUrl={advertisement} />
      </div>
    </div>
  );
};

const SummaryCard = ({ title, count, imgUrl }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-md flex items-center flex-row gap-2">
      <div className="w-12 h-12 bg-[#E8E9FF] rounded-full flex items-center justify-center overflow-hidden">
        {/* <img src={imgUrl} alt={title} className="w-10 h-10 object-cover rounded-full" /> */}
        <Image
        src={imgUrl} 
        alt={title}
       className='w-6 h-6 object-cover rounded-full'
      />
      </div>
      <div className="text-center">
        <h3 className="text-sm font-semibold mb-1 text-gray-800">{title}</h3>
        <p className="text-xs text-gray-600">{count}</p>
      </div>
      
    </div>
  );
};

export default DashboardSummary;
