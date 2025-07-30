import { configureStore } from '@reduxjs/toolkit';
import blockReducer from './blockSlice';

// configureStore — удобная функция из Redux Toolkit,
//  которая автоматически включает полезные по умолчаниюё
//   middlewares (redux-thunk, redux-devtools, и т. д.).

// blockReducer — редьюсер, который вы экспортировали из blockSlice.ts
//  (где описана логика получения блока Ethereum).




//Создаём хранилище Redux
export const store = configureStore({
  reducer: {
    block: blockReducer,
  },
});
//В reducer передаёте объект, где:
//ключ block — это имя среза (slice),
//blockReducer — редьюсер, который обрабатывает действия, связанные с блоками.

// Получение типа состояния (RootState)
export type RootState = ReturnType<typeof store.getState>;
//store.getState возвращает всё состояние Redux.
// ReturnType<typeof store.getState> автоматически определяет тип полного состояния.
// RootState — это удобный тип, чтобы использовать его в селекторах (useSelector).


export type AppDispatch = typeof store.dispatch;
//Вы экспортируете тип dispatch из вашего конкретного хранилища.
//Это нужно, чтобы использовать useAppDispatch() с dispatch(fetchBlock(...)),
//  особенно если вы используете createAsyncThunk.