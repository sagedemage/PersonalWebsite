
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
		<p class="project-title"> Personal Website </p>
		<ul class="tech">
			<li> Framework: React </li>
			<li> Languages: JavaScript and HTML/CSS </li>
			<li> Repo: <a href="https://github.com/sagedemage/PersonalWebsiteReact"> PersonalWebsiteReact </a>
			</li>
		</ul>
		<p class="project-title"> Discussion Forum </p>
		<ul class="tech">
			<li> Framework: Flask </li>
			<li> Languages: Python, JavaScript and HTML/CSS </li>
			<li> Website: <a href="https://final-flask-start-prod.herokuapp.com"> Discussion Forum </a> </li>
			<li> Repo: <a href="https://github.com/sagedemage/final_flask_start"> final_flask_start </a>
			</li>
		</ul>
    </div>
    );
}
