import {
  calculateHeavyD28PickUpCenter,
  calculateHeavyHeight,
  calculateHeavyWidth,
  calculateHeavyWidthDivisorFourShips,
  calculateHeavyWidthDivisorLateral,
  calculateHeavyWidthDivisorOneToAnother,
  calculateHeavyWidthDivisorPickUpCenter,
  calculateHeavyWidthDivisorThreeShips,
  calculateHeavyWidthFourShips,
  calculateHeavyWidthLateral,
  calculateHeavyWidthOneToAnother,
  calculateHeavyWidthPickUpCenter,
  calculateHeavyWidthThreeShips
} from "./anjeoHeavyDsctServices.js";

import Boom from '@hapi/boom';

export const applyDiscountsHeavy = async (anjeosHeavy) => {
  return new Promise((resolve, reject) => {
    try {
      const anjeosHeavyUpdated = anjeosHeavy.map(object => {
        if (object.profileType === 'Cuatro naves' && object.opening === 'Cierre al centro') {
          const widthUpdated = calculateHeavyWidthFourShips(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);
          const divisorMeasure = calculateHeavyWidthDivisorFourShips(object.width).toFixed(1);
          const d28 = calculateHeavyD28PickUpCenter(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 8,
            heightProfiles: 8,
            divisorProfiles: 4,
            divisorMeasure: divisorMeasure,
            CillarDucha: 1,
            D28: d28,
            D28Quantity: 1
          }
        } else if (object.profileType === 'Cuatro naves' && object.opening === 'Lateral') {
          const widthUpdated = calculateHeavyWidthFourShips(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);
          const divisorMeasure = calculateHeavyWidthDivisorFourShips(object.width).toFixed(1);
          const d28 = calculateHeavyD28PickUpCenter(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 8,
            heightProfiles: 8,
            divisorProfiles: 4,
            divisorMeasure: divisorMeasure,
            CillarDucha: 1,
            D28: d28,
            D28Quantity: 1
          }
        } else if (object.profileType === 'Cuatro naves' && object.opening === 'Uno hala otro') {
          const widthUpdated = calculateHeavyWidthFourShips(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);
          const divisorMeasure = calculateHeavyWidthDivisorFourShips(object.width).toFixed(1);
          const d28 = calculateHeavyD28PickUpCenter(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 8,
            heightProfiles: 8,
            divisorProfiles: 4,
            divisorMeasure: divisorMeasure,
            CillarDucha: 1,
            D28: d28,
            D28Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Cierre al centro') {
          const widthUpdated = calculateHeavyWidthPickUpCenter(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);
          const divisorMeasure = calculateHeavyWidthDivisorPickUpCenter(object.width).toFixed(1);
          const d28 = calculateHeavyD28PickUpCenter(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 4,
            heightProfiles: 4,
            divisorProfiles: 2,
            divisorMeasure: divisorMeasure,
            D28: d28,
            D28Quantity: 1
          }
        }  else if (object.profileType === 'Doble' && object.opening === 'Uno hala otro') {
          const widthUpdated = calculateHeavyWidthLateral(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);
          const divisorMeasure = calculateHeavyWidthDivisorLateral(object.width).toFixed(1);
          const d28 = calculateHeavyD28PickUpCenter(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 4,
            heightProfiles: 4,
            divisorProfiles: 2,
            divisorMeasure: divisorMeasure,
            D28: d28,
            D28Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Lateral') {
          const widthUpdated = calculateHeavyWidthOneToAnother(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);
          const divisorMeasure = calculateHeavyWidthDivisorOneToAnother(object.width).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 4,
            heightProfiles: 4,
            divisorProfiles: 2,
            divisorMeasure: divisorMeasure,
            "3/4": 1,
            "3/4Quantity": 1,
            CillarDucha: 1,
            mambaDucha: 1
          }
        } else if (object.profileType === 'Sencillo' && object.opening === 'Fijo') {
          const widthUpdated = calculateHeavyWidth(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 2,
            heightProfiles: 2,
            divisorProfiles: 1,
            T77: 1,
            "3/4": height,
            "3/4Quantity": 1
          }
        } else if (object.profileType === 'Tres naves' && object.opening === 'Cierre al centro') {
          const widthUpdated = calculateHeavyWidthThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);
          const divisorMeasure = calculateHeavyWidthDivisorThreeShips(object.width).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 6,
            heightProfiles: 6,
            divisorProfiles: 3,
            divisorMeasure: divisorMeasure,
            HeadDucha: 1,
            CillarDucha: 1,
            "3/4": 1,
            "3/4Quantity": 1
          }
        } else if (object.profileType === 'Tres naves' && object.opening === 'Lateral') {
          const widthUpdated = calculateHeavyWidthThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);
          const divisorMeasure = calculateHeavyWidthDivisorThreeShips(object.width).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 6,
            heightProfiles: 6,
            divisorProfiles: 3,
            divisorMeasure: divisorMeasure,
            HeadDucha: 1,
            CillarDucha: 1,
            "3/4": 1,
            "3/4Quantity": 1
          }
        } else if (object.profileType === 'Tres naves' && object.opening === 'Uno hala otro') {
          const widthUpdated = calculateHeavyWidthThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateHeavyHeight(object.height).toFixed(1);
          const divisorMeasure = calculateHeavyWidthDivisorThreeShips(object.width).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 6,
            heightProfiles: 6,
            divisorProfiles: 3,
            divisorMeasure: divisorMeasure,
            HeadDucha: 1,
            CillarDucha: 1,
            "3/4": 1,
            "3/4Quantity": 1
          }
        }
      });

      resolve(anjeosHeavyUpdated);
    } catch (err) {
      const boomError = Boom.notImplemented(
        'No es posible aplicar los descuentos a los anjeos pesados', err
      );
      reject(boomError);
    }
  });
};
