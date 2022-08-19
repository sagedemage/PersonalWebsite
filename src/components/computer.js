
import top_view from '../assets/images/desktop_top_view.webp';
import front_view from '../assets/images/desktop_front_view.webp';

import "../app.css"

export const Computer = () => {
    return ( 
    	<div> 
        	<h2> My Desktop Computer </h2>
			<p> 
				The desktop I use is an 4th gen intel computer. I have done some major and minor upgrades to the computer. 
				I added a GTX 1060 6GB to that machine. I replaced the network card with one that supports 5GHz because
				my old network card only supported 2GHz. I added a second monitor to have a dual monitor setup. 
				I had this computer for 8 years as of October 2021. 
			</p>			
			<h3> Top View </h3>
        	<p>
				<img className="scale_image" src={top_view} alt="desktop top view" />
        	</p>
			<h3> Front View </h3>
        	<p>
				<img className="scale_image" src={front_view} alt="desktop front view" />
			</p>
    	</div>
    );
}
