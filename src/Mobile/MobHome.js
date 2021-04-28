import React from 'react'
import LayoutMob from '../Utils/LayoutMob'
import MobAbout from './Home/MobAbout'
import MobBanner from './Home/MobBanner'
import MobContact from './Home/MobContact'
import MobOffer from './Home/MobOffer'
import MobService from './Home/MobService'

const View = () => {
    return(
        <LayoutMob>
            <div style={{paddingTop:'64px'}}>
                <MobBanner />
                <MobAbout />
                <MobService />
                <MobOffer />
                <MobContact />
            </div>
        </LayoutMob>
    )
}

const MobHome = () => {
    return <View />
}

export default MobHome
