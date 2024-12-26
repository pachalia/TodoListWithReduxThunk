// Use throughout your app instead of plain `useDispatch` and `useSelector`
import { AppDispatch, AppStore, RootState } from '../redux/store.ts';
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
