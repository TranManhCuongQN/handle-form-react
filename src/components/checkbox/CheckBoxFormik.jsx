import { useField } from "formik";
import React from "react";

const CheckBoxFormik = ({ text, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3">
      <label className="cursor-pointer custom-checkbox">
        <input
          type="checkbox"
          {...field}
          {...props}
          className="hidden"
          checked={field.value}
          id={props.name}
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
      {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default CheckBoxFormik;
