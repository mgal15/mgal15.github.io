// This event listener waits for the DOM (Document Object Model) to fully load before executing the contained code.
document.addEventListener('DOMContentLoaded', function() {
  
    // Fetches JSON data from the provided URL.
        fetch('/json/books.json')

            .then(response => response.json())  // Parses the response as JSON.

            .then(data => {

                const sorted = sortBooks(data);

                organize(sorted);
            })
        });

        function sortBooks(books) {
            const order = ["Currently Read", "Recently Read", "Want to Read", "Want to Re-Read"];

            return books.sort((a,b) =>{
                return order.indexOf(a.status) - order.indexOf(b.status);
            });
        }

        function organize(data){
            const bookDiv = document.getElementById('books');
            bookDiv.innerHTML = '';

            let currentStatus = '';
            let num = 0;

            data.forEach(item=>{
                if (item.status !== currentStatus) {
                    currentStatus = item.status;
                
                    const head = document.createElement('h2');
                    head.textContent = `${currentStatus}`;
                    head.id = "head"+num;
                    bookDiv.appendChild(head);
                }
                const section = document.createElement('section');
                section.id = "book"+num;
                num++;
                // Sets the innerHTML of the section with dynamic data from the current item.
                section.innerHTML = `
                    <img src="${item.coverimg}" alt="${item.alttext}" style="width:100%;">
                    <h3>${item.title}</h3> 
                    <h4>Genre: ${item.genre}</h4>
                    <p id='rating'>Rating: ${item.Rating}</p>
                    <p id='comments'><br> &emsp;  ${item.About}</p>
                    <p id='link'>Want to read yourself? <br> <a href="${item.linktopango}" target="_blank">Buy from Pango</a>
                `;
                // Appends the newly created section to the 'content' div.
                bookDiv.appendChild(section);
            });
        }
    