import handleResponseFromAPI from "./2-then";

const promise = Promise.resolve();
// const promise = Promise.resolve(new Error('Simulated error'));
handleResponseFromAPI(promise);
