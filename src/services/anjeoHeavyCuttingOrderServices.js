import {
  calculateHeavyD28PickUpCenter,
  calculateHeavyHeight,
  calculateHeavyWidth,
  calculateHeavyWidthDivisorFourShips,
  calculateHeavyWidthDivisorOneToAnother,
  calculateHeavyWidthDivisorPickUpCenter,
  calculateHeavyWidthDivisorThreeShips,
  calculateHeavyWidthFourShips,
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
          const widthValue = calculateHeavyWidthFourShips(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateHeavyWidthDivisorFourShips(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);
          const d28Value = calculateHeavyD28PickUpCenter(object.height);
          const d28 = d28Value.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 8,
            heightProfiles: 8,
            divisorProfiles: 4,
            CillarDucha: 1,
            D28: d28,
            D28Quantity: 1
          }
        } else if (object.profileType === 'Cuatro naves' && object.opening === 'Lateral') {
          const widthValue = calculateHeavyWidthFourShips(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateHeavyWidthDivisorFourShips(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);
          const d28Value = calculateHeavyD28PickUpCenter(object.height);
          const d28 = d28Value.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 8,
            heightProfiles: 8,
            divisorProfiles: 4,
            CillarDucha: 1,
            D28: d28,
            D28Quantity: 1
          }
        } else if (object.profileType === 'Cuatro naves' && object.opening === 'Uno hala otro') {
          const widthValue = calculateHeavyWidthFourShips(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateHeavyWidthDivisorFourShips(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);
          const d28Value = calculateHeavyD28PickUpCenter(object.height);
          const d28 = d28Value.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 8,
            heightProfiles: 8,
            divisorProfiles: 4,
            CillarDucha: 1,
            D28: d28,
            D28Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Cierre al centro') {
          const widthValue = calculateHeavyWidthPickUpCenter(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateHeavyWidthDivisorPickUpCenter(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);
          const d28Value = calculateHeavyD28PickUpCenter(object.height);
          const d28 = d28Value.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 4,
            heightProfiles: 4,
            divisorProfiles: 2,
            D28: d28,
            D28Quantity: 1
          }
        }  else if (object.profileType === 'Doble' && object.opening === 'Lateral') {
          const widthValue = calculateHeavyWidthPickUpCenter(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateHeavyWidthDivisorPickUpCenter(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);
          const d28Value = calculateHeavyD28PickUpCenter(object.height);
          const d28 = d28Value.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 4,
            heightProfiles: 4,
            divisorProfiles: 2,
            D28: d28,
            D28Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Uno hala otro') {
          const widthValue = calculateHeavyWidthOneToAnother(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateHeavyWidthDivisorOneToAnother(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);
          const d28Value = calculateHeavyD28PickUpCenter(object.height);
          const d28 = d28Value.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 4,
            heightProfiles: 4,
            divisorProfiles: 2,
            "3/4": 1,
            "3/4Quantity": 1,
            CillarDucha: 1,
            mambaDucha: 1
          }
        } else if (object.profileType === 'Sencillo' && object.opening === 'Fijo') {
          const widthValue = calculateHeavyWidth(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);

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
          const widthValue = calculateHeavyWidthThreeShips(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateHeavyWidthDivisorThreeShips(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 6,
            heightProfiles: 6,
            divisorProfiles: 3,
            HeadDucha: 1,
            CillarDucha: 1,
            "3/4": 1,
            "3/4Quantity": 1
          }
        } else if (object.profileType === 'Tres naves' && object.opening === 'Lateral') {
          const widthValue = calculateHeavyWidthThreeShips(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateHeavyWidthDivisorThreeShips(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 6,
            heightProfiles: 6,
            divisorProfiles: 3,
            HeadDucha: 1,
            CillarDucha: 1,
            "3/4": 1,
            "3/4Quantity": 1
          }
        } else if (object.profileType === 'Tres naves' && object.opening === 'Uno hala otro') {
          const widthValue = calculateHeavyWidthThreeShips(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeavyHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateHeavyWidthDivisorThreeShips(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 6,
            heightProfiles: 6,
            divisorProfiles: 3,
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
