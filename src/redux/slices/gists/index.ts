import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GistData } from 'src/types/GistData';

export interface GistsState {
  isLoading: boolean;
  gists: GistData[];
  error?: string;
}

const initialState: GistsState = {
  isLoading: true,
  gists: [],
};

const gistsSlice = createSlice({
  name: 'gists',
  initialState,
  reducers: {
    setGists(state, action: PayloadAction<GistData[]>) {
      state.isLoading = false;
      state.gists = action.payload;
    },

    setGistsError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { setGists, setGistsError } = gistsSlice.actions;
export const gistsReducer = gistsSlice.reducer;
