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

let yuValue;

const convertBtn2 = document.getElementById("convert-btn-2");

let answerYu = document.getElementById("answer-yu");

document.getElementById("yu-input").addEventListener("input", (e) => {
    
    yuValue = e.target.value;
});

function checkYuGiHo(e, n) {
    e.preventDefault();
    if (isNaN(n)) {
        
        answerYu.value = `${n} is not a valid number but a/an ${typeof n}`;
    } else {
        let originalArray = [...Array(Number(n)).keys()].map(i => i + 1);

        let newArray = [];

        originalArray.forEach((value) => {
            if (value == 1) {
                newArray.push('1')
            } else {
                newArray.push(singleConvertYuGiOh(value))
            };
        });

        answerYu.value = [newArray];
    };
};

let singleConvertYuGiOh_ = (value) => {
    let x = "";

    if ((value % 2) === 0) {
        x = x + "yu-" + singleConvertYuGiOh(value / 2);
        return x;
    }

    else if ((value % 3) === 0) {
        x = x + "gi-" + singleConvertYuGiOh(value / 3);
        return x;
    }

    else if ((value % 5) === 0) {
        x = x + "oh-" + singleConvertYuGiOh(value / 5);
        return x;
    }

    else if (value == 1) {
        if (value == 1 && x != "") {
            return x = 1;
        };
        return x;
    }
    else if (value === 0) {
        return x;
    }

    else {
        return x = x + value;
    };


};

let singleConvertYuGiOh = (value) => {
    return singleConvertYuGiOh_(value);
};

var doClick2 = (e) => checkYuGiHo(e, yuValue);

function enterClick2(e) {
    if (e.keyCode === 13) {
        convertBtn2.click()
    };
};

convertBtn2.addEventListener("click", doClick2);

document.getElementById("yu-input").addEventListener("keyup", enterClick2);
