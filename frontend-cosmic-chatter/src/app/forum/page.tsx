import React from "react";

const page = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('../../images/forum.png')`,
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className='flex justify-center w-full '
      >
        <div className='flex mt-32'>Chatter</div>
      </div>
    </>
  );
};

export default page;
