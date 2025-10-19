import React from 'react'
import HeaderSection from './components/HeaderSection/HeaderSection'
import MiddleSection from './components/MiddleSection/MiddleSection'
import AfterMiddleSection from './components/AfterMiddle/AfterMiddleSection'
import CEOsays from './components/CEOsays/CEOsays'
import AfterCeoSays from './components/AfterCeoSays/AfterCeoSays'
import FeedbackSection from './components/FeedbackSection/FeedbackSection'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className=''>
      <HeaderSection/>
      <MiddleSection/>
      <AfterMiddleSection/>
      <CEOsays/>
      {/* <AfterCeoSays/> */}
      {/* <FeedbackSection/> */}
      <Footer/>
    </div>
  )
}

export default App