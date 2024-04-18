import RSS from 'rss';

export default defineEventHandler(async (event) => {
    // wrap everything in a try catch block
    try {
        const { public: { apiBase } } = useRuntimeConfig()
        const response = await fetch(
            apiBase + '/api/rss'
        );
        const {data} = await response.json();
        // create new rss feed this will be our channel tag with website title and url
        const feed = new RSS({
            title: data.title,
            link: data.link, // link to your website/blog
            description: data.description, // path to your rss feed
            language: data.language,
            pubDate: data.pubDate,
            lastBuildDate: data.lastBuildDate,
            docs: data.docs,
            generator: data.generator,
            managingEditor: data.managingEditor,
            webMaster: data.webMaster,
        });
        // loop over each posts
        for (const post of data.item) {
            // add item tag to our rss feed with correct data
            feed.item({
                title: post.title,
                link: post.link,
                description: post.description,
                pubDate: post.pubDate,
                guid: post.id,
            });
        }
        const feedString = feed.xml({ indent: true }); //This returns the XML as a string.

        event.node.res.setHeader('content-type', 'text/xml'); // we need to tell nitro to return this as a xml file
        event.node.res.end(feedString); // send the HTTP response
    } catch (e) {
        // return an error
        return e;
    }
});