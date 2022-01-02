/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum CapacityUnit {
  CUBIC_CENTIMETER = "CUBIC_CENTIMETER",
  CUP = "CUP",
  DROP = "DROP",
  GALLON = "GALLON",
  GRAM = "GRAM",
  KILOGRAM = "KILOGRAM",
  LITER = "LITER",
  MILLIGRAM = "MILLIGRAM",
  MILLILITER = "MILLILITER",
  OUNCE = "OUNCE",
  PINT = "PINT",
  QUART = "QUART",
  TABLESPOON = "TABLESPOON",
  TEASPOON = "TEASPOON",
}

export enum ColleagueRole {
  ADMIN = "ADMIN",
  GUEST = "GUEST",
  MEMBER = "MEMBER",
  OWNER = "OWNER",
}

export enum ColleagueType {
  CREATOR = "CREATOR",
  CREATOR_VENDOR = "CREATOR_VENDOR",
  GUEST = "GUEST",
  VENDOR = "VENDOR",
}

export enum ContentType {
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  URL = "URL",
}

export enum DurationUnit {
  DAYS = "DAYS",
  MONTHS = "MONTHS",
  YEARS = "YEARS",
}

export enum EmployeeCount {
  RANGE1 = "RANGE1",
  RANGE100 = "RANGE100",
  RANGE11 = "RANGE11",
  RANGE31 = "RANGE31",
  RANGE51 = "RANGE51",
}

export enum Feature {
  CERTIFIED_ORGANIC = "CERTIFIED_ORGANIC",
  HALAL = "HALAL",
  PLANT_BASED = "PLANT_BASED",
  PROPOSITION_65_COMPLIANT = "PROPOSITION_65_COMPLIANT",
  VEGAN = "VEGAN",
}

export enum FileCategory {
  COMMENT = "COMMENT",
  FORMULA_BRIEF = "FORMULA_BRIEF",
  IDEATION = "IDEATION",
  MANUFACTRING_BRIEF = "MANUFACTRING_BRIEF",
  PACKAGING_BRIEF = "PACKAGING_BRIEF",
  PRODUCT = "PRODUCT",
  PRODUCT_BRIEF = "PRODUCT_BRIEF",
  SUPPORTING_BRIEF = "SUPPORTING_BRIEF",
  TASK = "TASK",
  TEAM = "TEAM",
  TESTING_BRIEF = "TESTING_BRIEF",
}

export enum FileLabel {
  BILLING = "BILLING",
  FORMULA = "FORMULA",
  FORMULA_BRIEF = "FORMULA_BRIEF",
  IDEATION = "IDEATION",
  LAUNCH = "LAUNCH",
  MANUFACTURING = "MANUFACTURING",
  MANUFACTURING_BRIEF = "MANUFACTURING_BRIEF",
  PACKAGING = "PACKAGING",
  PACKAGING_BENCHMARKS = "PACKAGING_BENCHMARKS",
  PACKAGING_BRIEF = "PACKAGING_BRIEF",
  PACKAGING_IMAGES = "PACKAGING_IMAGES",
  PACKAGING_LABEL = "PACKAGING_LABEL",
  PERSONAL = "PERSONAL",
  PRODUCT = "PRODUCT",
  PRODUCT_BRIEF = "PRODUCT_BRIEF",
  PRODUCT_BUILDER = "PRODUCT_BUILDER",
  REGULATORY = "REGULATORY",
  TASK = "TASK",
  TEAM = "TEAM",
  TERMS = "TERMS",
  TESTING = "TESTING",
  TESTING_BRIEF = "TESTING_BRIEF",
}

export enum FileTag {
  FORMULATION = "FORMULATION",
  MANUFACTURING = "MANUFACTURING",
  PACKAGING = "PACKAGING",
  PRODUCT = "PRODUCT",
  TESTING = "TESTING",
}

export enum IdeationBoardType {
  PRODUCT = "PRODUCT",
  TEAM = "TEAM",
  USER = "USER",
}

