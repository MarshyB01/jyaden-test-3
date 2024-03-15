/*
const toggleButtons = document.querySelectorAll('.toggle-button')
const dataParagraph = document.querySelector('.data');
var NJ = document.getElementById('NJ');

// Get the paragraph element by its class
toggleButtons.forEach(button => {
    button.addEventListener('click', function () {
        const targetImageId = this.dataset.target;
        const targetImage = document.getElementById(`${targetImageId}`);
        document.querySelectorAll('[id^=""]').forEach(img => {
            img.classList.remove('visible');
        });
        targetImage.classList.toggle('visible');
        dataParagraph.textContent = `You clicked the button for ${targetImageId}.`;
    });
});


const myImage = document.getElementById("my-image");
// Add a click event listener to the specific path
NJ.addEventListener('click', function () {
    // Change the text content of the paragraph
    dataParagraph.textContent = 'you clicked new jersey, thet state of goast!';
    myImage.classList.add("visible");
});



var NY = document.getElementById('NY');


// Add a click event listener to the specific path
NY.addEventListener('click', function () {
    // Change the text content of the paragraph
    dataParagraph.textContent = 'you clicked new york, thet state of goast!';
    myImage.classList.remove("visible");
});
*/

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    const dataParagraph = document.querySelector('.data');
    const statisticsTableBody = document.querySelector('#statistics-table tbody');


    const stateStatistics = {
        NJ: [
            { statistic: 'Population', value: '9 million' },
            { statistic: 'Area', value: '8,722 square miles' },
            // Add more statistics for New Jersey
        ],
        NY: [
            { statistic: 'Population', value: '20 million' },
            { statistic: 'Area', value: '54,556 square miles' },
            // Add more statistics for New York
        ],
        // Add statistics for other states
    };

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetImageId = this.dataset.target;
            const targetImage = document.getElementById(`image${targetImageId}`);

            // Reset all images to hidden
            document.querySelectorAll('img').forEach(img => {
                img.classList.remove('visible');
            });

            // Toggle the visibility for the specific image
            targetImage.classList.toggle('visible');
            // Clear existing table rows
            statisticsTableBody.innerHTML = '';
            // Update the text content based on the clicked button
            dataParagraph.textContent = `You clicked the button for ${targetImageId}.`;

            // Populate table with statistics for the selected state
            stateStatistics[targetImageId].forEach(stat => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${stat.statistic}</td><td>${stat.value}</td>`;
                statisticsTableBody.appendChild(row);
            });
        });
    });
});