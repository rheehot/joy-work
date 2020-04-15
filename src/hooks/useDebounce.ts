import { useEffect } from 'react';
import useTypedSelector from '@/hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { updateDebouncedSearchTerm } from '@/features/world/worldSlice';

const useDebounce = (delay: number): void => {
  const dispatch = useDispatch();
  const { searchTerm } = useTypedSelector((state) => state.world);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      dispatch(updateDebouncedSearchTerm(searchTerm));
    }, delay);

    return () => clearTimeout(timeoutID);
  }, [searchTerm, delay]);
};

export default useDebounce;
