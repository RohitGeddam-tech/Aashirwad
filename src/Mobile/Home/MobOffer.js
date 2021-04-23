import React from 'react'
import MobHeading from '../../Utils/MobHeading'
import '../css/MobOffer.css'
import SlickSlider from '../../Desktop/Home/SlickSlider'

const MobOffer = () => {
    return (
        <div className='moboffer'>
            <MobHeading text='Offers' name='mobaboutHeading' />
            <div className='sliderContainer'><SlickSlider /></div>
        </div>
    )
}

export default MobOffer
