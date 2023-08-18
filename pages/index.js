import React from 'react';

// sections
import BannerSection from 'routes/home/sections/BannerSection';
import CategoriesSection from 'routes/home/sections/CategoriesSection';
import OnSaleSection from 'routes/home/sections/OnSaleSection';

import FeaturedProductSection from 'routes/home/sections/FeaturedProductSection';

import GlobalProductSection from 'routes/home/sections/GlobalProductSection';
import InHouseProductSection from 'routes/home/sections/InHouseProductSection';
import SettingsProductSection from 'routes/home/sections/SettingProductSection';
import GemStoneProductSection from 'routes/home/sections/GemStoneProductSection';

import ShowroomSection from 'routes/home/sections/ShowroomSection';
import ArticlesSection from 'routes/home/sections/ArticlesSection';
import StarMerchantSection from 'routes/home/sections/StarMerchantSection';

// components
import SplashScreenModal from 'routes/home/components/SplashScreenModal';

const Index = () => {
  return (
    <>
      <BannerSection />

      <GlobalProductSection />
      <InHouseProductSection />
      <SettingsProductSection />
      <GemStoneProductSection />

      <CategoriesSection />

      {/*
      <OnSaleSection />
<FeaturedProductSection />
      <ShowroomSection />
      <ArticlesSection />
      <StarMerchantSection />
      <SplashScreenModal />
    */}
    

    </>
  );
};

export default Index;
