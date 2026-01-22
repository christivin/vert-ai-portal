import React from 'react';
import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/common/SectionTitle';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={{ padding: '80px 24px' }}>
      <div className="container">
        <SectionTitle title={t('nav.about')} />
        
        <div style={{ marginTop: 48, maxWidth: 800, margin: '48px auto' }}>
          <Card>
            <h2 style={{ marginBottom: 24 }}>公司介绍</h2>
            <p style={{ lineHeight: 1.8, color: 'rgba(0, 0, 0, 0.65)' }}>
              VERT.AI致力于提供AI驱动的垂直场景解决方案，深入客户公司内部解决实际的业务问题。
              我们提供FDE全系列服务模式，从咨询、研发、部署到运维，为客户提供一站式服务。
            </p>
            
            <h3 style={{ marginTop: 32, marginBottom: 16 }}>我们的使命</h3>
            <p style={{ lineHeight: 1.8, color: 'rgba(0, 0, 0, 0.65)' }}>
              让业务用起来，让决策更智能
            </p>

            <h3 style={{ marginTop: 32, marginBottom: 16 }}>核心优势</h3>
            <Row gutter={[16, 16]} style={{ marginTop: 24 }}>
              <Col xs={24} md={8}>
                <Card>
                  <h4>垂直场景</h4>
                  <p style={{ color: 'rgba(0, 0, 0, 0.65)', marginTop: 8 }}>
                    深入行业，理解业务，提供精准的AI解决方案
                  </p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card>
                  <h4>AI驱动</h4>
                  <p style={{ color: 'rgba(0, 0, 0, 0.65)', marginTop: 8 }}>
                    利用先进的AI技术，驱动业务创新和增长
                  </p>
                </Card>
              </Col>
              <Col xs={24} md={8}>
                <Card>
                  <h4>FDE模式</h4>
                  <p style={{ color: 'rgba(0, 0, 0, 0.65)', marginTop: 8 }}>
                    全系列服务，从咨询到运维，一站式解决
                  </p>
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
