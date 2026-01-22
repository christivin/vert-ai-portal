/**
 * 获取资源路径，自动处理GitHub Pages的base路径
 */
export const getAssetPath = (path: string): string => {
  // 如果路径已经是完整URL，直接返回
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // 在生产环境（GitHub Pages）添加base路径
  const base = import.meta.env.PROD ? '/vert-ai-portal' : '';
  
  // 确保路径以/开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  return `${base}${normalizedPath}`;
};
