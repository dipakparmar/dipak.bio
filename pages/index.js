import Head from 'next/head'
import Image from 'next/image'

export default function Home({ links, social_links }) {

	return (
		<div className="relative flex flex-col w-full h-full min-h-screen p-0 m-0 overflow-x-hidden font-bold leading-4 text-black align-baseline border-0">
			<Head>
				<title>Dipak Parmar | ☁️ DevOps Engineer | @iamdipakparmar </title>
			</Head>
			<main className="flex flex-col justify-between flex-1 w-full h-full px-3 py-6 m-0 leading-4 align-baseline border-0">
				<div className="w-full h-full px-0 pt-0 pb-20 mx-auto my-0 text-black align-baseline border-0" style={{ maxWidth: '680px' }}>
					<div className="fixed p-0 m-0 align-baseline bg-white bg-no-repeat bg-cover border-0" style={{ inset: '0px', zIndex: -1, backgroundPosition: 'center center' }} />
					<div className="p-0 mx-0 mt-0 mb-4 align-baseline border-0">
						<div className="flex flex-col items-center w-full h-full p-0 mx-0 mt-3 mb-8 align-baseline border-0">
							<div className="p-0 mx-0 mt-0 mb-4 align-baseline border-0">
								<Image src="https://github.com/dipakparmar.png" width="100" height="100" alt="@iamdipakparmar Profile Image" data-testid="ProfileImage" className="block object-contain w-24 h-24 p-0 m-0 align-baseline border-0 filter-none" filter="none" style={{ borderRadius: '50%', objectPosition: 'initial' }} />
							</div>
							<div className="grid items-center max-w-full p-0 mx-3 my-0 align-baseline border-0" style={{ gridTemplateColumns: '1fr auto 1fr' }}>
								<h1 id="profile-iamdipakparmar" className="max-w-full col-start-2 p-0 m-0 text-base leading-normal truncate align-baseline border-0">
									@iamdipakparmar
								</h1>
							</div>
							<div className="px-10 py-0 m-0 align-baseline border-0">
								<h2 className="p-0 m-0 text-sm leading-normal text-center align-baseline border-0">
									☁️ DevOps Engineer
								</h2>
							</div>
						</div>
					</div>

					{links?.map((link, index) => {
						switch (link?.type) {
							case 'VANILA':
								return (
									<div key={index} className="relative p-0 m-0 align-baseline border-0">
										<div className="relative z-0 h-auto p-0 mx-0 mt-0 mb-4 overflow-hidden text-white align-baseline bg-blue-500 border-2 border-blue-500 border-solid rounded-none hover:border-blue-500 hover:bg-transparent hover:text-blue-500" style={{ "WebkitTransition": "box-shadow 0.25s                    cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                  color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                  border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                  transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                  background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s", "transition": "box-shadow 0.25s                    cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                  color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                  border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                  transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                  background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s" }}>
											<a href={link?.url} target="_blank" key={index} rel="noopener noreferrer" data-testid="LinkButton" aria-describedby="profile-iamdipakparmar " height="auto" className="box-border relative flex items-center justify-center w-full h-auto px-5 py-4 m-0 text-center break-words whitespace-normal align-middle appearance-none cursor-pointer bg-none" style={{ "WebkitTextDecoration": "none", "textDecoration": "none", "wordBreak": "break-word", "WebkitHyphens": "auto", "MozHyphens": "auto", "msHyphens": "auto", "hyphens": "auto", "WebkitTransition": "box-shadow 0.25s                      cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                    border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                    transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                    background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99)                      0s", "transition": "box-shadow 0.25s                      cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                    border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                    transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,                    background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99)                      0s" }}>
												<p key={index} className="relative w-full p-0 m-0 leading-normal align-baseline border-0" style={{ "WebkitHyphens": "none", "MozHyphens": "none", "msHyphens": "none", "hyphens": "none", "wordBreak": "break-word" }}>
													{link?.title}
												</p>
											</a>
										</div>
									</div>
								)
							case 'HEADER':
								return (
									<div key={index} className="px-0 pt-6 pb-4 m-0 align-baseline border-0">
										<h3 id={`header-` + index} className="p-0 m-0 text-base leading-normal text-center align-baseline border-0">
											{link?.title}
										</h3>
									</div>
								)
						}
					})}


					<div className="px-0 py-4 m-0 align-baseline border-0">
						<div className="flex flex-wrap items-center justify-center w-full h-full p-0 m-0 align-baseline border-0" >
							{social_links?.map((link, index) => {
								switch (link?.type) {
									case 'FACEBOOK':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M23,12A11,11,0,1,0,10.279,22.865h0a11.08,11.08,0,0,0,3.436,0h0A10.952,10.952,0,0,0,23,12ZM10.859,21.935v-6.9a.5.5,0,0,0-.5-.5H8.193V12.5h2.166a.5.5,0,0,0,.5-.5V9.686c0-2.278,1.264-3.585,3.459-3.585a15.392,15.392,0,0,1,1.858.137V7.89h-.824l-.019,0a2,2,0,0,0-2.181,1.735,1.8,1.8,0,0,0-.011.4V12a.5.5,0,0,0,.5.5H15.97l-.312,2.035H13.641a.5.5,0,0,0-.5.5v6.9A10.124,10.124,0,0,1,10.859,21.935Zm3.282-.166V15.535h1.946a.5.5,0,0,0,.5-.425l.465-3.035a.5.5,0,0,0-.494-.575H14.141V10.016a1.267,1.267,0,0,1,.308-.821,1.218,1.218,0,0,1,.9-.3h1.324a.5.5,0,0,0,.5-.5V5.806a.5.5,0,0,0-.42-.494A16.661,16.661,0,0,0,14.325,5.1c-2.754,0-4.466,1.757-4.466,4.585V11.5H7.693a.5.5,0,0,0-.5.5v3.035a.5.5,0,0,0,.5.5H9.859v6.234a10,10,0,1,1,4.282,0Z" />
												</svg>
											</a>
										)
									case 'TWITTER':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M8.1,21.034A12.717,12.717,0,0,1,1.23,19.019a.5.5,0,0,1,.329-.917,8.273,8.273,0,0,0,4.992-1,4.807,4.807,0,0,1-3.173-3.13.5.5,0,0,1,.348-.636A4.821,4.821,0,0,1,1.843,9.523a.548.548,0,0,1,.247-.458.506.506,0,0,1,.5-.034l.091.049A4.816,4.816,0,0,1,2.529,4a.507.507,0,0,1,.393-.247.5.5,0,0,1,.427.183,11.781,11.781,0,0,0,7.9,4.27c-.013-.144-.02-.289-.02-.435a4.81,4.81,0,0,1,8.116-3.493,8.157,8.157,0,0,0,2.32-.93.5.5,0,0,1,.73.583,4.781,4.781,0,0,1-.662,1.32c.191-.067.378-.143.563-.225a.5.5,0,0,1,.585.135.5.5,0,0,1,.034.6,9.2,9.2,0,0,1-2.057,2.2c0,.1,0,.208,0,.313A12.636,12.636,0,0,1,8.1,21.034ZM3.527,19.105a11.72,11.72,0,0,0,4.577.929A11.645,11.645,0,0,0,19.863,8.275c0-.179,0-.357-.012-.533a.5.5,0,0,1,.207-.43,8.181,8.181,0,0,0,.959-.81,9.068,9.068,0,0,1-.932.16.5.5,0,0,1-.316-.925,3.857,3.857,0,0,0,.977-.837,9.013,9.013,0,0,1-1.465.418.5.5,0,0,1-.461-.148,3.812,3.812,0,0,0-6.491,3.473.5.5,0,0,1-.1.434.489.489,0,0,1-.409.179A12.772,12.772,0,0,1,3.09,5.167,3.812,3.812,0,0,0,4.573,9.591a.5.5,0,0,1,.2.569.523.523,0,0,1-.491.347,4.772,4.772,0,0,1-1.36-.242A3.813,3.813,0,0,0,5.9,13.257a.5.5,0,0,1,.033.972,6.63,6.63,0,0,1-1.279.17,3.809,3.809,0,0,0,3.236,1.914.5.5,0,0,1,.3.894A9.081,9.081,0,0,1,3.527,19.105Z" />
												</svg>
											</a>
										)
									case 'INSTAGRAM':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z" />
													<path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z" />
													<path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z" />												</svg>
											</a>
										)
									case 'TIKTOK':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M9.37,23.5a7.468,7.468,0,0,1,0-14.936.537.537,0,0,1,.538.5v3.8a.542.542,0,0,1-.5.5,2.671,2.671,0,1,0,2.645,2.669.432.432,0,0,1,0-.05V1a.5.5,0,0,1,.5-.5h3.787a.5.5,0,0,1,.5.5A4.759,4.759,0,0,0,21.59,5.76a.5.5,0,0,1,.5.5L22.1,10a.533.533,0,0,1-.519.515,9.427,9.427,0,0,1-4.741-1.268v6.789A7.476,7.476,0,0,1,9.37,23.5ZM8.908,9.585a6.466,6.466,0,1,0,6.93,6.447V8.326a.5.5,0,0,1,.791-.407A8.441,8.441,0,0,0,21.1,9.5l-.006-2.76A5.761,5.761,0,0,1,15.859,1.5H13.051V16.032a.458.458,0,0,1,0,.053,3.672,3.672,0,1,1-4.14-3.695Z" />
												</svg>
											</a>
										)
									case 'LINKEDIN':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z" />
													<path d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z" />
													<path d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z" />
												</svg>
											</a>
										)
									case 'TWITCH':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M7.285,23.5a.493.493,0,0,1-.191-.038A.5.5,0,0,1,6.785,23V19.571H2.572a.5.5,0,0,1-.5-.5V4.929a.5.5,0,0,1,.146-.354L6.147.646A.5.5,0,0,1,6.5.5H21.429a.5.5,0,0,1,.5.5V12a.5.5,0,0,1-.147.354L14.71,19.425a.5.5,0,0,1-.353.146H11.421L7.639,23.354A.5.5,0,0,1,7.285,23.5ZM3.072,18.571H7.285a.5.5,0,0,1,.5.5v2.722l3.076-3.075a.5.5,0,0,1,.353-.147H14.15l6.779-6.778V1.5H6.707L3.072,5.136Z" />
													<path d="M10.822,17.607a.494.494,0,0,1-.192-.038.5.5,0,0,1-.308-.462v-2.25H7.285a.5.5,0,0,1-.5-.5V3.571a.5.5,0,0,1,.5-.5H18.857a.5.5,0,0,1,.5.5v7.643a.5.5,0,0,1-.147.354L16.068,14.71a.5.5,0,0,1-.354.147H13.779l-2.6,2.6A.5.5,0,0,1,10.822,17.607Zm-3.037-3.75h3.037a.5.5,0,0,1,.5.5V15.9l1.9-1.9a.5.5,0,0,1,.354-.146h1.935l2.85-2.85V4.071H7.785Z" />
													<path d="M15.857,10.386a.5.5,0,0,1-.5-.5V6.072a.5.5,0,1,1,1,0V9.886A.5.5,0,0,1,15.857,10.386Z" />
													<path d="M12.357,10.386a.5.5,0,0,1-.5-.5V6.072a.5.5,0,1,1,1,0V9.886A.5.5,0,0,1,12.357,10.386Z" />												</svg>
											</a>
										)
									case 'EMAIL':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z" />
													<path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z" />
													<path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z" />
													<path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z" />												</svg>
											</a>
										)
									case 'CLUBHOUSE':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M3.247 17.969a.499.499 0 01-.53-.183 9.688 9.688 0 01-1.649-6.156.5.5 0 11.993.12 8.69 8.69 0 001.456 5.436.5.5 0 01-.27.783zm3.674.988a.5.5 0 00-.072-.704A8.566 8.566 0 014.412 9.16a.5.5 0 10-.934-.356 9.634 9.634 0 002.74 10.225.5.5 0 00.703-.072zm16.011-6.587a9.7 9.7 0 00-1.649-6.156.5.5 0 00-.8.6 8.703 8.703 0 011.457 5.435.5.5 0 10.992.12zm-2.409 2.826a9.634 9.634 0 00-2.74-10.225.5.5 0 00-.63.775 8.566 8.566 0 012.436 9.094.5.5 0 00.934.356zm-2.175-.756l-1.294-4.83a1.001 1.001 0 00-1.225-.707 1.984 1.984 0 00-.896.519l-1.105-4.124a1.5 1.5 0 00-2.343-.815 1.5 1.5 0 00-2.796.749 1.5 1.5 0 00-1.673 1.483 1.5 1.5 0 00-1.622 1.879l2.33 8.693a4.505 4.505 0 005.51 3.182l1.932-.518a4.505 4.505 0 003.182-5.51zM7.326 8.076l1.294 4.83a.5.5 0 10.966-.26L8.033 6.852a.5.5 0 01.966-.258l1.553 5.795a.5.5 0 10.965-.259L9.706 5.368a.5.5 0 01.966-.259l1.811 6.761a.5.5 0 00.966-.258l-1.553-5.796a.5.5 0 01.966-.259l2.084 7.776a2.504 2.504 0 00-1.298 2.884.5.5 0 10.966-.259 1.502 1.502 0 011.06-1.837.5.5 0 00.354-.612l-.647-2.415a1.001 1.001 0 01.707-1.225l1.294 4.83a3.504 3.504 0 01-2.474 4.287l-1.932.517a3.504 3.504 0 01-4.287-2.475l-2.33-8.693a.5.5 0 01.967-.259z" />
												</svg>
											</a>
										)
									case 'GITHUB':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M21.035 5.257c.91 1.092 1.364 2.366 1.364 3.822 0 5.277-3.002 6.824-5.823 7.279.364.637.455 1.365.455 2.093v3.73c0 .455-.273.728-.637.728a.718.718 0 0 1-.728-.728v-3.73a2.497 2.497 0 0 0-.728-2.093l.455-1.183c2.821-.364 5.733-1.274 5.733-6.187 0-1.183-.455-2.275-1.274-3.185l-.182-.727a4.04 4.04 0 0 0 .09-2.73c-.454.09-1.364.273-2.91 1.365l-.547.09a13.307 13.307 0 0 0-6.55 0l-.547-.09C7.57 2.71 6.66 2.437 6.204 2.437c-.273.91-.273 1.91.09 2.73l-.181.727c-.91.91-1.365 2.093-1.365 3.185 0 4.822 2.73 5.823 5.732 6.187l.364 1.183c-.546.546-.819 1.274-.728 2.002v3.821a.718.718 0 0 1-.728.728.718.718 0 0 1-.728-.728V20.18c-3.002.637-4.185-.91-5.095-2.092-.455-.546-.819-1.001-1.274-1.092-.09-.091-.364-.455-.273-.819.091-.364.455-.637.82-.455.91.182 1.455.91 2 1.547.82 1.092 1.639 2.092 4.095 1.547v-.364c-.09-.728.091-1.456.455-2.093-2.73-.546-5.914-2.093-5.914-7.279 0-1.456.455-2.73 1.365-3.822-.273-1.273-.182-2.638.273-3.73l.455-.364C5.749 1.073 7.023.8 9.66 2.437a13.673 13.673 0 0 1 6.642 0C18.851.708 20.216.98 20.398 1.072l.455.364c.455 1.274.546 2.548.182 3.821z" />
												</svg>
											</a>
										)
									case 'TELEGRAM':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M11 0a11 11 0 1011 11A11.012 11.012 0 0011 0zm0 21a10 10 0 1110-10 10.011 10.011 0 01-10 10zm4.464-15.366a2.405 2.405 0 00-.821.155c-.114.047-2.402.985-3.101 1.29L4.489 9.984c-.827.323-1.284.801-1.342 1.416a1.414 1.414 0 00.677 1.298l.097.06.108.038c.044.015 1.091.373 2.01.649a3.527 3.527 0 001.01.156 2.31 2.31 0 001.203-.296l.07-.047-.001.044a1.617 1.617 0 00.602 1.219c.67.566 2.133 1.523 2.836 1.982.15.099.257.168.296.195a3.755 3.755 0 001.939.752 1.71 1.71 0 00.39-.044 1.859 1.859 0 001.34-1.665l.755-4.736.198-1.295c.193-1.254.304-1.98.327-2.31a1.626 1.626 0 00-.388-1.289 1.534 1.534 0 00-1.152-.477zm.027 5.214l-.759 4.765s-.06.698-.576.82a.707.707 0 01-.162.017 2.892 2.892 0 01-1.356-.564c-.121-.091-2.276-1.457-3.065-2.124a.575.575 0 01.03-.972 115.996 115.996 0 003.187-3.034c.236-.236.472-.676.196-.676a2.37 2.37 0 00-.985.494l-4.279 2.883a1.353 1.353 0 01-.673.144 2.514 2.514 0 01-.723-.114c-.91-.273-1.972-.637-1.972-.637s-.729-.456.515-.941l7.071-2.913c.698-.304 3.065-1.275 3.065-1.275a1.44 1.44 0 01.46-.087c.286 0 .592.128.542.694-.03.425-.273 1.912-.516 3.52z" />
												</svg>
											</a>
										)
									case 'PINTEREST':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M7.615,23a.522.522,0,0,1-.11-.012.5.5,0,0,1-.386-.429l-.166-1.4A12.6,12.6,0,0,1,7,17.381c.205-.882,1.223-5.2,1.432-6.091a5.332,5.332,0,0,1-.348-1.907c0-1.992,1.219-3.552,2.776-3.552A2.07,2.07,0,0,1,12.956,8.1a10.218,10.218,0,0,1-.6,2.723c-.161.523-.328,1.06-.454,1.584a1.3,1.3,0,0,0,.225,1.133,1.441,1.441,0,0,0,1.15.525c2,0,3.452-2.209,3.452-5.252A4.482,4.482,0,0,0,11.969,4.2,4.957,4.957,0,0,0,6.79,9.155a4.7,4.7,0,0,0,.457,1.963.873.873,0,0,1,.063.584l-.428,1.816a.79.79,0,0,1-.515.571.813.813,0,0,1-.776-.139A6.575,6.575,0,0,1,3.472,9.1c0-3.9,2.756-8.1,8.807-8.1,4.7,0,8.249,3.337,8.249,7.762,0,4.743-3.017,8.321-7.018,8.321a4.281,4.281,0,0,1-2.635-.9l-.543,2.069a14.305,14.305,0,0,1-1.62,3.435l-.673,1.079A.5.5,0,0,1,7.615,23ZM10.862,6.831c-.995,0-1.776,1.121-1.776,2.552a4.149,4.149,0,0,0,.322,1.642.514.514,0,0,1,.037.334s-1.24,5.264-1.468,6.246a11.938,11.938,0,0,0-.034,3.422A12.932,12.932,0,0,0,9.364,18l.787-2.993a.5.5,0,0,1,.43-.37.51.51,0,0,1,.5.269,2.849,2.849,0,0,0,2.43,1.177c3.431,0,6.018-3.148,6.018-7.321C19.528,4.907,16.412,2,12.279,2,6.916,2,4.472,5.682,4.472,9.1a5.769,5.769,0,0,0,1.514,3.859l.351-1.492A5.224,5.224,0,0,1,5.79,9.155,5.937,5.937,0,0,1,11.969,3.2a5.438,5.438,0,0,1,5.755,5.61c0,3.623-1.872,6.252-4.452,6.252a2.44,2.44,0,0,1-1.936-.9,2.283,2.283,0,0,1-.412-1.987c.132-.545.3-1.1.472-1.646a9.754,9.754,0,0,0,.56-2.427A1.11,1.11,0,0,0,10.862,6.831Z"></path>
												</svg>
											</a>
										)
									case 'SNAPCHAT':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M12,22.5a6.309,6.309,0,0,1-3.574-1.315,2.457,2.457,0,0,0-2.3-.53,1.679,1.679,0,0,1-1.294-.018,1.522,1.522,0,0,1-.615-1.051c-.031-.125-.059-.159-.621-.284a7.775,7.775,0,0,1-.9-.245,1.512,1.512,0,0,1-1.19-1.5.968.968,0,0,1,.729-.907A5.19,5.19,0,0,0,5.885,12.8a11.574,11.574,0,0,1-1.808-1.067A1.816,1.816,0,0,1,6.138,8.741C6.11,8.357,6.09,7.9,6.091,7.375a5.909,5.909,0,0,1,11.818,0c0,.522-.018.982-.047,1.366a1.816,1.816,0,0,1,2.062,2.987A11.542,11.542,0,0,1,18.115,12.8a5.19,5.19,0,0,0,3.652,3.856.991.991,0,0,1,.732.939,1.524,1.524,0,0,1-1.193,1.466,7.775,7.775,0,0,1-.9.245c-.562.125-.59.159-.621.285a1.522,1.522,0,0,1-.615,1.05,1.679,1.679,0,0,1-1.294.018,2.458,2.458,0,0,0-2.3.529A6.3,6.3,0,0,1,12,22.5ZM6.789,19.552a3.914,3.914,0,0,1,2.19.8A5.367,5.367,0,0,0,12,21.5a5.367,5.367,0,0,0,3.021-1.149,3.464,3.464,0,0,1,3.132-.656c.405.118.515.075.516.075a1.477,1.477,0,0,0,.141-.423c.187-.757.791-.891,1.375-1.021a7.09,7.09,0,0,0,.793-.213c.508-.177.522-.438.522-.467l0-.021a6.226,6.226,0,0,1-4.393-4.748.822.822,0,0,1,.464-.93,10.283,10.283,0,0,0,1.756-1.02.817.817,0,0,0,.319-.537.807.807,0,0,0-.155-.6.817.817,0,0,0-1.141-.166,8.194,8.194,0,0,1-.852.536.5.5,0,0,1-.737-.512,15.116,15.116,0,0,0,.15-2.267,4.909,4.909,0,0,0-9.818,0,15.246,15.246,0,0,0,.15,2.267.5.5,0,0,1-.737.512,8.247,8.247,0,0,1-.851-.535.816.816,0,0,0-1.142.165.813.813,0,0,0,.165,1.141,10.206,10.206,0,0,0,1.755,1.02.823.823,0,0,1,.464.931,6.208,6.208,0,0,1-4.4,4.74c.008.057.022.318.53.5a7.09,7.09,0,0,0,.793.213c.584.13,1.188.264,1.375,1.021a1.329,1.329,0,0,0,.147.427h0a1.12,1.12,0,0,0,.51-.079A3.335,3.335,0,0,1,6.789,19.552Z"></path>												</svg>
											</a>
										)
									case 'SPOTIFY':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M18,10.561a.494.494,0,0,1-.245-.065,15.2,15.2,0,0,0-10.95-1.55.5.5,0,0,1-.232-.973A16.2,16.2,0,0,1,18.25,9.626a.5.5,0,0,1-.247.935Z"></path><path d="M16.646,13.632a.5.5,0,0,1-.249-.066,12.459,12.459,0,0,0-9.121-1.292.5.5,0,1,1-.237-.971A13.458,13.458,0,0,1,16.9,12.7a.5.5,0,0,1-.25.933Z"></path><path d="M15.312,16.583a.5.5,0,0,1-.251-.068,9.777,9.777,0,0,0-7.295-1.033.5.5,0,0,1-.245-.97,10.768,10.768,0,0,1,8.043,1.139.5.5,0,0,1-.252.932Z"></path><path d="M12,23A11,11,0,1,1,23,12,11.013,11.013,0,0,1,12,23ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z"></path>
												</svg>
											</a>
										)
									case 'SUBSTACK':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M21 2.5v2H3v-2h18m0-1H3a1 1 0 00-1 1v2a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1zM21 7.523v2H3v-2h18m0-1H3a1 1 0 00-1 1v2a1 1 0 001 1h18a1 1 0 001-1v-2a1 1 0 00-1-1zM21 12.5v8.471l-8.199-3.585a2 2 0 00-1.602 0L3 20.971V12.5h18m0-1H3a1 1 0 00-1 1v8.471a.998.998 0 001.4.917l8.2-3.585a1 1 0 01.8 0l8.2 3.585a.998.998 0 001.4-.917V12.5a1 1 0 00-1-1z"></path>												</svg>
											</a>
										)
									case 'DISCORD':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M6.613 6.27a.5.5 0 1 0 .274.96l-.274-.96Zm10.5.96a.5.5 0 0 0 .274-.96l-.274.96ZM6.304 16.77a.5.5 0 0 0-.275.96l.275-.96Zm11.667.96a.5.5 0 1 0-.275-.96l.275.96Zm-1.388.103a.5.5 0 1 0-1 0h1Zm5.917 0 .447.224a.495.495 0 0 0 .017-.038l-.464-.186ZM20.75 4.417l.471-.167a.5.5 0 0 0-.185-.244l-.286.41Zm-5.25-1.75.053-.497a.5.5 0 0 0-.517.311l.464.186Zm-1.63 2.73a.5.5 0 1 0 .928.372l-.929-.371ZM8.416 17.834a.5.5 0 0 0-1 0h1Zm-6.526 0-.467.178c.004.013.01.025.015.037l.452-.215ZM3.557 4.417l-.295-.404a.5.5 0 0 0-.18.245l.475.159ZM8.5 2.667l.464-.186a.5.5 0 0 0-.519-.311l.055.497Zm.702 3.102a.5.5 0 1 0 .929-.371l-.929.371ZM9.167 12a.667.667 0 0 1-.667.667v1c.92 0 1.667-.746 1.667-1.667h-1Zm-.667.667A.667.667 0 0 1 7.833 12h-1c0 .92.747 1.667 1.667 1.667v-1ZM7.833 12c0-.368.299-.667.667-.667v-1c-.92 0-1.667.747-1.667 1.667h1Zm.667-.667c.368 0 .667.299.667.667h1c0-.92-.747-1.667-1.667-1.667v1Zm7.667.667a.667.667 0 0 1-.667.667v1c.92 0 1.667-.746 1.667-1.667h-1Zm-.667.667a.667.667 0 0 1-.667-.667h-1c0 .92.746 1.667 1.667 1.667v-1ZM14.833 12c0-.368.299-.667.667-.667v-1c-.92 0-1.667.747-1.667 1.667h1Zm.667-.667c.368 0 .667.299.667.667h1c0-.92-.747-1.667-1.667-1.667v1ZM6.887 7.231c2.018-.577 3.573-.856 5.113-.856 1.54 0 3.095.28 5.113.856l.274-.962c-2.065-.59-3.719-.894-5.387-.894-1.668 0-3.322.304-5.387.894l.274.962Zm-.858 10.5c4.173 1.192 7.769 1.192 11.942 0l-.275-.962c-3.994 1.141-7.398 1.141-11.392 0l-.275.962Zm9.554.102c0 .398.144.84.327 1.246.189.416.442.844.712 1.229.268.383.562.738.837 1.003.137.131.28.251.421.341.127.081.318.181.537.181v-1c.073 0 .082.028 0-.024a1.822 1.822 0 0 1-.264-.219 6.027 6.027 0 0 1-.712-.856 6.848 6.848 0 0 1-.62-1.068c-.163-.36-.238-.647-.238-.833h-1Zm2.834 4c1.061 0 2.006-.585 2.753-1.307.755-.728 1.369-1.653 1.777-2.469l-.894-.447c-.37.74-.922 1.564-1.578 2.197-.662.64-1.37 1.026-2.058 1.026v1Zm4.547-3.814c.435-1.087.57-2.887.325-5.197-.248-2.329-.89-5.235-2.068-8.572l-.942.333c1.155 3.275 1.777 6.105 2.016 8.345.24 2.26.084 3.862-.26 4.72l.93.371ZM21.036 4.006c-1.8-1.254-3.699-1.646-5.483-1.836l-.106.994c1.716.183 3.418.549 5.017 1.663l.572-.82Zm-6-1.525-1.167 2.917.929.371 1.166-2.917-.928-.37Zm-7.62 15.352c0 .196-.07.49-.218.85-.144.35-.344.725-.563 1.07-.22.345-.451.645-.649.852-.1.105-.18.174-.238.213-.073.05-.054.015.031.015v1c.225 0 .415-.108.534-.19.135-.092.27-.214.396-.347.255-.267.524-.623.769-1.006.245-.385.475-.813.645-1.228.167-.405.294-.84.294-1.229h-1Zm-1.637 3c-.638 0-1.304-.377-1.935-1.017-.623-.632-1.149-1.457-1.502-2.198l-.903.43c.388.815.973 1.74 1.693 2.47.71.72 1.618 1.315 2.647 1.315v-1Zm-3.42-3.178c-.33-.861-.478-2.469-.249-4.73.228-2.242.82-5.073 1.92-8.349l-.947-.318c-1.12 3.335-1.732 6.24-1.967 8.567-.234 2.308-.105 4.104.308 5.186l.934-.356ZM3.851 4.82c1.52-1.111 3.049-1.474 4.703-1.656l-.11-.994c-1.74.191-3.465.587-5.183 1.843l.59.807Zm4.184-1.968L9.202 5.77l.929-.371L8.964 2.48l-.928.371Z"></path>
												</svg>
											</a>
										)
									case 'ETSY':
										return (
											<a target="_blank" key={index} rel="noopener noreferrer" data-testid="SocialIcon" href={link?.url} aria-label={`@iamdipakparmar` + link?.type.toLowerCase()} className="z-0 px-2 pt-0 pb-3 m-0 align-baseline border-0 cursor-pointer" style={{ "WebkitTextDecoration": "underline", "textDecoration": "underline", "WebkitTransition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s", "transition": "transform 0s cubic-bezier(0.23, 1, 0.32, 1) 0s" }}>
												<svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="w-8 h-8 pointer-events-none fill-blue-500" style={{}}>
													<title data-testid="svgTitle" >
														{link.type.toLowerCase()}
													</title>
													<path d="M19.793,3s-.136,1.454-.3,4.713H18.157l-.119-.471C17.6,5.513,17.01,4.594,15.93,4.594H9.74c-.46,0-.486.161-.486.434l0,6.592c.009,0,.749.029,1.681.029,1.565,0,3.672-.081,3.777-.515l.379-1.568h1.163L16.1,12.283,16.256,15H15.093l-.379-1.568c-.105-.433-2.212-.515-3.777-.515-.931,0-1.669.029-1.68.03l0,4.92c0,1.163.649,1.7,2,1.7h4.027c1.352,0,2.568-.135,3.406-2.027l.547-1.255h1.347C20.4,17.8,20.1,20.3,20.037,21c0,0-3.7-.135-5.3-.135H7.658L3.413,21V19.865l1.433-.27c1-.189,1.325-.488,1.325-1.3,0,0,.08-1.729.08-6.189s-.08-6.216-.08-6.216c-.083-.919-.325-1.134-1.325-1.324L3.413,4.3V3.161L7.658,3.3h7.919c1.568,0,4.216-.3,4.216-.3m.794,13.287h0M19.793,2a1.032,1.032,0,0,0-.111.006c-.026,0-2.612.29-4.1.29H7.658L3.445,2.162H3.413a1,1,0,0,0-1,1V4.3a1,1,0,0,0,.815.983l1.433.27a2.752,2.752,0,0,1,.467.117,2.071,2.071,0,0,1,.047.314h0s.076,1.783.076,6.126c0,4.373-.079,6.126-.079,6.143a1.794,1.794,0,0,1-.013.224,2.12,2.12,0,0,1-.5.138l-1.432.27a1,1,0,0,0-.815.982V21a1,1,0,0,0,1,1h.032l4.245-.135h7.048c1.56,0,5.226.133,5.263.134h.037a1,1,0,0,0,1-.918c.056-.681.349-3.121.536-4.6a1.059,1.059,0,0,0,.019-.2,1,1,0,0,0-1-1H19.24a1,1,0,0,0-.917.6l-.547,1.255c-.572,1.292-1.2,1.427-2.489,1.427H11.26c-1,0-1-.28-1-.7l0-3.945c.207,0,.437,0,.68,0a16.364,16.364,0,0,1,2.907.171l.277,1.147a1,1,0,0,0,.972.765h1.163a1,1,0,0,0,1-1.059L17.1,12.283l.157-2.658a1,1,0,0,0-1-1.059H15.093a1,1,0,0,0-.972.765l-.277,1.148a16.523,16.523,0,0,1-2.907.17c-.244,0-.474,0-.681,0V5.6l5.675,0c.181,0,.664,0,1.138,1.892l.12.474a1,1,0,0,0,.969.753h1.332a1,1,0,0,0,1-.948c.165-3.193.3-4.658.3-4.672a1,1,0,0,0-1-1.093Zm0,2h0Z"></path>												</svg>
											</a>
										)
								}
							}
							)
							}
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

async function fetchGraphQL(operationsDoc, operationName, variables) {
	const result = await fetch(
		process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || "http://localhost:8080/v1/graphql",
		{
			method: "POST",
			body: JSON.stringify({
				query: operationsDoc,
				variables: variables,
				operationName: operationName
			})
		}
	);

	return await result.json();
}

const operationsDoc = `
  query getLinks {
    links(order_by: {position: asc}) {
      position
      title
      url
			type
    }
		social_links(order_by: {position: asc}, where: {active: {_eq: true}}) {
			position
			type
			url
		}
  }
`;

function getLinks() {
	return fetchGraphQL(
		operationsDoc,
		"getLinks",
		{}
	);
}

export async function getStaticProps() {
	const { errors, data } = await getLinks();

	if (errors) {
		console.error(errors);
	}

	const links = data.links;
	const social_links = data.social_links;
	return {
		props: { links, social_links }
	}

}