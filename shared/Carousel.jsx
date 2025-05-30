"use client"
import { useReducer, useState, useEffect } from 'react';
import css from './Carousel.module.css';
//import { Left, Right } from './Icons.jsx';
import { LeftArrow, RightArrow } from 'shared';

export default function Carousel({ collection, upTo = 3, vertical=false }) {
  const initialState = {
    all: collection,
    current: 0,
  };

  const reducer = (state, action) => {
    const { current, all } = state;
    const size = all.length;

    switch (action.type) {
      case 'next':
        return { ...state, current: (current + 1) % size };
      case 'prev':
        return { ...state, current: current === 0 ? size - 1 : (current - 1) % size };
      default:
        throw new Error(`'${action.type}' command doesn't exist`);
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [transitionDirection, setTransitionDirection] = useState('next'); // Track transition direction

  useEffect(() => {
    let timerID;

    const handleTransitionDirectionDebounce =()=>{
      if (timerID) clearInterval(timerID)

      setTimeout(()=>{
        setTransitionDirection('curr')

      }, 200)

    }

    handleTransitionDirectionDebounce()

    return () => {
      if (timerID) clearInterval(timerID)
    }
  }, [transitionDirection])
  

  const nextElement = () => {
    setTransitionDirection('next');
    dispatch({ type: 'next' });
  };

  const prevElement = () => {
    setTransitionDirection('prev');
    dispatch({ type: 'prev' });
  };

  if (!collection) return <>No collection provided!</>;

  const howMany = (upTo) => {
    return Array.from({ length: upTo }, (_, i) => state.all[(state.current + i) % state.all.length]);
  };

  const panels = () => {
    const size = state.all.length;
    const smaller = upTo <= size ? upTo : size;
    return howMany(smaller).map((elem, i) => (
      <div
        key={i}
        className={`${css.carrouselElement} ${
          css[transitionDirection]
          //transitionDirection === 'next' ? css.slideNext : css.slidePrev
        }`}
      >
        {elem}
      </div>
    ));
  };


  const elements = panels()
  if (!elements) return <div> loading ... </div>

  return (
    <>
      <div className={`${css.carrousel} ${vertical && css.vertical}`}>
        <div className={css.left}> <LeftArrow onClick={prevElement} /></div>
        {elements}
        <div className={css.right}><RightArrow onClick={nextElement} /></div>
      </div>
    </>
  );
}

