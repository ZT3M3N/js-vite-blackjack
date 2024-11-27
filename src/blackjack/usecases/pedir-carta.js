import { crearDeck } from "./crear-deck";
/**
 * Esta función permite pedir una carta
 * @param {Array<String>} deck Es un arreglo de strings
 * @returns {String} Retorna la carta del deck
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  const carta = deck.pop();
  return carta;
};
