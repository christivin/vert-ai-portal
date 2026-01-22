import { useState, useEffect } from 'react';
import { theme } from 'antd';

type ThemeMode = 'light' | 'dark';

export const useTheme = () => {
  const { token } = theme.useToken();
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    // 从localStorage读取主题设置，默认为light
    const savedTheme = localStorage.getItem('theme-mode') as ThemeMode;
    return savedTheme || 'light';
  });

  useEffect(() => {
    // 保存主题设置到localStorage
    localStorage.setItem('theme-mode', themeMode);
    
    // 更新HTML根元素的class
    if (themeMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [themeMode]);

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return {
    themeMode,
    setThemeMode,
    toggleTheme,
    token,
  };
};
