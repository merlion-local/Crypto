import { useState } from 'react';
import { useRouter } from 'next/router';
import { 
  TextField, 
  Button, 
  Stack, 
  Box,
  InputAdornment,
  IconButton
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function BlockInput() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const val = input.trim();
    if (!val) return;
    
    if (val.toLowerCase() === 'latest' || /^\d+$/.test(val)) {
      router.push(`/block/${val.toLowerCase()}`);
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
                    edge="end"
                  >
                    <RefreshIcon />
                  </IconButton>
                </InputAdornment>
              ),
              inputProps: { min: 0 }
            }}
            sx={{ width: 300 }}
          />
          <Button 
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