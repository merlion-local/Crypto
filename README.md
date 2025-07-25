# Ethereum Block Explorer

<img src="https://public.bnbstatic.com/image/pgc/202303/c2a49039dae49296f80d50220095fa90.jpg"  alt="Project Screenshot" style="border-radius: 10px; width: 300px;"/>

Веб-приложение для просмотра информации о блоках Ethereum с историей навигации и детализацией транзакций.

## 🔍 Основные возможности

- Просмотр данных блоков (номер, хэш)
- Таблица транзакций с ссылками на Etherscan
- История просмотренных блоков
- Автоматическое переключение между RPC-нодами
- Адаптивный интерфейс

## 🛠 Технологический стек

| Компонент       | Технология           |
|----------------|----------------------|
| Фронтенд       | Next.js + TypeScript |
| UI-библиотека  | Material-UI (v5)     |
| State-менеджмент | Redux Toolkit       |
| API            | Ethereum RPC         |

## 🚀 Быстрый старт

### Установка
```
git clone https://github.com/merlion-local/Crypto
```
```
cd eth-explorer
npm install
```
### Запуск
```
npm run dev
```
Приложение будет доступно по адресу: http://localhost:3000


```bash
🗂 Структура проекта
text
src/
├── components/
│   ├── BlockInfo.tsx       # Информация о блоке
│   ├── BlockInput.tsx      # Поиск блоков
│   └── TransactionsTable.tsx # Таблица транзакций
├── pages/
│   ├── block/
│   │   ├── [blockNumber].tsx # Динамическая страница
│   │   └── latest.tsx      # Последний блок
│   ├── _app.tsx            # Главный компонент
│   └── index.tsx           # Домашняя страница
├── store/
│   ├── blockSlice.ts       # Redux slice
│   ├── hooks.ts            # Redux хуки
│   └── index.ts           # Настройка хранилища
└── theme.ts               # Тема MUI
```

 ## 🛡 Система обработки ошибок
- Валидация ввода
- Проверка формата номера блока (только числа или "latest")
- Защита от пустого ввода
- Ограничение минимального номера блока (0)

```ts
// Пример валидации
if (!/^\d+$/.test(input) && input !== 'latest') {
  throw new Error('Некорректный номер блока');
}
// Механизм переключения RPC
// Используются 3 резервных ноды:

const PROVIDERS = [
  "https://rpc.ankr.com/eth",
  "https://eth.drpc.org",
  "https://cloudflare-eth.com"
];


export const fetchBlock = createAsyncThunk(
  'block/fetchBlock',
  async (blockNumber: string) => {
    // Последовательно перебираем все доступные RPC-ноды
    for (const url of providers) {
      try {
        // 1. Отправляем запрос к текущей ноде
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'eth_getBlockByNumber',
            params: [blockNumber, true], // true - получать полные данные о транзакциях
            id: 1,
          }),
        });

        // 2. Если ответ не OK, переходим к следующей ноде
        if (!res.ok) continue;

        // 3. Парсим успешный ответ
        const data = await res.json();
        
        // 4. Если есть результат - возвращаем его
        if (data.result) return data.result;

      } catch {
        // 5. При ошибке - silently continue (переход к следующей ноде)
        continue;
      }
    }
    
    // 6. Если все ноды вернули ошибку
    throw new Error('Не удалось получить данные ни от одного провайдера');
  }
);
```

### Ключевые особенности реализации:

Последовательный перебор нод:
- Используется массив providers с RPC-ендпоинтами
- Запросы выполняются последовательно до первого успешного

Условия переключения:

- HTTP-статус ответа ≠ 200 (!res.ok)
- Любые ошибки выполнения запроса (catch-блок)
- Отсутствие data.result в ответе

Отказоустойчивость:
- Пустой catch-блок для подавления ошибок
- Автоматический переход к следующей ноде при проблемах
- Фильтрация некорректных ответов (if (data.result))

Финал:
- После исчерпания всех нод - выбрасывается ошибка
- Ошибка перехватывается в extraReducers




### Алгоритм работы:

- Последовательный опрос нод
- При ошибке - автоматическое переключение
- После 3 неудач - показ ошибки

### Визуализация ошибок
- Тип ошибки	Компонент
- Пример сообщения
Сетевые проблемы	Alert	"Ошибка подключения к ноде"
Неверный блок	Alert	"Блок #123 не найден"
Пустые данные	Typography	"Нет транзакций"

## 🎨 UI-компоненты

## BlockInput
Поле ввода с валидацией

<img src="images/BlockInput_1.png" alt="Project Screenshot" width="500"/>

Кнопка быстрого перехода к последнему блоку

<img src="images/BlockInput_2.png" alt="Project Screenshot" width="500"/>

Интеграция с роутингом

## TransactionsTable

<img src="images/TransactionsTable.png" alt="Project Screenshot" width="1000"/>

- Сортировка по хэшу

- Ссылки на Etherscan

- Кнопки копирования

- Адаптивный дизайн

### ♻️ Навигация по истории
Особенности реализации:

```ts
// Сохранение истории в localStorage
useEffect(() => {
  localStorage.setItem('blockHistory', JSON.stringify(history));
}, [history]);
```
Функционал:

Кнопки "Назад"/"Вперед"

<img src="images/buttons.png" alt="Project Screenshot" width="1000"/>

Список последних просмотренных блоков

Индикатор текущей позиции

<img src="images/history.png" alt="Project Screenshot" width="1000"/>
```

## 📜 Лицензия
MIT License. Подробнее в файле LICENSE.

### 🛠 Доступные команды
```bash
npm run dev	Запуск dev-сервера
npm run build	Сборка production-версии
npm run start	Запуск production-сборки
npm run lint	Проверка кода ESLint
```


## 📚 Дополнительные материалы
- [Ethereum JSON-RPC API](https://ethereum.org/en/developers/docs/apis/json-rpc/)
- [Material-UI документация](https://mui.com/)
- [Redux Toolkit Best Practices](https://redux-toolkit.js.org/tutorials/rtk-query)
```
Note
Для предложений по улучшению создавайте Issues в репозитории проекта.
Pull requests приветствуются!


```
## Этот README.md включает:

1. Все ключевые разделы документации
2. Визуальные примеры 
3. Подробное описание архитектуры
4. Инструкции по запуску
5. Лицензионную информацию
6. Систему обработки ошибок
7. Описание UI-компонентов



