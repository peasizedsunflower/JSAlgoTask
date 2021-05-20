//SECTION ONE

convertFahrToCelsius(0);

function convertFahrToCelsius(fahr){
    let convert = document.getElementById('convert');
    if(typeof fahr !== 'number'){
        convert.value = `${fahr} is not a valid number but a/an ${typeof fahr}`;
    } else {
        let celsius = (fahr - 32) * 5/9;
        celsius = celsius.toFixed(4);
        convert.value = `${celsius} deg C`;
    };
};

//SECTION TWO
checkYuGiOh(10);

function checkYuGiOh(value){
    
};