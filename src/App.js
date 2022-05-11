import { useEffect, useState } from 'react';
import Row from './Row';
import './styles.css';

export default function App() {
  // const countries = [
  //   { name: 'UK', population: 60000000 },
  //   { name: 'Canada', population: 33000000 },
  //   { name: 'Australia', population: 20000000 },
  // ];

  const [loadState, setLoadState] = useState({ state: 'idle' });

  useEffect(() => {
    fetch('https://outlier.oliversturm.com/countries')
      .then((res) => res.json())
      .then(({ data }) => {
        setLoadState({ state: 'loaded', data });
      })
      .catch((ex) => {
        setLoadState({ state: 'error', error: ex });
      });
  }, []);

  return (
    <div className="App">
      <h1>List of countries</h1>
      {loadState.state === 'loaded' ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {loadState.data.map((c, i) => (
              <Row country={c} key={i} />
            ))}
          </tbody>
        </table>
      ) : loadState.state === 'error' ? (
        <div>
          <h3>Error</h3>
          <p>{loadState.error.message}</p>
        </div>
      ) : (
        <div>No data loaded</div>
      )}
    </div>
  );
}
