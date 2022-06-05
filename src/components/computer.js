
import top_view from '../assets/images/desktop_top_view.webp';
import front_view from '../assets/images/desktop_front_view.webp';

import "../app.css"

export const Computer = () => {
    return ( 
    <div> 
        <h2> My Desktop Computer </h2>
				<p> The desktop I use is an 4th gen intel computer. I have done some major and minor upgrades to the computer. 
				I added a GTX 1060 6GB to that machine. I replaced the network card with one that suports 2GHz and 5GHz. 
				My old network card only supported 2GHz. I added a second monitor to have a dual monitor setup. 
				I had this computer for 8 years as of October 2021. </p>
					
				<h3> Top View </h3>
				<img class="scale_image" src={top_view} alt="desktop top view" />
				<h3> Front View </h3>
				<img class="scale_image" src={front_view} alt="desktop front view" />
				
				<h3 class="header_line"> Desktop Specifications </h3>
				<ul>
					<li> <strong>Desktop Model:</strong> XPS 8700 </li>
					<li> <strong>Desktop Brand:</strong> Dell </li>
					<li> <strong>CPU:</strong> Intel Core i7-4770
						<ul>
							<li> <strong>Code name:</strong> Haswell </li>
							<li> <strong>Generation:</strong> 4th </li>
							<li> <strong>Number of Cores:</strong> 4 </li>
							<li> <strong>Number of Threads:</strong> 8 </li>
							<li> <strong>Base frequency:</strong> 3.40 Ghz </li>
							<li> <strong>Cache:</strong> 8 MB </li>
						</ul>
					</li>
					<li> <strong>Network Adapter:</strong> Asus AX3000 Dual Band Wifi-Fi 4 PCI-E Adapter
						<ul>
							<li> <strong>Model Name:</strong> PCE-AX58BT </li>
						</ul>
					</li>
					<li> <strong>Display:</strong> 
						<ul>
							<li> <strong>Graphics Card:</strong> GTX 1060 6GB GDDR5 </li>
							<li> <strong>Dual Monitor Setup:</strong> Dell S2340M 1920x1080 LCD monitor </li>
						</ul>
					</li>
				
					<li> <strong>Storage Drives:</strong>
						<ul>
							<li> <strong> Solid State Drive (Drive 0): </strong> Samsung 870 1 TB 2.5in SDD </li>
							<li> <strong> Solid State Drive (Drive 1): </strong> Samsung 870 500 GB 2.5in SSD </li>
							<li> <strong>Hard Disk Drive 1 (Drive 2):</strong> Segate BarraCuda 1TB 3.5in HDD
								<ul>
									<li> <strong>Model Number:</strong> ST1000DM010 </li>
									<li> <strong>Speed:</strong> 7200 RPM </li>
								</ul>
							</li>
						</ul>
					</li>
				
					<li> <strong>Peripherals:</strong>
						<ul>
							<li> <strong>Mouse:</strong> Corsar Glaive RGB wired mouse </li>
							<li> <strong>Keyboard:</strong> Ducky One 2 Horizon TKL keyboard </li>
							<li> <strong>Headphones:</strong> Hyper X (KHX-HSCC-BK) headset </li>
							<li> <strong>Speakers:</strong> Eagle Arion (ET-AR306-BK) speaker </li>
							<li> <strong>Game Controller:</strong> Xbox One Wireless controller</li>
						</ul>
					</li>
				</ul>
    </div>
    
    );
}
