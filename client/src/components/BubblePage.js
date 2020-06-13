import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Bubbles from './Bubbles';
import ColorList from './ColorList';
import axiosWithAuth from '../utils/axiosWIthAuth';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('http://localhost:5000/api/colors')
      .then((res) => {
        console.log(res);
        setColorList(res.data);
      })
      .catch((err) => console.error(err.message));
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
