import React from 'react'
import  "./stylesheets/Header.css"

function Header() {
  return (
    <nav className="navbar">
	<section className='leftNav'>MakeItQuick</section>
	<section className='rightNav'>
		<button className='saveAsPdf'>Save as PDF</button>
		<button className='reset'>Reset</button>
	</section>
    </nav>
  )
}

export default Header;