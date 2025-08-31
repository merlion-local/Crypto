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
import TransactionsTable from '../../components/TransactionsTable';
import BlockInput from '../../components/BlockInput';

export default function BlockPage() {
  const router = useRouter();
  const { blockNumber } = router.query;

  const dispatch = useAppDispatch();
  const { loading, error, number, hash, transactions } = useAppSelector(state => state.block);

  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(() => {
    const savedHistory = localStorage.getItem('blockHistory');
    if (savedHistory) {
      const parsed = JSON.parse(savedHistory);
      setHistory(parsed);
      setHistoryIndex(parsed.length - 1);
    }
  }, []);

  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('blockHistory', JSON.stringify(history));
    }
  }, [history]);

  useEffect(() => {
    if (!blockNumber || Array.isArray(blockNumber)) return;

    if (history[historyIndex] !== blockNumber) {
      const newHistory = [...history.slice(0, historyIndex + 1), blockNumber];
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
  }, [blockNumber]);

  useEffect(() => {
    if (!blockNumber || Array.isArray(blockNumber)) return;

    let blockId = blockNumber;
    if (/^\d+$/.test(blockId)) {
      blockId = '0x' + parseInt(blockId, 10).toString(16);
    }

    dispatch(fetchBlock(blockId));
  }, [blockNumber, dispatch]);

  const navigateToBlock = (blockId: string) => {
    router.push(`/block/${blockId}`);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      navigateToBlock(history[newIndex]);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      navigateToBlock(history[newIndex]);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 3, px: { xs: 1, sm: 2 } }}>
      <BlockInput />
      
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'stretch', sm: 'center' },
        mb: 3,
        gap: 2
      }}>
        <ButtonGroup 
          variant="contained" 
          sx={{ 
            width: { xs: '100%', sm: 'auto' },
            '& .MuiButton-root': {
              flex: { xs: 1, sm: 'none' }
            }
          }}
        >
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

        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          alignItems: 'center',
          justifyContent: { xs: 'space-between', sm: 'flex-end' },
          width: { xs: '100%', sm: 'auto' }
        }}>
          <Button
            variant="outlined"
            onClick={() => navigateToBlock('latest')}
            startIcon={<RefreshIcon />}
            sx={{ 
              flexShrink: 0,
              minHeight: { xs: 48, sm: 'auto' }
            }}
          >
            Последний блок
          </Button>
          {history.length > 0 && (
            <Typography 
              variant="body2" 
              color="text.secondary" 
              sx={{ 
                minWidth: 80,
                textAlign: { xs: 'center', sm: 'left' }
              }}
            >
              {historyIndex + 1} из {history.length}
            </Typography>
          )}
        </Box>
      </Box>

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ mb: 3, mx: 1 }}>
          {error}
        </Alert>
      )}

      {number && <BlockInfo number={parseInt(number, 16)} hash={hash || ''} />}
      
      <Box sx={{ mt: 3 }}>
        <TransactionsTable transactions={transactions} />
      </Box>

      {history.length > 1 && (
        <Box sx={{ mt: 3, px: 1 }}>
          <Typography variant="subtitle2" gutterBottom>
            История просмотров:
          </Typography>
          <Box sx={{ 
            display: 'flex', 
            gap: 1, 
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', sm: 'flex-start' }
          }}>
            {history.map((block, index) => (
              <Button
                key={index}
                variant={index === historyIndex ? "contained" : "outlined"}
                size="small"
                onClick={() => {
                  setHistoryIndex(index);
                  navigateToBlock(block);
                }}
                sx={{ 
                  minWidth: 60,
                  fontSize: { xs: '0.7rem', sm: '0.875rem' },
                  py: { xs: 0.5, sm: 1 }
                }}
              >
                #{block === 'latest' ? 'latest' : block.length > 8 ? `${block.slice(0, 6)}...` : block}
              </Button>
            ))}
          </Box>
        </Box>
      )}
    </Container>
  );
}