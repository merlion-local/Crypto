import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//Импортируются:
// createSlice — для создания reducer'а + экшенов.
// createAsyncThunk — для асинхронного запроса (загрузка блока).

const providers = [
  "https://rpc.ankr.com/eth",
  "https://eth.drpc.org",
  "https://cloudflare-eth.com"
];


//Типы и начальное состояние
interface Transaction {
  hash: string;
  from: string;
  to: string | null;
}
//Тип одной транзакции в блоке: хэш, отправитель (from) и получатель (to).
//  Получателя может не быть, если это создание контракта.



interface BlockState {
  number: string | null;
  hash: string | null;
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}
// Тип для хранилища (state):
// number, hash — информация о блоке.
// transactions — массив транзакций.
// loading, error — для отображения состояния загрузки и ошибок.







// Начальное состояние, используется при старте приложения.
const initialState: BlockState = {
  number: null,
  hash: null,
  transactions: [],
  loading: false,
  error: null,
};




// Асинхронный экшен fetchBlock
// Создаётся thunk с типом 'block/fetchBlock'.
//  При вызове dispatch(fetchBlock(...)) запускается эта функция.
//   Она принимает номер блока (blockNumber) в формате 0x... (hex).
export const fetchBlock = createAsyncThunk(
  'block/fetchBlock',
  async (blockNumber: string) => {
    for (const url of providers) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'eth_getBlockByNumber',
            params: [blockNumber, true],
            id: 1,
          }),
        });
        // Здесь:
        // происходит цикл по провайдерам;
        // отправляется JSON-RPC запрос eth_getBlockByNumber
        //  на выбранный провайдер;
        // params: [blockNumber, true] — означает:
        // blockNumber: номер блока (0x...);
        // true: запрашиваем блок вместе с транзакциями.


        if (!res.ok) continue;
        const data = await res.json();
        if (data.result) return data.result;
      } catch {}
    }
    throw new Error('Failed to fetch block data from providers');
  }
);
// Если запрос успешный (res.ok), пробуем распарсить JSON.
// Если получили data.result (блок найден) — возвращаем результат.
// Если ни один провайдер не сработал — выбрасывается ошибка.







const blockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {},

  // Создаём slice:
  // name: 'block' — имя слайса.
  // initialState — состояние по умолчанию.
  // reducers: {} — обычных редьюсеров тут нет.
  // Основная логика — в extraReducers.
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlock.pending, (state) => {
        state.loading = true;
        state.error = null;
        //Когда начинается fetchBlock:
        // loading = true — показываем спиннер;
        // error = null — сбрасываем прошлую ошибку.
      })
      .addCase(fetchBlock.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.number = action.payload.number;
        state.hash = action.payload.hash;
        state.transactions = action.payload.transactions || [];
      })
      // Когда блок успешно загружен:
      // loading = false — убираем спиннер;
      // данные из ответа записываются в state.
      .addCase(fetchBlock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error loading block';
      });
      //Если загрузка блока не удалась:
      // loading = false
      // в error сохраняется сообщение об ошибке.
  },
});

export default blockSlice.reducer;


// Этот код:

// реализует асинхронную загрузку блока Ethereum по его номеру;

// использует несколько RPC-провайдеров для надёжности;

// управляет loading, error, transactions и другой информацией;

// легко интегрируется в React-приложение через Redux Toolkit.

