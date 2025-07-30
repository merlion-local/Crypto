import { Paper, Typography, Box, Chip, Stack } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
// Импорт компонентов из библиотеки MUI:
// Paper — визуальный контейнер с тенью (карточка).
// Typography — текст с управлением стилем и размером.
// Box — универсальный контейнер со стилями (аналог div).
// Chip — элемент с меткой/значением, может быть кликабельным.
// Stack — упрощённая система layout'а,
//  размещает элементы в ряд или колонку с отступами.

interface Props {
  number: number;
  hash: string;
}
//Определяется интерфейс Props:
//number — номер блока (число).
//hash — хэш блока (строка).

export default function BlockInfo({ number, hash }: Props) {
  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
        <Chip 
          label={`Блок #${number}`} 
          color="primary" 
          variant="outlined"
        />
        <Chip 
          icon={<LinkIcon />}
          label="Просмотреть на Etherscan"
          clickable //clickable — превращает Chip в интерактивную кнопку.
          onClick={() => window.open(`https://etherscan.io/block/${number}`, '_blank')}
        />
      </Stack>

      <Box sx={{ wordBreak: 'break-all' }}>
        <Typography variant="body1" gutterBottom>
          <strong>Хэш блока:</strong> {hash}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {new Date().toLocaleString()}
        </Typography>
      </Box>
    </Paper>
  );
}

// 🧠 Что делает компонент BlockInfo?
// Принимает номер блока и хэш.
// Отображает:
// Номер блока.
// Кнопку-ссылку на Etherscan.
// Хэш блока.
// Текущую дату/время.