// Import stylesheets
import './style.css';

//Start of homework
const state = {
  a: 'apple',
  b: 'banana',
  c: 'city',
  d: 'dom',
  e: 'end',
  f: 'forEach',
  g: 'gold',
};
const keys = Object.keys(state);
const values = Object.values(state);
const keysElement = document.getElementById('keys');
const valuesElement = document.getElementById('values');

keys.forEach((key, i) => {
  const keyElement = document.createElement('option');
  keyElement.innerHTML = key;
  keyElement.className = i;
  keysElement.appendChild(keyElement);
});
values.forEach((value, i) => {
  const valueElement = document.createElement('option');
  valueElement.innerHTML = value;
  valueElement.className = i;
  valuesElement.appendChild(valueElement);
});

function setParallel(from, value) {
  if (from === 'key') {
    const index = keys.indexOf(value);
    valuesElement.value = values[index];
  } else if (from === 'value') {
    const index = values.indexOf(value);
    keysElement.value = keys[index];
  }
}

keysElement.addEventListener('change', (ele) => {
  setParallel('key', ele.target.value);
});
valuesElement.addEventListener('change', (ele) => {
  setParallel('value', ele.target.value);
});
