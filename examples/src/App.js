import { useState, useEffect } from 'react';
import useIsMounted from 'use-is-mounted-ref';

function App() {
  const isMounted = useIsMounted();

  const initialState = {
    loading: false,
    error: false,
    data: [],
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    fetch('https://www.reddit.com/.json')
      .then((response) => response.json())
      .then(({ data }) => {
        if (isMounted.current) {
          setState((prevState) => {
            return {
              ...prevState,
              loading: false,
              data,
            };
          });
        }
      })
      .catch((err) => {
        if (isMounted.current) {
          setState((prevState) => {
            return { ...prevState, loading: false, error: true };
          });
        }
      });
  }, [isMounted]);

  return state.loading ? 'Loading...' : 'Found Data!';
}

export default App;
