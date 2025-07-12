import axios from 'axios';

// 创建一个axios实例，并配置基础URL
// 这样我们就不需要在每个请求中都写完整的URL了
// 注意：'/api' 是我们在后端 server.js 中为路由设置的前缀
const api = axios.create({
  baseURL: '/api'
});

/**
 * 从后端获取所有想法胶囊
 * @returns {Promise<AxiosResponse<any>>}
 */
export const getCapsules = () => {
  return api.get('/capsules');
};

/**
 * 创建一个新的想法胶囊
 * @param {string} content - 想法的内容
 * @returns {Promise<AxiosResponse<any>>}
 */
export const createCapsule = (content) => {
  return api.post('/capsules', { content });
};