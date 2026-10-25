import * as React from 'react'
import {
  AlertTriangle,
  ArrowDown,
  ArrowUp,
  ArrowUpDown,
  CheckCircle2,
  ChefHat,
  ChevronDown,
  ChevronUp,
  Clock,
  Cloud,
  CookingPot,
  Filter,
  Flame,
  FlameKindling,
  LayoutGrid,
  Leaf,
  Search,
  SearchSlash,
  Soup,
  Sparkles,
  Table as TableIcon,
  Waves,
  X,
  XCircle,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import {
  CookingTechnique,
  FoodItem,
  FoodPageData,
  FoodStatus,
} from '~/types/food'

interface FoodContentProps {
  data: FoodPageData
}

type SortField = 'name' | 'category' | 'status'
type SortOrder = 'asc' | 'desc'

const statusConfig: Record<
  FoodStatus,
  {
    badgeClass: string
    icon: React.ComponentType<{ className?: string }>
  }
> = {
  allowed: {
    badgeClass:
      'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
    icon: CheckCircle2,
  },
  caution: {
    badgeClass:
      'bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30',
    icon: AlertTriangle,
  },
  avoid: {
    badgeClass:
      'bg-rose-500/15 text-rose-700 dark:text-rose-400 border-rose-500/30',
    icon: XCircle,
  },
  testing: {
    badgeClass:
      'bg-sky-500/15 text-sky-700 dark:text-sky-400 border-sky-500/30',
    icon: Clock,
  },
}

export const techniqueConfig: Record<
  CookingTechnique,
  {
    icon: React.ComponentType<{ className?: string }>
    badgeClass: string
  }
> = {
  raw: {
    icon: Leaf,
    badgeClass:
      'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20',
  },
  boiled: {
    icon: CookingPot,
    badgeClass:
      'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20',
  },
  simmered: {
    icon: Waves,
    badgeClass:
      'bg-sky-500/10 text-sky-700 dark:text-sky-400 border-sky-500/20',
  },
  steamed: {
    icon: Cloud,
    badgeClass:
      'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border-cyan-500/20',
  },
  soup: {
    icon: Soup,
    badgeClass:
      'bg-teal-500/10 text-teal-700 dark:text-teal-400 border-teal-500/20',
  },
  baked: {
    icon: Flame,
    badgeClass:
      'bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20',
  },
  'pan-cooked': {
    icon: SearchSlash,
    badgeClass:
      'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20',
  },
  fried: {
    icon: FlameKindling,
    badgeClass:
      'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20',
  },
  stewed: {
    icon: Sparkles,
    badgeClass:
      'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border-indigo-500/20',
  },
  grilled: {
    icon: Flame,
    badgeClass:
      'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20',
  },
}

function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/đ/g, 'dj')
    .replace(/dž/g, 'dz')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export default function FoodContent({ data }: FoodContentProps) {
  const [viewMode, setViewMode] = React.useState<'cards' | 'table'>('cards')
  const [showGeneralRules, setShowGeneralRules] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all')
  const [selectedStatus, setSelectedStatus] = React.useState<FoodStatus | 'all'>(
    'all'
  )
  const [selectedTechnique, setSelectedTechnique] = React.useState<
    CookingTechnique | 'all'
  >('all')

  // Table sorting
  const [sortField, setSortField] = React.useState<SortField>('name')
  const [sortOrder, setSortOrder] = React.useState<SortOrder>('asc')

  const totalItemsCount = React.useMemo(() => {
    return data.categories.reduce((acc, cat) => acc + cat.items.length, 0)
  }, [data.categories])

  const filteredCategories = React.useMemo(() => {
    const queryWords = normalizeText(searchQuery.trim())
      .split(/\s+/)
      .filter(Boolean)

    return data.categories
      .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
      .map((cat) => {
        const normalizedCatName = normalizeText(cat.name)
        const normalizedCatId = normalizeText(cat.id.replace(/-/g, ' '))

        const items = cat.items.filter((item) => {
          const matchesStatus =
            selectedStatus === 'all' || item.status === selectedStatus

          const matchesTechnique =
            selectedTechnique === 'all' ||
            (item.techniques && item.techniques.includes(selectedTechnique))

          if (!matchesStatus || !matchesTechnique) return false
          if (queryWords.length === 0) return true

          const normalizedName = normalizeText(item.name)
          const normalizedId = normalizeText(item.id.replace(/-/g, ' '))
          const normalizedPrep = normalizeText(item.preparation)
          const normalizedReaction = normalizeText(item.reaction)
          const normalizedNotes = item.notes ? normalizeText(item.notes) : ''
          const normalizedKeywords = item.keywords
            ? item.keywords.map((k) => normalizeText(k))
            : []
          const normalizedTechs = item.techniques
            ? item.techniques.map((t) =>
                normalizeText(data.labels.techniqueLabels[t] || t)
              )
            : []

          return queryWords.every((word) => {
            return (
              normalizedName.includes(word) ||
              normalizedId.includes(word) ||
              normalizedCatName.includes(word) ||
              normalizedCatId.includes(word) ||
              normalizedPrep.includes(word) ||
              normalizedReaction.includes(word) ||
              normalizedNotes.includes(word) ||
              normalizedKeywords.some((kw) => kw.includes(word)) ||
              normalizedTechs.some((t) => t.includes(word))
            )
          })
        })

        return {
          ...cat,
          items,
        }
      })
      .filter((cat) => cat.items.length > 0)
  }, [
    data.categories,
    data.labels.techniqueLabels,
    selectedCategory,
    selectedStatus,
    selectedTechnique,
    searchQuery,
  ])

  const filteredItemsCount = React.useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.items.length, 0)
  }, [filteredCategories])

  // Flatten items for table view with sorting
  const tableItems = React.useMemo(() => {
    const flat: Array<{
      categoryName: string
      categoryId: string
      item: FoodItem
    }> = []

    for (const cat of filteredCategories) {
      for (const item of cat.items) {
        flat.push({
          categoryName: cat.name,
          categoryId: cat.id,
          item,
        })
      }
    }

    return flat.sort((a, b) => {
      let comparison = 0
      if (sortField === 'name') {
        comparison = a.item.name.localeCompare(b.item.name)
      } else if (sortField === 'category') {
        comparison = a.categoryName.localeCompare(b.categoryName)
      } else if (sortField === 'status') {
        const statusRank: Record<FoodStatus, number> = {
          allowed: 1,
          testing: 2,
          caution: 3,
          avoid: 4,
        }
        comparison = statusRank[a.item.status] - statusRank[b.item.status]
      }
      return sortOrder === 'asc' ? comparison : -comparison
    })
  }, [filteredCategories, sortField, sortOrder])

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortOrder('asc')
    }
  }

  const renderSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="size-3 text-muted-foreground/60" />
    }
    return sortOrder === 'asc' ? (
      <ArrowUp className="size-3 text-primary" />
    ) : (
      <ArrowDown className="size-3 text-primary" />
    )
  }

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedCategory !== 'all' ||
    selectedStatus !== 'all' ||
    selectedTechnique !== 'all'

  const resetFilters = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedStatus('all')
    setSelectedTechnique('all')
  }

  return (
    <div className="w-full space-y-8">
      {/* Header section with page title & description */}
      <section>
        <h1>{data.title}</h1>
        <p className="text-muted-foreground text-lg font-medium mt-2">
          {data.subtitle}
        </p>
        <div className="space-y-4 mt-6">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* General Preparation Rules Section */}
      {data.generalRules && data.generalRules.length > 0 && (
        <section className="border rounded-xl p-5 md:p-6 bg-muted/20 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ChefHat className="size-5 text-primary" />
              <h2 className="text-xl font-bold tracking-tight border-b-0 pb-0">
                {data.labels.generalRulesTitle}
              </h2>
            </div>
            <button
              onClick={() => setShowGeneralRules(!showGeneralRules)}
              className="text-xs font-semibold text-primary hover:underline flex items-center gap-1"
              aria-label="Toggle general preparation rules"
            >
              {showGeneralRules ? (
                <>
                  <span>{data.collaps}</span>
                  <ChevronUp className="size-3.5" />
                </>
              ) : (
                <>
                  <span>{data.expand}</span>
                  <ChevronDown className="size-3.5" />
                </>
              )}
            </button>
          </div>

          {showGeneralRules && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-2">
              {data.generalRules.map((rule, idx) => (
                <div
                  key={rule.id}
                  className="p-3.5 rounded-lg border bg-card shadow-xs space-y-1.5"
                >
                  <h3 className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                      {idx + 1}
                    </span>
                    {rule.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed pl-7">
                    {rule.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Filter and Search Bar */}
      <section className="bg-muted/40 border rounded-xl p-4 md:p-6 space-y-4">
        {/* Search input and View Mode Switcher */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={data.labels.searchPlaceholder}
              className="w-full pl-9 pr-9 py-2 rounded-lg border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          {/* View Mode Toggle (Cards vs. Table) */}
          <div className="inline-flex self-start sm:self-auto items-center rounded-lg border bg-background p-1 shadow-sm shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
                viewMode === 'cards'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label={data.labels.viewCards}
            >
              <LayoutGrid className="size-3.5" />
              <span>{data.labels.viewCards}</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('table')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition ${
                viewMode === 'table'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              aria-label={data.labels.viewTable}
            >
              <TableIcon className="size-3.5" />
              <span>{data.labels.viewTable}</span>
            </button>
          </div>
        </div>

        {/* Status filters */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1 mr-1">
            <Filter className="size-3" />
            {data.labels.allStatuses}:
          </span>
          <button
            onClick={() => setSelectedStatus('all')}
            className={`px-3 py-1 rounded-full text-xs font-medium border transition ${
              selectedStatus === 'all'
                ? 'bg-foreground text-background border-foreground'
                : 'bg-background hover:bg-muted text-muted-foreground'
            }`}
          >
            {data.labels.allStatuses} ({totalItemsCount})
          </button>
          {(['allowed', 'caution', 'avoid', 'testing'] as FoodStatus[]).map(
            (status) => {
              const { icon: StatusIcon, badgeClass } = statusConfig[status]
              const isSelected = selectedStatus === status
              return (
                <button
                  key={status}
                  onClick={() =>
                    setSelectedStatus(isSelected ? 'all' : status)
                  }
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border transition ${
                    isSelected
                      ? `${badgeClass} ring-2 ring-primary/40 font-semibold shadow-sm`
                      : 'bg-background hover:bg-muted text-muted-foreground'
                  }`}
                >
                  <StatusIcon className="size-3.5" />
                  {data.labels.statusLabels[status]}
                </button>
              )
            }
          )}
        </div>

        {/* Cooking Technique Filter */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/50">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1 mr-1">
            <CookingPot className="size-3" />
            {data.labels.techniquesTitle}:
          </span>
          <button
            onClick={() => setSelectedTechnique('all')}
            className={`px-2.5 py-0.5 rounded-md text-xs font-medium transition ${
              selectedTechnique === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            {data.labels.allTechniques}
          </button>
          {(
            [
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
            ] as CookingTechnique[]
          ).map((tech) => {
            const conf = techniqueConfig[tech]
            const TechIcon = conf.icon
            const isSelected = selectedTechnique === tech

            return (
              <button
                key={tech}
                onClick={() =>
                  setSelectedTechnique(isSelected ? 'all' : tech)
                }
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-medium transition ${
                  isSelected
                    ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <TechIcon className="size-3" />
                {data.labels.techniqueLabels[tech]}
              </button>
            )
          })}
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-border/50">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mr-1">
            {data.labels.allCategories}:
          </span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-2.5 py-0.5 rounded-md text-xs font-medium transition ${
              selectedCategory === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            {data.labels.allCategories}
          </button>
          {data.categories.map((category) => (
            <button
              key={category.id}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.id ? 'all' : category.id
                )
              }
              className={`px-2.5 py-0.5 rounded-md text-xs font-medium transition ${
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {category.name} ({category.items.length})
            </button>
          ))}
        </div>

        {/* Active search / item count stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
          <span>
            {filteredItemsCount} / {totalItemsCount} {data.labels.resultsCount}
          </span>
          {hasActiveFilters && (
            <button
              onClick={resetFilters}
              className="text-primary hover:underline font-medium"
            >
              {data.labels.resetFilters}
            </button>
          )}
        </div>
      </section>

      {/* Main Content Area: Cards View or Table View */}
      {filteredItemsCount === 0 ? (
        <Card className="p-8 text-center bg-muted/20 border-dashed">
          <CardContent className="space-y-3 pt-6">
            <p className="text-muted-foreground">{data.labels.noResults}</p>
            <button
              onClick={resetFilters}
              className="text-sm font-semibold text-primary hover:underline"
            >
              {data.labels.resetFilters}
            </button>
          </CardContent>
        </Card>
      ) : viewMode === 'cards' ? (
        /* Cards View grouped by Category */
        <section className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold tracking-tight">
                  {category.name}
                </h3>
                <span className="text-xs text-muted-foreground font-medium bg-muted px-2 py-0.5 rounded-full">
                  {category.items.length}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.items.map((item) => {
                  const { icon: StatusIcon, badgeClass } =
                    statusConfig[item.status]

                  return (
                    <Card
                      key={item.id}
                      className="transition-all hover:shadow-md border-border/70 flex flex-col justify-between"
                    >
                      <div>
                        <CardHeader className="pb-3 flex flex-row items-start justify-between space-y-0 gap-2">
                          <CardTitle className="text-base font-semibold leading-tight">
                            {item.name}
                          </CardTitle>
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border shrink-0 ${badgeClass}`}
                          >
                            <StatusIcon className="size-3" />
                            {data.labels.statusLabels[item.status]}
                          </span>
                        </CardHeader>
                        <CardContent className="space-y-2.5 text-sm pt-0">
                          {/* Standardized Cooking Technique Badges */}
                          {item.techniques && item.techniques.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 pb-1">
                              {item.techniques.map((tech) => {
                                const conf = techniqueConfig[tech]
                                const TechIcon = conf?.icon || CookingPot
                                return (
                                  <span
                                    key={tech}
                                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium border ${conf.badgeClass}`}
                                  >
                                    <TechIcon className="size-3" />
                                    {data.labels.techniqueLabels[tech] || tech}
                                  </span>
                                )
                              })}
                            </div>
                          )}

                          <div>
                            <span className="font-medium text-foreground/85">
                              {data.labels.preparationLabel}:{' '}
                            </span>
                            <span className="text-muted-foreground">
                              {item.preparation}
                            </span>
                          </div>
                          {/* <div>
                            <span className="font-medium text-foreground/85">
                              {data.labels.reactionLabel}:{' '}
                            </span>
                            <span className="text-muted-foreground">
                              {item.reaction}
                            </span>
                          </div>
                          {item.notes && (
                            <div className="pt-1 border-t border-border/40 text-xs text-muted-foreground italic">
                              <span className="font-medium not-italic text-foreground/70">
                                {data.labels.notesLabel}:{' '}
                              </span>
                              {item.notes}
                            </div>
                          )} */}
                        </CardContent>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </section>
      ) : (
        /* Table View using shadcn Table component */
        <section className="rounded-xl border bg-card shadow-sm overflow-hidden">
          <Table>
            <TableHeader className="bg-muted/40">
              <TableRow>
                <TableHead
                  onClick={() => handleSort('name')}
                  className="cursor-pointer select-none font-semibold text-foreground hover:bg-muted/70 transition w-[180px]"
                >
                  <div className="flex items-center gap-1.5">
                    {data.labels.tableHeaders.name}
                    {renderSortIcon('name')}
                  </div>
                </TableHead>
                <TableHead
                  onClick={() => handleSort('category')}
                  className="cursor-pointer select-none font-semibold text-foreground hover:bg-muted/70 transition w-[150px]"
                >
                  <div className="flex items-center gap-1.5">
                    {data.labels.tableHeaders.category}
                    {renderSortIcon('category')}
                  </div>
                </TableHead>
                <TableHead
                  onClick={() => handleSort('status')}
                  className="cursor-pointer select-none font-semibold text-foreground hover:bg-muted/70 transition w-[130px]"
                >
                  <div className="flex items-center gap-1.5">
                    {data.labels.tableHeaders.status}
                    {renderSortIcon('status')}
                  </div>
                </TableHead>
                <TableHead className="font-semibold text-foreground min-w-[220px]">
                  {data.labels.tableHeaders.preparation}
                </TableHead>
                <TableHead className="font-semibold text-foreground min-w-[200px]">
                  {data.labels.tableHeaders.reaction}
                </TableHead>
                <TableHead className="font-semibold text-foreground min-w-[150px]">
                  {data.labels.tableHeaders.notes}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tableItems.map(({ item, categoryName }) => {
                const { icon: StatusIcon, badgeClass } =
                  statusConfig[item.status]

                return (
                  <TableRow key={item.id} className="hover:bg-muted/30">
                    <TableCell className="font-semibold align-top whitespace-nowrap text-foreground">
                      {item.name}
                    </TableCell>
                    <TableCell className="align-top whitespace-nowrap">
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md font-medium">
                        {categoryName}
                      </span>
                    </TableCell>
                    <TableCell className="align-top whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border shrink-0 ${badgeClass}`}
                      >
                        <StatusIcon className="size-3" />
                        {data.labels.statusLabels[item.status]}
                      </span>
                    </TableCell>
                    <TableCell className="align-top text-xs leading-relaxed space-y-1.5">
                      {item.techniques && item.techniques.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {item.techniques.map((tech) => {
                            const conf = techniqueConfig[tech]
                            const TechIcon = conf?.icon || CookingPot
                            return (
                              <span
                                key={tech}
                                className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-medium border ${conf.badgeClass}`}
                              >
                                <TechIcon className="size-2.5" />
                                {data.labels.techniqueLabels[tech] || tech}
                              </span>
                            )
                          })}
                        </div>
                      )}
                      <div className="text-muted-foreground">
                        {item.preparation}
                      </div>
                    </TableCell>
                    <TableCell className="align-top text-muted-foreground text-xs leading-relaxed">
                      {item.reaction}
                    </TableCell>
                    <TableCell className="align-top text-muted-foreground text-xs italic leading-relaxed">
                      {item.notes || '—'}
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </section>
      )}
    </div>
  )
}
