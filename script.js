url = "http://localhost/frontendwiky/wp-json/wp/v2/posts";



async function getProduct() {
  
    const response = await fetch(url);
    const json = await response.json();
    
    data = json
    console.log(data);
    renderProductDetails(data);
  

}
   





function renderProductDetails() {
  var mainContainer = document.getElementById("myData");
  mainContainer.innerHTML = "";
  
  data.forEach((item) => {
    mainContainer.innerHTML += `
                              
                                <div id="products">
                                <h1 class="title">${item.title.rendered}</h1>
                                <p class="wp-content">${item.content.rendered}</p>
                             
                                </h1>
                            
                          
                                </div>

                                
                                
                             
                            `;
                            
                          });


                    
                     
                     
 };

 getProduct()



const searchBar = document.querySelector(".filter");

searchBar.onkeyup = function () {
  const value = event.target.value.trim().toLowerCase();
  console.log(value)

  const filtered = data.filter(function (product) {
    if (( product.title.rendered.toLowerCase().startsWith(value))) {
      return true;
    }
  });
  console.log(filtered);

  data = filtered;

  renderProductDetails();
};


let login = document.querySelector(".userLogIn");

login.addEventListener("click", handleLogin);
 

async function handleLogin() {


    let username = 'editor@gmail.com';
         
    let password = 'Halla123';

    let un = document.querySelector(".name").value
    let pw= document.querySelector(".password").value

    if ( (un == username) && (pw=password)){
      window.location.href = "admin.html";
    } else {
      alert ("Login was unsuccessful, please check your username and password")
    }
}



