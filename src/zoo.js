/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const {
  animals,
} = data;

const animalsByIds = (...ids) => {
  if (ids === undefined) return [];
  return animals.filter(({
    id,
  }) => ids.includes(id));
};

const animalsOlderThan = (animal, age) => {
  const encontraAnimal = data.animals.find((especie) => especie.name === animal);
  const {
    residents,
  } = encontraAnimal;
  return residents.every((animais) => animais.age > age);
};

const {
  employees,
} = data;

const employeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  return employees.find(({
    firstName,
    lastName,
  }) => (firstName === employeeName || lastName === employeeName));
};

// function createEmployee(personalInfo, associatedWith) {
//   // seu código aqui
// }

// function isManager(id) {
//   // seu código aqui
// }

// function addEmployee(id, firstName, lastName, managers, responsibleFor) {
//   // seu código aqui
// }

// function animalCount(species) {
//   // seu código aqui
// }

// function entryCalculator(entrants) {
//   // seu código aqui
// }

// function animalMap(options) {
//   // seu código aqui
// }

// function schedule(dayName) {
//   // seu código aqui
// }

// function oldestFromFirstSpecies(id) {
//   // seu código aqui
// }

// function increasePrices(percentage) {
//   // seu código aqui
// }

// function employeeCoverage(idOrName) {
//   // seu código aqui
// }

module.exports = {
  // entryCalculator,
  // schedule,
  // animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  // addEmployee,
  // isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  // createEmployee,
};
