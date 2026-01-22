import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { lightTheme, darkTheme } from './config/theme';
import { useTheme } from './hooks/useTheme';
import './i18n';
import './index.css';
import App from './App.tsx';

const Root = () => {
  const { themeMode } = useTheme();
  const currentTheme = themeMode === 'dark' ? darkTheme : lightTheme;

  return (
    <ConfigProvider theme={currentTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
