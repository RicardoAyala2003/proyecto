import React from "react";
import { Button } from "antd";

const socialMediaData = [
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    color: "bg-gradient-to-r from-[#1877F2] to-[#08489C]",
    description: "Stay connected with friends and family on Facebook.",
    backgroundImage:
      "https://via.placeholder.com/150/1877F2/FFFFFF?text=Facebook",
  },
  {
    name: "Twitter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg",
    color: "bg-gradient-to-r from-[#1DA1F2] to-[#0D74AE]",
    description: "Follow the latest trends and updates on Twitter.",
    backgroundImage:
      "https://via.placeholder.com/150/1DA1F2/FFFFFF?text=Twitter",
  },
  {
    name: "Instagram",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
    color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
    description: "Share and explore stunning visuals on Instagram.",
    backgroundImage:
      "https://via.placeholder.com/150/833AB4/FFFFFF?text=Instagram",
  },
  {
    name: "LinkedIn",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    color: "bg-gradient-to-r from-[#0077B5] to-[#004182]",
    description: "Connect with professionals on LinkedIn.",
    backgroundImage:
      "https://via.placeholder.com/150/0077B5/FFFFFF?text=LinkedIn",
  },
];

const SocialMediaCards = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Sticky title and description */}
      <div className="md:w-1/3 sticky top-0 bg-red-500">
        <h1 className="text-2xl font-bold mb-4">Follow Us</h1>
        <p className="text-gray-600">
          Connect with us on our social media platforms to stay updated with the
          latest news and updates. Click "View" to visit our pages.
        </p>
      </div>

      {/* Social media cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {socialMediaData.map((social) => (
          <div
            key={social.name}
            className="flex flex-col items-center justify-between rounded-2xl shadow-lg border border-gray-300 p-4 bg-gray-100 h-full">
            <div className="w-full h-full rounded-xl bg-gray-200 p-4">
              <div
                className={`relative w-full h-40 ${social.color} rounded-xl flex items-center justify-center mb-4 overflow-hidden`}>
                <img
                  src={social.backgroundImage}
                  alt="Background"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-40"
                />
                <img
                  src={social.logo}
                  alt={`${social.name} logo`}
                  className="relative w-16 h-16"
                />
              </div>
              <p className="text-gray-700 text-center mb-4">
                {social.description}
              </p>
              <Button
                type="primary"
                className="bg-blue-800 hover:bg-blue-900 text-white w-full"
                size="large">
                View
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCards;
