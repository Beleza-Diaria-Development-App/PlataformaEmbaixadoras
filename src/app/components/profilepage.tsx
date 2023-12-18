'use client'
import React, { useState } from 'react';
import Banner from '../components/banner';

interface BannerPopupProps {
  banners: string[];
  onSave: (selectedBanner: string) => void;
  onClose: () => void;
}

const BannerPopup: React.FC<BannerPopupProps> = ({ banners, onSave, onClose }) => {
  const [selectedBanner, setSelectedBanner] = useState(banners[0]);

  const handleBannerChange = (newBanner: string) => {
    setSelectedBanner(newBanner);
  };

  const handleSave = () => {
    onSave(selectedBanner);
    onClose();
  };

  return (
    <div>
      <h2>Choose Your Banner</h2>
      {banners.map((banner) => (
        <label key={banner}>
          <input
            type="radio"
            value={banner}
            checked={selectedBanner === banner}
            onChange={() => handleBannerChange(banner)}
          />
          <Banner imageUrl={banner} />
        </label>
      ))}
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default BannerPopup;
