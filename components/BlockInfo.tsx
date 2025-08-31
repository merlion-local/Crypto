import { Paper, Typography, Box, Chip, Stack } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

interface Props {
  number: number;
  hash: string;
}

export default function BlockInfo({ number, hash }: Props) {
  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2, mx: 1 }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems={{ xs: 'flex-start', sm: 'center' }} sx={{ mb: 2 }}>
        <Chip
          label={`Блок #${number}`}
          color="primary"
          variant="outlined"
          sx={{ mb: { xs: 1, sm: 0 } }}
        />
        <Chip
          icon={<LinkIcon />}
          label="Просмотреть на Etherscan"
          clickable
          onClick={() => window.open(`https://etherscan.io/block/${number}`, '_blank')}
        />
      </Stack>
      <Box sx={{ wordBreak: 'break-all' }}>
        <Typography variant="body1" gutterBottom sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
          <strong>Хэш блока:</strong> {hash}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {new Date().toLocaleString()}
        </Typography>
      </Box>
    </Paper>
  );
}