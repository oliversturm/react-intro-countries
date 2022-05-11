import { useState } from 'react';

const Row = ({ country: { name, population } }) => {
  let [editing, setEditing] = useState(false);
  const startEditing = () => {
    setEditing(true);
  };
  const save = () => {
    setEditing(false);
  };
  return (
    <tr>
      <td>{editing ? <input type="text" value={name} /> : name}</td>
      <td>
        {editing ? <input type="number" value={population} /> : population}
      </td>
      <td>
        {editing ? (
          <button onClick={save}>Save</button>
        ) : (
          <button onClick={startEditing}>Edit</button>
        )}
      </td>
    </tr>
  );
};

export default Row;
