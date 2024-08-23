import React from 'react'


const Card = ({info}) => {
  return (
        <div className='Card'>
            <div className='CardData'>
            <p><b>NAME:</b><br/>{info.title}</p>
            <p><b>ID:</b><br/>{info.id}</p>
            <p><b>BODY:</b><br/>{info.body}</p>
            </div>

        </div>
  )
}

export default Card