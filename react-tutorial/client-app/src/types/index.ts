export type MenuType = {
  name: string
  path: string
}

export type DropDownType = {
  text: string
  value: string | number
}

export type Project = {
  projectId: number
  projectName: string
}

export type Shift = {
  id: number
  shiftName: string
}

export type TimePageType = {
  projects: Project[]
  shifts: Shift[]
  isLoggedIn: boolean
}

export type ApiResult<T> = {
  isSuccess: boolean
  data: T | null
  message: string
}
