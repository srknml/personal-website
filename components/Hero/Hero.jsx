import React from "react";
import Image from "next/image";
import myImage from "../../public/image.jpg";

// how to use static image in nextjs
// https://nextjs.org/docs/basic-features/image-optimization

const Hero = () => {
  return (
    <section className="flex-col align-middle w-2/3 m-auto p-2 space-x-4 border-red-500 border-2  ">
      <div className="flex flex-row  m-auto p-2 justify-center align-middle space-x-4">
        <div className="w-1/3">
          <Image
            className="border-rad"
            objectFit="contain"
            src={myImage}
            alt="image"
          />
        </div>

        <article className="w-2/3 border-l-slate-200 h-full border-l-2 p-2  flex flex-col items-start ">
          <h1 className="text-4xl font-bold">Hero Title</h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quibusdam
            accusantium quas quidem nemo voluptatum. Quisquam, quae. Quisquam
            voluptate, quod, quia, voluptates quae voluptatibus quibusdam
            accusantium quas quidem nemo voluptatum. Quisquam, quae.
          </p>
        </article>
      </div>
      {/* When hovering border makes container move @TODO */}
      <div className="flex flex-row justify-center p-2 w-full m-auto  ">
        <button className=" w-1/4 hover:border-[#e69417] hover:border-2 hover:text-white text-[#e69417] font-bold m-1 py-2 px-5 rounded-xl">
          Button
        </button>
        <button className=" w-1/4 hover:border-[#e69417] hover:border-2 hover:text-white text-[#e69417] font-bold m-1 py-2 px-5 rounded-xl">
          Button
        </button>
      </div>
    </section>
  );
};

export default Hero;
