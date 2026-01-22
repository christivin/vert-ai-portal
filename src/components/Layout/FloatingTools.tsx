import React, { useState, useEffect } from 'react';
import { FloatButton, Popover } from 'antd';
import { CustomerServiceOutlined, PhoneOutlined, WechatOutlined, VideoCameraOutlined, UpOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import './FloatingTools.css';

const FloatingTools: React.FC = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const wechatContent = (
    <div className="wechat-popover">
      <img 
        src="/images/wechat-code.png" 
        alt="微信二维码" 
        style={{ width: 150, height: 150 }}
        onError={(e) => {
          // 如果图片不存在，使用占位符
          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgZmlsbD0iI2Y1ZjVmNSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE0IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+5b6u5L+h5Yqg6L295LitPC90ZXh0Pjwvc3ZnPg==';
        }}
      />
      <p>扫码添加微信</p>
    </div>
  );

  return (
    <div className="floating-tools">
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 24, bottom: 24 }}
        icon={<CustomerServiceOutlined />}
      >
        <Popover content={wechatContent} title="微信咨询" placement="left">
          <FloatButton icon={<WechatOutlined />} tooltip="微信咨询" />
        </Popover>
        <FloatButton 
          icon={<PhoneOutlined />} 
          tooltip="电话咨询"
          onClick={() => window.location.href = 'tel:400-880-0750'}
        />
        <FloatButton 
          icon={<VideoCameraOutlined />} 
          tooltip="Demo体验"
          onClick={() => window.open('/demo', '_blank')}
        />
      </FloatButton.Group>

      {visible && (
        <FloatButton
          icon={<UpOutlined />}
          type="primary"
          style={{ right: 24, bottom: 100 }}
          onClick={scrollToTop}
          tooltip="返回顶部"
        />
      )}
    </div>
  );
};

export default FloatingTools;
