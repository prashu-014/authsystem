
import Sidebar from "../componets/Sidebar";
import DashboardMenu from "../componets/DashboardMenu";

const Dashboard = () => {
  return (
    <main className="bg-amber-400 h-screen grid grid-cols-5">
      <Sidebar /> 
      <DashboardMenu />
    </main>
  );
};

export default Dashboard;
