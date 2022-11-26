import Head from 'next/head'
import styles from 'styles/Home.module.css'

import profile from 'assets/images/salmaan_saeed.webp';
import github from 'assets/icons/github.webp';
import linkedin from 'assets/icons/linkedin.webp';
import email from 'assets/icons/email.webp';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Salmaan Saeed </title>
        <meta name="description" content="Home page of Salmaan Saeed" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
		<div id={styles.profile}>
			<div id={styles.profile_info}>
				<p id={styles.profile_title}> Salmaan Saeed </p>
				<p className={styles.profile_text}> 
					Undergraduate Student <br /> at NJIT 
				</p>
				<p className={styles.profile_text}>
					<a href="mailto: ss3994@njit.edu"> 
						ss3994@njit.edu 
					</a>
				</p>
				<p className={styles.profile_text}> 
					Contact & Profiles: 
				</p>
				<div id={styles.profile_links}>
					<a target="_blank" 
						href="mailto: ss3994@njit.edu">
						<img className={styles.profile_icon_link} 
							src={email.src} 
							alt="my school email" 
							width="42" height="30" 
						/>
			    	</a>
			    	<a target="_blank" 
						href="https://github.com/sagedemage">
				    	<img className={styles.profile_icon_link} 
							src={github.src} alt="my github page"
							width="30" height="30" 
						/>
			    	</a>
			    	<a target="_blank" 
						href="https://www.linkedin.com/in/salmaan-saeed-6a5582197/">
				    	<img className={styles.profile_icon_link} 
							src={linkedin.src} 
							alt="my linkedin page" 
							width="30" height="30" 
						/>
			    	</a>
		    	</div>
			</div>
			<div>
				<img id={styles.profile_image} src={profile.src} alt="profile picture" />
			</div>
		</div>
		<div className="hr"><hr /></div>
		<p id="about-me">
			I'm an undergraduate student majoring in Information Technology at New Jersey Institute of Technology. 
			I expect to graduate in December 2023. I'm interested in getting into web development.
		</p>

		<p id={styles.sub_title}> Relevant Projects </p>
		<p> <span className="project_title">
			Notebook (Gin, React, MySQL, SQLite, Git, Go, TypeScript, Docker)</span> <br />
            Git Repository: <a href="https://github.com/sagedemage/Notebook"> Notebook </a></p> 
		<ul>
			<li> Utilized CI/CD with GitHub workflows to automate unit testing of the app </li>
			<li> Implemented REST API for the backend so it can communicate with the frontend easily </li>
			<li> Built user authentication so that the user can register, login, and logout their account </li>
			<li> Designed password validation for user registration to check if their password is strong </li>
		</ul>

		<p> <span className="project_title">Discussion Board (Flask, SQLite, Git, Python, JavaScript, Docker)</span> <br />
            Git Repository: <a href="https://github.com/sagedemage/DiscussionBoard"> DiscussionBoard </a></p>
		<ul>
			<li> Implemented CI/CD with GitHub workflows to automate unit testing of the app </li>
			<li> Built user authentication so that the user can register, login, and logout their account </li>
			<li> Designed password validation for user registration to check if their password is strong </li>
		</ul>

		<p> <span className="project_title"> Personal Website (Next.js, Netlify, Git, TypeScript) </span> <br />
            Git Repository: <a href="https://github.com/sagedemage/PersonalWebsite"> PersonalWebsite </a></p>
        <ul>
			<li> Implemented responsive web design in order for my app to render nicely on mobile and desktop </li>
			<li> Deployed my personal website to Netlify </li>
		</ul>

		<p id={styles.sub_title}> Technical Skills </p>
		<p className={styles.skill}> <span className={styles.skill_item}>Languages</span>: 
			JavaScript/TypeScript, Python, Go, Rust, Bash, Java, C/C++, PHP, and HTML/CSS
		</p>
		<p className={styles.skill}> <span className={styles.skill_item}>Frameworks</span>: 
			Gin, React, Flask, and Bootstrap </p>
		<p className={styles.skill}> <span className={styles.skill_item}>Databases</span>: MS SQL, SQLite, and MySQL </p>
		<p className={styles.skill}> <span className={styles.skill_item}>Libraries</span>: Pandas, SDL, GTK, and jQuery </p>
		<p className={styles.skill}> 
			<span className={styles.skill_item}>Technologies</span>: Docker, Azure, Apache, Nginx, Git, Pylint, CMake, Clang-Tidy, Linux command line,
			WebAssembly, and Kubernetes
		</p>
		<p className={styles.skill}> <span className={styles.skill_item}>Operating Systems</span>: Windows, Linux, and BSD</p>
      </main>
    </div>
  )
}

