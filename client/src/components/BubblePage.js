import React, { useState, useEffect } from 'react';

import Bubbles from './Bubbles';
import ColorList from './ColorList';
import axiosWithAuth from '../utils/axiosWIthAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const getColorList = () => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then((res) => {
        setColorList(res.data);
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    getColorList();
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={getColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
