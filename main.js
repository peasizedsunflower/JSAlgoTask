//EVENT LISTENERS
eventListeners();

function eventListeners(){
    //submit
    document.querySelector('#form').addEventListener('submit', convertFahrToCelsius);
};

//FUNCTIONS
function convertFahrToCelsius(e){
    e.preventDefault();
    const fahr = document.getElementById('parameter').value,
        // fahr = Number(f);
         convert = (fahr - 32) * 5/9,
         convertRU = convert.toFixed(4);
    const c = document.getElementById('answer');
    c.value = `${convertRU} deg C`;
    console.log(fahr);
    console.log(typeof fahr);
    if(typeof fahr !== number){
        c.value = `${fahr} is not a valid number but a/an ${typeof fahr}`;
    };
};