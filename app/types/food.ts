export type FoodStatus = 'allowed' | 'caution' | 'avoid' | 'testing'

export type CookingTechnique =
  | 'raw'
  | 'boiled'
  | 'simmered'     // covers poached, blanched
  | 'steamed'
  | 'soup'
  | 'baked'        // covers roasted, broiled
  | 'pan-cooked'   // covers sautéed, pan-fried, seared, stir-fried
  | 'fried'        // deep-fried
  | 'stewed'       // covers braised, pressure-cooked
  | 'grilled'      // covers smoked

export interface FoodItem {
  id: string
  name: string
  status: FoodStatus
  reaction: string
  preparation: string
  techniques?: CookingTechnique[]
  notes?: string
  keywords?: string[]
}

export interface FoodCategory {
  id: string
  name: string
  items: FoodItem[]
}

export interface FoodTableHeaders {
  name: string
  category: string
  status: string
  reaction: string
  preparation: string
  notes: string
}

export interface GeneralRule {
  id: string
  title: string
  description: string
}

export interface FoodPageLabels {
  searchPlaceholder: string
  allCategories: string
  allStatuses: string
  allTechniques: string
  resetFilters: string
  statusLabels: Record<FoodStatus, string>
  techniqueLabels: Record<CookingTechnique, string>
  generalRulesTitle: string
  techniquesTitle: string
  preparationLabel: string
  reactionLabel: string
  notesLabel: string
  noResults: string
  resultsCount: string
  viewCards: string
  viewTable: string
  tableHeaders: FoodTableHeaders
}

export interface FoodPageData {
  title: string
  subtitle: string
  description: string[]
  generalRules: GeneralRule[]
  labels: FoodPageLabels
  categories: FoodCategory[]
  collaps: string
  expand: string
}
