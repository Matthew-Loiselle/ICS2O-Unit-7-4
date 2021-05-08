let userAge = 0
let userDay = 0
document.getElementById('start').addEventListener('click', goodMorning)

function goodMorning () {
  userAge = document.getElementById('age').value
  userDay = document.getElementById('day').value
  if ((userDay === 'saturday' || userDay === 'sunday') && (userAge < 18)) {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  } else if ((userDay === 'saturday' || userDay === 'sunday') && (userAge > 17)) {
    document.getElementById('answer').innerHTML = 'Time to relax for the weekend!'
  } else if ((userDay !== 'saturday' || userDay !== 'sunday') && (userAge < 18)) {
    document.getElementById('answer').innerHTML = 'Time to get up for school'
  } else if ((userDay !== 'saturday' || userDay !== 'sunday') && (userAge > 17)) {
    document.getElementById('answer').innerHTML = 'Time to get up for work'
  }
}
