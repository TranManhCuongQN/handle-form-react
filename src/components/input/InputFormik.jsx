import { useField } from "formik";
import React from "react";

// Để register cái custom components này vào bên trong formik ta sử dụng 1 cái hook useField
const InputFormik = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-3 mb-5">
      <label htmlFor={props.id} className="cursor-pointer">
        {label}
      </label>
      <input
        className="p-4 border border-gray-100 rounded-lg bg-white outline-none  transition-all focus:border-blue-500"
        {...field}
        {...props}
      ></input>
      {meta.touched && meta.error && (
        <p className="text-sm text-red-500">{meta.error}</p>
      )}
    </div>
  );
};

export default InputFormik;
