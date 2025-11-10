// 通用类型定义

export interface User {
  id: string
  name: string
  email: string
}

export interface ApiResponse<T = any> {
  code: number
  data: T
  message: string
}
