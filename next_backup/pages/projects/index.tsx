import Head from 'next/head'

export default function Projects() {
	return (
		<div>
			<Head>
				<title>Experimental Projects</title>
				<meta name="description" content="Generated by create next app" />
			</Head>
			<main>
				<h1> Experimental Projects </h1>
				<p>
					These are some of the other projects I have worked on.
					Most of these projects are experiments or prototypes. None the less,
					I am cool with anyone looking at these projects.
				</p>

				<p><span className="project_title"> Calculator Desktop App (Rust, GTK4, Git) </span> <br />
					Git Repository: <a href="https://github.com/sagedemage/CalculatorDesktopApp"> CalculatorDesktopApp </a>
				</p>
				<ul>
					<li> Designed the UI with accessibility in mind </li>
				</ul>
			</main>
		</div>
	)
}

