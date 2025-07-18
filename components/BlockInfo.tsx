import { Paper, Typography, Box, Chip, Stack } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

interface Props {
  number: number;
  hash: string;
}

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
          clickable
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