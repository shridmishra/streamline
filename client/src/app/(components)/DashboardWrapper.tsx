import React from 'react'

const DashboardWrapper = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
        {/* sidebar */}
        side
        <main className={`flex w-full flex-col bg-gray-50 dark:bg-dark-bg md:pl-64`}>
          {/* navbar */}
          bav
          {children}
        </main>
    </div> 
  )
}

export default DashboardWrapper