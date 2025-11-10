import { configureStore } from '@reduxjs/toolkit'

// 创建store
export const store = configureStore({
  reducer: {
    // 在这里添加你的reducer
  },
})

// 导出类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

