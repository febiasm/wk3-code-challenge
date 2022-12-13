# wk3-code-challenge

## Description 
This is an aplication where a use can view a list of movies and buy movie tickets online 

This aplication uses JavaScript script `fetch()` method to retrieve data from a remote `URL`, which is then parsed as `JSON` and used to dynamically generate a series of elements on a web page. The elements are `appended` to a container element, which is selected using the `querySelector()` method.

When the `fetch()` method is called, it sends a request to the specified `URL` and returns a `Promise` object. When the `Promise` is resolved, the `then()` method is called, which takes a callback function as an argument. This callback function is passed the `response` object, which is then converted to `JSON` using the `json()` method.

Once the data has been parsed as `JSON`, it is used to generate a series of elements on the page. For each film in the films array, a div element is created and assigned various properties, such as a src attribute for an img element and various innerHTML values for other elements. These elements are then appended to the container element on the page.

## Running live Hosted Application.

Click on this link to run the application.

    https://wk3-code-challenge.vercel.app/

This web page consists of a list of movies each with a different show time and limited number of tickets.

A user can buy a ticket for an intrested movie by clicking on the buy ticket button 

In the event that all tickets are sold out and a user tryes to buy a ticket the user  will be alerted that all tickets have been sold out. 

## cloning the application.
Open your terminal and navigate to where you'd like to download the project. Clone the repo by using the following:

    git clone https://github.com/febiasm/wk3-code-challenge

Or paste in the copied SSH link from GitHub It should look something like this:

    git clone git@github.com:febiasm/wk3-code-challenge.git

upon completion, a new folder with the GitHub name of the project will be present. Change directory into this folder to access the project files.

    cd wk3-code-challenge

Open it in Visual Studio Code

    code .

congratulations you have successfully cloned the app.

## author :
This project was contributed by Trevor Febias
## License
This project is licensed by `ISC`