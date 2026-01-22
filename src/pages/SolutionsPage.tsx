import React from 'react';
import { Row, Col, Card, Button, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/common/SectionTitle';

const SolutionsPage: React.FC = () => {
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
      title: t('solutions.value1'),
      description: '构建数字化运营体系，实现业绩可持续增长',
    },
    {
      id: 2,
      title: t('solutions.value2'),
      description: '数据驱动营销策略，优化投入产出比',
    },
    {
      id: 3,
      title: t('solutions.value3'),
      description: '全链路业务数字化，提高协同效率',
    },
  ];

  return (
    <div style={{ padding: '80px 24px' }}>
      <div className="container">
        <SectionTitle 
          title={t('solutions.title')} 
          subtitle={t('solutions.subtitle')}
        />
        
        <div style={{ marginTop: 48 }}>
          <h3 style={{ textAlign: 'center', marginBottom: 32 }}>
            行业解决方案
          </h3>
          <Row gutter={[16, 16]}>
            {industries.map((industry) => (
              <Col xs={12} sm={8} md={6} lg={3} key={industry.id}>
                <Card className="industry-card" hoverable>
                  <div className="industry-icon">
                    <img 
                      src={industry.icon} 
                      alt={industry.name}
                      style={{ width: 48, height: 48 }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="industry-name" style={{ textAlign: 'center', marginTop: 8 }}>
                    {industry.name}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div style={{ marginTop: 64 }}>
          <h3 style={{ textAlign: 'center', marginBottom: 32 }}>
            核心价值
          </h3>
          <Row gutter={[24, 24]}>
            {values.map((value) => (
              <Col xs={24} md={8} key={value.id}>
                <Card>
                  <h4>{value.title}</h4>
                  <p style={{ color: 'rgba(0, 0, 0, 0.65)', marginTop: 8 }}>
                    {value.description}
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <Space size="large">
            <Button type="primary" size="large">
              {t('solutions.viewSolutions')}
            </Button>
            <Button size="large">
              {t('solutions.downloadSolutions')}
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default SolutionsPage;
