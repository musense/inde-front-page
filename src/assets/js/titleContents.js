import { instance } from "./AxiosInstance";

export async function getTitleContentsByID(payload) {
  const { _id } = payload
  const response = await instance.get(`/editor/${_id}`)
    .then(res => res.data)
  // const { data, currentPage, limit, totalCount, totalPages } = response
  console.log("🚀 ~ file titleContents.js:6 ~ getTitleContents ~ response", response)
  return response
}

export async function getTitleContents() {
  const response = await instance.get(`/editor?limit=9999&pageNumber=1`)
    .then(res => res.data)
  // const { data, currentPage, limit, totalCount, totalPages } = response
  console.log("🚀 ~ file titleContents.js:6 ~ getTitleContents ~ response", response)
  return response
}

export async function getTitleContentsByCategory(payload) {
  const { categoryName, page } = payload
  // const response = await instance.get(`/editor?limit=9999&categoryName=${category}&pageNumber=${page}`)
  const response = await instance.get(`/categories/${categoryName}?limit=9999&pageNumber=${page}`)
    .then(res => res.data)
  // const { data, currentPage, limit, totalCount, totalPages } = response
  console.log("🚀 ~ file titleContents.js:6 ~ getTitleContentsByCategory ~ response", response)
  return response
}

export async function getRelatedArticles(payload) {
  const { _id } = payload
  // const response = await instance.get(`/editor?limit=9999&categoryName=${category}&pageNumber=${page}`)
  const response = await instance.get(`/editor/relatedArticles/${_id}`)
    .then(res => res.data)
  const { data } = response
  console.log("🚀 ~ file titleContents.js:27 ~ geRelatedArticles ~ data:", data)
  // return
  return data 
}

export async function getTitleContentsByTag(tag) {
  const response = await instance.get(`/editor/tag/${tag}`)
    .then(res => res.data)
  // const { data, currentPage, limit, totalCount, totalPages } = response
  console.log("🚀 ~ file titleContents.js:13 ~ getTitleContentsByTag ~ response", response)
  return response
}

export async function postLikeWithID(id) {
  const response = await instance.post(`/editor/like/${id}`, {
    thumbUp: "LIKE+1"
  })
    .then(res => res.data)
  // const { data, currentPage, limit, totalCount, totalPages } = response
  console.log("🚀 ~ file titleContents.js:22 ~ postLikeWithID ~ response", response)

  return response
}

