import React from "react";
import "./styles.css";

import MasonryGallery from "../../components/MasonryGallery/MasonryGallery";

const HomePage = () => {
  const images = [
    {
      src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2Fjake%20mago.jpg825a0c9a-7ac4-41e5-9987-d77f1a513a95?alt=media&token=a21ce907-6ad1-4ed5-8f33-c485929d1b09",
      alt: "Image 1",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2Fdownload%20(26).jpg151f2922-e9dd-41b6-8cbf-bcc66e45d941?alt=media&token=66e83cbe-4d56-4d74-9e14-d6469f5b5f1a",

      alt: "Image 2",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2F2096210.jpg00ed0e79-a541-40af-aa4a-6ff6eafc2602?alt=media&token=ddeb49f1-0832-47ba-b990-e4751bf9ad3d",

      alt: "Image 3",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2F2096210.jpg00ed0e79-a541-40af-aa4a-6ff6eafc2602?alt=media&token=ddeb49f1-0832-47ba-b990-e4751bf9ad3d",

      alt: "Image 4",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2Fgiphy.webpde69c5c3-918c-4b27-8bae-a984f6564b0c?alt=media&token=a82f5f45-644b-43ae-9d27-7cd190ad9f0e",
      alt: "Image 5",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2Fjake%20mago.jpg825a0c9a-7ac4-41e5-9987-d77f1a513a95?alt=media&token=a21ce907-6ad1-4ed5-8f33-c485929d1b09",
      alt: "Image 6",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2FIcelandicEel.jpg92f9ea4d-e9fa-4ad4-a675-717401fd27fb?alt=media&token=0a4dadf1-c4b7-4959-a02a-8052ee0e45e3",

      alt: "Image 7",
    },
    {
      src: "https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2Fjake%20mago.jpg825a0c9a-7ac4-41e5-9987-d77f1a513a95?alt=media&token=a21ce907-6ad1-4ed5-8f33-c485929d1b09",
      alt: "Image 8",
    },

    // Agrega más URLs de imágenes
  ];
  return (
    <div>
      <a
        href="#"
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="https://firebasestorage.googleapis.com/v0/b/firedarkpage.appspot.com/o/images%2Fjake%20mago.jpg825a0c9a-7ac4-41e5-9987-d77f1a513a95?alt=media&token=a21ce907-6ad1-4ed5-8f33-c485929d1b09"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>
    </div>
  );
};

{
  /* <div className="container">





<h1 className="text-4xl font-bold text-center mb-8">
  Galería de Imágenes
</h1>
<MasonryGallery images={images} />
</div> */
}

export default HomePage;
