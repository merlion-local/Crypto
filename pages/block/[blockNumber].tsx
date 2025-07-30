import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { 
  Container, Box, Button, ButtonGroup,
  CircularProgress, Alert, Typography 
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchBlock } from '../../store/blockSlice';
import BlockInfo from '../../components/BlockInfo';
//BlockInfo — отображение инфо о блоке.
import TransactionsTable from '../../components/TransactionsTable';
//TransactionsTable — таблица с транзакциями.
import BlockInput from '../../components/BlockInput';
//BlockInput — поле для ввода номера блока.

export default function BlockPage() {
  const router = useRouter();
  // Возвращает объект router, который содержит:Текущий путь URL,Параметры запроса,
  // Методы для навигации (push, replace и др.),Информацию о состоянии маршрутизации
  const { blockNumber } = router.query;//Все значения в router.query являются строками (string)
  //router.query - параметры URL, объект, содержащий параметры маршрута:
  //Динамические сегменты пути (для страниц типа /[blockNumber].tsx)
  //Параметры строки запроса (после ? в URL)
  const dispatch = useAppDispatch();
  const { loading, error, number, hash, transactions } = useAppSelector(state => state.block);
  // Получаем состояние блока из Redux-хранилища:
  // loading — идёт ли загрузка.
  // error — ошибка, если есть.
  // number, hash, transactions — данные блока.
  
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);
  // history — список просмотренных блоков.
  // historyIndex — индекс текущего блока в истории (для навигации назад/вперёд).

  // Загрузка истории из localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('blockHistory');
    //getItem('blockHistory') пытается получить значение по ключу 'blockHistory'.
    //Если ключ не найден, вернётся null.
    //Проверка наличия данных
    if (savedHistory) {
       //Проверяет, что savedHistory не null/undefined
        //(то есть данные в хранилище есть).
        //Парсинг JSON-данных
      const parsed = JSON.parse(savedHistory);
      //JSON.parse() преобразует строку из localStorage
      //  обратно в JavaScript-объект/массив.
      //Обновление состояния компонента
      setHistory(parsed);
      setHistoryIndex(parsed.length - 1);
      //setHistory(parsed) — сохраняет распарсенные данные в состоянии history
      //  ( это массив номеров блоков).
      //setHistoryIndex(parsed.length - 1)
      //  — устанавливает индекс последнего элемента массива (чтобы указывать на самый свежий блок).
    }
  }, []);// Код выполнится один раз при монтировании компонента

  // Сохранение истории в localStorage
  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('blockHistory', JSON.stringify(history));
    }
  }, [history]);//Каждый раз при изменении history — обновляем localStorage.

  // Добавление нового блока в историю
  useEffect(() => {
    if (!blockNumber || Array.isArray(blockNumber)) return;
    //!blockNumber - проверяет, что blockNumber существует (не null, undefined, пустая строка)
    //Array.isArray(blockNumber) - защита от случая, когда blockNumber может быть массивом
    //  (например, если Next.js получит несколько значений для одного параметра URL)
    //Если любое из условий верно - эффект прекращает выполнение
    if (history[historyIndex] !== blockNumber)
      //Проверка дублирования:
    //Сравнивает текущий blockNumber с последним элементом в истории (чтобы избежать дублирования)
    //historyIndex - текущая позиция в истории (обычно указывает на последний элемент) 
    
    //Создание новой истории:
    // history.slice(0, historyIndex + 1) - создаёт копию истории до текущего индекса (включительно)
    // Добавляет новый blockNumber в конец
    // Это создаёт "линейную" историю без ветвлений (как в браузере)
      {
      const newHistory = [...history.slice(0, historyIndex + 1), blockNumber];
      //Обновление состояния:
      // Сохраняет новую историю в состоянии
      // Устанавливает индекс на последний элемент
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
  }, [blockNumber]);

  // Загрузка данных блока
  useEffect(() => {
    //  // 1. Проверка валидности параметра blockNumber
    if (!blockNumber || Array.isArray(blockNumber)) return;
    //!blockNumber - проверяет, что blockNumber существует
    //  (не null, undefined, пустая строка)
    //Array.isArray(blockNumber) - защита от случая, когда параметр может быть
    //  массивом (например, если в Next.js роуте указано несколько
    //  значений для одного параметра)
    //Если любое из условий верно - эффект прекращает выполнение

    //Нормализация формата номера блока:
    ///^\d+$/ - регулярное выражение,
    //  проверяющее что строка состоит только из цифр
    let blockId = blockNumber;
    if (/^\d+$/.test(blockId)) {
      blockId = '0x' + parseInt(blockId, 10).toString(16);
    }
    //Если номер блока передан как число (например "12345"):
    // parseInt(blockId, 10) - преобразует строку в десятичное число
    // .toString(16) - конвертирует число в шестнадцатеричную систему
    // Добавляется префикс "0x" (стандартное обозначение hex-чисел в Ethereum)
    // Пример: "12345" → "0x3039"
    
    //Запрос данных через Redux:
    dispatch(fetchBlock(blockId));
  }, [blockNumber, dispatch]);
  //fetchBlock(blockId) - action creator, который создаст
  //  действие для запроса данных блока

  //Навигация по истории
  const navigateToBlock = (blockId: string) => {
    router.push(`/block/${blockId}`);
  };
  //${blockId} - подставляемый параметр (номер или хеш блока)
//   router
// Это объект маршрутизации Next.js, полученный через хук useRouter().
//  Он предоставляет методы для управления навигацией.
// .push()
// Метод для программной навигации. Аналогичен переходу по ссылке,
//  но без полной перезагрузки страницы (клиентская навигация).
// /block/${blockId}
// Динамический маршрут, где:
// /block/ - базовый путь страницы
// ${blockId} - подставляемый параметр (номер или хеш блока)
//Клиентская навигация
// В отличие от полной перезагрузки страницы:
// Сохраняется состояние приложения
// Работает быстрее (только обновляется контент)
// Поддерживается история браузера (кнопки "Назад/Вперёд")

//Проверка возможности навигации назад
  const goBack = () => {
    if (historyIndex > 0)
      //Ограничивает навигацию, если мы в начале истории (index = 0)
       {
      //Вычисление нового индекса
      //Уменьшает текущий индекс на 1
        const newIndex = historyIndex - 1;
        //Обновление состояния
      setHistoryIndex(newIndex);
      //Сохраняет новую позицию в истории

      //Навигация к блоку
      //Переходит к блоку из истории по новому индексу
      navigateToBlock(history[newIndex]);
    }
  };
//history Массив, хранящий историю просмотренных блоков 
//historyIndex Текущая позиция в истории (индекс в массиве history)
// Начальное значение: history.length - 1 (последний элемент)
//navigateToBlock Функция для перехода на страницу блока (из предыдущего примера)






  const goForward = () => {
    if (historyIndex < history.length - 1)
      //Проверка возможности навигации вперёд
      //Запрещает навигацию, если текущий элемент последний в истории
       {
      const newIndex = historyIndex + 1;
      //Увеличивает индекс на 1
      setHistoryIndex(newIndex);
      //Обновление состояния
      //Фиксирует новую позицию в истории
      navigateToBlock(history[newIndex]);
    }
    //Переход к следующему блоку из истории
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Поле ввода блока */}
      <BlockInput /> 
      {/* Кнопки навигации */}
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 4,
        gap: 2
      }}>
        {/* Flex-контейнер для кнопок "назад", "вперёд", "последний". */}
        <ButtonGroup variant="contained">
          <Button
            startIcon={<ArrowBackIcon />}
            onClick={goBack}
            disabled={historyIndex === 0}
          >
            Предыдущий
          </Button>
          <Button
            startIcon={<ArrowForwardIcon />}
            onClick={goForward}
            disabled={historyIndex === history.length - 1}
          >
            Следующий
          </Button>
        </ButtonGroup>
        {/* Кнопки навигации по истории. Блокируются на краях истории. */}

        <Box sx={{ display: 'flex', gap: 2 }}>
          {/* Кнопка загрузки последнего блока. */}
          <Button
            variant="outlined"
            onClick={() => navigateToBlock('latest')}
            startIcon={<RefreshIcon />}
          >
            Последний блок
          </Button>
          
          {history.length > 0 && (
            <Typography variant="body2" color="text.secondary">
              {historyIndex + 1} из {history.length}
            </Typography>
            // Текущий счётчик блока в истории.
          )}
        </Box>
      </Box>
          {/* Условный рендеринг: */}
      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
          {/* //CircularProgress - компонент MUI для отображения кругового
           индикатора загрузки */}
        </Box>
        // Компонент будет отображен только когда loading равно true
        // Если loading - false, ничего не рендерится (React возвращает null)
        //Box - это layout-компонент из MUI
        //  (аналог <div> с дополнительными возможностями)
      )}
      {/* //условный рендеринг  */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      {/* Работает по принципу "логического И":
      Если error содержит значение (не null, не undefined, не пустая строка),
       отображается компонент <Alert>
      Если error ложный (false, 0, "", null, undefined),
       React ничего не рендерит */}


          {/* Данные блока и транзакции */}
      {number && <BlockInfo number={parseInt(number, 16)} hash={hash || ''} />}
      <TransactionsTable transactions={transactions} />
        {/* BlockInfo показывает номер (в десятичном формате) и хэш.
        TransactionsTable — список транзакций. */}

    
    {/* Если история содержит более 1 блока — отображается список кнопок
       со всеми просмотренными блоками.
      Активный выделяется contained, остальные — outlined. */}
      {history.length > 1 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle2" gutterBottom>
            История просмотров:
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {history.map((block, index) => (
              <Button
                key={index}
                variant={index === historyIndex ? "contained" : "outlined"}
                size="small"
                onClick={() => {
                  setHistoryIndex(index);
                  navigateToBlock(block);
                }}
              >
                #{block === 'latest' ? 'latest' : block}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Container>
  );
}
// | Что делает                               | Как работает                   |
// | ---------------------------------------- | ------------------------------ |
// | 🔍 Загружает блок по номеру или "latest" | Через Redux thunk `fetchBlock` |
// | 💾 Сохраняет историю в `localStorage`    | Состояние + `useEffect`        |
// | 🔙🔜 Навигация назад/вперёд              | По `historyIndex`              |
// | 🧾 Показывает информацию о блоке         | Компонент `BlockInfo`          |
// | 📄 Показывает транзакции                 | Компонент `TransactionsTable`  |
// | 💬 Обрабатывает ошибки и загрузку        | Через состояние Redux          |





// SSR отсутствует:
// Нет getServerSideProps
// В коде отсутствует экспорт асинхронной функции getServerSideProps,
//  которая является маркером SSR в Next.js.

// Клиентские хуки
// Используются useRouter, useState, useEffect — эти хуки работают только на клиенте.

// Redux на клиенте
// Данные загружаются через useAppDispatch после монтирования компонента.

// 💡 Фактическое поведение:
// Гибридный рендеринг
// Next.js по умолчанию выполняет:

// Первоначальный рендеринг пустой страницы на сервере

// Гидратацию (hydration) на клиенте

// Динамическая загрузка
// Данные блоков загружаются клиентским кодом через Redux Thunk (fetchBlock).

// Роутинг
// useRouter работает на клиенте,
//  параметры blockNumber становятся доступны только после гидратации.

// РЕФАКТОРИНГ
// Добавить getServerSideProps для предзагрузки данных

// Использовать next/dynamic для тяжёлых компонентов

// Перенести Redux-инициализацию на сервер