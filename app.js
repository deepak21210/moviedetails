let search = document.getElementById('btn')
search.onclick =() => {
    let movies = document.getElementById('name').value;
    let date = document.getElementById('year').value;
    movie(movies,date);
    document.getElementById('name').value="";
    document.getElementById('year').value="";
}
movie = (movieName,year) => {
    
    
    fetch(`http://www.omdbapi.com/?t=${movieName}&y=${year}&apikey=3228cbb4`)
    .then(response => response.json())
    .then(item => {
        console.log(item);
        document.getElementById("poster").innerHTML=`<img src="${item.Poster}" alt="" width=295px height=395px>`
        document.getElementById("bg").style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.300),rgba(0, 0, 0, 0.900)),url(${item.Poster})`;
        document.getElementById("title").innerHTML=`<p>${item.Title} (${item.Type}) Language : ${item.Language}</p>`;
        document.getElementById("genre").innerHTML=`<p>${item.Genre}</p>`;
        document.getElementById("actors").innerHTML=`<p>${item.Actors}</p>`;
        document.getElementById("director").innerHTML=`<p>${item.Director}</p>`;
        document.getElementById("imdb").innerHTML=`<p>${item.imdbRating}</p>`;
        document.getElementById("plot").innerHTML=`<p>${item.Plot}</p>`;
        document.getElementById("award").innerHTML=`<p>${item.Awards}</p>`;
        document.getElementById("bx").innerHTML=`<p>${item.Runtime}</p>`;
        document.getElementById("rd").innerHTML=`<p>${item.Released}</p>`;
       
        
    });

}

window.onload(movie("ayalaan"));


    