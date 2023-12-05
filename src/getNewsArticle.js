

async function getNewsArticles(page, search) {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3ddf4ead97dd4475bbf13c99a45dbd72'
      )
  
      // Map the response data to match your existing article structure
      const articles = response.data.articles.map((article, index) => ({
        id: index + 1,
        thumbnail: article.urlToImage,
        title: article.title,
        description: article.description,
      }));
  
      return articles;
    } catch (error) {
      console.error('Error fetching news articles:', error);
      return [];
    }
  }
  
// async function getNewsArticle(page, search) {
//     let compiled = Array.from(
//     { length: 100 },
//     (_, offset) => {
//     const article = {
//     id: offset,
//     thumbnail: `https://picsum.photos/id/${offset}/1000/800`,
//     title: `Title ${offset + 1}`,
//     description: 'This is a demo News Article.'
//     };
//     return article;
//     },
//     );
//     if (search) {
//     compiled = compiled.filter(
//     each => each.title.includes(search),
//     );
//     }
//     compiled = compiled.slice(page * 10, (page * 10) + 10);
//     return compiled;
// }

export default getNewsArticles
