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
        document.querySelector('.arrow-prescott').textContent = "(hide)";
    } else {      
        document.querySelector('.comment-prescott').style.display = "none";
        document.querySelector('.arrow-prescott').textContent = "(show)";
        document.querySelector('.comment-form').style.display = "none";
    }
}
function dropdownDylan() {
    if (document.querySelector('.comment-dylan').style.display === "none") {
        document.querySelector('.comment-dylan').style.display = "block";
        document.querySelector('.arrow-dylan').textContent = "(hide)";
    } else {      
        document.querySelector('.comment-dylan').style.display = "none";
        document.querySelector('.arrow-dylan').textContent = "(show)";
        document.querySelector('.comment-form').style.display = "none";
    }
}
function dropdownStanley() {
    if (document.querySelector('.comment-stanley').style.display === "none") {
        document.querySelector('.comment-stanley').style.display = "block";
        document.querySelector('.arrow-stanley').textContent = "(hide)";
    } else {      
        document.querySelector('.comment-stanley').style.display = "none";
        document.querySelector('.arrow-stanley').textContent = "(show)";
        document.querySelector('.comment-form').style.display = "none";
    }
}

function addDiv(className) {
    var div = document.createElement('div');
    div.className = className;
    return div;
}

function addHTML(tag, className) {
    var elem = document.createElement(tag);
    elem.className = className
    return elem;
}

function addNewPrescott() {
    document.querySelector('.comment-form-prescott').style.display = "block";
}

function submitCommentPrescott() {
    var name = document.getElementsByClassName('name-input').value;
    console.log(name);
    var comment = document.getElementsByClassName('comment-input').value;
    document.querySelector('.comment-prescott').prepend(addDiv('comment-new-prescott'));
    document.querySelector('.comment-new-prescott').append(addDiv('comment-header-prescott'));
    document.querySelector('.comment-new-prescott').append(addDiv('comment-content-prescott'));
    document.querySelector('.comment-header-prescott').append(addHTML('p', 'comment-user-new-prescott'));
    document.querySelector('.comment-user-new-prescott').textContent = name;
    document.querySelector('.comment-header-prescott').append(addHTML('p', 'comment-time-new-prescott'));
    document.querySelector('.comment-time-new-prescott').textContent = 'now';
    document.querySelector('.comment-content-prescott').append(addHTML('p', 'new-content-prescott'));
    document.querySelector('.new-content-prescott').textContent = 'placeholder';
    document.querySelector('.comment-form-prescott').style.display = "none";
    name = "";
    comment = "";
}


function addNewDylan() {
    document.querySelector('.comment-form-dylan').style.display = "block";
}

function submitCommentDylan() {
    var name = document.getElementsByClassName('name-input').value;
    console.log(name);
    var comment = document.getElementsByClassName('comment-input').value;
    document.querySelector('.comment-dylan').prepend(addDiv('comment-new-dylan'));
    document.querySelector('.comment-new-dylan').append(addDiv('comment-header-dylan'));
    document.querySelector('.comment-new-dylan').append(addDiv('comment-content-dylan'));
    document.querySelector('.comment-header-dylan').append(addHTML('p', 'comment-user-new-dylan'));
    document.querySelector('.comment-user-new-dylan').textContent = 'placeholder';
    document.querySelector('.comment-header-dylan').append(addHTML('p', 'comment-time-new-dylan'));
    document.querySelector('.comment-time-new-dylan').textContent = 'now';
    document.querySelector('.comment-content-dylan').append(addHTML('p', 'new-content-dylan'));
    document.querySelector('.new-content-dylan').textContent = 'placeholder';
    document.querySelector('.comment-form-dylan').style.display = "none";
    name = "";
    comment = "";
}


function addNewStanley() {
    document.querySelector('.comment-form-stanley').style.display = "block";
}

function submitCommentStanley() {
    var name = document.getElementsByClassName('name-input').value;
    console.log(name);
    var comment = document.getElementsByClassName('comment-input').value;
    document.querySelector('.comment-stanley').prepend(addDiv('comment-new-stanley'));
    document.querySelector('.comment-new-stanley').append(addDiv('comment-header-stanley'));
    document.querySelector('.comment-new-stanley').append(addDiv('comment-content-stanley'));
    document.querySelector('.comment-header-stanley').append(addHTML('p', 'comment-user-new-stanley'));
    document.querySelector('.comment-user-new-stanley').textContent = 'placeholder';
    document.querySelector('.comment-header-stanley').append(addHTML('p', 'comment-time-new-stanley'));
    document.querySelector('.comment-time-new-stanley').textContent = 'now';
    document.querySelector('.comment-content-stanley').append(addHTML('p', 'new-content-stanley'));
    document.querySelector('.new-content-stanley').textContent = 'placeholder';
    document.querySelector('.comment-form-stanley').style.display = "none";
    name = "";
    comment = "";
}





