const inputVal = document.querySelector('.search-bar');
 const btn = document.querySelector('.search-btn');
const outputDiv = document.querySelector('#output');


btn.addEventListener('click', function(){
  //fetch the searches
 fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputVal.value}&key=AIzaSyDqkTRjAc8j47Jta8fDg-7SrSROTMc6OL4`)
	.then(response => response.json())
	.then(data => { 
    let output = '';
    data.items.forEach(book => {
      output += `
       <div class="main">
      <div class="card">
      <img src=${book.volumeInfo.imageLinks.smallThumbnail} alt="book-cover pic">
        <div class="content">
      <p class="title">${book.volumeInfo.title}</p>
      <p class='author'>${book.volumeInfo.authors}</p></div>
    
    </div>
      `;
    });
    outputDiv.innerHTML = output;
      
  })
  
	.catch(err => console.log('error'));
  
})



