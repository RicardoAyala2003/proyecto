import React, { useState } from "react";
import { Modal } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const VideoCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="flex justify-center items-center">
      <div className="w-full lg:max-w-6xl bg-blue-700 bg-opacity-30 rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row h-[500px] px-1 sm:px-16">
        {/* Video Section */}
        <div
          className="relative w-full lg:w-2/3 h-full cursor-pointer"
          onClick={handleOpenModal}>
          <video
            className="w-full h-full object-cover rounded-2xl"
            src="/Resources/Gallery/videoMultimedia.mp4"
            muted
            loop
            autoPlay
          />
          {/* Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayCircleOutlined className="text-white text-6xl md:text-7xl lg:text-8xl opacity-30 hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Right Side Section */}
        <div className="flex flex-col w-full lg:w-1/3 h-auto p-4">
          {/* Description Section */}
          <div className="bg-white  rounded-2xl p-6 shadow-md mb-4 flex-grow">
            <p className="text-gray-800 text-lg md:text-xl font-semibold text-center">
              Pastores Marvin Yovani y Jovita Delcid siendo habilitados para
              desarrollar ministerio pastoral en el estado de Missouri.
            </p>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block flex-grow">
            <img
              className="w-full h-full object-cover rounded-2xl shadow-md"
              src="/Resources/Gallery/img (4).jpeg"
              alt="Multimedia"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        centered
        width="100%"
        bodyStyle={{ padding: 10 }}>
        <video
          className="w-full h-full rounded-2xl"
          src="/Resources/Gallery/videoMultimedia.mp4"
          controls
          autoPlay
        />
      </Modal>
    </div>
  );
};

export default VideoCard;
