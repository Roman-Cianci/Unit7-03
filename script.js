let age = 0

document.getElementById('Check-Age').addEventListener('click', checkAgeRating)

function checkAgeRating () {
   age = document.getElementById('input').value
   document.getElementById('input').style.display = 'block'
   if (age >= 17) { 
     document.getElementById('movie').innerHTML = 'R movie'
} else if (age >= 13) { 
     document.getElementById('movie').innerHTML = 'PG-13 movie'
} else if (age >= 5) {
     document.getElementById('movie').innerHTML = 'G or PG movie'
} else  {
 
