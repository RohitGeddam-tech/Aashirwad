import React from 'react'
import LayoutMob from '../Utils/LayoutMob'
import MobFirst from './About/MobFirst'
import MobMiddle from './About/MobMiddle'
import MobBottom from './About/MobBottom'

const View = () => {
    return(
        <LayoutMob>
            <div style={{paddingTop:'64px'}}>
                <MobFirst />
                <MobMiddle />
                <MobBottom />
            </div>
        </LayoutMob>
    )
}

const MobAboutPage = () => {
    return <View />
}

export default MobAboutPage