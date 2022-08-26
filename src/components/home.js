
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
				<h2> Salmaan Saeed </h2>
				<p className="profile-text"> Undergraduate Student <br /> at NJIT </p>
				<p className="profile-text">
					<a href="mailto: ss3994@njit.edu"> ss3994@njit.edu </a>
				</p>
				<p className="profile-text"> Contact & Profiles: </p>
				<div id="profile-links">
					<a target="_blank" href="mailto: ss3994@njit.edu">
				    	<img className="profile-icon-link" src={email} alt="my school email" width="42" height="30" />
			    	</a>
			    	<a target="_blank" href="https://github.com/sagedemage">
				    	<img className="profile-icon-link" src={github} alt="my github page" width="30" height="30" />
			    	</a>
			    	<a target="_blank" href="https://www.linkedin.com/in/salmaan-saeed-6a5582197/">
				    	<img className="profile-icon-link" src={linkedin} alt="my linkedin page" width="30" height="30" />
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
			I expect to graduate in December 2023. I'm interested in getting into web development 
			and system administration.
		</p>

		<h3 id="sub-title"> Personal Projects </h3>			
		<p> <span className="project-title"> Discussion Form (Flask, SQLite, Heroku, Git, Python, JavaScript, Docker) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/DiscussionBoard"> DiscussionBoard </a></p>
		<ul className="tech">
			<li> Implemented user authentication </li>
			<li> Deployed the web application to Heroku </li>
			<li> Implemented CI/CD by using GitHub workflows </li>
			<li> Documented the purpose and build instructions of the app </li>
		</ul>

        <p> <span className="project-title"> Notebook App (Gin, SQLite, Git, Go, Docker) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/NotebookApp"> NotebookApp </a></p> 
		<ul className="tech">
			<li> Designed the REST API </li>
			<li> Implemented user authentication </li>
            <li> Demonstrated database design </li>
			<li> Documented the purpose and build instructions of the app </li>
		</ul>

		<p> <span className="project-title"> Personal Website (React, Netlify, Git, JavaScript) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/PersonalWebsite"> PersonalWebsite </a></p>
        <ul className="tech">
			<li> Deployed the web application to Netlify </li>
			<li> Implemented responsive web design </li>
            <li> Documented the build instructions of the app </li>
		</ul>

		<p> <span className="project-title"> Calculator Desktop App (Rust, GTK4, Git) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/CalculatorDesktopApp"> CalculatorDesktopApp </a></p> 
		<ul className="tech">
			<li> Designed the UI with Accessibility in mind </li>
            <li> Documented the build instructions of the app </li>
		</ul>

		<h3 id="sub-title"> Technical Skills </h3>
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
