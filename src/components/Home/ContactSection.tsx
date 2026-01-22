import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { submitContactForm } from '../../utils/api';
import type { ContactFormData } from '../../utils/mock';
import './ContactSection.css';

const { TextArea } = Input;

const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: ContactFormData) => {
    setLoading(true);
    try {
      const response = await submitContactForm(values);
      if (response.success) {
        message.success(t('contact.form.submitSuccess'));
        form.resetFields();
      } else {
        message.error(response.message || t('contact.form.submitError'));
      }
    } catch (error) {
      message.error(t('contact.form.submitError'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section 
      className="contact-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="contact-title">{t('contact.title')}</h2>
            <p className="contact-subtitle">{t('contact.subtitle')}</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>{t('footer.phone')}: </strong>
                <span>400-880-0750</span>
              </div>
              <div className="contact-item">
                <strong>{t('footer.email')}: </strong>
                <span>hello@vert.ai</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={onFinish}
              className="contact-form"
            >
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="name"
                    label={t('contact.form.name')}
                    rules={[{ required: true, message: '请输入姓名' }]}
                  >
                    <Input placeholder={t('contact.form.name')} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="company"
                    label={t('contact.form.company')}
                    rules={[{ required: true, message: '请输入公司名称' }]}
                  >
                    <Input placeholder={t('contact.form.company')} />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="position"
                    label={t('contact.form.position')}
                  >
                    <Input placeholder={t('contact.form.position')} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item
                    name="phone"
                    label={t('contact.form.phone')}
                    rules={[
                      { required: true, message: '请输入电话' },
                      { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号' },
                    ]}
                  >
                    <Input placeholder={t('contact.form.phone')} />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item
                name="email"
                label={t('contact.form.email')}
                rules={[
                  { required: true, message: '请输入邮箱' },
                  { type: 'email', message: '请输入正确的邮箱地址' },
                ]}
              >
                <Input placeholder={t('contact.form.email')} />
              </Form.Item>

              <Form.Item
                name="requirement"
                label={t('contact.form.requirement')}
                rules={[{ required: true, message: '请输入需求描述' }]}
              >
                <TextArea
                  rows={4}
                  placeholder={t('contact.form.requirement')}
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" size="large" loading={loading} block>
                  {t('common.submit')}
                </Button>
              </Form.Item>
            </Form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
