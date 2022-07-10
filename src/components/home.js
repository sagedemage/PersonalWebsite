
import profile from '../assets/images/salmaan_saeed.webp';

import "./home.css"

export const Home = () => {
    return (
    <div id="home-content"> 
		<img id="profile" src={profile} alt="desktop front view" />
		<h2> About Me </h2>
		<p>
			Hi, my name is Salmaan Saeed. I'm a student majoring in Information Technology
			at New Jersey Institute of Technology. I expect to graduate in December 2023. I'm interested in getting into
			web development and system administration.
		</p>
				
		<h3> Hobbies and Interests </h3>
		<p> 
			During my free time, I like to play video games and watch anime. My favorite video games 
			are Terraria and Cave Story. My favorite anime series are Samurai Champloo, Clannad, JoJo's Bizarre Adventure, 
			and Hunter X Hunter. 
		</p>
		<h3> Personal Projects </h3>
		<p> <span class="project-title"> Personal Website (React, Netlify, Git, JavaScript) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/PersonalWebsite"> PersonalWebsite </a> 
            <ul class="tech">
			    <li> Rewrote my personal website in React </li>
			    <li> Deployed the web application to Netlify </li>
			    <li> Designed the website to be responsive </li>
                <li> Documented the process of building my web application </li>
		    </ul>
        </p>
		<p> <span class="project-title"> Discussion Form (Flask, SQLite, Heroku, Git, Python, JavaScript) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/DiscussionBoard"> DiscussionBoard </a> 
		    <ul class="tech">
			    <li> Designed my web application with Flask </li>
			    <li> Deployed the web application to Heroku </li>
			    <li> Implemented CI/CD by using GitHub workflows </li>
			    <li> Documented the process of building my web application </li>
		    </ul>
        </p>
        <p> <span class="project-title"> Calculator Desktop App (Rust, GTK4, Git) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/CalculatorDesktopApp"> CalculatorDesktopApp </a> 
		    <ul class="tech">
			    <li> Designed the UI of the calculator app with GTK4 </li>
			    <li> Implemented the calculator functionality which includes addition, subtraction, multiplication, and division </li>
			    <li> Documented the process of building my web application </li>
		    </ul>
        </p>
        <p> <span class="project-title"> Calculator Web App (Flask, Git, Python, Pandas, Nginx) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/CalculatorWebApp"> CalculatorDesktopApp </a> 
		    <ul class="tech">
			    <li> Utilized Nginx as the web server </li>
			    <li> Implemented CI/CD by using GitHub workflows </li>
                <li> Utilized Pandas for unit tests </li>
                <li> Documented the process of building my web application </li>
		    </ul>
        </p>
    </div>
    );
}
