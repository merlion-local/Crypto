import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,//Paper — карточка с фоном и тенью.
  Typography,//Typography — компонент текста
  Link,
  Chip,//Chip — маленький компонент-метка.
  IconButton//IconButton — кнопка с иконкой.
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Transaction {
  hash: string;
  from: string;
  to: string | null;
}
// Тип для одной транзакции:
// hash — хэш транзакции.
// from — адрес отправителя.
// to — адрес получателя или null (в случае создания контракта).

interface Props {
  transactions: Transaction[];
}
// Типизация пропсов: массив транзакций.

export default function TransactionsTable({ transactions }: Props) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };// Функциональный компонент, получает в пропсах массив transactions.
  // Функция копирует текст в буфер обмена при помощи Web API navigator.clipboard.
//   navigator.clipboard
// Это часть Clipboard API, доступная в современных браузерах.
// Позволяет взаимодействовать с буфером обмена системы.
// .writeText(text)
// Асинхронный метод, который записывает переданную строку в буфер обмена.
// Возвращает Promise, который разрешается при успешном копировании.
// Параметр text: string
// Типизация TypeScript, указывающая что функция принимает только строки.
  
//Обработка пустого списка
// Это условие проверяет, является ли массив
//  transactions пустым или несуществующим (null/undefined).
// Если transactions — null или undefined, выражение вернёт undefined (без ошибки).
// Если transactions существует, вернёт transactions.length. 
// ! Приводит результат transactions?.length к булеву типу и инвертирует его:
// 0 (пустой массив) → true
// undefined (нет массива) → true
// >0 (есть транзакции) → false
  if (!transactions?.length) {
    return (
      <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="body1">
          Нет транзакций в этом блоке
        </Typography>
      </Paper>
    );
//  Когда условие выполнится?
// Условие верно (true), если:
// transactions — пустой массив ([] → length=0).
// transactions — null или undefined.
// transactions — не массив (например, строка "test" → length=4, условие ложно).
  }
//   //Если transactions пуст или не передан:
// Отображается карточка (Paper) с сообщением "Нет транзакций в этом блоке".

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead sx={{ bgcolor: 'background.paper' }}>
          <TableRow>
            <TableCell><strong>От</strong></TableCell>
            <TableCell><strong>Кому</strong></TableCell>
            <TableCell><strong>Хэш</strong></TableCell>
            <TableCell width="50px"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.hash} hover>
              <TableCell sx={{ wordBreak: 'break-all' }}>
                <Link 
                  href={`https://etherscan.io/address/${tx.from}`} 
                  target="_blank"
                >
                  {tx.from}
                </Link>
                
              </TableCell>
              <TableCell sx={{ wordBreak: 'break-all' }}>
                {tx.to ? (
                  <Link 
                    href={`https://etherscan.io/address/${tx.to}`} 
                    target="_blank"
                  >
                    {tx.to}
                  </Link>
                ) : (
                  <Chip label="Создание контракта" size="small" />
                )}
                
              </TableCell>
                {/* // Если tx.to существует — выводится ссылка на адрес получателя.
                Если tx.to === null — выводится Chip с надписью "Создание контракта"
                 (контракт деплоится, а не отправляется конкретному адресу). */}
              <TableCell sx={{ wordBreak: 'break-all' }}>
                <Link 
                  href={`https://etherscan.io/tx/${tx.hash}`} 
                  target="_blank"
                >
                  {tx.hash.slice(0, 15)}...{tx.hash.slice(-10)}
                </Link>
                {/* Отображается сокращённый хэш транзакции
                 (первые 15 символов и последние 10).
                Ссылка ведёт на страницу транзакции на Etherscan. */}
              </TableCell>
              <TableCell>
                <IconButton 
                  size="small" 
                  onClick={() => copyToClipboard(tx.hash)} //При клике вызывает copyToClipboard,
                  //  копируя tx.hash в буфер.
                >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


// | Функция                        | Описание                                            |
// | ------------------------------ | --------------------------------------------------- |
// | 💾 Получает транзакции         | Через пропсы `transactions`                         |
// | ❗ Проверяет, есть ли они       | Если нет — показывает сообщение                     |
// | 📄 Строит таблицу              | С колонками "От", "Кому", "Хэш", "Копировать"       |
// | 🔗 Делает ссылки кликабельными | Открываются на [etherscan.io](https://etherscan.io) |
// | 📋 Позволяет копировать хэш    | Через иконку "копировать"                           |
