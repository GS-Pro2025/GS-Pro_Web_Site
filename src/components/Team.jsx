import React from 'react'
import Avatar from './Avatar'
import logo from '../assets/logo.jpg'
const teamMembers = [
  { id: 1, name: 'Juan Pérez', role: 'CEO', src: logo},
  { id: 2, name: 'Ana Gómez', role: 'CTO', src: logo  },
  { id: 3, name: 'Carlos López', role: 'Diseñador', src: logo },
];
  
const Team = () => {
  return (
    <>
      <h2 className="mt-25 sm:mt-30  md:mt-35 text-xl sm:text-2xl md:text-3xl text-center justify-center text-[#0458AB] font-['Libre_Baskerville'] ">TEAM GS-PRO</h2>
      <div className="flex flex-wrap justify-center gap-8 p-6 bg-transparent">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-6 bg-transparent px-6 py-4 rounded-xl"
            style={{ animation: "fadeIn 0.8s ease-in-out" }}
          >
            <Avatar src={member.src} alt={member.name} />
            <div className="flex flex-col">
              <h3 className="text-lg md:text-2xl font-bold text-[#0458AB]">{member.name}</h3>
              <p className="text-sm md:text-lg text-[#0458AB]">{member.role}</p>
            </div>
          </div>
        ))}
        <style>
          {`
            @keyframes fadeIn {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
          `}
        </style>
      </div>  
    </>
  );
};

export default Team