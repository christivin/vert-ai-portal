import axios from 'axios';
import type { ContactFormData, ContactFormResponse } from './mock';
import { mockSubmitContactForm } from './mock';

// 创建axios实例（预留，未来真实API调用时使用）
export const apiClient = axios.create({
  baseURL: '/api', // TODO: 配置真实API基础URL
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 联系表单提交API
export const submitContactForm = async (
  data: ContactFormData
): Promise<ContactFormResponse> => {
  // 当前使用Mock数据
  return mockSubmitContactForm(data);

  // TODO: 真实API调用（当API准备好后，取消下面的注释并删除上面的Mock调用）
  /*
  try {
    const response = await apiClient.post<ContactFormResponse>('/contact', data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message || '提交失败，请稍后重试',
      };
    }
    return {
      success: false,
      message: '提交失败，请稍后重试',
    };
  }
  */
};
