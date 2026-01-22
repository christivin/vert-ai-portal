import React, { useState } from 'react';
import { Tabs } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';
import { getAssetPath } from '../../utils/path';
import './AdvantagesSection.css';

const AdvantagesSection: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('vertical');

  const advantages = [
    {
      key: 'vertical',
      label: t('advantages.vertical.title'),
      title: t('advantages.vertical.title'),
      description: t('advantages.vertical.description'),
      points: [
        '深入行业，理解业务',
        '提供精准的AI解决方案',
        '解决实际业务问题',
      ],
      image: getAssetPath('/images/hero/info1.jpg'),
    },
    {
      key: 'ai',
      label: t('advantages.ai.title'),
      title: t('advantages.ai.title'),
      description: t('advantages.ai.description'),
      points: [
        '利用先进的AI技术',
        '驱动业务创新和增长',
        '持续优化和迭代',
      ],
      image: getAssetPath('/images/hero/info1.jpg'),
    },
    {
      key: 'fde',
      label: t('advantages.fde.title'),
      title: t('advantages.fde.title'),
      description: t('advantages.fde.description'),
      points: [
        '咨询、研发、部署、运维',
        '一站式服务',
        '专业团队支持',
      ],
      image: getAssetPath('/images/hero/info1.jpg'),
    },
  ];

  const currentAdvantage = advantages.find(a => a.key === activeTab) || advantages[0];

  return (
    <motion.section 
      className="advantages-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <SectionTitle title={t('advantages.title')} />
        
        <Tabs
          activeKey={activeTab}
          onChange={setActiveTab}
          items={advantages.map(adv => ({
            key: adv.key,
            label: adv.label,
          }))}
          className="advantages-tabs"
        />

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="advantages-content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="advantages-text">
              <h3 className="advantage-title">{currentAdvantage.title}</h3>
              <p className="advantage-description">{currentAdvantage.description}</p>
              <ul className="advantage-points">
                {currentAdvantage.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="advantages-image">
              <img 
                src={currentAdvantage.image} 
                alt={currentAdvantage.title}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNTAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE2IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2U8L3RleHQ+PC9zdmc+';
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default AdvantagesSection;
