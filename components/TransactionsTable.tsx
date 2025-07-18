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
      <Paper elevation={2} sx={{ p: 3, textAlign: 'center' }}>
        <Typography variant="body1">
          Нет транзакций в этом блоке
        </Typography>
      </Paper>
    );
  }

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
              <TableCell sx={{ wordBreak: 'break-all' }}>
                <Link 
                  href={`https://etherscan.io/tx/${tx.hash}`} 
                  target="_blank"
                >
                  {tx.hash.slice(0, 15)}...{tx.hash.slice(-10)}
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