import React from 'react';
import { useDispatch } from 'react-redux';
import { WorldContent, WorldAdd, WorldSearch } from '@/components/World/index';
import useMount from '@/hooks/useMount';
import worldThunk from '@/features/world/worldThunk';
import { Layout } from '@/styles/layout';

const World = () => {
  const dispatch = useDispatch();

  useMount(() => {
    dispatch(worldThunk());
  });

  return (
    <Layout>
      <WorldAdd />
      <WorldSearch />
      <WorldContent />
    </Layout>
  );
};

export default World;
