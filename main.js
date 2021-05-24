const slider = document.querySelector('.slider');
const buttons = document.querySelectorAll('.btn');
const options = document.querySelectorAll('.option');
const slides = document.querySelectorAll('.img');

var index = 1;
var size = slides[index].clientWidth;
var op_index = 0;


update();

function update(){
    slider.style.transform = "translateX("+ (-size * index) +"px)";

    options.forEach(option => option.classList.remove('colored'));
	options[op_index].classList.add('colored');
}


function slide(){
    slider.style.transition = "transform .5s ease-in-out";
    update();
}


function btnCheck(){
	if(this.id === "prev"){
		index--;
		if(op_index === 0){
			op_index = 2;
		}
		else{
			op_index--;
		}
	}
	else{
		index++;
		if(op_index === 2){
			op_index = 0;
		}
		else{
			op_index++;
		}
	}

	slide();
}

function optionFunc(){
	let i = Number(this.getAttribute('option-index'));
	op_index = i;
	index = i + 1;

	slide();
}

/*
function optionFunc(){
    Let i = Number(this.getAttribute('option-index'));
    index = i +1;
    slide();
}
*/

slider.addEventListener('transitioned', () => {
    if(slides[index].id === "first"){
        slider.style.transition = "none";
        index = slides.length - 2;
        slider.style.transform = "translateX("+ (-size * index) +"px)";
    }
    else if(slides[index].id === "last"){
        slider.style.transition = "none";
        index = 1;
        slider.style.transform = "translateX("+ (-size * index) +"px)";
    }

})




buttons.forEach(btn => btn.addEventListener('click',btnCheck));
options.forEach(option => option.addEventListener('click',optionFunc));