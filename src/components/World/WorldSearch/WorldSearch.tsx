import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './WorldSearch.style';
import useDebounce from '@/hooks/useDebounce';
import { updateSearchTerm } from '@/features/world/worldSlice';

const WorldSearch = () => {
  const dispatch = useDispatch();
  useDebounce(500);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchTerm(e.target.value));
  };

  return (
    <S.Search>
      <input onChange={onChange} type="text" placeholder="이름 검색" />
    </S.Search>
  );
};

export default WorldSearch;
