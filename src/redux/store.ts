import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user.slice'

export const rootReducer = combineReducers({
  user: userReducer,
})

export const setupStore = (preloadedState?: Partial<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export default configureStore({
  reducer: rootReducer
});