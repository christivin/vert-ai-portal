import React from 'react';
import { Row, Col, Card } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionTitle from '../common/SectionTitle';
import './ProductsSection.css';

const ProductsSection: React.FC = () => {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      title: t('products.product1.title'),
      description: t('products.product1.description'),
      icon: '/images/icons/icon1.png',
    },
    {
      id: 2,
      title: t('products.product2.title'),
      description: t('products.product2.description'),
      icon: '/images/icons/icon2.png',
    },
    {
      id: 3,
      title: t('products.product3.title'),
      description: t('products.product3.description'),
      icon: '/images/icons/icon3.png',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="products-section">
      <div className="container">
        <SectionTitle 
          title={t('products.title')} 
          subtitle={t('products.description')}
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Row gutter={[24, 24]}>
            {products.map((product) => (
              <Col xs={24} sm={12} md={8} key={product.id}>
                <motion.div variants={itemVariants}>
                  <Card 
                    className="product-card"
                    hoverable
                  >
                    <div className="product-icon">
                      <img 
                        src={product.icon} 
                        alt={product.title}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <h3 className="product-title">{product.title}</h3>
                    <p className="product-description">{product.description}</p>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
