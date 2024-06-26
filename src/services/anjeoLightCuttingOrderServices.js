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
  calculateLightAngleVertical,
} from "./anjeoLightDsctServices.js"

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
            lowerAngleMeasure: object.width,
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
            lowerAngleMeasure: object.width,
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

        else if (object.profileType === 'Sencillo' && object.opening === 'Fijo QP' && object.divisorOrientation === 'Horizontal' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthFixed(object.width).toFixed(1);
          const heightUpdated = calculateLightHeightFixed(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            angleHorizontalMeasure: object.width,
            angleHorizontalQuantity: 1,
            widthProfilesQuantity: 2,
            heightProfilesQuantity: 2,
            divisorProfilesQuantity: 1,
            divisorMeasure: object.width,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1
          }
        } else if (object.profileType === 'Sencillo' && object.opening === 'Fijo QP' && object.divisorOrientation === 'Horizontal' && object.angle === 'Sin angulo') {
          const widthUpdated = calculateLightWidthFixed(object.width).toFixed(1);
          const heightUpdated = calculateLightHeightFixed(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            angleHorizontalMeasure: object.width,
            angleHorizontalQuantity: 1,
            widthProfilesQuantity: 2,
            heightProfilesQuantity: 2,
            divisorProfilesQuantity: 1,
            divisorMeasure: object.width,
          }
        }

        else if (object.profileType === 'Sencillo' && object.opening === 'Fijo QP' && object.divisorOrientation === 'Vertical' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthFixed(object.width).toFixed(1);
          const heightUpdated = calculateLightHeightFixed(object.height).toFixed(1);
          const angleUpdated = calculateLightAngleVertical(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            angleVerticalMeasure: angleUpdated,
            angleVerticalQuantity: 1,
            widthProfilesQuantity: 2,
            heightProfilesQuantity: 2,
            divisorProfilesQuantity: 1,
            divisorMeasure: object.width,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1
          }
        } else if (object.profileType === 'Sencillo' && object.opening === 'Fijo QP' && object.divisorOrientation === 'Vertical' && object.angle === 'Sin angulo') {
          const widthUpdated = calculateLightWidthFixed(object.width).toFixed(1);
          const heightUpdated = calculateLightHeightFixed(object.height).toFixed(1);
          const angleUpdated = calculateLightAngleVertical(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            angleVerticalMeasure: angleUpdated,
            angleVerticalQuantity: 1,
            widthProfilesQuantity: 2,
            heightProfilesQuantity: 2,
            divisorProfilesQuantity: 1,
            divisorMeasure: object.width,
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
            lowerAngleMeasure: object.guide,
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
            lowerAngleMeasure: object.guide,
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
          const widthOptionalUpdated = calculateLightWidthOptionalLateral(object.widthOptional).toFixed(1);
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
            divisorMeasureOptional:  object.widthOptional,
            lowerAngleMeasure: object.width,
            lowerAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Lateral' && object.angle === 'Inferior y lateral') {
          const widthUpdated = calculateLightWidthLateral(object.width).toFixed(1);
          const widthOptionalUpdated = calculateLightWidthOptionalLateral(object.widthOptional).toFixed(1);
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
            divisorMeasureOptional:  object.widthOptional,
            lowerAngleMeasure: object.width,
            lowerAngleQuantity: 1,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 2,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Lateral' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthLateral(object.width).toFixed(1);
          const widthOptionalUpdated = calculateLightWidthOptionalLateral(object.widthOptional).toFixed(1);
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
            divisorMeasureOptional:  object.widthOptional,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 2,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Doble' && object.opening === 'Lateral' && object.angle === 'Sin angulo') {
          const widthUpdated = calculateLightWidthLateral(object.width).toFixed(1);
          const widthOptionalUpdated = calculateLightWidthOptionalLateral(object.widthOptional).toFixed(1);
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
            divisorMeasureOptional:  object.widthOptional,
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
            lowerAngleMeasure: object.width,
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
            lowerAngleMeasure: object.width,
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

        else if (object.profileType === 'Triple' && object.opening === 'Tres naves' && object.angle === 'Inferior') {
          const widthUpdated = calculateLightWidthThreeShips(object.width).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 6,
            heightProfilesQuantity: 6,
            guidesQuantity: 3,
            divisorProfilesQuantity: 3,
            divisorMeasure: divisorMeasureUpdated,
            lowerAngleMeasure: object.width,
            lowerAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Triple' && object.opening === 'Tres naves' && object.angle === 'Inferior y lateral') {
          const widthUpdated = calculateLightWidthThreeShips(object.width).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 6,
            heightProfilesQuantity: 6,
            guidesQuantity: 3,
            divisorProfilesQuantity: 3,
            divisorMeasure: divisorMeasureUpdated,
            lowerAngleMeasure: object.width,
            lowerAngleQuantity: 1,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Triple' && object.opening === 'Tres naves' && object.angle === 'Lateral') {
          const widthUpdated = calculateLightWidthThreeShips(object.width).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 6,
            heightProfilesQuantity: 6,
            guidesQuantity: 3,
            divisorProfilesQuantity: 3,
            divisorMeasure: divisorMeasureUpdated,
            sideAngleMeasure: object.height,
            sideAngleQuantity: 1,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
          }
        } else if (object.profileType === 'Triple' && object.opening === 'Tres naves' && object.angle === 'Sin angulo') {
          const widthUpdated = calculateLightWidthThreeShips(object.width).toFixed(1);
          const divisorMeasureUpdated = calculateLightWidthDivisorThreeShips(object.width).toFixed(1);
          const heightUpdated = calculateLightHeight(object.height).toFixed(1);

          return {
            ...object,
            width: widthUpdated,
            height: heightUpdated,
            widthProfilesQuantity: 6,
            heightProfilesQuantity: 6,
            guidesQuantity: 3,
            divisorProfilesQuantity: 3,
            divisorMeasure: divisorMeasureUpdated,
            naveDuchaMeasure: object.guide,
            naveDuchaQuantity: 1,
            U74Measure: object.guide,
            U74Quantity: 1
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
