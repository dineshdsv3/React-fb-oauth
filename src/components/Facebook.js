import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const Facebook = () => {
	const [fbDetails, setFbDetails] = useState({
		isLoggedIn: false,
		userId: '',
		name: '',
		email: '',
		picture: '',
	});

	const componentClicked = () => {
		console.log('clicked component');
	};

	const responseFacebook = (response) => {
		console.log(response);
		setFbDetails({
			isLoggedIn: true,
			userId: response.userID,
			name: response.name,
			email: response.email,
			picture: response.picture.data.url,
		});
	};

	let fbContent;
	{
		fbDetails.isLoggedIn
			? (fbContent = (
					<div style={{ width: '400px', margin: 'auto', background: '#f4f4f4', padding: '20px' }}>
						<h1>Logged in</h1>
						<img src={fbDetails.picture} alt={fbDetails.name} />
						<h2>Welcome {fbDetails.name}</h2>
						Email: {fbDetails.email}
					</div>
			  ))
			: (fbContent = (
					<FacebookLogin
						appId="712415066020807"
						autoLoad={true}
						fields="name,email,picture"
						onClick={componentClicked}
						callback={responseFacebook}
					/>
			  ));
	}

	return <div>{fbContent}</div>;
};

export default Facebook;
