
import debian from '../assets/images/debian_logo.webp';
import gnome from '../assets/images/gnome_logo.webp';
import desktop from '../assets/images/gnome_desktop_screenshot.webp'

import "./system.css"

export const System = () => {
    return ( 
    	<div> 
			<h2> Operating Systems </h2>
			<p> 
				I dual boot between Windows and Linux on my desktop. I use two storage drives to dual 
				boot between the two operating systems. I generally use the terminal a lot on Linux
				for programming, installing packages, and maintaining my operating system.
			</p>

			<h3> The Linux Distro I Use </h3>
			<div className="caption">
                <figure>
					<a href="https://www.debian.org/"><img id="debian_logo" src={debian} alt="Debain Logo" /></a>
                    <figcaption>Image credit: <a href="https://www.debian.org/">Debian Project</a></figcaption>
				</figure>
				<div className="caption-info">
					<p> 
						The Linux distro I use on my system is Debian. It is a stable linux distribution. 
						Debian is easy to maintain since it does not receive updates as often. Debian get 
						tested throughly to remove software bugs before a new release. 
					</p> 
					<p> 
						Debian has three branches you can choose from and these are stable, testing and unstable.
						I use the testing branch since it comes with fairly recent applications and libraries.
						My problem with Debain Stable is that the software in the repositories are generally old. To be 
						fair, Debian Stable is mean't for servers and mission critical systems.
					</p>
				</div>
			</div>

			<h3> The Desktop Environment I use on Linux </h3>
				<div className="caption">
					<p>
						<a href="https://www.gnome.org/"><img id="gnome_logo" src={gnome} alt="Gnome Logo" /></a>
						Image credit: <a href="https://www.gnome.org/">Gnome Foundation</a>
					</p>
					<div className="caption-info">
						<p> 
							I have used many desktop environments and windows managers. It has taken me a few 
							months on to decide which DE or WM I liked the best. The desktop environment I use 
							is Gnome. The reason I use Gnome because it is snappy compared to KDE Plasma. In 
							general, Gnome is a very well optimized desktop environment. 
						</p>
					</div>
				</div>
					
				<h3> My Gnome Desktop </h3>
				<p>
					<img className="scale_image" src={desktop} alt="My Gnome Desktop" />
				</p>
    	</div>
     
    );
}
