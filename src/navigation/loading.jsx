import React from 'react'

export default function Loading({loadmsg}) {
  return (
    <div className='loader'>
        <div>
            <aside></aside>
            <h2>{loadmsg}</h2>
            <p>Please Wait ...</p>
        </div>
    </div>
  )
}
