import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/Men/mens_kurta';
import {mens_shirt} from '../../../Data/Men/mens_shirt';
import {mensShoesPage1} from '../../../Data/Men/mens_shoes';
import { womens_dress } from '../../../Data/Women/women_dress';
import { mensPantsPage1 } from '../../../Data/Pants/men_Page1';

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-6'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
            <HomeSectionCarousel data={mensShoesPage1} sectionName={"Men's Shoes"}/>
            <HomeSectionCarousel data={mens_shirt} sectionName={"Men's Shirt"}/>
            <HomeSectionCarousel data={mensPantsPage1} sectionName={"Men's Pant"}/>
            <HomeSectionCarousel data={womens_dress} sectionName={"Women's Dress"}/>
        </div>
    </div>
  )
}

export default HomePage