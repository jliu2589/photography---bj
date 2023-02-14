import a from "../../photos/1.jpg";
import Image from "next/image";
import { useState } from "react";

function Hero() {
  return (
    <div className="mb-5 pb-5">
      <div className=" relative">
        <Image src={a} alt="photo" height={500} width={500} />
        <p className=" my-5 py-2 text-center text-2xl font-bold">
          GTA Wedding & Event photography
        </p>
      </div>
    </div>
  );
}
export default Hero;

export async function getStaticProps(context) {
  const res = await fetch(
    `curl https://${CLOUDINARY_API_KEY}:${CLOUDINARY_API_SECRET}@api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/resources/image`
  );

  return { data: results };
}
