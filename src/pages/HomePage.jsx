import React from 'react'
import HeaderSection from '../components/HeaderSection/HeaderSection'
import MiddleSection from '../components/MiddleSection/MiddleSection'
import AfterMiddleSection from '../components/AfterMiddle/AfterMiddleSection'
import CEOsays from '../components/CEOsays/CEOsays'

const HomePage = () => {
  return (
    <div className=''>
      <HeaderSection/>
      <MiddleSection/>
      <AfterMiddleSection/>
      <CEOsays/>
      {/* AfterCeoSays and FeedbackSection remain commented out, as they were in App.jsx */}
    </div>
  )
}

export default HomePage