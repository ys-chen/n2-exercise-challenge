import { useState } from 'react';

export const useModal = () => {
  // state is one of none, loading, custome
  const [ state, setState ] = useState('none');
  const setNone = () => { setState('none'); };
  const setLoading = () => { setState('loading'); };
  const setCostome = (message) => { setState( message || 'custome'); };

  return [ state, setNone, setLoading, setCostome ];
};