export default defineSitemapEventHandler(async () => {
    // fetch data directly in the correct type
    const { public: { apiBase } } = useRuntimeConfig()
    const response = await fetch(
        apiBase + '/api/sitemap'
    );
    const {data} = await response.json();
    return [
        ...data.map(item => asSitemapUrl({
            loc: item.loc,
            lastmod: item.lastmod
        }))
    ]
})