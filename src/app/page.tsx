// page.tsx
import React from "react";
import DoughnutChart from "./components/DoughnutChart";

export default function Home() {
  const clientData = {
    labels: ["Nouveaux", "Anciens"],
    datasets: [
      {
        label: "Info",
        data: [55, 45],
        backgroundColor: ["rgb(54, 162, 235, 0.2)", "rgb(153, 102, 255, 0.2)"],
        borderColor: ["rgb(54, 162, 235)", "rgb(153, 102, 255)"],
        borderWidth: 1,
      },
    ],
  };

  const totalData = {
    labels: ["Actifs", "Inactifs"],
    datasets: [
      {
        label: "Info",
        data: [70, 30],
        backgroundColor: ["rgb(54, 162, 235, 0.2)", "rgb(153, 102, 255, 0.2)"],
        borderColor: ["rgb(54, 162, 235)", "rgb(153, 102, 255)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-200"> {/* Main container */}
      <div className="sidebar bg-white w-64 text-white shadow-lg"> {/* Sidebar container */}
        <div className="flex flex-col h-full justify-between"> {/* Sidebar content */}
          <div> {/* Navigation links */}
            <div className="flex items-center justify-center py-4">
            <span className="text-2xl font-bold text-blue-900">USMS</span>
            </div>
            <div className="border-t border-cyan-400"></div>
            <div className="flex flex-col space-y-2 px-4">
              <a href="#" className="hover:bg-sky-500 hover:text-white py-2 px-4 rounded transition-colors duration-300 bg-white text-gray-600">Tableau de bord</a>
              <a href="#" className="hover:bg-sky-500 hover:text-white py-2 px-4 rounded transition-colors duration-300 bg-white text-gray-600">Clients</a>
              <a href="#" className="hover:bg-sky-500 hover:text-white py-2 px-4 rounded transition-colors duration-300 bg-white text-gray-600">Abonnements</a>
              <a href="#" className="hover:bg-sky-500 hover:text-white py-2 px-4 rounded transition-colors duration-300 bg-white text-gray-600">Paramètres</a>
            </div>
          </div>
          <div className="border-t border-cyan-400 "></div>
          <div className="flex justify-center items-center mb-4"> {/* Centered Logout button */}
            <a href="#" className="hover:bg-sky-500 hover:text-white py-2 px-4 rounded transition-colors duration-300 bg-white text-gray-600 border border-gray-400"> Déconnexion</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-grow ml-auto"> {/* Content and sidebar container */}
      <div className="bg-white flex items-center justify-between px-4 py-2 text-gray-800 h-16"> {/* Top bar */}
  <div className="flex items-center space-x-4 ml-auto"> {/* User image and name */}
    {/* Move the user name and image to the right */}
    <div className="ml-auto flex items-center space-x-2"> {/* Use ml-auto to push content to the right */}
      {/* Placeholder image */}
      <div className="h-10 w-10 rounded-full bg-gray-300"></div>
      {/* User name */}
      <p className="font-medium">Nom d'utilisateur</p> {/* Replace with the user's name */}
    </div>
  </div>
  {/* Add any additional top bar content here */}
</div>

        <div className="flex items-center justify-center p-4"> {/* Select box for months */}
          <select className="border border-gray-300 bg-white text-gray-900 rounded-md px-2 py-1">
            <option value="january">Janvier</option>
            <option value="february">Février</option>
            <option value="march">Mars</option>
          
              <option value="march">Avril</option>
              <option value="march">Mai</option>
              <option value="march">Juin</option>
              <option value="march">Juillet</option>
              <option value="march">Aoùt</option>
              <option value="march">Septembre</option>
              <option value="march">Octobre</option>
              <option value="march">Novembre</option>
              <option value="march">Décembre</option>
            {/* Add more options for other months */}
          </select>
        </div>

        <div className="flex flex-grow p-8"> {/* Main content area */}
          <div className="grid grid-cols-2 gap-8"> {/* Grid for charts */}
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-4">Client <br/>
              200 <br/>
              nombre total des clients</h3>
              <DoughnutChart chartData={clientData} />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold mb-4">Abonnement <br/>
              600 <br/>
              nombre total d'abonements</h3>
              <DoughnutChart chartData={totalData} />
            </div>
          </div>
        </div>
      

      </div>
    </div>
  );
}