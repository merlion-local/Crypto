import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link,
  Chip,
  IconButton
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

interface Transaction {
  hash: string;
  from: string;
  to: string | null;
}

interface Props {
  transactions: Transaction[];
}

export default function TransactionsTable({ transactions }: Props) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  if (!transactions?.length) {
    return (
      <Paper elevation={2} sx={{ p: 2, textAlign: 'center', mx: 1 }}>
        <Typography variant="body1">
          Нет транзакций в этом блоке
        </Typography>
      </Paper>
    );
  }

  return (
    <TableContainer 
      component={Paper} 
      elevation={3}
      sx={{ 
        mx: 1,
        overflowX: 'auto',
        '& .MuiTableCell-root': {
          px: { xs: 1, sm: 2 },
          py: { xs: 1, sm: 1.5 }
        }
      }}
    >
      <Table sx={{ minWidth: 650 }}>
        <TableHead sx={{ bgcolor: 'background.paper' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>От</TableCell>
            <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Кому</TableCell>
            <TableCell sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>Хэш</TableCell>
            <TableCell width="40px"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.hash} hover>
              <TableCell sx={{ wordBreak: 'break-all', maxWidth: { xs: 100, sm: 200 } }}>
                <Link
                  href={`https://etherscan.io/address/${tx.from}`}
                  target="_blank"
                  sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                >
                  {tx.from}
                </Link>
              </TableCell>
              <TableCell sx={{ wordBreak: 'break-all', maxWidth: { xs: 100, sm: 200 } }}>
                {tx.to ? (
                  <Link
                    href={`https://etherscan.io/address/${tx.to}`}
                    target="_blank"
                    sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                  >
                    {tx.to}
                  </Link>
                ) : (
                  <Chip label="Создание контракта" size="small" />
                )}
              </TableCell>
              <TableCell sx={{ wordBreak: 'break-all', maxWidth: { xs: 80, sm: 150 } }}>
                <Link
                  href={`https://etherscan.io/tx/${tx.hash}`}
                  target="_blank"
                  sx={{ fontSize: { xs: '0.8rem', sm: '0.875rem' } }}
                >
                  {tx.hash.slice(0, 8)}...{tx.hash.slice(-6)}
                </Link>
              </TableCell>
              <TableCell>
                <IconButton
                  size="small"
                  onClick={() => copyToClipboard(tx.hash)}
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