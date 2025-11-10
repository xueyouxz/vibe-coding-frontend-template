// 应用常量配置
export const APP_NAME = 'React App'
export const APP_VERSION = '1.0.0'

// API配置
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'

// 路由路径常量
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  USER: '/user',
} as const

