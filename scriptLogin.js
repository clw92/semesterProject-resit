let login = document.querySelector(".userLogIn");

login.addEventListener("click", handleLogin);


async function handleLogin()
{


	let username = document.querySelector(".name").value
	let password = document.querySelector(".password").value



	const loginInfo = {
		username: username,
		password: password
	}



	fetch('http://localhost/frontendwiky/wp-json/jwt-auth/v1/token',
		{
			method: 'POST',
			body: JSON.stringify(
			{


			}),
			headers:
			{
				'Content-Type': 'application/json',

			}
		})
		.then(res => res.json())
		.then(res => console.log(res.token))
	window.location.href = "admin.html";



}