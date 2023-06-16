async function HandleLoginAsync(username: string, password: string) {
  const res = await fetch(`https://localhost:44319/api/Auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: username, password: password }),
  })

  console.log(res)
  const data: unknown = await res.json()
}

export { HandleLoginAsync }
