
// function to show main menu
function ShowMainmenu() {
	obj = document.getElementById("menu-bar-section-show");
	obj.style.display = "block";
	hideellipsismenu();
}
// function to hide main menu
function hideMe() {
	obj = document.getElementById("menu-bar-section-show");
	obj.style.display = "none";
}
function hideMeicon(){
	hideMe();
}

// function to show loader
const loaderAnimation = document.querySelector('.loaderAnimation');
document.onreadystatechange = function() {
    if (document.readyState === "complete") {
loaderAnimation.style.display="none";
    } else {
loaderAnimation.style.display="flex";
    }
}

// share handler function
async function Share() {
navigator.share({
	title: 'Simple Learning App Design',
	text: 'Download App On PlayStore',
	url: 'https://www.google.PlayStore.com/app-path-here',
});
}