export default new class Http {
    request(url, method, data, options) {
        return new Promise((resolve, reject) => {
            const { public: { apiBase } } = useRuntimeConfig()
            const newOptions = {
                baseURL: apiBase,
                method: method,
                ...options,
            };

            if (method === "GET" || method === "DELETE") {
                newOptions.params = data;
            }
            if (method === "POST" || method === "PUT") {
                newOptions.body = data;
            }
            useFetch(url, newOptions)
                .then((res) => {
                    //如果接口相应头不是json，需要手动转一下
                    // let res2 = JSON.parse(res.data.value)
                    let result = res.data.value
                    // console.log('type:', typeof result.data.list[0].title)
                    // if (result.err > 0) {
                    //     alert(result.msg)
                    // }
                    resolve(result.data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    }
    get(url, params) {
        return this.request(url, 'GET', params)
    }

    post(url, params) {
        return this.request(url, 'POST', params)
    }

    put(url, body) {
        return this.request(url, 'PUT', body)
    }

    delete(url, body) {
        return this.request(url, 'DELETE', body)
    }
}