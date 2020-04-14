import { useEffect } from 'react';

const useMount = (fn: Function) => {
  useEffect(() => {
    fn();
  }, []);
};

export default useMount;
