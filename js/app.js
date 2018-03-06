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
    console.log('Request succesful', data);
    const films = data.results;
    getInfoFilms(films);

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
        let urlFilm = item.url;
        //console.log(urlFilm);
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
                   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" style = "background-color:#FDE71F;border-color:#FDE71F; color:#000;">${urlFilm}</button > 
                
                    
                </div>`
            

       filmSection.innerHTML= outPut; 
       
       
        
    });

    
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myLink').trigger('focus')
})

fetch("https://swapi.co/api/people/")
    .then(function (response) {
        return response.json();
    })
    .then(function (dataPeople) {
        console.log('Request succesful', dataPeople);
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
         //console.log(items);
         let nameCharacter = items.name;
         let eyeColors = items.eye_color; 
         
         console.log(nameCharacter);
         let arrayCharacters = ['./assets/images/luke.jpg', './assets/images/c-3po.jpg', './assets/images/r2b2.jpg', './assets/images/dark.jpg', './assets/images/leia.jpg', './assets/images/owen.jpg', './assets/images/beru.jpg', './assets/images/r5-d4.jpg', './assets/images/Biggs.jpg', './assets/images/Obi-Wan.jpg']

         let imageCharacters = arrayCharacters[index];

         outPutModal += `<div class=' card characters-modal text-center ' style="width: 13rem;">    
                        <img src= ${imageCharacters}>
                        <br>
                        <span>Name:  ${nameCharacter}</span>
                        <br>
                        <span>Eye Color: ${eyeColors}</span> 
                    </div>`

         containerModal.innerHTML = outPutModal; 

     })
 }