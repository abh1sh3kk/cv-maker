import React from 'react'
import  "./stylesheets/Header.css"
import JsPDF from 'jspdf'

function Header() {

const generatePDF = () => {
    const cvInPdf = new JsPDF('portrait','pt','a4');
    cvInPdf.html(document.querySelector('.cv-base')).then(() => {
        cvInPdf.save('cv.pdf');
    });
  }

  return (
    <nav className="navbar">
	<section className='leftNav'>MakeItQuick</section>
	<section className='rightNav'>
		<button className='saveAsPdf' onClick={generatePDF}>Save as PDF</button>
		<button className='reset'>Reset</button>
	</section>
    </nav>
  )
}

export default Header;