"use client";
import { useState } from "react";
const page = () => {
  const userDetail = {
    name: "John Doe",
    email: "",
  };
  const [formData, setFormData] = useState(userDetail);

  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                placeholder="your name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
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
                value={formData.email || ""}
                placeholder="username@mail.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Skills
              </label>
              <input
                type="text"
                name="skills"
                id="skills"
                value={formData.skills || ""}
                placeholder="eg: HTML, CSS, Science, Maths, etc."
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                About
              </label>
              <textarea
                rows={4}
                name="message"
                id="message"
                placeholder="Tell about yourself.."
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button className="hover:shadow-form rounded-md  py-3 px-8 text-base font-semibold text-black outline-none">
                Skip
              </button>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-4 text-base font-semibold text-white outline-none">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
