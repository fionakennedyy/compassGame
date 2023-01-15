const topText= document.getElementById('top');
const leftText= document.getElementById('left');
const rightText= document.getElementById('right');
const bottomText= document.getElementById('bottom');

var isUpdated = false;

function restart() {
	/*-direction letters are erased
	  -text controls and update button are activated*/
	  isUpdated = false;
	  topText.innerText = "";
	  document.forms["myForm"]["topBox"].value = "";
	  leftText.innerText = "";
	  document.forms["myForm"]["leftBox"].value = "";
	  rightText.innerText = "";
	  document.forms["myForm"]["rightBox"].value = "";
	  bottomText.innerText = "";
	  document.forms["myForm"]["bottomBox"].value = "";
}

function update() {
	/*-text control characters copied to direction letters
	  -text control and update button are disabled*/
	 if(!isUpdated)
	 {
		topText.innerText = document.forms["myForm"]["topBox"].value;
		leftText.innerText = document.forms["myForm"]["leftBox"].value;
		rightText.innerText = document.forms["myForm"]["rightBox"].value;
		bottomText.innerText = document.forms["myForm"]["bottomBox"].value;
		isUpdated = true;
	 }
}

function swapTopLeft() {
	const x = topText.innerText;
	topText.innerText = leftText.innerText;
	leftText.innerText = x;
}

function swapLeftRight() {
	const x = leftText.innerText;
	leftText.innerText = rightText.innerText;
	rightText.innerText = x;
}

function swapBottomRight() {
	const x = bottomText.innerText;
	bottomText.innerText = rightText.innerText;
	rightText.innerText = x;
}
