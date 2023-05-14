import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { charactersReducer } from './characters/slice';
import { themeReducer } from './theme/slice';
import { characterReducer } from './character/slice';
import { episodesReducer } from './episodes/slice';
import { episodeReducer } from './episode/slice';
import { locationsReducer } from './locations/slice';
import { locationReducer } from './location/slice';

const persistConfig = {
  key: 'R&M',
  storage,
  whitelist: ['library', 'theme'],
};

const rootReducer = combineReducers({
  character: characterReducer,
  characters: charactersReducer,
  episode: episodeReducer,
  episodes: episodesReducer,
  location: locationReducer,
  locations: locationsReducer,
  // library:
  theme: themeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
