import axios from "axios";

const apiUrl = import.meta.env.REACT_APP_SERVER_URL

export async function getTitleContents() {
  const response = await axios.get(`${apiUrl}/editor`)
    .then(res => res.data)
  console.log("🚀 ~ file: titleContents.js:6 ~ getTitleContents ~ response", response)
  return response
}

export async function getTitleContentsByTag(tag) {
  const response = await axios.get(`${apiUrl}/editor/tag/${tag}`)
    .then(res => res.data)
  console.log("🚀 ~ file: titleContents.js:13 ~ getTitleContentsByTag ~ response", response)
  return response
}

export async function postLikeWithID(id) {
  const response = await axios.post(`${apiUrl}/editor/like/${id}`, {
    thumbUp: "LIKE+1"
  })
    .then(res => res.data)
  console.log("🚀 ~ file: titleContents.js:22 ~ postLikeWithID ~ response", response)

  return response
}

