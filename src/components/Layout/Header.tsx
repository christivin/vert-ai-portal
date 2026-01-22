import React, { useState } from 'react';
import { Layout, Menu, Button, Dropdown, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MenuOutlined, GlobalOutlined, MoonOutlined, SunOutlined } from '@ant-design/icons';
import { useTheme } from '../../hooks/useTheme';
import { routes } from '../../config/routes';
import './Header.css';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { themeMode, toggleTheme } = useTheme();
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const languageMenuItems = [
    {
      key: 'zh-CN',
      label: '简体中文',
      onClick: () => handleLanguageChange('zh-CN'),
    },
    {
      key: 'en-US',
      label: 'English',
      onClick: () => handleLanguageChange('en-US'),
    },
  ];

  const productsMenuItems = [
    { key: 'product1', label: 'AI产品1' },
    { key: 'product2', label: 'AI产品2' },
    { key: 'product3', label: 'AI产品3' },
  ];

  const solutionsMenuItems = [
    { key: 'solution1', label: '垂直场景1' },
    { key: 'solution2', label: '垂直场景2' },
    { key: 'solution3', label: '垂直场景3' },
  ];

  const resourcesMenuItems = [
    { key: 'download', label: '资源下载' },
    { key: 'blog', label: '行业资讯' },
    { key: 'academy', label: '学习中心' },
  ];

  const aboutMenuItems = [
    { key: 'intro', label: '公司介绍' },
    { key: 'honor', label: '荣誉奖项' },
    { key: 'partner', label: '合作伙伴' },
  ];

  const menuItems = [
    {
      key: 'products',
      label: t('nav.products'),
      children: productsMenuItems,
    },
    {
      key: 'solutions',
      label: t('nav.solutions'),
      children: solutionsMenuItems,
    },
    {
      key: 'cases',
      label: t('nav.cases'),
      onClick: () => navigate(routes.cases),
    },
    {
      key: 'resources',
      label: t('nav.resources'),
      children: resourcesMenuItems,
    },
    {
      key: 'about',
      label: t('nav.about'),
      children: aboutMenuItems,
    },
    {
      key: 'fde',
      label: t('nav.fde'),
      onClick: () => navigate(routes.fde),
    },
  ];

  return (
    <AntHeader className="app-header">
      <div className="header-content">
        <div className="header-logo" onClick={() => navigate(routes.home)}>
          <span className="logo-text">VERT.AI</span>
        </div>

        <Menu
          mode="horizontal"
          items={menuItems}
          className="header-menu"
          selectedKeys={[]}
        />

        <Space className="header-actions" size="middle">
          <span className="header-phone">400-880-0750</span>
          
          <Button type="link" onClick={() => navigate('/login')}>
            {i18n.language === 'zh-CN' ? '账号登录' : 'Login'}
          </Button>

          <Button type="primary" onClick={() => navigate(routes.home)}>
            {t('common.freeConsult')}
          </Button>

          <Dropdown menu={{ items: languageMenuItems }} placement="bottomRight">
            <Button icon={<GlobalOutlined />} type="text" />
          </Dropdown>

          <Button
            icon={themeMode === 'light' ? <MoonOutlined /> : <SunOutlined />}
            onClick={toggleTheme}
            type="text"
          />
        </Space>

        <Button
          className="mobile-menu-btn"
          icon={<MenuOutlined />}
          onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
          type="text"
        />
      </div>

      {mobileMenuVisible && (
        <div className="mobile-menu">
          <Menu
            mode="vertical"
            items={menuItems}
            onClick={() => setMobileMenuVisible(false)}
          />
        </div>
      )}
    </AntHeader>
  );
};

export default Header;
