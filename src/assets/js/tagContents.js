import { instance } from "./AxiosInstance";

export async function getTagsContents() {
    const response = await instance.get(`tags`)
        .then(res => res.data)
    // const { data, currentPage, limit, totalCount, totalPages } = response
    // console.group('getTagsContents')
    // console.log(response)
    // console.groupEnd('getTagsContents')

    return response
}