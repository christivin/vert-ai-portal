import React from 'react';
import { Row, Col, Card, Button, Space } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';
import { getAssetPath } from '../../utils/path';
import './ResourcesSection.css';

const ResourcesSection: React.FC = () => {
  const { t } = useTranslation();

  const resources = [
    {
      id: 1,
      title: 'AI应用实践合集',
      description: '帮助企业将AI转化为行动力，加快构建AI驱动的业务能力，实现业务增长。',
      cover: getAssetPath('/images/resources/learn1.png'),
    },
    {
      id: 2,
      title: '垂直场景AI指南',
      description: '多个行业AI应用最佳实践，让企业不走弯路，找到适合自己的AI升级之路。',
      cover: getAssetPath('/images/resources/learn2.png'),
    },
    {
      id: 3,
      title: 'FDE模式白皮书',
      description: '期望为企业决策者和科技人员在AI应用和业务智能化建设中提供支持和决策依据。',
      cover: getAssetPath('/images/resources/learn3.png'),
    },
  ];

  return (
    <motion.section 
      className="resources-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <SectionTitle 
          title={t('resources.title')} 
          subtitle={t('resources.subtitle')}
        />
        
        <Row gutter={[24, 24]}>
          {resources.map((resource, index) => (
            <Col xs={24} sm={12} md={8} key={resource.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                className="resource-card"
                cover={
                  <div className="resource-cover">
                    <img 
                      src={resource.cover} 
                      alt={resource.title}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UmVzb3VyY2U8L3RleHQ+PC9zdmc+';
                      }}
                    />
                  </div>
                }
                hoverable
              >
                <Card.Meta
                  title={<h3 className="resource-title">{resource.title}</h3>}
                  description={
                    <div>
                      <p className="resource-description">{resource.description}</p>
                      <Space className="resource-actions">
                        <Button type="primary">{t('common.download')}</Button>
                        <Button>{t('common.viewDetails')}</Button>
                      </Space>
                    </div>
                  }
                />
              </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </motion.section>
  );
};

export default ResourcesSection;
