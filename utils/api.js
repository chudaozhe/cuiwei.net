import Http from '~/utils/request'

export const getArticleList = (params) => {
    return Http.get('/user/articles', params)
}
export const getArticleDetail = (code, params) => {
    return Http.get('/user/articles/' + code, params)
}
export const getTagList = (params) => {
    return Http.get('/user/tags', params)
}
export const getTagArticleList = (tag_name, params) => {
    return Http.get('/user/tags/' + tag_name + '/articles', params)
}
export const getTagDetail = (tag_name) => {
    return Http.get('/user/tags/' + tag_name, {})
}
export const getCategoryDetail = (category_id) => {
    return Http.get('/user/categories/' + category_id, {})
}