export enum IdeationCardSection {
  FORMULA = "FORMULA",
  IDEATION = "IDEATION",
  LAUNCH = "LAUNCH",
  MANUFACTURING = "MANUFACTURING",
  PACKAGING = "PACKAGING",
  PRODUCT_BRIEF = "PRODUCT_BRIEF",
  REGULATORY = "REGULATORY",
  TESTING = "TESTING",
}

export enum ProductCategory {
  BODY_CARE = "BODY_CARE",
  HAIR_CARE = "HAIR_CARE",
  MAKEUP = "MAKEUP",
  SKIN_CARE = "SKIN_CARE",
  SUN_CARE = "SUN_CARE",
}

export enum ProductType {
  AFTER_SHAVE = "AFTER_SHAVE",
  ANTI_CELLULITE_CREAM = "ANTI_CELLULITE_CREAM",
  ANTI_PERSPIRANT = "ANTI_PERSPIRANT",
  BABY_SUN_CARE = "BABY_SUN_CARE",
  BATH_BOMB = "BATH_BOMB",
  BB_CREAM = "BB_CREAM",
  BLEMISH_TREATMENT = "BLEMISH_TREATMENT",
  BLUSH = "BLUSH",
  BODY_BAR = "BODY_BAR",
  BODY_CREAM = "BODY_CREAM",
  BODY_LOTION = "BODY_LOTION",
  BODY_MASK = "BODY_MASK",
  BODY_OIL = "BODY_OIL",
  BODY_POLISH = "BODY_POLISH",
  BODY_SCRUB = "BODY_SCRUB",
  BODY_SERUM = "BODY_SERUM",
  BODY_SUN_CARE = "BODY_SUN_CARE",
  BODY_WASH = "BODY_WASH",
  BRONZER = "BRONZER",
  BUBBLE_BATH = "BUBBLE_BATH",
  CC_CREAM = "CC_CREAM",
  CLEANSING = "CLEANSING",
  CONCEALER = "CONCEALER",
  CONDITIONER = "CONDITIONER",
  CONDITIONING_SPRAY = "CONDITIONING_SPRAY",
  CUTICLE_CREAM = "CUTICLE_CREAM",
  DAY_FACE_CREAM = "DAY_FACE_CREAM",
  DEODORANT = "DEODORANT",
  DRY_SHAMPOO = "DRY_SHAMPOO",
  ESSENCE = "ESSENCE",
  EXFOLIATOR = "EXFOLIATOR",
  EYEBROW_CRAYON = "EYEBROW_CRAYON",
  EYEBROW_PENCIL = "EYEBROW_PENCIL",
  EYEBROW_POT = "EYEBROW_POT",
  EYEBROW_POWDER = "EYEBROW_POWDER",
  EYELASHES = "EYELASHES",
  EYELASH_LENGTHENER = "EYELASH_LENGTHENER",
  EYELASH_PRIMER = "EYELASH_PRIMER",
  EYELINER_CRAYON = "EYELINER_CRAYON",
  EYELINER_PENCIL = "EYELINER_PENCIL",
  EYELINER_POT = "EYELINER_POT",
  EYESHADOW = "EYESHADOW",
  EYE_CONTOUR = "EYE_CONTOUR",
  EYE_PRIMER = "EYE_PRIMER",
  FACE_SUN_CARE = "FACE_SUN_CARE",
  FACIAL_BAR = "FACIAL_BAR",
  FACIAL_OIL = "FACIAL_OIL",
  FIXING_SPRAY = "FIXING_SPRAY",
  FOOT_CREAM = "FOOT_CREAM",
  FOOT_STICK = "FOOT_STICK",
  FOUNDATION = "FOUNDATION",
  HAIR_SPRAY = "HAIR_SPRAY",
  HAND_CREAM = "HAND_CREAM",
  HAND_GEL_ALCOHOL_BASED = "HAND_GEL_ALCOHOL_BASED",
  HEAT_PROTECTANT = "HEAT_PROTECTANT",
  HIGHLIGHTER = "HIGHLIGHTER",
  ILLUMINATOR = "ILLUMINATOR",
  INNER_LID_EYELINER = "INNER_LID_EYELINER",
  KID_SUN_CARE = "KID_SUN_CARE",
  LEAVE_IN_CONDITIONER = "LEAVE_IN_CONDITIONER",
  LIPSTICK = "LIPSTICK",
  LIP_BALM = "LIP_BALM",
  LIP_BUTTER = "LIP_BUTTER",
  LIP_CRAYON = "LIP_CRAYON",
  LIP_GLOSS = "LIP_GLOSS",
  LIP_LINER = "LIP_LINER",
  LIP_MASK = "LIP_MASK",
  LIP_PENCIL = "LIP_PENCIL",
  LIP_PLUMPER = "LIP_PLUMPER",
  LIP_PRIMER = "LIP_PRIMER",
  LIP_SCRUB = "LIP_SCRUB",
  LIP_STAIN = "LIP_STAIN",
  LIP_SUN_CARE = "LIP_SUN_CARE",
  LIP_TINT = "LIP_TINT",
  LIQUID_EYELINER = "LIQUID_EYELINER",
  LOTION = "LOTION",
  MAKEUP_BRONZER = "MAKEUP_BRONZER",
  MASCARA = "MASCARA",
  MASK = "MASK",
  MICELLAR_WATER = "MICELLAR_WATER",
  MOUSSE = "MOUSSE",
  NIGHT_FACE_CREAM = "NIGHT_FACE_CREAM",
  PATCHES = "PATCHES",
  PIMPLE_TREATMENT = "PIMPLE_TREATMENT",
  PRIMER = "PRIMER",
  SCALP_CLEANSING = "SCALP_CLEANSING",
  SERUM = "SERUM",
  SHAMPOO = "SHAMPOO",
  SHAVING_FOAM = "SHAVING_FOAM",
  SHAVING_SOAP = "SHAVING_SOAP",
  SHEET_MASK = "SHEET_MASK",
  SHOWER_GEL = "SHOWER_GEL",
  SKIN_CLEANSING = "SKIN_CLEANSING",
  SKIN_MASK = "SKIN_MASK",
  SKIN_SERUM = "SKIN_SERUM",
  SOAP = "SOAP",
  TANNING_LOTION = "TANNING_LOTION",
  TEXTURIZER = "TEXTURIZER",
  TONER = "TONER",
  UNDER_EYE = "UNDER_EYE",
  WAX = "WAX",
  WOEM = "WOEM",
}

