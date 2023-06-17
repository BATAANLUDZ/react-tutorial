import axios from 'axios'
import { TimePageType } from '../../types'

async function HandleOnLoad(empNo: string): Promise<TimePageType> {
  const res = await axios.get(
    `https://localhost:44319/api/Time?employeeNo=${empNo}`,
    {
      maxBodyLength: Infinity,
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbXBOdW0iOiJDVDEyMTMxIiwiRnVsbE5hbWUiOiJMT0NTSU4sIEpPRVZBTk5JIiwiUG9zaXRpb24iOiJTWVNURU0gUFJPR1JBTU1FUiIsIlNoaWZ0IjoiOCBBTS01IFBNIiwiUHJvamVjdElEIjoiNDQiLCJXb3JrTW9kZSI6IldGSCIsIm5iZiI6MTY4Njk4NDI0OSwiZXhwIjoxNjg2OTg0NTQ5LCJpYXQiOjE2ODY5ODQyNDksImlzcyI6IkVQU09OIiwiYXVkIjoiRVBTT04ifQ.-gHKv4VO5q_0rNf5RyguJLBzpK7bJX8sDUHNEqH9T68`,
      },
    },
  )

  return res.data as TimePageType

  //   const res = await fetch(
  //     `https://localhost:44319/api/Time?employeeNo=${empNo}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbXBOdW0iOiJDVDEyMTMxIiwiRnVsbE5hbWUiOiJMT0NTSU4sIEpPRVZBTk5JIiwiUG9zaXRpb24iOiJTWVNURU0gUFJPR1JBTU1FUiIsIlNoaWZ0IjoiOCBBTS01IFBNIiwiUHJvamVjdElEIjoiNDQiLCJXb3JrTW9kZSI6IldGSCIsIm5iZiI6MTY4Njk3MDY1NCwiZXhwIjoxNjg2OTcwOTU0LCJpYXQiOjE2ODY5NzA2NTQsImlzcyI6IkVQU09OIiwiYXVkIjoiRVBTT04ifQ.gfzqpVPuZkLfpXgAq2b2bBn2BE97ztv_XIkxddVA2sU`,
  //       },
  //     },
  //   )

  //   //   if (!res.ok) throw new Error('error from api')

  //   const data: unknown = await res.json()
  //   return data as TimePageType
}

async function GetIP(): Promise<void> {
  const res = await fetch('https://geolocation-db.com/json/')
  const data = await res.json()
  console.log(data)
}

export { HandleOnLoad, GetIP }
