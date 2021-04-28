import React from 'react'
import Layout from '../Utils/Layout'
import Bottom from './About/Bottom'
import FirstAbout from './About/FirstAbout'
import Middle from './About/Middle'

const View = () => {
    return(
        <Layout>
            <FirstAbout />
            <Middle />
            <Bottom />
        </Layout>
    )
}

const DeskAbout = () => {
    return <View />
}

export default DeskAbout
