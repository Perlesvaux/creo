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
    
    const searchTerms = debouncedSearchQuery.toLowerCase().split(" ")
    
    return portfolios.filter(item => {
      const itemTags = item.props.tags.toLowerCase()
      return searchTerms.every(term => itemTags.includes(term))
    })
  }, [portfolios, debouncedSearchQuery]) // Using debounced value here


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

