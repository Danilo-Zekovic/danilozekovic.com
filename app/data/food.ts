import foodEnJson from './food.en.json'
import foodSrJson from './food.sr.json'
import { CookingTechnique, FoodPageData, FoodStatus } from '~/types/food'

const VALID_STATUSES: readonly FoodStatus[] = [
  'allowed',
  'caution',
  'avoid',
  'testing',
]

const VALID_TECHNIQUES: readonly CookingTechnique[] = [
  'boiled',
  'soup',
  'baked',
  'steamed',
  'stewed',
  'raw',
  'simmered',
  'pan-cooked',
  'fried',
  'grilled',
]

function validateFoodData(data: unknown, lang: string): FoodPageData {
  if (!data || typeof data !== 'object') {
    throw new Error(`[${lang}] Food data must be an object`)
  }

  const d = data as Record<string, unknown>

  if (typeof d.title !== 'string') {
    throw new Error(`[${lang}] Missing or invalid 'title'`)
  }
  if (typeof d.subtitle !== 'string') {
    throw new Error(`[${lang}] Missing or invalid 'subtitle'`)
  }
  if (!Array.isArray(d.description)) {
    throw new Error(`[${lang}] 'description' must be an array of strings`)
  }

  if (!Array.isArray(d.generalRules)) {
    throw new Error(`[${lang}] 'generalRules' must be an array`)
  }
  for (const rule of d.generalRules) {
    if (
      !rule ||
      typeof rule !== 'object' ||
      typeof rule.id !== 'string' ||
      typeof rule.title !== 'string' ||
      typeof rule.description !== 'string'
    ) {
      throw new Error(`[${lang}] Invalid generalRule: ${JSON.stringify(rule)}`)
    }
  }

  if (!d.labels || typeof d.labels !== 'object') {
    throw new Error(`[${lang}] Missing or invalid 'labels'`)
  }

  const labels = d.labels as Record<string, unknown>
  const requiredLabels = [
    'searchPlaceholder',
    'allCategories',
    'allStatuses',
    'allTechniques',
    'statusLabels',
    'techniqueLabels',
    'generalRulesTitle',
    'techniquesTitle',
    'preparationLabel',
    'reactionLabel',
    'notesLabel',
    'noResults',
    'resultsCount',
    'viewCards',
    'viewTable',
    'tableHeaders',
  ]

  for (const labelKey of requiredLabels) {
    if (!labels[labelKey]) {
      throw new Error(`[${lang}] Missing label: '${labelKey}'`)
    }
  }

  const tableHeaders = labels.tableHeaders as Record<string, unknown>
  const requiredTableHeaders = [
    'name',
    'category',
    'status',
    'reaction',
    'preparation',
    'notes',
  ]
  for (const headerKey of requiredTableHeaders) {
    if (typeof tableHeaders[headerKey] !== 'string') {
      throw new Error(`[${lang}] Missing tableHeader for '${headerKey}'`)
    }
  }

  const statusLabels = labels.statusLabels as Record<string, unknown>
  for (const status of VALID_STATUSES) {
    if (typeof statusLabels[status] !== 'string') {
      throw new Error(`[${lang}] Missing statusLabel for '${status}'`)
    }
  }

  const techniqueLabels = labels.techniqueLabels as Record<string, unknown>
  for (const tech of VALID_TECHNIQUES) {
    if (typeof techniqueLabels[tech] !== 'string') {
      throw new Error(`[${lang}] Missing techniqueLabel for '${tech}'`)
    }
  }

  if (!Array.isArray(d.categories)) {
    throw new Error(`[${lang}] 'categories' must be an array`)
  }

  for (const category of d.categories) {
    if (!category.id || !category.name || !Array.isArray(category.items)) {
      throw new Error(
        `[${lang}] Invalid category: ${JSON.stringify(category)}`
      )
    }

    for (const item of category.items) {
      if (!item.id || !item.name) {
        throw new Error(
          `[${lang}] Item in category '${category.name}' is missing id or name`
        )
      }
      if (!VALID_STATUSES.includes(item.status)) {
        throw new Error(
          `[${lang}] Item '${item.id}' has invalid status '${item.status}'. Expected one of: ${VALID_STATUSES.join(', ')}`
        )
      }
      if (typeof item.reaction !== 'string') {
        throw new Error(`[${lang}] Item '${item.id}' is missing 'reaction'`)
      }
      if (typeof item.preparation !== 'string') {
        throw new Error(`[${lang}] Item '${item.id}' is missing 'preparation'`)
      }
      if (
        item.techniques !== undefined &&
        (!Array.isArray(item.techniques) ||
          !item.techniques.every((t: CookingTechnique) =>
            VALID_TECHNIQUES.includes(t)
          ))
      ) {
        throw new Error(
          `[${lang}] Item '${item.id}' has invalid 'techniques'. Expected array containing only: ${VALID_TECHNIQUES.join(', ')}`
        )
      }
      if (
        item.keywords !== undefined &&
        (!Array.isArray(item.keywords) ||
          !item.keywords.every((k: unknown) => typeof k === 'string'))
      ) {
        throw new Error(
          `[${lang}] Item '${item.id}' has invalid 'keywords', expected string[]`
        )
      }
    }
  }

  return data as FoodPageData
}

// Validate both datasets at module initialization to ensure nothing is missed
export const foodEn: FoodPageData = validateFoodData(foodEnJson, 'en')
export const foodSr: FoodPageData = validateFoodData(foodSrJson, 'sr')
