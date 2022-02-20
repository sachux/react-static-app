import React from 'react'
import Header from './components/Header'
import Contacts from './components/Contacts'
import Details from './components/Details'
import Footer from './components/Footer'

import './styles.css'

export default function App(){
    return (
        <main>
        <div className='businessCard'>
            <Header />
            <Contacts />
            <Details />
            <Footer />
        </div>
        </main>
    )
}