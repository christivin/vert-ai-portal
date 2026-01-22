import React from 'react';
import { Button, Typography } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../config/routes';
import { getAssetPath } from '../../utils/path';
import './HeroSection.css';

const { Title, Paragraph } = Typography;

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div 
        className="hero-background"
        style={{ backgroundImage: `url(${getAssetPath('/images/hero-bg.jpg')})` }}
      >
        <div className="hero-overlay" />
      </div>
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Title level={1} className="hero-title">
            {t('hero.title')}
          </Title>
          <Paragraph className="hero-subtitle">
            {t('hero.subtitle')}
          </Paragraph>
          <Paragraph className="hero-description">
            {t('hero.description')}
          </Paragraph>
          <div className="hero-actions">
            <Button 
              type="primary" 
              size="large"
              onClick={() => navigate(routes.home)}
            >
              {t('common.freeConsult')}
            </Button>
            <Button 
              size="large"
              onClick={() => navigate(routes.cases)}
            >
              {t('cases.viewMore')}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
