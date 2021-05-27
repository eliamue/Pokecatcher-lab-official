import { mungeNames, mungeCaptured, mungeEncountered, mungeColors } from '../data-utils.js';
import { getPokedex, setPokedex } from '../local-storage-utils.js';

let ctx = document.getElementById('myChart').getContext('2d');

const resetButton = document.getElementById('reset-button');
const pokedex = getPokedex();
const names = mungeNames(pokedex);
const capturedData = mungeCaptured(pokedex);
const colors = mungeColors(pokedex);
const encounteredData = mungeEncountered(pokedex);

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [
            {
                label: '# of Captures',
                data: capturedData,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
            {
                label: '# of Encounters',
                data: encounteredData,
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

resetButton.addEventListener('click', () => {
    // redirect to home
    window.location = '../';
    // clear local storage
    setPokedex([]);
    
});