async function getUserInfo() {
    const userId = document.getElementById('userId').value;
    
    if (!userId) {
      alert('Please enter a user ID');
      return;
    }
 
    try { 
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.text();
      const users = JSON.parse(data);

      const userData = users.find(user => user.id === parseInt(userId));

      if (userData) {
          displayUserInfo(userData);
          setResultColor('green');
      } else {
          displayUserInfo(null);
          setResultColor('red');
      }
  } catch (error) {
      console.error(error);
      displayUserInfo(null);
      setResultColor('red');
  }

}
  const nameElement = document.getElementById('name');
  const userNameElement = document.getElementById('username');
  const emailElement = document.getElementById('email');
  const cityElement = document.getElementById('city');
  const streetElement = document.getElementById('street');
  const zipcodeElement = document.getElementById('zipcode');
  const resultElement = document.getElementById('result');

function displayUserInfo(userData) {

  if (userData) {
      nameElement.textContent = userData.name;
      userNameElement.textContent = userData.username;
      emailElement.textContent = userData.email;
      cityElement.textContent = userData.address.city;
      streetElement.textContent = userData.address.street;
      zipcodeElement.textContent = userData.address.zipcode;
      resultElement.textContent='User Found';
  } 
  else {
    nameElement.textContent = '';
    userNameElement.textContent = '';
    emailElement.textContent = '';
    cityElement.textContent = '';
    streetElement.textContent ='';
    zipcodeElement.textContent ='';
    resultElement.textContent='User Not Found';
}
}
function setResultColor(color) {
  document.getElementById('result').style.color = color;
}
function userReset(){
  nameElement.textContent = '';
  userNameElement.textContent = '';
  emailElement.textContent = '';
  cityElement.textContent = '';
  streetElement.textContent ='';
  zipcodeElement.textContent ='';
  resultElement.textContent='';
  const userId = document.getElementById('userId').value='';
}
//----------------------------------------------
async function getImageInfo() {
  const imageId = document.getElementById('imageID').value;
  if (!imageId) {
      alert('Please enter an Image ID');
  }

  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const images = await response.json();

      const image = images.find(img => img.id === parseInt(imageId));

      if (image) {
          displayImageInfo(image);
          setImageResultColor('green');
      } else {
          displayImageInfo(null);
          setImageResultColor('red');
      }
  } catch (error) {
      console.error(error);
      displayImageInfo(null);
      setImageResultColor('red');
  }
}
  const albumIdElement = document.getElementById('albumId');
  const urlElement = document.getElementById('url');
  const imageResultElement = document.getElementById('imageResult');
function displayImageInfo(image) {
  
  if (image) {
      albumIdElement.textContent = image.albumId;
      urlElement.src = image.url;
      urlElement.title=image.title;
      imageResultElement.textContent='Image Found';
  } 
    else {
    albumIdElement.textContent ='';
    urlElement.innerHTML ='';
    imageResultElement.textContent='Image Not Found';
}
}
function imageReset(){
  document.getElementById('imageID').value='';
  albumIdElement.textContent ='';
  urlElement.src ='';
  urlElement.title='';
  imageResultElement.textContent=''; 
}

function setImageResultColor(color) {
  document.getElementById('imageResult').style.color = color;
}