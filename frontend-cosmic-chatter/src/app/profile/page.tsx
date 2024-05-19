import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('../../images/profile.png')`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="flex items-center content-center justify-center">
          <div className="flex flex-col mt-32 w-1/4 rounded-xl h-40 w-30 bg-slate-900 bg-opacity-65 text-slate-700 shadow-md shadow-slate-200/50">
            <h4 className="flex justify-center bg-slate-200 bg-opacity-45 shadow-xl h-max w-full p-2 text-xl text-slate-800 rounded-t-xl">
              PROFILE
            </h4>
            <div className="flex justify-start my-3">
              <Image
                className=" m-3  h-10 w-10 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="avatar image"
              ></Image>
              <div className="mx-2">
                <h4 className="my-2 text-md font-thin text-slate-100">Name:</h4>
                <h4 className="flex my-2 text-sm font-thin text-slate-100">
                  COSMIC DETECTIVE LVL 2
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <div className="flex flex-col justify-center mt-4 w-1/4 rounded-xl h-80 w-30 bg-slate-900 bg-opacity-65 text-slate-700 shadow-md shadow-slate-200/50">
            <h4 className="my-2 flex justify-center text-md font-thin text-slate-100">
              Progress
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
