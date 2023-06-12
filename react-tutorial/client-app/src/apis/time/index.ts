import { TimePageType } from '../../types'

async function HandleOnLoad(empNo: string): Promise<TimePageType> {
  const res = await fetch(
    `https://localhost:44319/api/Time?employeeNo=${empNo}`,
  )
  console.log(res)
  const data: unknown = await res.json()
  return data as TimePageType
}

export { HandleOnLoad }
