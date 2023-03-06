import React from "react";
import { useForm } from "react-hook-form";
import CheckBoxHook from "../checkbox/CheckBoxHook";
import DropDownHook from "../dropdown/DropDownHook";
import InputHook from "../input/inputHook";
import RadioHook from "../radio/RadioHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const dropdownData = [
  {
    id: 1,
    value: "teacher",
    text: "Teacher",
  },
  {
    id: 2,
    value: "developer",
    text: "Developer",
  },
  {
    id: 3,
    value: "doctor",
    text: "Doctor",
  },
  {
    id: 4,
    value: "contructor",
    text: "Contructor",
  },
];

const schema = yup
  .object({
    username: yup.string().required("Please enter your username"),
    email: yup
      .string()
      .email("Please enter valid email address")
      .required("Please enter your email address"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(8, "Your password must be at least 8 characters or greater")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
        }
      ),
    gender: yup
      .string()
      .required("Please select your gender")
      .oneOf(["male", "female"], "You can only select male or female"),
    job: yup
      .string()
      .required("Please select your job")
      .oneOf(["teacher", "developer", "doctor", "contructor"]),
    term: yup.boolean().required("Please accept the terms and conditions"),
  })
  .required();

const RegisterHook = () => {
  const {
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    control,
    setValue,
    getValues,
    reset,
    watch,
  } = useForm({
    defaultValues: {
      job: "",
      gender: "male",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmitHandler = (values) => {
    // Nếu form còn lỗi thì dừng chương trình
    if (!isValid) return;
    console.log(values);
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        console.log(values);
        reset({
          username: "",
          password: "",
          email: "",
          gender: "male",
          job: "",
          term: false,
        });
      }, 5000);
    });
  };

  const watchGender = watch("gender");

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="max-w-[300px] mx-auto my-10"
      autoComplete="off"
    >
      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="username" className="cursor-pointer">
          Username
        </label>
        <InputHook
          type="text"
          name="username"
          placeholder="Enter your username"
          id="username"
          control={control}
        ></InputHook>
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="email" className="cursor-pointer">
          Email Address
        </label>
        <InputHook
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
          control={control}
        ></InputHook>
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label htmlFor="password" className="cursor-pointer">
          Password
        </label>
        <InputHook
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
          control={control}
        ></InputHook>
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Gender</label>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="male"
              checked={watchGender === "male"}
            />
            <span>Male</span>
          </div>

          <div className="flex items-center gap-x-3">
            <RadioHook
              control={control}
              name="gender"
              value="female"
              checked={watchGender === "female"}
            />
            <span>Female</span>
          </div>
        </div>
      </div>
      {errors.gender && (
        <p className="text-red-500 text-sm">{errors.gender.message}</p>
      )}

      <div className="flex flex-col gap-3 mb-5">
        <label className="cursor-pointer">Are you</label>
        <DropDownHook
          control={control}
          setValue={setValue}
          name="job"
          data={dropdownData}
          dropdownLabel="Select your job"
        />
      </div>
      {errors.job && (
        <p className="text-red-500 text-sm">{errors.job.message}</p>
      )}

      <div className="flex flex-col  gap-3">
        <CheckBoxHook
          control={control}
          text="I accept the terms and conditions"
          name="term"
        />
      </div>
      {errors.term && (
        <p className="text-red-500 text-sm">{errors.term.message}</p>
      )}

      <button
        className={`w-full p-5 bg-blue-500 text-white rounded-lg mt-5 font-semibold ${
          isSubmitting ? "opacity-50" : ""
        }`}
        disabled={isSubmitting}
      >
        {/* Khi nó đang submit thì hiện cái animate nếu chưa submit thì hiện chữ submit */}
        {isSubmitting ? (
          <div className="w-5 h-5 rounded-full border-2 border-white border-t-2 border-t-transparent mx-auto animate-spin"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default RegisterHook;
