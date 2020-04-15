import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DATA, STATUS } from '@/utils/constants';
import useTypedSelector from '@/hooks/useTypedSelector';
import {
  deleteWorld,
  alignByType,
  loadMore,
} from '@/features/world/worldSlice';
import * as S from './WorldContent.style';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

const WorldContent = () => {
  const [target, setTarget] = useState<HTMLDivElement>();
  const dispatch = useDispatch();
  const { status, currentWorldList, debouncedSearchTerm } = useTypedSelector(
    (state) => state.world
  );

  useIntersectionObserver(() => {
    dispatch(loadMore());
  }, target);

  return status === STATUS.FULFILLED ? (
    <>
      <S.Table>
        <thead>
          <S.Tr>
            {Object.values(DATA).map((data) => (
              <S.Th onClick={() => dispatch(alignByType(data))} key={data}>
                {data}
              </S.Th>
            ))}
          </S.Tr>
        </thead>
        <tbody>
          {currentWorldList
            .filter((worldInfo) =>
              worldInfo.name
                .toUpperCase()
                .includes(debouncedSearchTerm.toUpperCase())
            )
            .map((worldInfo) => (
              <S.Tr key={worldInfo.alpha2Code}>
                <S.Td>{worldInfo.alpha2Code}</S.Td>
                <S.Td>{worldInfo.capital}</S.Td>
                <S.Td>{worldInfo.name}</S.Td>
                <S.Td>{worldInfo.region}</S.Td>
                <S.Td>{worldInfo.callingCodes.join(', ')}</S.Td>
                <S.Td>
                  <S.Button
                    onClick={() => dispatch(deleteWorld(worldInfo.alpha2Code))}
                  >
                    X
                  </S.Button>
                </S.Td>
              </S.Tr>
            ))}
        </tbody>
      </S.Table>
      <div ref={(element) => setTarget(element as HTMLDivElement)} />
    </>
  ) : (
    <p>loading...</p>
  );
};

export default WorldContent;
