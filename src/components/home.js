
import profile from '../assets/images/salmaan_saeed.webp';

import "./home.css"

import github from '../assets/icons/github.webp';
import linkedin from '../assets/icons/linkedin.webp';
import email from '../assets/icons/email.webp';

export const Home = () => {
    return (
    <div id="home-content">
		<div id="profile">
			<div id="profile-info">
				<h2>Salmaan Saeed </h2>
				<p class="profile-text">
					<a href="mailto: ss3994@njit.edu"> ss3994@njit.edu </a>
				</p>
				<p class="profile-text"> Profiles & Contact: </p>
				<div id="profile-links">
					{/* Mail icons created by Freepik - Flaticon 
				 	* link: https://www.flaticon.com/free-icons/mail */}
					<a target="_blank" href="mailto: ss3994@njit.edu">
				    	<img class="profile-icon-link" src={email} alt="my school email" width="42" height="30" />
			    	</a>
			    	<a target="_blank" href="https://github.com/sagedemage">
				    	<img class="profile-icon-link" src={github} alt="my github page" width="30" height="30" />
			    	</a>
			    	<a target="_blank" href="https://www.linkedin.com/in/salmaan-saeed-6a5582197/">
				    	<img class="profile-icon-link" src={linkedin} alt="my linkedin page" width="30" height="30" />
			    	</a>
		    	</div>
			</div>
			<div>
				<p>
					<img id="profile-image" src={profile} alt="profile picture" />
				</p>
			</div>
		</div>
		<p id="about-me">
			<div class="hr"><hr /></div>
			I'm a student majoring in Information Technology at New Jersey Institute of Technology. 
			I expect to graduate in December 2023. I'm interested in getting into web development 
			and system administration.
		</p>
				
		<h3 id="projects"> Personal Projects </h3>
		<p> <span class="project-title"> Personal Website (React, Netlify, Git, JavaScript) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/PersonalWebsite"> PersonalWebsite </a> 
            <ul class="tech">
			    <li> Rewrote my personal website in React </li>
			    <li> Deployed the web application to Netlify </li>
			    <li> Designed the website to be responsive </li>
                <li> Documented the process of building my web application </li>
		    </ul>
        </p>
		<p> <span class="project-title"> Discussion Form (Flask, SQLite, Heroku, Git, Python, JavaScript) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/DiscussionBoard"> DiscussionBoard </a> 
		    <ul class="tech">
			    <li> Designed my web application with Flask </li>
			    <li> Deployed the web application to Heroku </li>
			    <li> Implemented CI/CD by using GitHub workflows </li>
			    <li> Documented the process of building my web application </li>
		    </ul>
        </p>
        <p> <span class="project-title"> Calculator Desktop App (Rust, GTK4, Git) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/CalculatorDesktopApp"> CalculatorDesktopApp </a> 
		    <ul class="tech">
			    <li> Designed the UI of the calculator app with GTK4 </li>
			    <li> Implemented the calculator functionality which includes addition, subtraction, multiplication, and division </li>
			    <li> Documented the process of building my web application </li>
		    </ul>
        </p>
        <p> <span class="project-title"> Calculator Web App (Flask, Git, Python, Pandas, Nginx) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/CalculatorWebApp"> CalculatorWebApp </a> 
		    <ul class="tech">
			    <li> Utilized Nginx as the web server </li>
			    <li> Implemented CI/CD by using GitHub workflows </li>
                <li> Utilized Pandas for unit tests </li>
                <li> Documented the process of building my web application </li>
		    </ul>
        </p>
    </div>
    );
}
