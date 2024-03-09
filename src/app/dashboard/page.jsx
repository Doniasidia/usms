import DoughnutChart from "../components/DoughnutChart";
import  React  from "react";
const Dashboard = () => {
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
       <div>
    
            <div className="flex items-center p-4"> {/* Select box for months */}
              <div className="mr-4"> {/* Margin right for spacing */}
                <p className="text-m text-gray-600 mb-2 text-lg font-semibold"> mois :</p> 
              </div>
              <br/>
              <br/>
              <div>
                <select className="border border-gray-300 bg-white text-gray-900 rounded-md px-2 py-1 w-40 border border-indigo-500/75 border-2">
                  <option value="january">Janvier</option>
                  <option value="february">Février</option>
                  <option value="march">Mars</option>
                  <option value="april">Avril</option>
                  <option value="may">Mai</option>
                  <option value="june">Juin</option>
                  <option value="july">Juillet</option>
                  <option value="august">Août</option>
                  <option value="september">Septembre</option>
                  <option value="october">Octobre</option>
                  <option value="november">Novembre</option>
                  <option value="december">Décembre</option>
                  {/* Add more options for other months */}
                </select>
              </div>
            </div>
    
            <div className="flex flex-grow p-4 pl-16 "> {/* Main content area */}
              <div className="grid grid-cols-2 gap-8"> {/* Grid for charts */}
                <div className="bg-white p-4 rounded-md shadow-lg h-80">
                <h3 className="text-lg font-semibold mb-4">
                <span className="text-zinc-500">Client</span> <br/>
                <span className="text-blue-950 text-4xl">200</span> <br/>
                <span className="text-slate-600">nombre total des clients</span>
                </h3>
                  <div className="border-t border-gray-800 p-3 "></div>
                  <div className="h-40">
                  <DoughnutChart chartData={clientData} />
                  </div>
                </div>
                <div className="bg-white p-4 rounded-md h-80 shadow-lg pl-16">
                <h3 className="text-lg font-semibold mb-4 ">
                <span className="text-zinc-500">abonnement</span> <br/>
                <span className="text-blue-950 text-4xl">600</span> <br/>
                <span className="text-slate-600">nombre total d'abonnements</span>
                </h3>
                  <div className="border-t border-gray-800 p-3 "></div>
                  <div className="h-40">
                  <DoughnutChart chartData={totalData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      );
    }
    
export default Dashboard



