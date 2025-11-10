import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'

// 创建路由配置
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
  // 在这里添加更多路由
])

export default router
