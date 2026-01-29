import Link from "next/link";


const DashboardSidebar = () => {
  return (
    <div className="w-[200px] bg-purple-600/20 h-screen px-3 py-4 fixed top-0 left-0">
      <h2>Reco Ai</h2>
      <div className="flex flex-col gap-2 mt-7">
        <Link href={`/dashboard/profile`}>Profile</Link>
        <Link href={`/dashboard/my-booking`}>My Booking</Link>
      </div>

    </div>
  );
};

export default DashboardSidebar;
