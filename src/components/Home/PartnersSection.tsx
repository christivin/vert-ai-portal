import React from 'react';
import { Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';
import './PartnersSection.css';

const PartnersSection: React.FC = () => {
  const { t } = useTranslation();

  // 合作伙伴数据 - 可以从knowledge/images/cases/中获取更多Logo
  const partners = [
    {
      id: 1,
      name: '联合利华',
      logo: '/images/cases/联合利华.png',
    },
    {
      id: 2,
      name: '元气森林',
      logo: '/images/cases/元气森林.png',
    },
    {
      id: 3,
      name: '斗鱼',
      logo: '/images/cases/斗鱼.png',
    },
    {
      id: 4,
      name: '合作伙伴4',
      logo: '/images/hero/customers_2.png', // 使用hero中的合作伙伴图片
    },
  ];

  return (
    <motion.section 
      className="partners-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <SectionTitle 
          title={t('partners.title') || '合作伙伴'} 
          subtitle={t('partners.subtitle') || '感谢以下合作伙伴的信任与支持'}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Row gutter={[32, 32]} justify="center" align="middle">
            {partners.map((partner, index) => (
              <Col xs={12} sm={8} md={6} lg={6} key={partner.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="partner-item"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="partner-logo"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PartnersSection;
