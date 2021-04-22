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

// ajuda do italo de matos

const data = require('./data');

const {
  animals,
  employees,
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

const employeeByName = (employeeName) => {
  if (employeeName === undefined) return {};
  return employees.find(({
    firstName,
    lastName,
  }) => (firstName === employeeName || lastName === employeeName));
};

const createEmployee = (personalInfo, associatedWith) => {
  const newPeople = ({
    ...personalInfo,
    ...associatedWith,
  });
  return newPeople;
};

const isManager = (id) => {
  const colaborador = employees.some(({
    managers,
  }) => managers.includes(id));
  return colaborador;
};

const addEmployee = (id, firstName, lastName, managers = [], responsibleFor = []) => {
  const newColab = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newColab);
};

const animalCount = (species) => {
  if (species) {
    return animals.find(({
      name,
    }) => name === species).residents.length;
  }
  return animals.reduce((acc, {
    name,
    residents,
  }) => {
    acc[name] = residents.length;
    return acc;
  }, {});
};

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
  animalCount,
  // animalMap,
  animalsByIds,
  employeeByName,
  // employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  // oldestFromFirstSpecies,
  // increasePrices,
  createEmployee,
};
