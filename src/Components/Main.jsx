import React from 'react'

function Main({ children }) {
    return (
        <>
            <main className='main-side'>
                {children}
            </main>
        </>
    )
}

export default Main