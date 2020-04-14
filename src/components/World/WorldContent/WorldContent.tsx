import React from 'react';
import { useDispatch } from 'react-redux';
import { DATA, STATUS } from '@/utils/constants';
import { RootState } from '@/features';
import useTypedSelector from '@/hooks/useTypedSelector';
import { WorldState } from '@/features/world/types';
import { Layout } from '@/styles/layout';
import * as S from './WorldContent.style';

const WorldContent = () => {
  const dispatch = useDispatch();
  const { status, worldList } = useTypedSelector((state) => state.world);

  return status === STATUS.FULFILLED ? (
    <Layout>
      <S.Table>
        <thead>
          <S.Tr>
            {Object.values(DATA).map((data) => (
              <S.Th>{data}</S.Th>
            ))}
          </S.Tr>
        </thead>
        <tbody>
          {worldList?.map((worldInfo) => (
            <S.Tr>
              <S.Td>{worldInfo.alpha2Code}</S.Td>
              <S.Td>{worldInfo.capital}</S.Td>
              <S.Td>{worldInfo.name}</S.Td>
              <S.Td>{worldInfo.region}</S.Td>
              <S.Td>{worldInfo.callingCodes[0]}</S.Td>
            </S.Tr>
          ))}
        </tbody>
      </S.Table>
    </Layout>
  ) : (
    <p>loading...</p>
  );
};

export default WorldContent;
