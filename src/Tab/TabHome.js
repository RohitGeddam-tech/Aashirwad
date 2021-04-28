import React from 'react'
import MobBanner from '../Mobile/Home/MobBanner'
import MobOffer from '../Mobile/Home/MobOffer'
import MobService from '../Mobile/Home/MobService'
import Layout from '../Utils/LayoutMob'
import TabAbout from './TabAbout'
import TabContact from './TabContact'

const TabHome = () => {
    return (
        <Layout>
            <div style={{paddingTop:'64px'}}>
            <MobBanner />
            <TabAbout />
            <MobService />
            <MobOffer />
            <TabContact />
            </div>
        </Layout>
    )
}

export default TabHome
