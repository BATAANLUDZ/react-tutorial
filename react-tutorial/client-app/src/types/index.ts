export type MenuType = {
  name: string
  path: string
}

export type DropDownType = {
  text: string
  value: string | number
}

type Project = {
  projectId: number
  projectName: string
}

type Shift = {
  id: number
  shiftName: string
}

export type TimePageType = {
  projects: Project[]
  shifts: Shift[]
  isLoggedIn: boolean
}
