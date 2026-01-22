import React from 'react';
import { Row, Col, Card, Button, Space } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';
import './SolutionsSection.css';

const SolutionsSection: React.FC = () => {
  const { t } = useTranslation();

  const industries = [
    { id: 1, name: t('solutions.industry.consumer'), icon: '/images/icons/消费品.png' },
    { id: 2, name: t('solutions.industry.retail'), icon: '/images/icons/泛零售.png' },
    { id: 3, name: t('solutions.industry.finance'), icon: '/images/icons/银行.png' },
    { id: 4, name: t('solutions.industry.internet'), icon: '/images/icons/互联网.png' },
    { id: 5, name: t('solutions.industry.stateOwned'), icon: '/images/icons/央国企.png' },
    { id: 6, name: t('solutions.industry.manufacturing'), icon: '/images/icons/制造业.png' },
    { id: 7, name: t('solutions.industry.medical'), icon: '/images/icons/医疗医药.png' },
  ];

  const values = [
    {
      id: 1,
      title: t('solutions.viewSolutions'),
      description: t('solutions.value1'),
    },
    {
      id: 2,
      title: t('solutions.viewSolutions'),
      description: t('solutions.value2'),
    },
    {
      id: 3,
      title: t('solutions.viewSolutions'),
      description: t('solutions.value3'),
    },
  ];

  return (
    <motion.section 
      className="solutions-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <SectionTitle 
          title={t('solutions.title')} 
          subtitle={t('solutions.subtitle')}
        />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Row gutter={[16, 16]} className="industries-row">
            {industries.map((industry, index) => (
              <Col xs={12} sm={8} md={6} lg={3} key={industry.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="industry-card" hoverable>
                    <div className="industry-icon">
                      <img 
                        src={industry.icon} 
                        alt={industry.name}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="industry-name">{industry.name}</div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div 
          className="values-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Row gutter={[24, 24]}>
            {values.map((value) => (
              <Col xs={24} md={8} key={value.id}>
                <Card className="value-card">
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>

        <motion.div 
          className="solutions-actions"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Space size="large">
            <Button type="primary" size="large">
              {t('solutions.viewSolutions')}
            </Button>
            <Button size="large">
              {t('solutions.downloadSolutions')}
            </Button>
          </Space>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
