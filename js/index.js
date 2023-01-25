function encrypt(){

    document.querySelector(".output-img").style.display = "none";
    document.querySelector(".tablet-img").style.display = "none";
    document.querySelector(".mobile-img").style.display = "none";

    var array = inputText.value.split("");
    var encryArray = '';

    for(i = 0; i < array.length ; i++){
        if      (array[i] == 'e'){
            array[i] = 'enter';
        }else if(array[i] == 'i'){
            array[i] = 'imes';
        }else if(array[i] == 'a'){
            array[i] = 'ai';
        }else if(array[i] == 'o'){
            array[i] = 'ober';
        }else if(array[i] == 'u'){
            array[i] = 'ufat';
        }
        encryArray = encryArray + array[i];
    }
    return document.querySelector(".output-text").innerHTML = encryArray;
}

function decrypt(){
   
    var array = inputText.value.split("");
    var decryArray = '';

    for(i = 0; i < array.length ; i++){
        if      (array[i] == 'e' && array[i + 4] == 'r'){
            array[i + 4] = 'e';
            i = i + 4;
        }else if(array[i] == 'i' && array[i + 3] == 's'){
            array[i + 3] = 'i';
            i = i + 3;
        }else if(array[i] == 'a' && array[i + 1] == 'i'){
            array[i + 1] = 'a';
            i = i + 1;
        }else if(array[i] == 'o' && array[i + 3] == 'r'){
            array[i + 3] = 'o';
            i = i + 3;
        }else if(array[i] == 'u' && array[i + 3] == 't'){
            array[i + 3] = 'e';
            i = i + 3;
        }
        decryArray = decryArray + array[i];
    }
    return document.querySelector(".output-text").innerHTML = decryArray;
}

function copyText(){
    navigator.clipboard.writeText(outputText.value);
}

function disableChars(e){
    if (!allowedChars.test(e.data)) {
        e.preventDefault();
    }
}

const inputText = document.querySelector('.input-text');
const encry = document.querySelector('.encry-button');
const decry = document.querySelector('.decry-button');

const outputText = document.querySelector('.output-text');
const copy = document.querySelector('.copy-button');

const allowedChars = /[a-z, 0-9]+/;
inputText.addEventListener("beforeinput", disableChars);

encry.onclick = encrypt;
decry.onclick = decrypt;
copy.onclick = copyText; 
