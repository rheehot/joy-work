import React from 'react';
import { useDispatch } from 'react-redux';
import { WorldContent } from '@/components/World/index';
import useMount from '@/hooks/useMount';
import worldThunk from '@/features/world/worldThunk';

const World = () => {
  const dispatch = useDispatch();

  useMount(() => {
    dispatch(worldThunk());
  });

  return (
    <>
      <WorldContent />
    </>
  );
};

export default World;
