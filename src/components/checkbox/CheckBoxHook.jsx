import React from "react";
import { useController } from "react-hook-form";

const CheckBoxHook = ({ control, text, ...props }) => {
  const { field } = useController({
    control: control,
    name: props.name,
  });
  return (
    <label className="cursor-pointer custom-checkbox ">
      <input
        type="checkbox"
        {...field}
        value={props.value}
        id={props.name}
        className="hidden"
        checked={field.value}
      />
      <div className="flex items-center gap-x-3">
        <div className="bg-white w-full h-full rounded-md flex items-center justify-center transition-all custom-checkbox-square ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-3 h-3 hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </div>
        <label htmlFor={props.name} className="text-sm cursor-pointer">
          {text}
        </label>
      </div>
    </label>
  );
};

export default CheckBoxHook;
