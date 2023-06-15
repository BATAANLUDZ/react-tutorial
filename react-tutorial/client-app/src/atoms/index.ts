import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const storage = createJSONStorage(() => sessionStorage)
export const tokenAtom = atomWithStorage('token', null, storage)
