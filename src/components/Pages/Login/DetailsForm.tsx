"use client";
import { useGlobalContext } from "@/app/GlobalContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const DetailsForm = () => {
  const { userDetails } = useGlobalContext();
  const [formData, setFormData] = useState(userDetails);
  const animatedComponents = makeAnimated();
  useEffect(() => {
    setFormData(userDetails);
  }, [userDetails]);

  const handleFormChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      ...{ [e.target.name]: e.target.value },
    }));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData); //todo
  };

  const onSkillsChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      ...{ skills: e },
    }));
    console.log("E value");

    console.log(e);
    console.log("Form");
    console.log(formData);
  };

  const options = [
    { value: "Chocolate", label: "Chocolate" },
    { value: "Strawberry", label: "Strawberry" },
    { value: "Vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <div className="flex items-center justify-center py-6">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="flex gap-4">
              <div className="mb-5 w-1/2 ">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  onChange={handleFormChange}
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  placeholder="your name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5 w-1/2">
                <label
                  htmlFor="username"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Username
                </label>
                {userDetails.loginMethod === "github" ? (
                  <input
                    onChange={handleFormChange}
                    type="text"
                    name="username"
                    id="username"
                    disabled={true}
                    value={formData.username || ""}
                    placeholder="username"
                    className="w-full cursor-not-allowed rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                ) : (
                  <input
                    onChange={handleFormChange}
                    type="text"
                    name="username"
                    id="username"
                    autoFocus={true}
                    value={formData.username || ""}
                    placeholder="username"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                )}
              </div>
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                disabled={true}
                value={formData.email || ""}
                placeholder="username@mail.com"
                className="w-full cursor-not-allowed rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="skills"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Skills
              </label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={options}
                name="skills"
                onChange={onSkillsChange}
                id="skills"
                value={formData.skills || ""}
                className="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="bio"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Bio/Tagline
              </label>
              <input
                onChange={handleFormChange}
                type="text"
                name="bio"
                id="bio"
                value={formData.bio || ""}
                placeholder="eg: HTML, CSS, Science, Maths, etc."
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="about"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                About
              </label>
              <textarea
                onChange={handleFormChange}
                rows={4}
                name="about"
                id="about"
                placeholder="Tell about yourself.."
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <Link
                href="/"
                className="hover:shadow-form hover:underline rounded-md  py-3 px-8 text-base font-semibold text-black outline-none"
              >
                Skip
              </Link>
              <button
                onClick={handleFormSubmit}
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-4 text-base font-semibold text-white outline-none"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default DetailsForm;
