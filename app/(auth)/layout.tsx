import React from 'react'

const layout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='flex-center min-h-screen w-full bg-primary-50 bg-cover bg-center bg-fixed'>
      {children}
    </div>
  )
}

export default layout
