import React from 'react'
import "./stylesheets/CVstyles.css"

function CV(props) {
  const {firstname, lastname, title, address, phoneNumber, email, description, imgURL} = props.cvData.personalInfo  
  
  

  return (
    <>
			<div className="cv-base">
				<div className="blue-section">
					<figure className="profile-pic">
						<img src={imgURL} className="the-photo" alt="" />
					</figure>
					<div className="contact-area">
						<h3 className="contact-heading blue-section-headings">CONTACTS</h3>
						<div className="divider-line" />
						<ul className="contact-informations">
							<li class="phone-number"><i class="fa-solid fa-phone"></i><span>{phoneNumber}</span></li>
							<li class="email-address"><i class="fa-regular fa-envelope"></i><span>{email}</span></li>
							<li class="address"><i class="fa-solid fa-location-dot"></i><span>{address}</span></li>
						</ul>
					</div>
					<div className="skills-area">
						<h3 className="skills-heading blue-section-headings">SKILLS</h3>
						<div className="divider-line"></div>
						<ul className="skills-list">
							<li className="skill"><i className="fa-solid fa-circle fa-2xs"></i>HTML</li>
							<li className="skill"><i className="fa-solid fa-circle fa-2xs"></i>CSS3</li>
							<li className="skill"><i className="fa-solid fa-circle fa-2xs"></i>JavaScript</li>
							<li className="skill"><i className="fa-solid fa-circle fa-2xs"></i>React</li>
						</ul>
					</div>
				</div>		

				<div className="white-section">
					<div className="general-info white-children">
						<h1 className="cv-name">{firstname} {lastname}</h1>
						<div className="cv-title">{title}</div>
						<div className="cv-description">{description}</div>
					</div>

					<div className="cv-education-section white-children">

						<h2 className="cv-education-heading cv-headings">Education</h2>
						<div className="divider-line-for-white"></div>

						<div className="cv-course">
							<div className="course-highlights">
	
								<span className="cv-course-name">BSc. CSIT </span>
								<span className="cv-duration"> (2020 - 2024)</span>
							</div>
							<div className="cv-location">
                  Kathmandu
							</div>
						</div>


					</div>

					<div className="cv-experience-section white-children">

						<h2 className="cv-education-heading cv-headings">Experience</h2>
						<div className="divider-line-for-white"></div>

						<div className="cv-experience">
							<div className="course-highlights">
	
								<span className="cv-experience-name">Sr. Software Engineer</span>
								<span className="cv-duration"> (2024 - 2030)</span>
							</div>
							<div className="cv-company">Google Pvt. Ltd, </div>
							<div className="cv-location">
								California, USA
							</div>
						</div>


					</div>
				</div>
			</div></>
  )
  }
export default CV;


// import React from 'react'
// import "./stylesheets/CVstyles.css"


// function CV(props) {
//   const {firstname, lastname, title, address, phoneNumber, email} = props.cvData.personalInfo  
  

//   return (
//     <section>
//     <div className='cv-base' style={{overflow: "auto"}} >
//       <div className='name'>{firstname} {lastname}</div>
//       <div className='title'>{title}</div>
//       <div className='address'>{address}</div>
//       <div className='phoneNumber'>{phoneNumber}</div>
//       <div className='email'>{email}</div>
//       {
//         props.cvData.experience.map(exp => <pre className="experience" key={exp.key}>{JSON.stringify(exp)}</pre>)
//       }
//       {
//         props.cvData.education.map(degree => <pre className="education" key={degree.key}>{JSON.stringify(degree)}</pre>)
//       }

//     </div>

//     </section>
//   )
//   }
// export default CV;