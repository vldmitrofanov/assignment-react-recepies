import axios from 'axios'

const sleep = (delay) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay)
  })
}

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

axios.interceptors.response.use(async (response) => {
  const isProd = process.env.REACT_APP_PRODUCTION
  if (!isProd) {
    await sleep(1000)
  }
  return response
})

const responseBody = (response) => response.data

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
}

const TestRecipies = {
  list: (page) => requests.get(`/test_recipe/all?page=${page}`),
  listFeatured: () =>
    requests.get('/test_recipe/featured'),
  details: (id) => requests.get(`/test_recipe/${id}`),
  search: (query) => requests.post('/test_recipe/search', { q: query }),
}

const Comments = {
  postComment: (id, payload) =>
    requests.post(`/test_recipe/comment/${id}`, payload),
}

const agent = {
  TestRecipies,
  Comments,
}

export default agent
