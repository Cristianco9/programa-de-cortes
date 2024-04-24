import {
  calculateHeight,
  calculateWidthFixed,
  calculateHeightFixed,
  calculateWidthPickUpCenter,
  calculateLightD28PickUpCenter,
  calculateWidthLateral,
  calculateWidthThreeShips,
  calculateWidthOneToAnother,
  calculateLightWidthDivisorOneToAnother
} from "./anjeoLightDsctServices.js"
import Boom from '@hapi/boom';

export const applyDiscountsLight = async (anjeosLight) => {
  return new Promise((resolve, reject) => {
    try {
      const anjeosLightUpdated = anjeosLight.map(object => {
        if (object.profileType === 'Sencillo' && object.opening === 'Fija') {
          const widthValue = calculateWidthFixed(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeightFixed(object.height);
          const heightUpdated = heightValue.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 2,
            heightProfiles: 2,
            divisorProfiles: 1,
            naveDucha: 1,
            U74: 1,
            A059: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Cierre al centro') {
          const widthValue = calculateWidthPickUpCenter(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const d28Value = calculateLightD28PickUpCenter(object.height);
          const d28 = d28Value.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 4,
            heightProfiles: 4,
            divisorProfiles: 1,
            D28: d28,
            naveDucha: 1,
            U74: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Lateral') {
          const widthValue = calculateWidthLateral(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 2,
            heightProfiles: 4,
            divisorProfiles: 2,
            naveDucha: 1,
            U74: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Tres naves') {
          const widthValue = calculateWidthThreeShips(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfiles: 6,
            heightProfiles: 6,
            divisorProfiles: 3,
            naveDucha: 1,
            U74: 1
          }
        }  else if (object.profileType === 'Doble' && object.opening === 'Uno hala otro') {
          const widthValue = calculateWidthOneToAnother(object.width);
          const widthUpdated = widthValue.toFixed(1);
          const heightValue = calculateHeight(object.height);
          const heightUpdated = heightValue.toFixed(1);
          const divisorHighValue = calculateLightWidthDivisorOneToAnother(object.divisorHigh);
          const divisorHighUpdated = divisorHighValue.toFixed(1);


          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorHigh: divisorHighUpdated,
            widthProfiles: 4,
            heightProfiles: 4,
            divisorProfiles: 2,
            naveDucha: 2,
            U74: 2
          }
        }
      });

      resolve(anjeosLightUpdated);
    } catch (err) {
      const boomError = Boom.notImplemented(
        'No es posible aplicar los descuentos a los anjeos livianos', err
      );
      reject(boomError);
    }
  });
};
