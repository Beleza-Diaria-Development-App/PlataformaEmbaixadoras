'use client'
import Image from 'next/image';
import React from 'react';

interface BannerProps {
  imageUrl: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl }) => {
  return <Image src={imageUrl} alt="Profile Banner" />;
};

export default Banner;
