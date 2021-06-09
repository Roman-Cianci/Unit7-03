// 
document.getElementById('button').addEventListener('click', comparision)
let age = 0

function comparision() {
    // get the age number and convert to an integer
   age = document.getElementById('input').value
   age = parseInt(age)

// checks if user's age  is younger than 17
  if (age >= 17) { 
  document.getElementById('answer').innerHTML = 'You can see an R  movie alone'
} else if (age >= 13) {
  document.getElementById('answer').innerHTML = 'You can see a PG-13 movie alone'
} else if (age >= 5) {
  document.getElementById('answer').innerHTML = 'You can see a G or PG  movie alone'
} else  {
  document.getElementById ('answer').innerHTML = 'Your too young to watch any of these movies'
}
