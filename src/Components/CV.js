import React from 'react'
import "./stylesheets/CVstyles.css"

function CV(props) {
  const {firstname, lastname, title, address, phoneNumber, email, description, imgURL} = props.cvData.personalInfo  
  const [{ key, position, company, city , from , to }, ...remaining] = props.cvData.experience
  console.log(remaining, key)
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
							<li className="phone-number"><i className="fa-solid fa-phone"></i><span>{phoneNumber}</span></li>
							<li className="email-address"><i className="fa-regular fa-envelope"></i><span>{email}</span></li>
							<li className="address"><i className="fa-solid fa-location-dot"></i><span>{address}</span></li>
						</ul>
					</div>
					<div className="skills-area">
						<h3 className="skills-heading blue-section-headings">SKILLS</h3>
						<div className="divider-line"></div>
						<ul className="skills-list">
							<li className="skill"><i className="fa-solid fa-circle fa-2xs"></i>Everything</li>
							{/* <li className="skill"><i className="fa-solid fa-circle fa-2xs"></i>CSS3</li>
							<li className="skill"><i className="fa-solid fa-circle fa-2xs"></i>JavaScript</li>
							<li className="skill"><i className="fa-solid fa-circle fa-2xs"></i>React</li> */}
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
						<div className="divider-line-for-white" />

						<div className="cv-course">
							<div className="course-highlights">
	
								<span className="cv-course-name">{props.cvData.education[0].course} </span>
								<span className="cv-duration">({props.cvData.education[0].from} - {props.cvData.education[0].to}) </span>
							</div>
							<div className="cv-location">
                  					{props.cvData.education[0].university}, {props.cvData.education[0].city}
							</div>
						</div>


					</div>

					<div className="cv-experience-section white-children">

						<h2 className="cv-education-heading cv-headings">Experience</h2>
						<div className="divider-line-for-white"></div>

						<div className="cv-experience">
							<div className="course-highlights">
	
								<span className="cv-experience-name">{position} </span>
								<span className="cv-duration">({from } - {to})</span>
							</div>
							<div className="cv-company">{company}</div>
							<div className="cv-location">
								{city}
							</div>
						</div>


					</div>
				</div>
			</div></>
  )
  }
export default CV;
