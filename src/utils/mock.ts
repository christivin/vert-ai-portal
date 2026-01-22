// Mock数据定义

export interface ContactFormData {
  name: string;
  company: string;
  position: string;
  phone: string;
  email: string;
  requirement: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
  data?: {
    id: string;
    submittedAt: string;
  };
}

// Mock联系表单提交
export const mockSubmitContactForm = async (
  _data: ContactFormData
): Promise<ContactFormResponse> => {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 模拟成功响应
  return {
    success: true,
    message: '提交成功',
    data: {
      id: `mock-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    },
  };

  // TODO: 真实API调用位置
  // 当需要连接真实API时，取消下面的注释并实现
  /*
  try {
    const response = await axios.post('/api/contact', data);
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: '提交失败，请稍后重试',
    };
  }
  */
};
