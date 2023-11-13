// Handling specific errors and creating a generic catch-all for unknown errors.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            if (response.status === 404) { // 404 = Not Found
                throw new Error('Resource not found');
            } else if (response.status === 500) {
                throw new Error('Internal Server Error');
            } else {
                throw new Error('Some error occurred: ' + response.statusText);
            }
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error: ' + error));