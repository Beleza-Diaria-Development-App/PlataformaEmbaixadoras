'use client'
import React, { useState } from 'react';
import Banner from '../components/banner';
import BannerPopup from '../components/profilepage';

interface ProfilePageProps {
  initialBannerUrl: string;
  availableBanners: string[];
}

const ProfilePage: React.FC<ProfilePageProps> = ({ initialBannerUrl, availableBanners }) => {
  const [bannerUrl, setBannerUrl] = useState(initialBannerUrl);
  const [isEditing, setIsEditing] = useState(false);

  const handleBannerChange = (newBannerUrl: string) => {
    setBannerUrl(newBannerUrl);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveBanner = (selectedBanner: string) => {
    setBannerUrl(selectedBanner);
    setIsEditing(false);
  };

  const handleClosePopup = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <Banner imageUrl={bannerUrl} />

      <div>
        <button onClick={handleEditClick}>Edit Banner</button>
      </div>

      {isEditing && (
        <BannerPopup
          banners={availableBanners}
          onSave={handleSaveBanner}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
};

export default ProfilePage;
