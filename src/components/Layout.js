import React from 'react'
import Header from './Header'
import Footer from './Footer'
import AlertContainer from '../containers/AlertContainer'

const Layout = ({ children }) => (
  <div>
    <Header />
    <AlertContainer />
    
    {children}
    <Footer />
  </div>
)

export default Layout