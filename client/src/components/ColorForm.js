import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWIthAuth';

const initialColor = {
  color: '',
  code: { hex: '' }
};

const ColorForm = ({ updateColors }) => {
  const [colorToAdd, setColorToAdd] = useState(initialColor);

  const addColor = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('http://localhost:5000/api/colors', colorToAdd)
      .then((res) => {
        updateColors();
        setColorToAdd(initialColor);
      })
      .catch((err) => console.error('error', err.message));
  };

  return (
    <form onSubmit={addColor}>
      <legend>add color</legend>
      <label>
        color name:
        <input
          onChange={(e) =>
            setColorToAdd({ ...colorToAdd, color: e.target.value })
          }
          value={colorToAdd.color}
        />
      </label>
      <label>
        hex code:
        <input
          onChange={(e) =>
            setColorToAdd({
              ...colorToAdd,
              code: { hex: e.target.value }
            })
          }
          value={colorToAdd.code.hex}
        />
      </label>
      <div className='button-row'>
        <button type='submit'>add</button>
      </div>
    </form>
  );
};
export default ColorForm;
