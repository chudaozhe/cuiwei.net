import Http from '~/utils/request'

export const getArticleList = (params) => {
    return Http.get('/api/articles', params)
}
export const getArticleDetail = (code, params) => {
    return Http.get('/api/article/' + code, params)
}
export const getTagList = (params) => {
    return Http.get('/api/tags', params)
}
export const getTagArticleList = (tag_name, params) => {
    return Http.get('/api/tag/' + tag_name + '/articles', params)
}
export const getTagDetail = (tag_name) => {
    return Http.get('/api/tag/' + tag_name, {})
}
export const getCategoryDetail = (category_id) => {
    return Http.get('/api/category/' + category_id, {})
}