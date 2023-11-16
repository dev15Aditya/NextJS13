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

const Profile = (props: {
  name: string;
  instaHandle: string;
  profilePic: string;
  coverPic: string;
  followers: number;
  following: number;
  title: string;
  star: number;
  liked: number;
  views: string;
  loved: string;
}) => {
  return (
    <div className="relative flex flex-col items-start">
      {/* Cover Photo */}
      <div
        className="w-full h-40 bg-cover bg-center"
        style={{ backgroundImage: `url(${props.coverPic})` }}
      ></div>

      {/* Profile Section */}
      <div className="flex items-end ml-3 lg:ml-16">
        {/* Circular Profile Photo */}
        <div className="w-30 h-30 lg:w-40 lg:h-40 mr-4 rounded-full border-2 border-white overflow-hidden relative top-[-30px]">
          <Image
            height={100}
            width={100}
            className="w-full h-full object-cover"
            src={props.profilePic}
            alt="Profile"
          />
        </div>

        {/* Name and Tags */}
        <div className="flex flex-col relative top-[-30px]">
          <div className="flex flex-row items-center justify-center">
            <Typography className="text-[18px] font-bold">
              {props.name}
            </Typography>
            <IconButton>
              <DiamondOutlinedIcon className="bg-blue-700 text-white rounded-full p-1 h-6 w-6" />
            </IconButton>
            <IconButton>
              <DoneOutlinedIcon className="bg-green-500 rounded-full p-1 h-6 w-6" />
            </IconButton>
          </div>
          <div className="flex text-gray-400">
            <div className="flex flex-col items-center mr-3 lg:mr-5">
              <div className="text-[18px] border-2 border-gray-400 rounded-xl px-[10px] py-1 text-xl w-[80px] text-center font-bold">
                6482
              </div>
              <div className="text-sm">Followers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-[18px] border-2 border-gray-400 rounded-xl px-[10px] py-1 text-xl w-[80px] text-center font-bold">
                245
              </div>
              <div className="text-sm">Following</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="ml-3 lg:ml-16">
        <Typography variant="h6" component="div" fontWeight="bold">
          {props.title}
        </Typography>
        <div className="text-[#2de4ea] font-sarif">{props.instaHandle}</div>
        <div className="text-[14px] font-semibold">
          <IconButton>
            <StarBorderIcon className="bg-[#2de4ea] text-white rounded-full p-1 h-6 w-6" />
          </IconButton>
          <span className="mr-2">{props.star}</span>
          <IconButton>
            <ThumbUpOffAltIcon className="bg-[#edcc38] text-white rounded-full p-1 h-6 w-6" />
          </IconButton>
          <span className="mr-2">{props.liked}</span>
          <IconButton>
            <VisibilityOutlinedIcon className="bg-gray-500 text-white rounded-full p-1 h-6 w-6" />
          </IconButton>
          <span className="mr-2">{props.views}</span>
          <IconButton>
            <FavoriteBorderOutlinedIcon className="bg-red-800 text-white rounded-full p-1 h-6 w-6" />
          </IconButton>
          <span>{props.loved}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
