import React from 'react';
import { Layout, Row, Col, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { routes } from '../../config/routes';
import './Footer.css';

const { Footer: AntFooter } = Layout;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <AntFooter className="app-footer">
      <div className="footer-content">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={24} md={6}>
            <div className="footer-section">
              <div className="footer-logo">VERT.AI</div>
              <div className="footer-contact">
                <p>{t('footer.contact')}</p>
                <Space direction="vertical" size="small">
                  <div className="footer-qrcodes">
                    <div className="footer-qrcode-item">
                      <img 
                        src="/images/footer/微信公众号.jpg" 
                        alt="微信公众号"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span>微信公众号</span>
                    </div>
                    <div className="footer-qrcode-item">
                      <img 
                        src="/images/footer/企微.png" 
                        alt="企业微信"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <span>企业微信</span>
                    </div>
                  </div>
                  <div>
                    <span>{t('footer.phone')}: </span>
                    <span>400-880-0750</span>
                  </div>
                  <div>
                    <span>{t('footer.email')}: </span>
                    <span>hello@vert.ai</span>
                  </div>
                </Space>
              </div>
            </div>
          </Col>

          <Col xs={12} sm={12} md={4}>
            <div className="footer-section">
              <h4>{t('nav.products')}</h4>
              <ul>
                <li><a onClick={() => navigate(routes.products)}>AI产品1</a></li>
                <li><a onClick={() => navigate(routes.products)}>AI产品2</a></li>
                <li><a onClick={() => navigate(routes.products)}>AI产品3</a></li>
              </ul>
            </div>
          </Col>

          <Col xs={12} sm={12} md={4}>
            <div className="footer-section">
              <h4>{t('nav.solutions')}</h4>
              <ul>
                <li><a onClick={() => navigate(routes.solutions)}>垂直场景1</a></li>
                <li><a onClick={() => navigate(routes.solutions)}>垂直场景2</a></li>
                <li><a onClick={() => navigate(routes.solutions)}>垂直场景3</a></li>
              </ul>
            </div>
          </Col>

          <Col xs={12} sm={12} md={4}>
            <div className="footer-section">
              <h4>{t('nav.resources')}</h4>
              <ul>
                <li><a onClick={() => navigate(routes.resources)}>资源下载</a></li>
                <li><a onClick={() => navigate(routes.resources)}>行业资讯</a></li>
                <li><a onClick={() => navigate(routes.resources)}>学习中心</a></li>
              </ul>
            </div>
          </Col>

          <Col xs={12} sm={12} md={6}>
            <div className="footer-section">
              <h4>{t('nav.about')}</h4>
              <ul>
                <li><a onClick={() => navigate(routes.about)}>公司介绍</a></li>
                <li><a onClick={() => navigate(routes.about)}>荣誉奖项</a></li>
                <li><a onClick={() => navigate(routes.fde)}>{t('nav.fde')}</a></li>
              </ul>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>{t('footer.copyright')}</span>
            <span> | </span>
            <a>{t('footer.privacy')}</a>
            <span> | </span>
            <a>{t('footer.links')}</a>
          </div>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
