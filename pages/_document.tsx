/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
import { GTM_ID } from "../lib/gtm";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link rel="apple-touch-icon" href="/oo" />
					<meta name="theme-color" content="#ffffff" />
					<meta name="msapplication-TileColor" content="#2B5797" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-title" content="Pokedox App" />
					<link
						rel="apple-touch-icon"
						href="https://ik.imagekit.io/aqaseg5nkl6/pokeball.png?tr=w-212,h-212,f-png"
					/>
					<link
						rel="shortcut icon"
						href="https://ik.imagekit.io/aqaseg5nkl6/pokeball.png?tr=w-212,h-212,f-png"
					/>
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:url" content="https://type-script-next-pwa.vercel.app" />
					<meta name="twitter:title" content="Pokedox App" />
					<meta name="twitter:description" content="Pokedox by Next js created by Chetan Jain" />
					<meta
						name="twitter:image"
						content="https://ik.imagekit.io/aqaseg5nkl6/pokeball.png?tr=w-212,h-212,f-png"
					/>
					<meta name="twitter:creator" content="@jainChetan81" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Pokedox App" />
					<meta property="og:description" content="Pokedox by Next js created by Chetan Jain" />
					<meta property="og:site_name" content="Pokedox App" />
					<meta property="og:url" content="https://type-script-next-pwa.vercel.app" />
					<meta
						property="og:image"
						content="https://ik.imagekit.io/aqaseg5nkl6/pokeball.png?tr=w-212,h-212,f-png"
					/>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
					<script
						dangerouslySetInnerHTML={{
							__html: `
					  window.dataLayer = window.dataLayer || [];
					  function gtag(){dataLayer.push(arguments);}
					  gtag('js', new Date());

					  gtag('config', '${GA_TRACKING_ID}', {
						page_path: window.location.pathname,
					  });
					`,
						}}
					/>{" "}
					{/* Google Tag Manager - Global base code */}
					<script
						dangerouslySetInnerHTML={{
							__html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer', '${GTM_ID}');
						`,
						}}
					/>
				</Head>
				<body>
					<noscript>
						<iframe
							title="google tag manager"
							src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
							height="0"
							width="0"
							style={{ display: "none", visibility: "hidden" }}
						/>
					</noscript>
					<Main />
					<NextScript />
					<div id="modal-root" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
