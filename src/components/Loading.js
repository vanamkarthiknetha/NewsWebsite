import React from 'react'
import loading from './loading.gif'

const Loading = ()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
        <h4>loading.....</h4>
      </div>
    )
}
export default Loading;

