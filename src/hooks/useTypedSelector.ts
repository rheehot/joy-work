import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '@/features';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
