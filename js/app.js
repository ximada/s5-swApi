$('#myModal').on('shown.bs.modal', function () {
    $('#myLink').trigger('focus')
})

let filmSection = document.getElementById('films-container');
let containerModal = document.getElementById('container-modal');
 
 

fetch("https://swapi.co/api/films/")
.then(function(response){
    return response.json();
})
.then(function(data){
    //console.log('Request succesful', data);
    const films = data.results;
    //console.log(films)
    getInfoFilms(films);

})
.catch(function(error){
    console.log('Request failed',error)
});

const getInfoFilms = films => {
    let outPut = ('');
    films.forEach((item,index) => {
       //console.log(item);
        
        let titleFilm = item.title;
        
        let dateFilm = item.release_date;
        
        let episodeFilm = item.episode_id;
    
        let directorFilm = item.director;
        
        let summaryFilm = item.opening_crawl;
        let urlCharacter = item.characters[0];

        let urlCharacter1 = item.characters[1];
        console.log(urlCharacter1)
        let urlCharacter2 = item.characters[2];

        let arrayFilms = ['./assets/images/episodeIV.jpg', './assets/images/episodeII.jpg', './assets/images/episodeI.jpg', './assets/images/episodeIII.jpg', './assets/images/episodeVI.jpg', './assets/images/episodeV.jpg', './assets/images/episodeVII.jpg']
        
        let imageFilms = arrayFilms[index];
        


        outPut += `<div class='card style-card text-center' style="width: 18rem;">    
                    <img src= ${imageFilms}>
                    <br>
                    <span>Title: ${titleFilm}</span>
                    <br>
                    <span>Director: ${directorFilm}</span>
                    <br>
                    <span>Date: ${dateFilm}</span>
                    <br>
                    <span>Episode: ${episodeFilm}</span>
                    <br>
                    <a class="" data-toggle="modal" data-target="#myModal" style = "color:#fff;">${urlCharacter}</a> 
                    <a class="" data-toggle="modal" data-target="#myModal" style = "color:#fff;">${urlCharacter1}</a>
                
        
                </div>`
            

       filmSection.innerHTML= outPut; 
       
       
        
    });

    
}



fetch("https://swapi.co/api/people/")
    .then(function (response) {
        return response.json();
    })
    .then(function (dataPeople) {
       // console.log('Request succesful', dataPeople);
        const people = dataPeople.results;
        //console.log(people);
        getDataPeople(people);


    })
    .catch(function (error) {
        console.log('Request failed', error)
    });
 const getDataPeople = people => {
     let outPutModal =('');
     people.forEach((items,index) =>{
         console.log(items);
         let nameCharacter = items.name;
         let eyeColors = items.eye_color;
         let hairColor = items.hair_color;
         let massCharacter =items.mass;
         let skinColor = items.skin_color;

         
         console.log(skinColor);
         let arrayCharacters = ['./assets/images/luke.jpg', './assets/images/c-3po.jpg', './assets/images/r2b2.jpg', './assets/images/dark.jpg', './assets/images/leia.jpg', './assets/images/owen.jpg', './assets/images/beru.jpg', './assets/images/r5-d4.jpg', './assets/images/Biggs.jpg', './assets/images/Obi-Wan.jpg']

         let imageCharacters = arrayCharacters[index];

         outPutModal += `<div class=' card characters-modal text-center ' style="width: 13rem;">    
                        <img src= ${imageCharacters}>
                        <br>
                        <span>Name:  ${nameCharacter}</span>
                        <br>
                        <span>Mass: ${massCharacter}</span>
                        <br>
                        <span>Hair Color: ${hairColor}</span>
                        <br> 
                        <span>Eye Color: ${eyeColors}</span> 
                        <br>
                        <span>Sking Color: ${skinColor}</span> 
                    </div>`

         containerModal.innerHTML = outPutModal; 

     })
 }