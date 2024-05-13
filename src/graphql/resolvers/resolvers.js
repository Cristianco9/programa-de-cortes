// auth resolvers module
import {
  login
} from "./authResolvers.js";

// user resolvers module
import {
  user,
  allUsers,
  newUser,
  deleteUser,
  updateUser
} from "./userResolvers.js";

// order resolvers module
import {
  order,
  allOrders,
  newOrder,
  deleteOrder,
  updateOrder
} from "./orderResolvers.js";

// anjeo light resolvers module
import {
  anjeoLight,
  allAnjeosLight,
  allAnjeosLightByOwnerId,
  newAnjeoLight,
  deleteAnjeoLight,
  updateAnjeoLight
} from "./anjeoLightResolvers.js";

// RegEx library by graphql-scalars
import { RegularExpression } from "graphql-scalars";

// user Re
import {
  userIdRegEx,
  userEmailRegEx,
  userRolRegEx,
  userNameRegEx,
  userPasswordRegEx
} from "../../utils/RegEx/userRegEx.js";
import {
  orderIdRegEx,
  orderStatusRegEx
} from "../../utils/RegEx/orderRegEx.js";
import {
  LOrderOwnerIdRegEx,
  LAnjeoLightIdRegEx,
  LColorRegEx,
  LProfileTypeRegEx,
  LOpeningRegEx,
  LPlaceRegEx,
  LWidthRegEx,
  LWidthOptionalRegEx,
  LHeightRegEx,
  LGuideRegEx,
  LInstallationRegEx,
  LDivisorHighRegEx,
  LDivisorQuantityRegEx,
  LDivisorOrientationRegEx,
  LAngleRegEx,
  LNotesRegEx
} from "../../utils/RegEx/anjeoLightRegEx.js"

// The users RegEx scalars
const UserIdType = new RegularExpression('UserIdType', userIdRegEx);
const UserEmailType = new RegularExpression('UserEmailType', userEmailRegEx);
const UserRolType = new RegularExpression('UserRolType', userRolRegEx);
const UserNameType = new RegularExpression('UserNameType', userNameRegEx);
const UserPasswordType = new RegularExpression('UserPasswordType', userPasswordRegEx);

// The orders RegEx scalars
const OrderIdType = new RegularExpression('orderIdType', orderIdRegEx);
const OrderStatusType = new RegularExpression('OrderStatusType', orderStatusRegEx);

// The anjeos light RegEx scalars
const LOrderOwnerIdType = new RegularExpression('LOrderOwnerIdType', LOrderOwnerIdRegEx);
const LAnjeoIdType = new RegularExpression('LAnjeoIdType', LAnjeoLightIdRegEx);
const LColorType = new RegularExpression('LColorType', LColorRegEx);
const LProfileTypeType = new RegularExpression('LProfileTypeType', LProfileTypeRegEx)
const LOpeningType = new RegularExpression('LOpeningType', LOpeningRegEx);
const LPlaceType = new RegularExpression('LPlaceType', LPlaceRegEx);
const LWidthType = new RegularExpression('LWidthType', LWidthRegEx);
const LWidthOptionalType = new RegularExpression('LWidthOptionalType', LWidthOptionalRegEx);
const LHeightType = new RegularExpression('LHeightType', LHeightRegEx);
const LGuideType = new RegularExpression('LGuideType', LGuideRegEx);
const LInstallationType = new RegularExpression('LInstallationType', LInstallationRegEx);
const LDivisorHeightType = new RegularExpression('LDivisorHeightType', LDivisorHighRegEx);
const LDivisorQuantityType = new RegularExpression('LDivisorQuantityType', LDivisorQuantityRegEx);
const LDivisorOrientationType = new RegularExpression('LDivisorOrientationType', LDivisorOrientationRegEx);
const LAngleType = new RegularExpression('LAngleType', LAngleRegEx);
const LNotesType = new RegularExpression('LNotesType', LNotesRegEx);

export const resolvers = {
  Query: {
    // Users
    user,
    allUsers,

    // Orders
    order,
    allOrders,

    // Anjeo light
    anjeoLight,
    allAnjeosLight,
    allAnjeosLightByOwnerId,
  },
  Mutation: {
    // Auth
    login,

    // Users
    newUser,
    deleteUser,
    updateUser,

    // Orders
    newOrder,
    deleteOrder,
    updateOrder,

    // Anjeo light
    newAnjeoLight,
    deleteAnjeoLight,
    updateAnjeoLight,
  },

  // Users scalars
  UserIdType,
  UserEmailType,
  UserRolType,
  UserNameType,
  UserPasswordType,

  // Orders scalars
  OrderIdType,
  OrderStatusType,

  // Anjeo light scalars
  LOrderOwnerIdType,
  LAnjeoIdType,
  LColorType,
  LProfileTypeType,
  LOpeningType,
  LPlaceType,
  LWidthType,
  LWidthOptionalType,
  LHeightType,
  LGuideType,
  LInstallationType,
  LDivisorHeightType,
  LDivisorQuantityType,
  LDivisorOrientationType,
  LAngleType,
  LNotesType,
}
