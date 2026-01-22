import React from 'react';
import { Row, Col, Card, Timeline } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';
import './FDEModeSection.css';

const FDEModeSection: React.FC = () => {
  const { t } = useTranslation();

  const fdeSteps = [
    {
      key: 'consult',
      icon: '/images/icons/fde-consult.png',
      title: t('fde.consult.title'),
      description: t('fde.consult.description'),
    },
    {
      key: 'develop',
      icon: '/images/icons/fde-develop.png',
      title: t('fde.develop.title'),
      description: t('fde.develop.description'),
    },
    {
      key: 'deploy',
      icon: '/images/icons/fde-deploy.png',
      title: t('fde.deploy.title'),
      description: t('fde.deploy.description'),
    },
    {
      key: 'operate',
      icon: '/images/icons/fde-operate.png',
      title: t('fde.operate.title'),
      description: t('fde.operate.description'),
    },
  ];

  return (
    <motion.section 
      className="fde-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <SectionTitle 
          title={t('fde.title')} 
          subtitle={t('fde.subtitle')}
        />
        
        <Row gutter={[24, 24]}>
          {fdeSteps.map((step, index) => (
            <Col xs={24} sm={12} md={6} key={step.key}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="fde-card">
                  <div className="fde-step-number">{index + 1}</div>
                  <div className="fde-icon">
                    <img 
                      src={step.icon} 
                      alt={step.title}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="fde-title">{step.title}</h3>
                  <p className="fde-description">{step.description}</p>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.div 
          className="fde-timeline"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Timeline
            items={fdeSteps.map((step, index) => ({
              children: (
                <div>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              ),
            }))}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FDEModeSection;
