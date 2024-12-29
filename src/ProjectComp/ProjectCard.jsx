import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from "../CommonComp/Button";

const ProjectCard = ({ title, description, image, project_links }) => {
  const btnColor = "bg-gradient-to-r from-[#5500FF] to-[#3a0f91] w-fit flex justify-start rounded text-white"
  return (
    <div className="group relative bg-gray-100 dark:bg-[#212126] rounded-tl-[40px] rounded-br-[40px] overflow-hidden">
      <div className="flex flex-col h-full">
        <NavLink to={project_links} target='_blank' className="flex-grow">
          <img
            src={image}
            alt={title}
            className="h-48 rounded-tl-[40px]"
          />
        </NavLink>
        <div className="flex gap-3 flex-col text-slate-700 dark:text-white p-3">
          <p className='font-semibold text-lg text-gray-800 dark:text-[#f3f4f6]'>{title}</p>
          <p className='text-[#94A3B8]'>{description}</p>
          <NavLink to={project_links} target='_blank'>
            <Button FillAnyColor={btnColor} label="Live Preview"/>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
