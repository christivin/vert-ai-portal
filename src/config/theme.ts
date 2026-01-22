import type { ConfigProviderProps } from 'antd';

// VERT.AI品牌色配置
const primaryColor = '#1890ff'; // 可以后续替换为VERT.AI的品牌色

// 浅色主题配置
export const lightTheme: NonNullable<ConfigProviderProps['theme']> = {
  token: {
    // 主色调
    colorPrimary: primaryColor,
    
    // 字体配置
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    
    // 圆角
    borderRadius: 6,
    borderRadiusLG: 8,
    borderRadiusSM: 4,
    
    // 间距
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,
    
    // 颜色
    colorBgContainer: '#ffffff',
    colorBgElevated: '#ffffff',
    colorBgLayout: '#f5f5f5',
    colorText: 'rgba(0, 0, 0, 0.88)',
    colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
    colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
    colorBorder: '#d9d9d9',
    colorBorderSecondary: '#f0f0f0',
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 40,
      fontWeight: 500,
    },
    Input: {
      borderRadius: 6,
      controlHeight: 40,
    },
    Card: {
      borderRadius: 8,
      paddingLG: 24,
    },
    Menu: {
      borderRadius: 6,
    },
  },
};

// 深色主题配置
export const darkTheme: NonNullable<ConfigProviderProps['theme']> = {
  token: {
    // 主色调
    colorPrimary: primaryColor,
    
    // 字体配置（与浅色主题相同）
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    fontSizeHeading4: 20,
    fontSizeHeading5: 16,
    
    // 圆角
    borderRadius: 6,
    borderRadiusLG: 8,
    borderRadiusSM: 4,
    
    // 间距
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    paddingXS: 8,
    
    // 深色模式颜色
    colorBgContainer: '#141414',
    colorBgElevated: '#1f1f1f',
    colorBgLayout: '#000000',
    colorText: 'rgba(255, 255, 255, 0.85)',
    colorTextSecondary: 'rgba(255, 255, 255, 0.65)',
    colorTextTertiary: 'rgba(255, 255, 255, 0.45)',
    colorBorder: '#424242',
    colorBorderSecondary: '#303030',
  },
  components: {
    Button: {
      borderRadius: 6,
      controlHeight: 40,
      fontWeight: 500,
    },
    Input: {
      borderRadius: 6,
      controlHeight: 40,
    },
    Card: {
      borderRadius: 8,
      paddingLG: 24,
    },
    Menu: {
      borderRadius: 6,
    },
  },
  algorithm: [], // 使用默认算法，Ant Design会自动处理深色模式
};
