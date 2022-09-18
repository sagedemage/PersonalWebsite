import "../app.css"

export const Projects = () => {
    return ( 
    	<div> 
        	<h2> Experimental Projects </h2>
			<p> 
				These are some of the other projects I have worked on. 
				Most of these projects are experiments or prototypes. None the less, 
				I am cool with anyone looking at these projects.
			</p>

			<p> <span className="project-title"> Calculator Desktop App (Rust, GTK4, Git) </span> <br />
				Git Repository: <a href="https://github.com/sagedemage/CalculatorDesktopApp"> CalculatorDesktopApp </a></p> 
			<ul>
				<li> Designed the UI with accessibility in mind </li>
				<li> Documented the build instructions of the app </li>
			</ul>
    	</div>
    );
}
