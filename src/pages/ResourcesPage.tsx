import React from 'react';
import { Row, Col, Card, Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/common/SectionTitle';

const ResourcesPage: React.FC = () => {
  const { t } = useTranslation();

  const resources = [
    {
      id: 1,
      title: 'AI应用实践合集',
      description: '帮助企业将AI转化为行动力，加快构建AI驱动的业务能力，实现业务增长。',
      cover: '/images/resources/learn1.png',
    },
    {
      id: 2,
      title: '垂直场景AI指南',
      description: '多个行业AI应用最佳实践，让企业不走弯路，找到适合自己的AI升级之路。',
      cover: '/images/resources/learn2.png',
    },
    {
      id: 3,
      title: 'FDE模式白皮书',
      description: '期望为企业决策者和科技人员在AI应用和业务智能化建设中提供支持和决策依据。',
      cover: '/images/resources/learn3.png',
    },
  ];

  return (
    <div style={{ padding: '80px 24px' }}>
      <div className="container">
        <SectionTitle 
          title={t('resources.title')} 
          subtitle={t('resources.subtitle')}
        />
        
        <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
          {resources.map((resource) => (
            <Col xs={24} sm={12} md={8} key={resource.id}>
              <Card
                className="resource-card"
                cover={
                  <div className="resource-cover" style={{ height: 200, overflow: 'hidden' }}>
                    <img 
                      src={resource.cover} 
                      alt={resource.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+UmVzb3VyY2U8L3RleHQ+PC9zdmc+';
                      }}
                    />
                  </div>
                }
                hoverable
              >
                <Card.Meta
                  title={<h3 style={{ marginBottom: 8 }}>{resource.title}</h3>}
                  description={
                    <div>
                      <p style={{ color: 'rgba(0, 0, 0, 0.65)', marginBottom: 16 }}>
                        {resource.description}
                      </p>
                      <Space>
                        <Button type="primary">{t('common.download')}</Button>
                        <Button>{t('common.viewDetails')}</Button>
                      </Space>
                    </div>
                  }
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ResourcesPage;
