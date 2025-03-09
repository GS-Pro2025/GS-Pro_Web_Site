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
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-transparent">
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="flex items-center gap-6 bg-transparent px-6 py-4 rounded-xl"
        >
          <Avatar src={member.src} alt={member.name} />
          <div className="flex flex-col">
            <h3 className="text-lg md:text-2xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm md:text-lg text-gray-500">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Team