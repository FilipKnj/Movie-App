let total = 0;
const cartIcon = document.querySelector('#cart');
const header = document.querySelector('h1');
const mainContainer =  document.querySelector('.main-container');
const priceContainer =  document.querySelector('.price-container');

cartIcon.addEventListener('click',function(){
    mainContainer.style.display = 'none';
    priceContainer.style.display = 'block';
})

header.addEventListener('click',function(){
    mainContainer.style.display = 'block';
    priceContainer.style.display = 'none';
})

function movieFunc(element){
    let mainEl = element.closest('.single-movie');
    let price = mainEl.querySelector('.price').innerText;
    let movie = mainEl.querySelector('h2');
    let moviePriceDiv = document.querySelector('.total-sum-div');
    let totalPrice = document.querySelector('.totalSum span');
    let movieName = movie.innerText;

    price = price.substring(1);
    price = parseInt(price);
    total = total + price;
    totalPrice.innerText = `${total}`
    
    moviePriceDiv.innerHTML += `<div class='movie-div'><h2>${movieName}</h2> <p>$${price}</p><button onclick='removeFromCart(this)' class='remove-btn'>Remove</button></div>`
    movie.removeAttribute("onclick");    
}

function removeFromCart(elements){
    let mainEl = elements.closest('.movie-div');
    let movieName = mainEl.querySelector('h2').innerText;
    let moviePrice = mainEl.querySelector('p').innerText;

    moviePrice = moviePrice.substring(1);

    mainEl.remove();
    total = total - parseInt(moviePrice);

    document.querySelector('.totalSum span').innerText = total;

    let movies = document.querySelectorAll('.single-movie');

    movies.forEach(function (movie){
        let name = movie.querySelector('h2').innerText;
        
        if(name === movieName){
            movie.querySelector('h2').setAttribute("onclick", 'movieFunc(this)' ); 
        }
    });

}