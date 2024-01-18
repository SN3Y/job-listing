'use client'
import Header from './components/Header'
import FilterHeader from './components/FilterHeader'
import listData from '../data/data.json'
import { useEffect, useState } from 'react'
import Card from './components/Card'
import {listType}  from '../types/types'

export default function Home() {

  const [data, setData] = useState<listType[]>([])
  const [filter, setFilter] = useState<string[]>([])

  useEffect(()=> {
    if(filter.length === 0){
    setData(listData)}
  },[filter])

  function filterFunction(filterBy:string){
    setData(data.filter(dato => [dato.role, dato.level, ...dato.languages, ...dato.tools].includes(filterBy)))
  }

  const addFilter = (clickFilter:string) => {

    !filter.includes(clickFilter) ?
    setFilter([...filter, clickFilter])
    :
    null 
  }

  function clearFilter(deleteFilter : string){
    setFilter(filter.filter(newFilter => newFilter != deleteFilter))
  }

  function clearAllFilter(){
    setFilter([])
  }


return(
    <div>
      <div className='w-full top-0'>
        <Header />
        
        <FilterHeader filter={filter} clearAllFilter={clearAllFilter} clearFilter={clearFilter} />
        
      </div>
      <div className='md:mt-12 w-screen h-screen grid justify-center items-center'>

          { 
            data.map(dato => {
              return (
                        <Card 
                          key={dato.id}
                          id={dato.id}
                          company={dato.company}
                          logo={dato.logo}
                          condition={dato.condition}
                          featured={dato.featured}
                          position={dato.position}
                          role={dato.role}
                          level={dato.level}
                          postedAt={dato.postedAt}
                          contract={dato.contract}
                          location={dato.location}
                          languages={dato.languages}
                          tools={dato.tools}
                          filter={filter}
                          filterFunction={filterFunction}
                          addFilter={addFilter}
                        />
              )
            }
            )
          }
          <div className='mt-32 w-full invisible'>-</div>   
      </div>
    </div>
  
  )
}
