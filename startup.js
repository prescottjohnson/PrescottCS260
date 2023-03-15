var prescottLikes = 75;
var dylanLikes = 80;
var stanleyLikes = 92;

function onLoad() {
    document.querySelector('.first').style.display = "none";
    document.querySelector('.second').style.display = "none";
    document.querySelector('.third').style.display = "none";
    document.querySelector('.num-likes-prescott').innerHTML = prescottLikes;
    document.querySelector('.num-likes-dylan').innerHTML = dylanLikes;
    document.querySelector('.num-likes-stanley').innerHTML = stanleyLikes;
    document.querySelector('.comment-prescott').style.display = "none";
    document.querySelector('.comment-dylan').style.display = "none";
    document.querySelector('.comment-stanley').style.display = "none";
}

function toggleFirst() {
    if (document.querySelector('.first').style.display === "none") {
        document.querySelector('.first').style.display = "block";
        prescottLikes++;
        document.querySelector('.num-likes-prescott').innerHTML = prescottLikes;
    } else {      
        document.querySelector('.first').style.display = "none";
        prescottLikes--;
        document.querySelector('.num-likes-prescott').innerHTML = prescottLikes;
    }
}

function toggleSecond() {
    if (document.querySelector('.second').style.display === "none") {
        document.querySelector('.second').style.display = "block";
        dylanLikes++;
        document.querySelector('.num-likes-dylan').innerHTML = dylanLikes;
    } else {
        document.querySelector('.second').style.display = "none";
        dylanLikes--;
        document.querySelector('.num-likes-dylan').innerHTML = dylanLikes;
    }
}

function toggleThird() {
    if (document.querySelector('.third').style.display === "none") {
        document.querySelector('.third').style.display = "block";
        stanleyLikes++;
        document.querySelector('.num-likes-stanley').innerHTML = stanleyLikes;
    } else {
        document.querySelector('.third').style.display = "none";
        stanleyLikes--;
        document.querySelector('.num-likes-stanley').innerHTML = stanleyLikes;
    }
}

function dropdownPrescott() {
    if (document.querySelector('.comment-prescott').style.display === "none") {
        document.querySelector('.comment-prescott').style.display = "block";
        document.querySelector('.arrow-prescott').textContent = "↑";
    } else {      
        document.querySelector('.comment-prescott').style.display = "none";
        document.querySelector('.arrow-prescott').textContent = "↓";
    }
}
function dropdownDylan() {
    if (document.querySelector('.comment-dylan').style.display === "none") {
        document.querySelector('.comment-dylan').style.display = "block";
        document.querySelector('.arrow-dylan').textContent = "↑";
    } else {      
        document.querySelector('.comment-dylan').style.display = "none";
        document.querySelector('.arrow-dylan').textContent = "↓";
    }
}
function dropdownStanley() {
    if (document.querySelector('.comment-stanley').style.display === "none") {
        document.querySelector('.comment-stanley').style.display = "block";
        document.querySelector('.arrow-stanley').textContent = "↑";
    } else {      
        document.querySelector('.comment-stanley').style.display = "none";
        document.querySelector('.arrow-stanley').textContent = "↓";
    }
}