export enum RegulatoryTest {
  ALLERGEN = "ALLERGEN",
  CBD_THC = "CBD_THC",
  CLINICAL = "CLINICAL",
  HEAVY_METALS = "HEAVY_METALS",
}

export enum SortDirection {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export enum SupportedCurrency {
  EUR = "EUR",
  USD = "USD",
}

export enum TargetAge {
  ADULT18 = "ADULT18",
  ADULT30 = "ADULT30",
  ADULT45 = "ADULT45",
  ADULT60 = "ADULT60",
  BABY = "BABY",
  KID = "KID",
  TEEN = "TEEN",
}

export enum TargetGender {
  EVERYONE = "EVERYONE",
  MEN = "MEN",
  WOMEN = "WOMEN",
}

export enum TargetMarket {
  CANADA = "CANADA",
  CHINA = "CHINA",
  EUROPE = "EUROPE",
  MEXICO = "MEXICO",
  RUSSIA = "RUSSIA",
  US = "US",
}

export enum TaskRequirement {
  OPTIONAL = "OPTIONAL",
  RECOMMENDED = "RECOMMENDED",
}

export enum TaskStatus {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  READY = "READY",
  SKIPPED = "SKIPPED",
}

export enum TeamType {
  CREATOR = "CREATOR",
  CREATOR_VENDOR = "CREATOR_VENDOR",
  VENDOR = "VENDOR",
}

export enum UserJobTitle {
  CEO = "CEO",
  DEVELOPMENT = "DEVELOPMENT",
  FORMULATOR = "FORMULATOR",
  HR = "HR",
  MARKETING = "MARKETING",
  OTHER = "OTHER",
  PROJECT_MANAGER = "PROJECT_MANAGER",
  QUALITY = "QUALITY",
  SALES = "SALES",
}

export enum UserStatus {
  ACTIVE = "ACTIVE",
  DEACTIVATED = "DEACTIVATED",
  PENDING = "PENDING",
  UNDER_ADMIN_REVIEW = "UNDER_ADMIN_REVIEW",
}

export enum WeightUnit {
  GRAM = "GRAM",
  KILOGRAM = "KILOGRAM",
  LITER = "LITER",
  MILLIGRAM = "MILLIGRAM",
  MILLILITER = "MILLILITER",
  OUNCE = "OUNCE",
}

export interface FilterBy {
  field: string;
  value: string;
}

export interface NewAddress {
  type: string;
  street: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface NewCapacity {
  amount: number;
  unit: CapacityUnit;
}

export interface NewCertification {
  specification: string[];
  tests?: RegulatoryTest[] | null;
  certifications?: string[] | null;
}

export interface NewDuration {
  value: number;
  unit: DurationUnit;
}

export interface NewFormulation {
  quantity: number;
  benchmarks?: string | null;
  desiredIngredients?: string | null;
  avoidIngredients?: string | null;
  mustIngredients?: string | null;
  minShelfLife?: NewDuration | null;
  weightPerItem?: NewCapacity | null;
  targetSkin?: string[] | null;
  desiredTesting?: string[] | null;
  desiredCharacteristics: string[];
  desiredFunctionalities?: string[] | null;
  scent?: string[] | null;
  texture?: string[] | null;
  mustFeatures?: Feature[] | null;
}

export interface NewIdeationBoard {
  name: string;
  type: IdeationBoardType;
  description?: string | null;
}

export interface NewIdeationCard {
  name: string;
  content: string;
  contentType: ContentType;
  description?: string | null;
  position: NewPoint;
  section?: IdeationCardSection | null;
}

export interface NewInviteRegistration {
  code: string;
  name: string;
  displayName: string;
}

export interface NewMemberInvite {
  role?: ColleagueRole | null;
  email: string;
}

export interface NewMoney {
  amount: number;
  currency: SupportedCurrency;
}

export interface NewPackaging {
  specification?: string[] | null;
  type1: string[];
  type2?: string[] | null;
  type3?: string[] | null;
  material1: string[];
  material2?: string[] | null;
  material3?: string[] | null;
  copy1?: string | null;
  copy2?: string | null;
  copy3?: string | null;
  quantity?: number | null;
  insertDescription?: string[] | null;
  image?: string | null;
  label?: string[] | null;
  labelImage?: string | null;
  benchmark?: string | null;
  totalWeight?: NewWeight | null;
}

export interface NewPoint {
  x: number;
  y: number;
}

export interface NewProduct {
  name: string;
  category: ProductCategory;
  type: ProductType;
  form: string[];
  isNew: boolean;
  line?: string | null;
  description?: string | null;
  targetPrice?: NewMoney | null;
  targetAges?: TargetAge[] | null;
  targetGenders?: TargetGender[] | null;
  targetMarkets: TargetMarket[];
  marketPosition?: string[] | null;
  lifestyle?: string[] | null;
  personality?: string[] | null;
  budget?: NewMoney | null;
  launchOn?: any | null;
  primaryClaims?: string[] | null;
  secondaryClaims?: string[] | null;
  answers?: (NewQuestionnaireAnswer | null)[] | null;
  contributors?: (NewProductContributor | null)[] | null;
  formulation?: NewFormulation | null;
  certification?: NewCertification | null;
  packaging?: NewPackaging | null;
}

export interface NewProductContributor {
  teamMemberId: string;
  editFiles?: boolean | null;
  editTasks?: boolean | null;
  editBrief?: boolean | null;
}

export interface NewQuestionnaireAnswer {
  questionName: string;
  questionGroup: string;
  answer: string;
}

export interface NewRegistration {
  NewUser: NewUser;
  NewTeam: NewTeam;
}

export interface NewSharedBrief {
  email: string;
  name?: string | null;
  companyName?: string | null;
  vendorType?: string | null;
}

export interface NewTeam {
  type: TeamType;
  name: string;
  displayName?: string | null;
  website?: string | null;
  bio?: string | null;
  email?: string | null;
  signedUpAt?: any | null;
  employeeCount?: EmployeeCount | null;
  members?: (NewTeamMember | null)[] | null;
  addresses?: (NewAddress | null)[] | null;
}

export interface NewTeamMember {
  userId: string;
  role: ColleagueRole;
  type: ColleagueType;
  primaryOwner?: boolean | null;
}

export interface NewUser {
  status: UserStatus;
  name: string;
  email: string;
  username?: string | null;
  displayName?: string | null;
  phone?: string | null;
  jobTitle?: UserJobTitle | null;
  marketing?: boolean | null;
  newsletter?: boolean | null;
  privacy?: any | null;
  terms?: any | null;
  settings?: NewUserSettings | null;
  identities?: (NewUserIdentity | null)[] | null;
}

export interface NewUserIdentity {
  active: boolean;
  identityId: string;
  identityType: string;
}

export interface NewUserSettings {
  notifyInApp?: boolean | null;
  notifyByEmail?: boolean | null;
  doNotDisturb?: boolean | null;
}

export interface NewWeight {
  value: number;
  unit: WeightUnit;
}

export interface QueryOpts {
  filter?: FilterBy | null;
  sort?: SortBy | null;
  first?: number | null;
  after?: string | null;
  last?: number | null;
  before?: string | null;
}

export interface SortBy {
  field: string;
  direction: SortDirection;
}

export interface UpdateAddress {
  type?: string | null;
  street?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  postalCode?: string | null;
}

export interface UpdateIdeationCard {
  name?: string | null;
  description?: string | null;
  position?: UpdatePoint | null;
  section?: IdeationCardSection | null;
}

export interface UpdatePoint {
  x: number;
  y: number;
}

export interface UpdateProduct {
  name?: string | null;
  category?: ProductCategory | null;
  type?: ProductType | null;
  isNew?: boolean | null;
  line?: string | null;
  description?: string | null;
  form?: string[] | null;
  targetPrice?: NewMoney | null;
  targetAges?: TargetAge[] | null;
  targetGenders?: TargetGender[] | null;
  targetMarkets?: TargetMarket[] | null;
  marketPosition?: string[] | null;
  lifestyle?: string[] | null;
  personality?: string[] | null;
  budget?: NewMoney | null;
  launchOn?: any | null;
  primaryClaims?: string[] | null;
  secondaryClaims?: string[] | null;
}

export interface UpdateTask {
  requester?: string | null;
  assignee?: string | null;
  description?: string | null;
  status?: TaskStatus | null;
  dueBy?: any | null;
}

export interface UpdateTeam {
  certified?: boolean | null;
  displayName?: string | null;
  website?: string | null;
  bio?: string | null;
  email?: string | null;
  signedUpAt?: any | null;
  employeeCount?: EmployeeCount | null;
}

export interface UpdateUser {
  status?: UserStatus | null;
  active?: boolean | null;
  name?: string | null;
  username?: string | null;
  displayName?: string | null;
  email?: string | null;
  phone?: string | null;
  jobTitle?: UserJobTitle | null;
  marketing?: boolean | null;
  newsletter?: boolean | null;
  privacy?: any | null;
  terms?: any | null;
}

export interface UploadFile {
  name: string;
  givenName: string;
  category: FileCategory;
  label: FileLabel;
  tags?: FileTag[] | null;
  contentLength: number;
  contentType: string;
  contentEncoding: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
