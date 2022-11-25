import "./home.css"

import profile from 'assets/images/salmaan_saeed.webp';
import github from 'assets/icons/github.webp';
import linkedin from 'assets/icons/linkedin.webp';
import email from 'assets/icons/email.webp';

export const Home = () => {
    return (
    <div id="home-content">
		<div id="profile">
			<div id="profile-info">
				<p id="profile-title"> Salmaan Saeed </p>
				<p className="profile-text"> 
					Undergraduate Student <br /> at NJIT 
				</p>
				<p className="profile-text">
					<a href="mailto: ss3994@njit.edu"> 
						ss3994@njit.edu 
					</a>
				</p>
				<p className="profile-text"> 
					Contact & Profiles: 
				</p>
				<div id="profile-links">
					<a target="_blank" 
						href="mailto: ss3994@njit.edu">
						<img className="profile-icon-link" 
							src={email} 
							alt="my school email" 
							width="42" height="30" 
						/>
			    	</a>
			    	<a target="_blank" 
						href="https://github.com/sagedemage"
					>
				    	<img className="profile-icon-link" 
							src={github} alt="my github page"
							width="30" height="30" 
						/>
			    	</a>
			    	<a target="_blank" 
						href="https://www.linkedin.com/in/salmaan-saeed-6a5582197/"
					>
				    	<img className="profile-icon-link" 
							src={linkedin} 
							alt="my linkedin page" 
							width="30" height="30" 
						/>
			    	</a>
		    	</div>
			</div>
			<div>
				<img id="profile-image" src={profile} alt="profile picture" />
			</div>
		</div>
		<div className="hr"><hr /></div>
		<p id="about-me">
			I'm an undergraduate student majoring in Information Technology at New Jersey Institute of Technology. 
			I expect to graduate in December 2023. I'm interested in getting into web development.
		</p>

		<p id="sub-title"> Personal Projects </p>
		<p> <span className="project-title">
			Notebook (Gin, React, MySQL, SQLite, Git, Go, JavaScript, Docker)</span> <br />
            Git Repository: <a href="https://github.com/sagedemage/Notebook"> Notebook </a></p> 
		<ul>
			<li> Utilized CI/CD with GitHub workflows to automate unit testing of the app </li>
			<li> Implemented REST API for the backend so it can communicate with the frontend easily </li>
			<li> Built user authentication so that the user can register, login, and logout their account </li>
			<li> Designed password validation for user registration to check if their password is strong </li>
		</ul>

		<p> <span className="project-title">Discussion Board (Flask, SQLite, Git, Python, JavaScript, Docker)</span> <br />
            Git Repository: <a href="https://github.com/sagedemage/DiscussionBoard"> DiscussionBoard </a></p>
		<ul>
			<li> Implemented CI/CD with GitHub workflows to automate unit testing of the app </li>
			<li> Built user authentication so that the user can register, login, and logout their account </li>
			<li> Designed password validation for user registration to check if their password is strong </li>
		</ul>

		<p> <span className="project-title"> Personal Website (React, Netlify, Git, JavaScript) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/PersonalWebsite"> PersonalWebsite </a></p>
        <ul>
			<li> Implemented responsive web design in order for my app to render nicely on mobile and desktop </li>
			<li> Deployed my personal website to Netlify </li>
		</ul>

		<p id="sub-title"> Technical Skills </p>
		<p className="skill"> <span className="skill-item">Languages</span>: 
			JavaScript, Python, Go, Rust, Bash, Java, C/C++, PHP, and HTML/CSS
		</p>
		<p className="skill"> <span className="skill-item">Frameworks</span>: Flask, Gin, Bootstrap, and Yew </p>
		<p className="skill"> <span className="skill-item">Databases</span>: MS SQL, SQLite, and MySQL </p>
		<p className="skill"> <span className="skill-item">Libraries</span>: Pandas, SDL, GTK, jQuery, and React </p>
		<p className="skill"> 
			<span className="skill-item">Technologies</span>: Docker, Azure, Apache, Nginx, Git, Pylint, CMake, Clang-Tidy, Linux command line,
			WebAssembly, and Kubernetes
		</p>
		<p className="skill"> <span className="skill-item">Operating Systems</span>: Windows, Linux, and BSD</p>

    </div>
    );
}
