import { TextsAbout } from "./about";
import { TextsAuth } from "./auth";
import { TextsCatalog } from "./catalog";
import { TextsCompany } from "./company";
import { TextsConfirmation, getTextsConfirmation } from "./confirmation";
import { TextsHeader } from "./header";
import { TextsJoinUs } from "./joinUs";
import { TextsNavigation } from "./navigation";
import { TextsOrders } from "./orders";
import { TextsPlatform } from "./platform";
import { getTextsHelpers } from "./popovers";
import { TextsProductService } from "./productService";
import { TextsProfile } from "./profile";
import { TextsValidation } from "./validation";

export const GlobalTexts = {
  about: TextsAbout,
  auth: TextsAuth,
  catalog: TextsCatalog,
  company: TextsCompany,
  confirmation: { TextsConfirmation, getTextsConfirmation },
  header: TextsHeader,
  joinUs: TextsJoinUs,
  navigation: TextsNavigation,
  orders: TextsOrders,
  platform: TextsPlatform,
  popovers: { getTextsHelpers },
  productService: TextsProductService,
  profile: TextsProfile,
  validation: TextsValidation,
};
