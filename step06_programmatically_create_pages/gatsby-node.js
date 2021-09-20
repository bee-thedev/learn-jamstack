exports.createPages = async function ({ actions}) {

    // hardcoded now contentful later >> making of pages as of 2oth september
    const blogs =[
        {name: "Beenysh", site: "stumble upon words", createdby: "Bee-thedev", slug: "stumbleuponwords"},
        {name: "Mehwish", site: "The Book Cafe", createdby: "mehvi", slug: "bookcafe"},
        {name: "Omar", site: "technocity", createdby: "omsara", slug: "technocity"},
         {name: "Azlaan", site: "Monster Truck inc", createdby: "Azlaan-thelion", slug: "monstertruckinc"
        },
        // 'apple',
        // 'orange',
        // 'banana'
    ];

    blogs.map((blog,ind)=>{
    actions.createPage({
        path: `blog/${blog.slug}`,
        component: require.resolve(`./src/templates/dynamic-page.tsx`),
        context: { 
            ...blog,
            // next: blogs[ind+1].slug,
            // back: blogs[ind-1].slug
         },
    });
    console.log("End of Gatsby Node File");
});

    actions.createPage({
        path: "my-dynamic-page",
        component: require.resolve(`./src/templates/dynamic-page.tsx`),
        context: { 
            // Data passed to context is available
            // in pageContext props of the template component
            name: "Beenysh",
            address: "Karachi City"
         },
    });
    console.log("End of Gatsby Node File");
}


