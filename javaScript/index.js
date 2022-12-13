window.onload = () => {
    // Show the loading screen
    document.getElementById("loading-screen").style.display = "block";
  
    // Hide the loading screen after all content has loaded
    setTimeout(() => {
      document.getElementById("loading-screen").style.display = "none";
    }, 000); // 6000 milliseconds = 6 second
  }


const URL = "https://api.jsonbin.io/v3/b/6398650d2d0e0021081bbe17"


// Send a GET request to the specified URL and return a promise
fetch(URL)
  .then(response => response.json())

  // Convert the response to a JavaScript object
  .then(data => {
   const films = data.record.films;
   const filmList = document.querySelector('#film-titles');

   // Loop over the films array and create a list item for each film
   
       // Get the container element from the HTML page
    const container = document.querySelector('#myContainer');

     // Loop over the films array and create a card for each film
    films.forEach(film => {
        const tittle= film.title
        const poster= film.poster
        const description= film.description
        const runtime = film.runtime
        const showtime = film.showtime
        const capacity = film.capacity
        const ticketsSold = film.tickets_sold
      
            const li = document.createElement('button');
            li.className='bn'
            li.innerHTML = tittle;
            filmList.appendChild(li);
          
        // Calculate the number of available tickets
        let Availabletickets =  capacity - ticketsSold
       
        // Create a div element with the card class
      const card = document.createElement('div');
      card.className = 'card';
      card.style.width = '18rem';
      card.style.margin = '14px'
      
        // Create an img element with the card-img-top class and set the src attribute to the film's poster
      const img = document.createElement('img');
      img.src = poster;
      img.className = 'card-img-top';
      card.appendChild(img);

       // Create a div element with the card-body class
        // Create an h4 element with the card-title class and set the innerHTML to the film's title
      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';
      const h4 = document.createElement('h4');
      h4.className = 'card-title';
      h4.innerHTML = tittle;
      cardBody.appendChild(h4);

      // Create a p element with the card-text class and set the innerHTML to the film's description
      const p = document.createElement('p');
      p.className = 'card-text';
      p.innerHTML = description;
      cardBody.appendChild(p);


      // Create an h6 element with the runTime class and set the innerHTML to the film's runtime
      const h6 = document.createElement('h6');
      h6.className = 'runTime';
      h6.innerHTML = `Run Time: ${runtime} Minutes`;
      cardBody.appendChild(h6);
      

      // Create an h6 element with the runTime class and set the innerHTML to the film's showtime
      const ShowTime = document.createElement('h6');
      ShowTime.className = 'showTime';
      ShowTime.innerHTML = `Show Time: ${showtime}`;
      cardBody.appendChild(ShowTime);

        // Create an h6 element with the available-tickets class and set the innerHTML to the film's Availabletickets
      const AvailableTickets = document.createElement('h6');
      AvailableTickets.className = 'available-tickets';
      AvailableTickets.innerHTML = `Available Tickets: ${Availabletickets}`;
      cardBody.appendChild(AvailableTickets);

      // creat an a element with the btn btn-success class and set innerHTML to buy ticket .
      const button = document.createElement('a');
      button.className = 'btn btn-success';
      button.innerHTML = 'Buy Ticket';
      cardBody.appendChild(button);
      card.appendChild(cardBody);
      container.appendChild(card);

      // event listener for button 
      button.addEventListener('click', () => {
        if (Availabletickets >0){
            Availabletickets -= 1;}
        else{
            button.className = 'btn btn-danger';
            button.innerHTML = 'Sold Out';
            alert ("Sold Out")
           

            
        }
        AvailableTickets.innerHTML = `Available Tickets: ${Availabletickets}`;
        
    });

      
    
    })})