import React from 'react'
import '../Styles/Dashboard.css'

function Dashboard() {
  return (

    <div className='dashboard'>
      <div className='dashboard-img'>
        <img src="../assets/images/notebook.svg" alt='todo-list' />
      </div>
      <div className='intro-text'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ut ratione voluptas culpa, iusto officiis nostrum at ullam minus
          maxime fuga voluptatum inventore temporibus qui,
          beatae tempora pariatur odio veniam illo.</p>
        <input type="submit" value="Get Started" className='get-started-btn' />
      </div>

    </div>

  )
}

export default Dashboard