function shoeyear(){

var shoeSize = document.getElementById('shoeSize').value;
var yearOfBirth = document.getElementById('yearOfBirth').value;
var regex=/^[0-9]+$/;
if ((regex.test(shoeSize) == true)&&(regex.test(yearOfBirth) == true))  {
result = (shoeSize * 2 )+ (5 * 50) - yearOfBirth + 1766;
alert('resultat : ' + result)
}
else{
alert('Date de naissance et votre pointure')
}

}
