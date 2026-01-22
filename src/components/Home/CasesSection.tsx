import React from 'react';
import { Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '../common/SectionTitle';
import { routes } from '../../config/routes';
import './CasesSection.css';

const CasesSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const cases = [
    {
      id: 1,
      company: '联合利华',
      logo: '/images/cases/联合利华.png',
      description: 'VERT.AI提供的AI解决方案帮助我们实现了业务数字化转型，大幅提升了运营效率。',
      person: '杨纪宝',
      position: '北亚区客户运作团队副总裁',
    },
    {
      id: 2,
      company: '元气森林',
      logo: '/images/cases/元气森林.png',
      description: '通过VERT.AI的FDE模式，我们从咨询到部署都得到了专业的支持，项目进展非常顺利。',
      person: '章肖洋',
      position: '首席运营官',
    },
    {
      id: 3,
      company: '斗鱼直播',
      logo: '/images/cases/斗鱼.png',
      description: 'VERT.AI的垂直场景解决方案深入理解我们的业务，真正解决了实际问题。',
      person: '熊星',
      position: 'PMO负责人',
    },
  ];

  return (
    <motion.section 
      className="cases-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="cases-header">
          <SectionTitle 
            title={t('cases.title')} 
          />
          <a 
            className="view-more-link" 
            onClick={() => navigate(routes.cases)}
          >
            {t('cases.viewMore')}
          </a>
        </div>

        <Row gutter={[24, 24]}>
          {cases.map((caseItem, index) => (
            <Col xs={24} md={8} key={caseItem.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="case-card" hoverable>
                <div className="case-logo">
                  <img 
                    src={caseItem.logo} 
                    alt={caseItem.company}
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjEyIiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+TG9nbzwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                </div>
                <div className="case-quote">
                  <img 
                    src="/images/cases/quotation-prefix.png" 
                    alt=""
                    className="quote-prefix"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <p className="case-description">{caseItem.description}</p>
                  <img 
                    src="/images/cases/quotation-suffix.png" 
                    alt=""
                    className="quote-suffix"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="case-info">
                  <div className="case-person">—— {caseItem.person}</div>
                  <div className="case-position">{caseItem.company} {caseItem.position}</div>
                </div>
                <a 
                  className="case-link"
                  onClick={() => navigate(routes.cases)}
                >
                  {t('cases.viewCase')} &gt;
                </a>
              </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </motion.section>
  );
};

export default CasesSection;
