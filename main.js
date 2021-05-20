//SECTION ONE
//EVENT LISTENERS
eventListeners();

function eventListeners(){
    //submit
    document.querySelector('#formOne').addEventListener('submit', convertFahrToCelsius);
    //second submit
    document.querySelector('#formTwo').addEventListener('submit', checkYuGiOh);
};

//FUNCTIONS
function convertFahrToCelsius(e){
    e.preventDefault();
    const fahr = document.getElementById('parameter').value,
        // fahr = Number(f);
         convert = (fahr - 32) * 5/9,
         convertRU = convert.toFixed(4);
    const c = document.getElementById('answer');
    c.value = convertRU;
    console.log(fahr);
    console.log(typeof fahr);
    if(typeof fahr !== number){
        c.value = `${fahr} is not a valid number but a/an ${typeof fahr}`;
    };
};

function checkYuGiOh(e){
    e.preventDefault();
    const n = document.getElementById('number').value;
    console.log(n);
    console.log(typeof n);
}