import '../styles/globals.css'
import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.css'

import './app.css'

import { MyNavBar } from 'components/navigation_bar/navigation_bar';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div id="body">
			{/* Navigation Bar */}
			<MyNavBar></MyNavBar>

			<div id="content">
				<Component {...pageProps} />
			</div>

			<footer className="footer">
        		<div id="copyright">
					<p id="copyright"> &copy; {(new Date().getFullYear())} Salmaan Saeed </p>
				</div>
      		</footer>
		</div>
		);
}

