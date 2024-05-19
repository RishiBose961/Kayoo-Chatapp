import React from 'react'
import SearchBar from '../../components/SideBar/SearchBar'
import Conversations from '../../components/SideBar/Conversations'
import MessageContainer from '../../components/Message/MessageContainer'

const Home = () => {

  return (
    <div >
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 mx-6'>
          <div >
            <SearchBar/>
            <Conversations/>
          </div>
          <div className=' col-span-2'>
            <MessageContainer/>
          </div>
        </div>
    </div>
  )
}

export default Home