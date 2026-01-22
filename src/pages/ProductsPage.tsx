import React from 'react';
import { Row, Col, Card, Button } from 'antd';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../components/common/SectionTitle';
import { getAssetPath } from '../utils/path';

const ProductsPage: React.FC = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      title: t('products.product1.title'),
      description: t('products.product1.description'),
      icon: getAssetPath('/images/icons/icon1.png'),
    },
    {
      id: 2,
      title: t('products.product2.title'),
      description: t('products.product2.description'),
      icon: getAssetPath('/images/icons/icon2.png'),
    },
    {
      id: 3,
      title: t('products.product3.title'),
      description: t('products.product3.description'),
      icon: getAssetPath('/images/icons/icon3.png'),
    },
  ];

  return (
    <div style={{ padding: '80px 24px' }}>
      <div className="container">
        <SectionTitle 
          title={t('products.title')} 
          subtitle={t('products.description')}
        />
        
        <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
          {products.map((product) => (
            <Col xs={24} sm={12} md={8} key={product.id}>
              <Card 
                hoverable
                style={{ height: '100%' }}
              >
                <div style={{ textAlign: 'center', marginBottom: 16, minHeight: 64, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={product.icon} 
                    alt={product.title}
                    style={{ width: 64, height: 64, objectFit: 'contain' }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <h3 style={{ textAlign: 'center', marginBottom: 16 }}>
                  {product.title}
                </h3>
                <p style={{ textAlign: 'center', color: 'rgba(0, 0, 0, 0.65)' }}>
                  {product.description}
                </p>
                <div style={{ textAlign: 'center', marginTop: 24 }}>
                  <Button type="primary">{t('common.learnMore')}</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductsPage;
