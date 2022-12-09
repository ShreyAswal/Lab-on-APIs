// Progression 1: create a function and fetch the api using axios

const articleGrid = document.getElementById("articleGrid");

function populateData(){
  axios
  .get('https://gnews.io/api/v4/top-headlines?token=09bdd83ee84487ada3d4d7e8d3f2f00f&lang=en')
  .then((res)=>{
    const articles = res.data.articles;
    console.log(res.data)
    //creating the elements

    articles.forEach((article)=>{
    
      const articleElement=document.createElement('div');
      const titleElement = document.createElement('h3');
      const imageElement = document.createElement('img');
      const paraElement = document.createElement('p');
      
      articleElement.classList.add('article')

      titleElement.innerText = article.title;
      imageElement.setAttribute('src',article.image)
      paraElement.innerText = article.content

      articleElement.append(titleElement)
      articleElement.append(imageElement)
      articleElement.append(paraElement)

      articleGrid.append(articleElement)

    })
  })
}
populateData()