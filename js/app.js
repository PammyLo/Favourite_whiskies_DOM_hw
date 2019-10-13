document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#delete');
  deleteButton.addEventListener('click', handleDeleteClick);
})

const handleFormSubmit = function (event) {
  event.preventDefault();

  const nameInput = document.querySelector('#name');
  const whiskyName = nameInput.value;

  const typeChange = document.querySelector('#type');
  const whiskyType = typeChange.value;

  const regionChange = document.querySelector('#region');
  const whiskyRegion = regionChange.value;

  const favWhiskyList = document.querySelector('#whisky-list');

  const newList = document.createElement('ul');
  const newWhiskyName = document.createElement('li');
  const newWhiskyType = document.createElement('li');
  const newWhiskyRegion = document.createElement('li');

  favWhiskyList.appendChild(newList);
  newList.appendChild(newWhiskyName);
  newList.appendChild(newWhiskyType);
  newList.appendChild(newWhiskyRegion);

  newWhiskyName.textContent = whiskyName;
  newWhiskyType.textContent = whiskyType;
  newWhiskyRegion.textContent = whiskyRegion;

  document.getElementById('new-item-form').reset();
};

const handleDeleteClick = function () {
  const favWhiskyList = document.querySelectorAll('ul');
  favWhiskyList.forEach(element => {
    element.remove();
  });
};
