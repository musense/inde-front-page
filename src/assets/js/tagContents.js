import axios from "axios";

const apiUrl = import.meta.env.REACT_APP_SERVER_URL

export async function getTagsContents() {
    const response = await axios.get(`${apiUrl}/tags`)
        .then(res => res.data)

    // console.group('getTagsContents')
    // console.log(response)
    // console.groupEnd('getTagsContents')

    return response
}