import { atomWithStorage } from 'jotai/utils'

// const storage = createJSONStorage<string>(() => sessionStorage)
export const tokenAtom = atomWithStorage<string>('token', '')
