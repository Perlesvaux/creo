"use client";
import { useState, useMemo } from 'react';
import css from './DeedsScreen.module.css';
import LookUp from './LookUp.jsx';
import { useDebounce } from '../Custom.js'

export default function DeedsScreen({ portfolios }) {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500) // 500ms delay

  const filteredPortfolios = useMemo(() => {
    if (!debouncedSearchQuery.trim()) return portfolios
    
    //const searchTerms = debouncedSearchQuery.toLowerCase().split(" ").filter(Boolean)
    const searchTerms = debouncedSearchQuery.toLowerCase().split(" ")
    
    return portfolios.filter(item => {
      const itemTags = item.props.tags.toLowerCase()
      return searchTerms.every(term => itemTags.includes(term))
    })
  }, [portfolios, debouncedSearchQuery]) // Using debounced value here


  // Memoize filtered portfolios to avoid recalculating on every render
  //const filteredPortfolios = useMemo(() => {
  //  if (!searchQuery.trim()) return portfolios; // Return all if empty query
  //
  //  const searchTerms = searchQuery.toLowerCase().split(" ");
  //
  //  return portfolios.filter((item) => {
  //    const itemTags = item.props.tags.toLowerCase();
  //    return searchTerms.every(term => itemTags.includes(term));
  //  });
  //}, [portfolios, searchQuery]);

  return (
    <div className={css.container}>
      <LookUp value={searchQuery} setter={setSearchQuery} />
      
      <div className={css.records}>
        {filteredPortfolios.map((item) => (
          <div key={item.props.tags.toLowerCase()}>{item}</div>
        ))}
      </div>
    </div>
  );
}


//"use client"
//import { useState } from 'react'
////import { Portfolios } from 'shared'
////import SearchIcon from './SearchIcon.jsx'
//import css from './DeedsScreen.module.css'
//import LookUp from './LookUp.jsx'
//
//
//export default function DeedsScreen({ portfolios }) {
//  const [state, setState] = useState("")
//
//  const filterByTags = (e) => {
//    const wordByWord = state.toLowerCase().split(" ")
//    const result = wordByWord.every(word => e.includes(word))
//    return result
//  } 
//
//  return <div className={css.container}>
//
//    <LookUp value={state} setter={setState} />
//
//    <div className={css.records}>
//      { portfolios.map((item)=> (
//        <div key={item.props.tags.toLowerCase()} >{item}</div>
//      )).filter(e => filterByTags(e.key) ) }
//    </div>
//
//  </div>
//}

