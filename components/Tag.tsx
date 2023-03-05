import React from "react";

interface TagProps {
  label: string;
  key: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <span key={label} className="
      inline-block
       bg-slate-200
      rounded-full 
      px-3 
      py-0.5 
      text-sm
      text-gray-700 
      mr-2 
      mb-2">
      {label}
    </span>
  );
};

export default Tag;
