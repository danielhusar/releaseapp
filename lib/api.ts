type Body = Record<string, string | number | boolean | null>

interface PostOptions {
  body?: Body
  formData?: Record<string, string | Blob>
}

function fetchFactory(url: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: string | FormData) {
  return fetch(url, {
    method,
    body,
    credentials: 'same-origin',
  }).then(async (res) => {
    if (!res.ok) {
      let error
      try {
        error = await res.json()
      } catch (e) {
        error = Error('Something went wrong.')
      }
      throw error
    }
    return res.json()
  })
}

function post(url: string, { body, formData }: PostOptions) {
  if (formData) {
    const bodyPayload = new FormData()
    for (const key in formData) {
      bodyPayload.append(key, formData[key])
    }
    return fetchFactory(url, 'POST', bodyPayload)
  } else {
    return fetchFactory(url, 'POST', JSON.stringify(body))
  }
}

function get(url: string) {
  return fetchFactory(url, 'GET')
}

function del(url: string) {
  return fetchFactory(url, 'DELETE')
}

export default {
  get,
  post,
  delete: del,
}

export const API_ENDPOINT = 'https://api.releaseapp.io/accounts/Acme/api-external/live'
