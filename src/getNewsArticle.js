

async function getNewsArticle(page, search) {
    let compiled = Array.from(
    { length: 100 },
    (_, offset) => {
    const article = {
    id: offset,
    thumbnail: `https://picsum.photos/id/${offset}/1000/800`,
    title: `Title ${offset + 1}`,
    description: 'This is a demo News Article.'
    };
    return article;
    },
    );
    if (search) {
    compiled = compiled.filter(
    each => each.title.includes(search),
    );
    }
    compiled = compiled.slice(page * 10, (page * 10) + 10);
    return compiled;
}

export default getNewsArticle
