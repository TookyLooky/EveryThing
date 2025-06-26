window.onload = function() {
    displayImage();
}

const myImage = document.createElement("img");
const userInputElem = document.getElementById("input-guess");

const imageSrc = myImage.getAttribute('src')



function displayImage(){

    const imageContainer = document.getElementById("board");
    
    const imagesArray = ["../Images/cow.webp", "../Images/dog.jpg"];    
    var num = Math.floor(Math.random() * imagesArray.length);
    myImage.src = imagesArray[num];
    myImage.alt = 'alternatives';
    myImage.width = 300;
    myImage.height = 300;
    imageContainer.appendChild(myImage);

    

}

function GetAnswer() {

    const imageSrc = myImage.getAttribute('src')

    const word = userInputElem.value.trim().toLowerCase();

    if (imageSrc == "../Images/cow.webp") {
       
        if (word === "cow") {
            alert("correct!");
        }

        else {
            alert("Wrong!");
        }
   
    }else if (imageSrc === "../Images/dog.jpg") {
        if (word == "dog") {
            alert("correct!");
        }

        else {
            alert("Wrong!");
        }

    }else {alert("something went wrong")}    
        

    

    
}
