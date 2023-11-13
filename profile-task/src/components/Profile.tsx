import React from 'react';
import Image from 'next/image';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Profile = () => {
  return (
    <div className="relative flex flex-col items-start">
      {/* Cover Photo */}
      <div
        className="w-full h-40 bg-cover bg-center"
        style={{ backgroundImage: 'url("/cover-photo.jpg")' }}
      ></div>

      {/* Profile Section */}
      <div className="flex items-end ml-3 lg:ml-16">
        {/* Circular Profile Photo */}
        <div className="w-40 h-40 mr-4 rounded-full border-2 border-white overflow-hidden relative top-[-40px]">
          <Image
            height={100}
            width={100}
            className="w-full h-full object-cover"
            src="/profile-photo.jpeg"
            alt="Profile"
          />
        </div>

        {/* Name and Tags */}
        <div className="flex flex-col relative top-[-40px]">
          <div className="flex flex-row items-center justify-center">
            <Typography className="text-xl font-bold mb-2">John Doe</Typography>
            <IconButton>
              <DiamondOutlinedIcon className="bg-blue-700 text-white rounded-full p-1 h-8 w-8" />
            </IconButton>
            <IconButton>
              <DoneOutlinedIcon className="bg-green-500 rounded-full p-1 h-8 w-8" />
            </IconButton>
          </div>
          <div className="flex text-gray-400">
            <div className="flex flex-col items-center mr-3 lg:mr-5">
              <div className="border-2 border-gray-400 rounded-xl px-[10px] py-1 text-xl w-[80px] text-center">
                6482
              </div>
              <div className="text-sm">Followers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="border-2 border-gray-400 rounded-xl px-[10px] py-1 text-xl w-[80px] text-center">
                245
              </div>
              <div className="text-sm">Following</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="ml-3 lg:ml-16">
        <Typography variant="h6" component="div" fontWeight="">
          Co-founder & CEO at Terribly Tiny Tales
        </Typography>
        <div className="text-[#2de4ea] font-sarif">
          http://www.instagram.com/anujgosalia
        </div>
        <div>
          <IconButton>
            <StarBorderIcon className="bg-[#2de4ea] text-white rounded-full p-1 h-8 w-8" />
          </IconButton>
          <span className="mr-2">125</span>
          <IconButton>
            <ThumbUpOffAltIcon className="bg-[#edcc38] text-white rounded-full p-1 h-8 w-8" />
          </IconButton>
          <span className="mr-2">12</span>
          <IconButton>
            <VisibilityOutlinedIcon className="bg-gray-500 text-white rounded-full p-1 h-8 w-8" />
          </IconButton>
          <span className="mr-2">57.8K</span>
          <IconButton>
            <FavoriteBorderOutlinedIcon className="bg-red-800 text-white rounded-full p-1 h-8 w-8" />
          </IconButton>
          <span>26.0K</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
