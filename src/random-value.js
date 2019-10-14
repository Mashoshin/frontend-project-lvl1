const getRandomInteger = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;
// the generator returns both boundaries

export default getRandomInteger;
