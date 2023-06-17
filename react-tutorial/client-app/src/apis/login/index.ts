async function HandleLoginAsync(
  username: string,
  password: string,
): Promise<string> {
  const res = await fetch(`https://localhost:44319/api/Auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username, password: password }),
  })

  const data: { token: string } = await res.json()

  return data.token
}

export { HandleLoginAsync }
