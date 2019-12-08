import React from 'react';
import Global from './styles/global';
import Home from './pages/Home/Home';
import './index.css';


const lorem = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora.';

const data = [
  {
    id: Math.random(),
    title: 'Box Header 1',
    text: lorem,
    bgColor: '#fff'
  },
  {
    id: Math.random(),
    title: 'Box Header 2',
    text: lorem,
    bgColor: '#fff'
  },
  {
    id: Math.random(),
    title: 'Box Header 3',
    text: lorem,
    bgColor: '#fff'
  },
  {
    id: Math.random(),
    title: 'Box Header 4',
    text: lorem,
    bgColor: '#fff'
  }
];

function App() {
  return (
    <>
      <Global />
      <Home boxData={data} />
    </>
  );
}

export default App;
