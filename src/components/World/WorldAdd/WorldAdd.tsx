import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { DATA } from '@/utils/constants';
import * as S from './WorldAdd.style';
import { WorldInputAction } from '@/features/world/types';
import { addWorld } from '@/features/world/worldSlice';

const WorldAdd = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (values: WorldInputAction) => {
    dispatch(addWorld(values));
  };

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      {Object.values(DATA).map((data) => (
        <S.Input
          key={data}
          name={data}
          type="text"
          placeholder={data}
          ref={register({ required: true })}
        />
      ))}
      <button type="submit">??</button>
    </S.Form>
  );
};

export default WorldAdd;
