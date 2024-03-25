document.getElementById('button').addEventListener('click', function(event) {

  event.preventDefault()
  
  let name = document.getElementById('name').value

 
  let nameLength = name.split('').length


  if (name === '' || !name || nameLength < 2) alert('Please provide your name and name has to be valid')
  else alert('Your name is ' + name)
})


document.getElementById('button') .addEventListener('click' , function(event) {

  event.preventDefault()
})

let number=document.getElementById("number").value
let numberlength=number.split("").length

if (number=== ""|| !number|| numberlength<5) alert ("please provide correct number")
else alert ("Your number is "+ number)