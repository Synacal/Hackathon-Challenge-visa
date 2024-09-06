'use client';
import { useState, useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon, SearchIcon } from '@heroicons/react/outline';
import axios from 'axios';

const Applications = () => {
  // Dummy data for visa applications
  const [applications, setApplications] = useState([
    { id: 1, fullName: 'solide manley', firstName: 'solide', lastName: 'manley', nationality: 'United States', sex: 'M', riskStatus: null, status: 'Pending' },
    { id: 2, fullName: 'Jane Smith', firstName: 'Jane', lastName: 'Smith', nationality: 'Canada', sex: 'F', riskStatus: null, status: 'Pending' },
    { id: 3, fullName: 'David Johnson', firstName: 'David', lastName: 'Johnson', nationality: 'Australia', sex: 'M', riskStatus: null, status: 'Approved' },
    { id: 4, fullName: 'Emily Davis', firstName: 'Emily', lastName: 'Davis', nationality: 'United Kingdom', sex: 'F', riskStatus: null, status: 'Denied' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  // Fetch risk status for all applications only once when component mounts
  useEffect(() => {
    const fetchRiskStatus = async () => {
      try {
        const updatedApplications = await Promise.all(
          applications.map(async (app) => {
            const params = {
              forename: app.lastName,    
              name: app.firstName,       
              ageMin: 18,               
              ageMax: 120,               
              sexId: app.sex === 'M' ? 'M' : 'F',  
              page: 1,                   
              resultPerPage: 200         
            };

            console.log(`Params for ${app.fullName}:`, params);

            try {
              const response = await axios.get('https://ws-public.interpol.int/notices/v1/red', {
                params,
              });
              console.log(`Response for ${app.fullName}:`, response.data);

              // If the response has a total of 1, mark as high risk
              return {
                ...app,
                riskStatus: response.data.total === 1 ? 'High Risk' : 'Safe'
              };
            } catch (error) {
              console.error(`Error checking Interpol data for ${app.fullName}:`, error);
              return { ...app, riskStatus: 'Error' }; 
            }
          })
        );

        
        setApplications(updatedApplications);
      } catch (error) {
        console.error('Error fetching risk status for applications:', error);
      }
    };

    fetchRiskStatus();
  }, []); 


  const filteredApps = applications.filter((app) =>
    app.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleApprove = (id) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: 'Approved' } : app));
  };

  const handleDeny = (id) => {
    setApplications(applications.map(app => app.id === id ? { ...app, status: 'Denied' } : app));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-700">Visa Applications</h2>
        <div className="relative">
          <input
            type="text"
            className="w-full p-3 pl-10 bg-white rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
        </div>
      </div>


      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Nationality</th>
              <th className="py-3 px-6 text-center">Risk Status</th>
              <th className="py-3 px-6 text-center">Current Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm">
            {filteredApps.length > 0 ? (
              filteredApps.map((app) => (
                <tr key={app.id} className="border-b border-gray-200 hover:bg-gray-100 transition-all">
                  <td className="py-4 px-6 text-left font-medium">{app.fullName}</td>
                  <td className="py-4 px-6 text-left">{app.nationality}</td>
                  <td className={`py-4 px-6 text-center ${app.riskStatus === 'High Risk' ? 'text-red-500' : 'text-green-500'}`}>
                    {app.riskStatus === null ? 'Checking...' : app.riskStatus}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className={`px-4 py-1 rounded-full text-white ${app.status === 'Pending' ? 'bg-yellow-500' : app.status === 'Approved' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    {app.status === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleApprove(app.id)}
                          className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-600 transition-all"
                        >
                          <CheckCircleIcon className="w-5 h-5 inline-block mr-1" /> Approve
                        </button>
                        <button
                          onClick={() => handleDeny(app.id)}
                          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all"
                        >
                          <XCircleIcon className="w-5 h-5 inline-block mr-1" /> Deny
                        </button>
                      </>
                    )}
                    {app.status !== 'Pending' && (
                      <span className="text-gray-500">{app.status}</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-6 text-center text-gray-500">
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;
