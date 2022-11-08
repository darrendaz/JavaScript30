const inputs = document.querySelectorAll('.controls input')
const hexFields = document.querySelectorAll('.hexfield')

function setter(){
  document.documentElement.style.setProperty(`--primary-light`, inputs[2].value)
  document.documentElement.style.setProperty(`--secondary-light`, inputs[3].value)
  hexFields[0].innerHTML = inputs[2].value
  hexFields[1].innerHTML = inputs[3].value
  hexFields[0].style.setProperty('color', inputs[2].value)
  hexFields[1].style.setProperty('color', inputs[3].value)
}

function handleUpdate() {
  const units = this.dataset.units || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + units)
  // const val = document.getElementById('primary-light').value
  if (this.name == 'primary-light'){
    const hexField = document.getElementById('primary')
    hexField.innerHTML = `${this.value}`
    hexField.style.setProperty('color', this.value)
  }

  if (this.name == 'secondary-light'){
    const hexField = document.getElementById('secondary')
    hexField.innerHTML = `${this.value}`
    hexField.style.setProperty('color', this.value)
  }
}


inputs.forEach(input => input.addEventListener('change', handleUpdate))

inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))

window.addEventListener('load', setter);