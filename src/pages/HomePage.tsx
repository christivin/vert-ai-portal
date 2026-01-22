import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import ProductsSection from '../components/Home/ProductsSection';
import SolutionsSection from '../components/Home/SolutionsSection';
import FDEModeSection from '../components/Home/FDEModeSection';
import CasesSection from '../components/Home/CasesSection';
import AdvantagesSection from '../components/Home/AdvantagesSection';
import ResourcesSection from '../components/Home/ResourcesSection';
import ContactSection from '../components/Home/ContactSection';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <SolutionsSection />
      <FDEModeSection />
      <CasesSection />
      <AdvantagesSection />
      <ResourcesSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
