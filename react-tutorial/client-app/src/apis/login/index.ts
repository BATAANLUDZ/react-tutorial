import { ApiResult } from '../../types'

async function HandleLoginAsync(
  username: string,
  password: string,
): Promise<ApiResult<string>> {
  const res = await fetch(`https://localhost:44319/api/Auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username, password: password }),
  })

  if (!res.ok) throw new Error(res.statusText)

  const data: unknown = await res.json()

  return data as ApiResult<string>
}

export { HandleLoginAsync }
