import React from 'react'
import Main_carousel from '../Homecarosel/Maincarousel'
import Maincarousel from '../Homecarosel/Maincarousel'
import HomesectionCsrousel from '../Homecarosel/HomesectionCsrousel'
import {kurtaPage1} from "../productdata/kurta.js"
const Homepage = () => {
  return (
    <div>
        <Maincarousel/>
        <div className='space y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomesectionCsrousel section_title="Newly  picked for you" data={kurtaPage1}/>
          <HomesectionCsrousel section_title="Men'shirts" data={kurtaPage1}/>
          <HomesectionCsrousel section_title="Branded" data ={kurtaPage1}/>

        </div>
    </div>
  )
}

export default Homepage