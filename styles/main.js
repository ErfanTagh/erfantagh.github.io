<script>
let i = 0;
let j = 0;
let fruits = ['Apple', 'Banana','کس کیری','معلم دینی'];
let fLen = fruits.length;

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';


function myFunction() {
	if(i%2==0){
		document.getElementById("myImage").style.visibility = "hidden";
		i+=1;
	}
	else{
			document.getElementById("myImage").style.visibility = "visible";
			i+=1;
	}
}


function myFunction3() {
	document.getElementById('myImage').src = "https://sportshub.cbsistatic.com/i/r/2019/09/06/5b3f6cf9-2a2d-4a9a-8b4e-3957cac770bc/thumbnail/1200x675/2260a19670823b964e07e06516120d2d/khabib-weighin.jpg";
	document.getElementById('fname').disabled=false;
	
}



function myFunction1() {
	if(j==fLen)
	{
		j = 0;
	
	}
	
	text = "<br>" + fruits[j] + "</br>";
	j+=1;

	
	document.getElementById("demo").innerHTML = text;
	
}

function myFunction2() {
	let newTxt=document.getElementById('fname').value;
	fruits.push(newTxt);
	fLen+=1;
	j+=1;
}



</script>
