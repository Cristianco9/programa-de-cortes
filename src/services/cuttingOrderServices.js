import {
  calculateLightHeight,
  calculateLightWidthFixed,
  calculateLightHeightFixed,
  calculateLightWidthPickUpCenter,
  calculateLightD28PickUpCenter,
  calculateLightWidthLateral,
  calculateLightWidthOptionalLateral,
  calculateLightWidthThreeShips,
  calculateLightWidthOneToAnother,
  calculateLightWidthDivisorOneToAnother,
  calculateLightWidthDivisorPickUpCenter,
  calculateLightWidthDivisorThreeShips,
} from "./anjeoLightDsctServices.js"

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

export const applyDiscountsLight = async (anjeosLight) => {
  return new Promise((resolve, reject) => {
    try {
      const anjeosLightUpdated = anjeosLight.map(object => {
        if (object.profileType === 'Sencillo' && object.opening === 'Fijo' && object.angle === 'Inferior') {
          const widthUpdated = calculateLightWidthFixed(object.width).toFixed(1);
          const heightUpdated = calculateLightHeightFixed(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 2,
            heightProfilesQuantity: 2,
            divisorProfilesQuantity: 1,
            divisorMeasure: object.width,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1
          }
        } else if (object.profileType === 'Sencillo' && object.opening === 'Fijo' && object.angle === 'Inferior y lateral') {
          const widthUpdated = calculateLightWidthFixed(object.width).toFixed(1);
          const heightUpdated = calculateLightHeightFixed(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 2,
            heightProfilesQuantity: 2,
            divisorProfilesQuantity: 1,
            divisorMeasure: object.width,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1
          }
        } else if (object.profileType === 'Sencillo' && object.opening === 'Fijo' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthFixed(object.width).toFixed(1);
          const heightUpdated = calculateLightHeightFixed(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 2,
            heightProfilesQuantity: 2,
            divisorProfilesQuantity: 1,
            divisorMeasure: object.width,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1
          }
        } else if (object.profileType === 'Sencillo' && object.opening === 'Fijo' && object.angle === 'Sin angulo') {
          const widthUpdated = calculateLightWidthFixed(object.width).toFixed(1);
          const heightUpdated = calculateLightHeightFixed(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 2,
            heightProfilesQuantity: 2,
            divisorProfilesQuantity: 1,
            divisorMeasure: object.width
          }
        }

        else if (object.profileType === 'Sencillo' && object.opening === 'Fijo QP' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthFixed(object.width).toFixed(1);
          const heightUpdated = calculateLightHeightFixed(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 2,
            heightProfilesQuantity: 2,
            divisorProfilesQuantity: 1,
            divisorMeasure: object.width,
            sideAngleMeasure: object.guides,
            sideAngleQuantity: 1
          }
        }

        else if (object.profileType === 'Doble' && object.opening === 'Cierre al centro' && object.angle === 'Inferior') {
          const widthUpdated = calculateLightWidthPickUpCenter(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorPickUpCenter(object.width).toFixed(1);
          const d28Value = calculateLightD28PickUpCenter(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 4,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 2,
            divisorMeasure: divisorMeasureUpdated,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1,
            D28Measure: d28Value,
            D28Quantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Cierre al centro' && object.angle === 'Inferior y lateral') {
          const widthUpdated = calculateLightWidthPickUpCenter(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorPickUpCenter(object.width).toFixed(1);
          const d28Value = calculateLightD28PickUpCenter(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 4,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 2,
            divisorMeasure: divisorMeasureUpdated,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            D28Measure: d28Value,
            D28Quantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Cierre al centro' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthPickUpCenter(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorPickUpCenter(object.width).toFixed(1);
          const d28Value = calculateLightD28PickUpCenter(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 4,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 2,
            divisorMeasure: divisorMeasureUpdated,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            D28Measure: d28Value,
            D28Quantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Cierre al centro' && object.angle === 'Sin angulo') {
          const widthUpdated = calculateLightWidthPickUpCenter(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorPickUpCenter(object.width).toFixed(1);
          const d28Value = calculateLightD28PickUpCenter(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 4,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 2,
            divisorMeasure: divisorMeasureUpdated,
            D28Measure: d28Value,
            D28Quantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        }

        else if (object.profileType === 'Doble' && object.opening === 'Lateral' && object.angle === 'Inferior') {
          const widthUpdated = calculateLightWidthLateral(object.width).toFixed(1);
          const widthOptionalUpdated = calculateLightWidthOptionalLateral(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            widthOptional: widthOptionalUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 2,
            widthOptionalProfilesQuantity: 2,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 1,
            divisorProfilesOptionalQuantity: 1,
            divisorMeasure: object.width,
            divisorMeasureOptional:  object.width,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Lateral' && object.angle === 'Inferior y lateral') {
          const widthUpdated = calculateLightWidthLateral(object.width).toFixed(1);
          const widthOptionalUpdated = calculateLightWidthOptionalLateral(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            widthOptional: widthOptionalUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 2,
            widthOptionalProfilesQuantity: 2,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 1,
            divisorProfilesOptionalQuantity: 1,
            divisorMeasure: object.width,
            divisorMeasureOptional:  object.width,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Lateral' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthLateral(object.width).toFixed(1);
          const widthOptionalUpdated = calculateLightWidthOptionalLateral(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            widthOptional: widthOptionalUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 2,
            widthOptionalProfilesQuantity: 2,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 1,
            divisorProfilesOptionalQuantity: 1,
            divisorMeasure: object.width,
            divisorMeasureOptional:  object.width,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Lateral' && object.angle === 'Sin angulo') {
          const widthUpdated = calculateLightWidthLateral(object.width).toFixed(1);
          const widthOptionalUpdated = calculateLightWidthOptionalLateral(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            widthOptional: widthOptionalUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 2,
            widthOptionalProfilesQuantity: 2,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 1,
            divisorProfilesOptionalQuantity: 1,
            divisorMeasure: object.width,
            divisorMeasureOptional:  object.width,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        }

        else if (object.profileType === 'Doble' && object.opening === 'Tres naves' && object.angle === 'Inferior') {
          const widthUpdated = calculateLightWidthThreeShips(object.width).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 6,
            heightProfilesQuantity: 6,
            divisorProfilesQuantity: 3,
            divisorMeasure: divisorMeasureUpdated,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        }      else if (object.profileType === 'Doble' && object.opening === 'Tres naves' && object.angle === 'Inferior y lateral') {
          const widthUpdated = calculateLightWidthThreeShips(object.width).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 6,
            heightProfilesQuantity: 6,
            divisorProfilesQuantity: 3,
            divisorMeasure: divisorMeasureUpdated,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        }       else if (object.profileType === 'Doble' && object.opening === 'Tres naves' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthThreeShips(object.width).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 6,
            heightProfilesQuantity: 6,
            divisorProfilesQuantity: 3,
            divisorMeasure: divisorMeasureUpdated,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Tres naves' && object.angle === 'Sin angulo') {
          const widthUpdated = calculateLightWidthThreeShips(object.width).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 6,
            heightProfilesQuantity: 6,
            divisorProfilesQuantity: 3,
            divisorMeasure: divisorMeasureUpdated,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        }

        else if (object.profileType === 'Doble' && object.opening === 'Uno hala otro' && object.angle === 'Inferior') {
          const widthUpdated = calculateLightWidthOneToAnother(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorOneToAnother(object.divisorHigh).toFixed(1);


          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorMeasure: divisorMeasureUpdated,
            widthProfilesQuantity: 4,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 2,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 2,
            U74Measure: object.guide,
            U74Quantity: 2
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Uno hala otro' && object.angle === 'Inferior y lateral') {
          const widthUpdated = calculateLightWidthOneToAnother(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorOneToAnother(object.divisorHigh).toFixed(1);


          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorMeasure: divisorMeasureUpdated,
            widthProfilesQuantity: 4,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 2,
            lowerAngleMeasure: object.guides,
            lowerAngleQuantity: 1,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 2,
            U74Measure: object.guide,
            U74Quantity: 2
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Uno hala otro' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthOneToAnother(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorOneToAnother(object.divisorHigh).toFixed(1);


          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorMeasure: divisorMeasureUpdated,
            widthProfilesQuantity: 4,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 2,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 2,
            U74Measure: object.guide,
            U74Quantity: 2
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Uno hala otro' && object.angle === 'Sin angulo') {
          const widthUpdated = calculateLightWidthOneToAnother(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorOneToAnother(object.divisorHigh).toFixed(1);


          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            divisorMeasure: divisorMeasureUpdated,
            widthProfilesQuantity: 4,
            heightProfilesQuantity: 4,
            divisorProfilesQuantity: 2,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 2,
            U74Measure: object.guide,
            U74Quantity: 2
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
            D28: d28
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
            D28: d28
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
            D28: d28
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
            D28: d28
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
            D28: d28
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
            "3/4": 1
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
