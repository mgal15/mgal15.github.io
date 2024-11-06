// This event listener waits for the DOM (Document Object Model) to fully load before executing the contained code.
document.addEventListener('DOMContentLoaded', function() {
  
    // Fetches JSON data from the provided URL.
        fetch('/json/books.json')
            .then(response => response.json())  // Parses the response as JSON.
            .then(data => {
                // Gets a reference to the element with the id 'content' in the HTML document.
                const contentDiv = document.getElementById('books');
                // Iterates over each item in the fetched data array.
                data.forEach(item => {
                    // Creates a new 'section' element.
                    const section = document.createElement('section');
                    // Sets the innerHTML of the section with dynamic data from the current item.
                    section.innerHTML = `
                        <h2>${item.title}</h2> 
                   <!-- Displays the title of the item -->
                        <img src="${item.coverimg}" alt="${item.alttext}" style="width:100%;max-width:300px;">
                   <!-- Displays an image with a source and alternative text from the item, with a set style -->
                        <p><strong>Altitude: ${item.genre}</strong></p>
                   <!-- Displays the altitude of the item -->
                        <p>${item.status}  <a href = "${item.linktopango}" target = "_blank">Read More</a></p>
                   <!-- Displays text and a 'Read More' link that opens in a new tab -->
                    `;
                    // Appends the newly created section to the 'content' div.
                    contentDiv.appendChild(section);
                });
            })
            .catch(error => console.error('Error loading the data:', error)); 
            // Catches and logs any errors in the fetch operation.
    });
    