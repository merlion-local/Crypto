import { useState } from 'react';
import { useRouter } from 'next/router';//для программной навигации между страницами.
import { 
  TextField, //TextField — поле ввода.
  Button, //Button — кнопка.
  Stack, //Stack — контейнер для выстраивания элементов в ряд/колонку с отступами.
  Box,//Box — универсальный контейнер с системой стилей.
  InputAdornment,//InputAdornment — добавление иконок внутри TextField (слева/справа).
  IconButton//IconButton — кнопка с иконкой внутри.
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
//Определяется функциональный компонент BlockInput, экспортируемый по умолчанию.
export default function BlockInput() {
  const [input, setInput] = useState('');
  const router = useRouter();
//Объявление функции handleSubmit, которая вызывается при отправке формы.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = input.trim();
    if (!val) return;
    //Если поле пустое после обрезки пробелов — ничего не делаем.
    
    if (val.toLowerCase() === 'latest' || /^\d+$/.test(val)) {
      router.push(`/block/${val.toLowerCase()}`);
      //Метод test() выполняет поиск соответствия
      //  между регулярным выражением и указанной строкой (val).
    } else {
      alert('Введите корректный номер блока (число) или "latest"');
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={1} alignItems="center">
          <TextField
            type="number"
            label="Номер блока"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            //TextField типа number с меткой "Номер блока".
            //Значение связано со state input.
            // При изменении поля вызывается setInput, обновляя состояние.
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      setInput('latest');
                      router.push('/block/latest');
                    }}
                    //поле заполняется 'latest';
                   // происходит переход на /block/latest
                    edge="end"
                  >
                    <RefreshIcon />
                  </IconButton>
                </InputAdornment>
              ),
              inputProps: { min: 0 }
            }}
            sx={{ width: 300 }}
            //inputProps задаёт минимальное значение 0
            //  (отрицательные блоки не разрешены).
           // Ширина поля — 300px.
          />
          
          <Button //🔘 Кнопка отправки
            type="submit" 
            variant="contained"
            size="large"
          >
            Поиск
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

// 🧠 Что делает компонент?
// Показывает поле для ввода номера блока.
// Позволяет ввести число или 'latest'.
// При отправке — переходит на страницу с этим номером блока (/block/xxx).
// Можно также быстро перейти на "последний блок" по иконке Refresh.