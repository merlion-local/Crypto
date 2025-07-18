# Ethereum Block Explorer

<img src="https://public.bnbstatic.com/image/pgc/202303/c2a49039dae49296f80d50220095fa90.jpg" alt="Project Screenshot" width="300"/>

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
```bash
git clone https://github.com/merlion-local/Crypto
cd eth-explorer
npm install

Запуск
bash
npm run dev
Приложение будет доступно по адресу: http://localhost:3000

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


🛡 Система обработки ошибок
Валидация ввода
Проверка формата номера блока (только числа или "latest")

Защита от пустого ввода

Ограничение минимального номера блока (0)

ts
// Пример валидации
if (!/^\d+$/.test(input) && input !== 'latest') {
  throw new Error('Некорректный номер блока');
}
Механизм переключения RPC
Используются 3 резервных ноды:

ts
const PROVIDERS = [
  "https://rpc.ankr.com/eth",
  "https://eth.drpc.org",
  "https://cloudflare-eth.com"
];
Алгоритм работы:

Последовательный опрос нод

При ошибке - автоматическое переключение

После 3 неудач - показ ошибки

Визуализация ошибок
Тип ошибки	Компонент	Пример сообщения
Сетевые проблемы	Alert	"Ошибка подключения к ноде"
Неверный блок	Alert	"Блок #123 не найден"
Пустые данные	Typography	"Нет транзакций"
🎨 UI-компоненты

# BlockInput

<img src="./images/Blockinput_1.png" alt="Project Screenshot" width="300"/>



Поле ввода с валидацией

Кнопка быстрого перехода к последнему блоку

Интеграция с роутингом

TransactionsTable
https://i.imgur.com/TABLE.png

Сортировка по хэшу

Ссылки на Etherscan

Кнопки копирования

Адаптивный дизайн

♻️ Навигация по истории
Особенности реализации:

ts
// Сохранение истории в localStorage
useEffect(() => {
  localStorage.setItem('blockHistory', JSON.stringify(history));
}, [history]);
Функционал:

Кнопки "Назад"/"Вперед"

Список последних просмотренных блоков

Индикатор текущей позиции

📜 Лицензия
MIT License. Подробнее в файле LICENSE.

🛠 Доступные команды
Команда	Действие
npm run dev	Запуск dev-сервера
npm run build	Сборка production-версии
npm run start	Запуск production-сборки
npm run lint	Проверка кода ESLint


Note
Для предложений по улучшению создавайте Issues в репозитории проекта.
Pull requests приветствуются!





