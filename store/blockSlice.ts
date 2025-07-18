import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const providers = [
  "https://rpc.ankr.com/eth",
  "https://eth.drpc.org",
  "https://cloudflare-eth.com"
];

interface Transaction {
  hash: string;
  from: string;
  to: string | null;
}

interface BlockState {
  number: string | null;
  hash: string | null;
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
}

const initialState: BlockState = {
  number: null,
  hash: null,
  transactions: [],
  loading: false,
  error: null,
};

export const fetchBlock = createAsyncThunk(
  'block/fetchBlock',
  async (blockNumber: string) => {
    for (const url of providers) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'eth_getBlockByNumber',
            params: [blockNumber, true],
            id: 1,
          }),
        });

        if (!res.ok) continue;
        const data = await res.json();
        if (data.result) return data.result;
      } catch {}
    }
    throw new Error('Failed to fetch block data from providers');
  }
);

const blockSlice = createSlice({
  name: 'block',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlock.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlock.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.number = action.payload.number;
        state.hash = action.payload.hash;
        state.transactions = action.payload.transactions || [];
      })
      .addCase(fetchBlock.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error loading block';
      });
  },
});

export default blockSlice.reducer;