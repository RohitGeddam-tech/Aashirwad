import React from 'react'
import MobHeading from '../../Utils/MobHeading'
import '../css/MobOffer.css'
import MobSlick from './MobSlick'

const MobOffer = () => {
    return (
        <div className='moboffer'>
            <MobHeading text='Offers' name='mobaboutHeading' />
            <div className='sliderContainer'><MobSlick /></div>
        </div>
    )
}

export default MobOffer