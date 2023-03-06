import { useField } from "formik";
import React from "react";

const RadioFormik = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex items-center gap-x-3">
      <label className="w-5 h-5 cursor-pointer custom-radio ">
        <input
          {...field}
          type="radio"
          {...props}
          className="hidden"
          checked={props.checked}
        />
        <div className="bg-white w-full h-full rounded-full"></div>
      </label>
      <span>{props.label}</span>
    </div>
  );
};

export default RadioFormik;
