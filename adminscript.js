url = "http://localhost/frontendwiky/wp-json/wp/v2/posts/";

async function getProduct()
{
	const response = await fetch(url);
	const json = await response.json();

	data = json;
    renderProductDetails(data);
}

function renderProductDetails()
{
	var mainContainer = document.getElementById("myData");
	mainContainer.innerHTML = "";

	data.forEach((item) =>
	{
		mainContainer.innerHTML += `
                              
                                <div id="products">
                                <h1 class="title">${item.title.rendered}</h1>
                                <p class="wp-content">${item.content.rendered}</p>
                             
                                </h1>
                                <div class="buttons">
                                   
                                    <button onclick="deletePost()" class="btnDelete">Delete</button>
                                </div>

                          
                                </div>
                                

                                
                                
                             
                            `;});
};

getProduct()

fetch('http://localhost/frontendwiky/wp-json/jwt-auth/v1/token',
	{
		method: 'POST',
		headers:
		{
			'Content-Type': 'application/json',
			'accept': 'application/json'

		},
		body: JSON.stringify(
		{

			username: 'editor@gmail.com',

			password: 'Halla123'
		}),

	})
	.then(function (response)
	{
		return response.json()
	}).then(function (user)
	{

		localStorage.setItem('jwt', user.token)
	});






let addPostButton = document.querySelector(".create-submit");

addPostButton.addEventListener("click", addPost);

setTitle = document.querySelector(".heading").value
setContent = document.querySelector(".post-content").value




function addPost()
{
	fetch(url,
		{
			method: "POST",
			headers:
			{
				'Content-Type': 'application/json',
				'accept': 'appication/json',
				'Authorization': `Bearer ${localStorage.getItem('jwt')}`


			},
			body: JSON.stringify(
			{
				title: setTitle.toString(),
				content: setContent.toString(),
				status: 'publish'
			})
		})
};


async function deletePost()
{
	const response = await fetch(url);
	const json = await response.json();
	data = json;


	fetch(url + `${data[0].id}`,
	{
		method: "DELETE",
		headers:
		{
			'Content-Type': 'application/json',
			'accept': 'appication/json',
			'Authorization': `Bearer ${localStorage.getItem('jwt')}`


		}
	})
}