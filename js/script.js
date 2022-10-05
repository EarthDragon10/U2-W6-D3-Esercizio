let boxImg = document.getElementById("img-box");

function changeBgColor() {
	document.querySelector("body").style.backgroundColor = "red";
}

function insertImg() {
	boxImg.innerHTML += `<img class="my-5" src="https://picsum.photos/200/300" alt="immagine">`;
}
