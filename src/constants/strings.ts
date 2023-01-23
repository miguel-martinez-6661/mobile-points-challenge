// This file contains all the strings used in the app.
// In case translations are needed, this is the where all keys are defined.
import { RouteNames } from './route-names';

export const strings = {
  [RouteNames.Home]: {
    greetings: 'Bienvenido de vuelta!',
    yourPoints: 'TUS PUNTOS',
    yourPointsFlow: 'TUS MOVIMIENTOS',
    allButton: 'Todos',
    earnedPointsButton: 'Ganados',
    redeemedPointsButton: 'Canjeados',
  },
  [RouteNames.Details]: {
    productDetails: 'Detalles del producto',
    purchasePointsEarned: 'Con esta compra acumulaste',
    purchasedOn: 'Comprado el',
    points: 'puntos',
    acceptButton: 'Aceptar',
  },
};
