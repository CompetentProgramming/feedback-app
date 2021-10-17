export enum CategoryEnum {
  ALL = 'all',
  UI = 'ui',
  UX = 'ux',
  ENHANCEMENT = 'enhancement',
  BUG = 'bug',
  FEATURE = 'feature'
}

export const categoryList = [
  {value: 'all', label: 'All'},
  {value: 'ui', label: 'UI'},
  {value: 'ux', label: 'UX'},
  {value: 'enhancement', label: 'Enhancement'},
  {value: 'bug', label: 'Bug'},
  {value: 'feature', label: 'Feature'}
]

export enum StatusEnum {
  SUGGESTION = 'suggestion',
  PLANNED = 'planned',
  INPROGRESS = 'in-progress',
  LIVE = 'live'
}
