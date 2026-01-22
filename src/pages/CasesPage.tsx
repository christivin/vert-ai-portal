import React from 'react';
import { Row, Col, Card } from 'antd';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/common/SectionTitle';
import { getAssetPath } from '../utils/path';

const CasesPage: React.FC = () => {
  const { t } = useTranslation();

  const cases = [
    {
      id: 1,
      company: '联合利华',
      logo: getAssetPath('/images/cases/联合利华.png'),
      description: 'VERT.AI提供的AI解决方案帮助我们实现了业务数字化转型，大幅提升了运营效率。',
      person: '杨纪宝',
      position: '北亚区客户运作团队副总裁',
    },
    {
      id: 2,
      company: '元气森林',
      logo: getAssetPath('/images/cases/元气森林.png'),
      description: '通过VERT.AI的FDE模式，我们从咨询到部署都得到了专业的支持，项目进展非常顺利。',
      person: '章肖洋',
      position: '首席运营官',
    },
    {
      id: 3,
      company: '斗鱼直播',
      logo: getAssetPath('/images/cases/斗鱼.png'),
      description: 'VERT.AI的垂直场景解决方案深入理解我们的业务，真正解决了实际问题。',
      person: '熊星',
      position: 'PMO负责人',
    },
  ];

  return (
    <div style={{ padding: '80px 24px' }}>
      <div className="container">
        <SectionTitle title={t('cases.title')} />
        
        <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
          {cases.map((caseItem) => (
            <Col xs={24} md={8} key={caseItem.id}>
              <Card className="case-card" hoverable>
                <div className="case-logo" style={{ textAlign: 'center', marginBottom: 24 }}>
                  <img 
                    src={caseItem.logo} 
                    alt={caseItem.company}
                    style={{ maxHeight: 60 }}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                </div>
                <div className="case-quote">
                  <img 
                    src={getAssetPath('/images/cases/quotation-prefix.png')} 
                    alt=""
                    className="quote-prefix"
                    style={{ width: 24, height: 24 }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <p className="case-description" style={{ margin: '16px 0' }}>
                    {caseItem.description}
                  </p>
                  <img 
                    src={getAssetPath('/images/cases/quotation-suffix.png')} 
                    alt=""
                    className="quote-suffix"
                    style={{ width: 24, height: 24, marginLeft: 'auto' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="case-info" style={{ marginTop: 24 }}>
                  <div className="case-person" style={{ fontWeight: 500 }}>
                    —— {caseItem.person}
                  </div>
                  <div className="case-position" style={{ color: 'rgba(0, 0, 0, 0.65)', marginTop: 4 }}>
                    {caseItem.company} {caseItem.position}
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default CasesPage;
