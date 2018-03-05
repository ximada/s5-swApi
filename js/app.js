let filmSection = document.getElementById('films-container');


fetch("https://swapi.co/api/films/")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log('Request succesful', data);
    const films = data.results;
    getInfoFilms(films)
    printFilmsInfo(films);

})
.catch(function(error){
    console.log('Request failed',error)
});

const getInfoFilms = films => {
    let outPut = ('');
    films.forEach((item,index) => {
        console.log(item);
        
        let titleFilm = item.title;
        
        let dateFilm = item.release_date;
        
        let episodeFilm = item.episode_id;
    
        let directorFilm = item.director;
        
        let summaryFilm = item.opening_crawl;
        let arrayFilms = ['./assets/images/episodeIV.jpg', './assets/images/episodeII.jpg', './assets/images/episodeI.jpg', './assets/images/episodeIII.jpg', './assets/images/episodeVI.jpg', './assets/images/episodeV.jpg', './assets/images/episodeVII.jpg']
        
        let imageFilms = arrayFilms[index];
        //console.log(summaryFilm);


        outPut += `<div>    <img src= ${imageFilms}>
                            <h3>Title: ${titleFilm}</h4>
                            <h3>Director: ${directorFilm}</h4>
                            <h4>Date: ${dateFilm}</h4>
                            <h5>Episode: ${episodeFilm}</h5>
                            <p>Summary: ${summaryFilm}</p>
                            </div>`

       filmSection.innerHTML= outPut;             
        
    });

}
