const loadCategory = async() => {
    
    const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json();
     const mainData = data.data.news_category;
    //  console.log(mainData);
             

     const tabContainer = document.getElementById('tab-container');
     mainData.slice(0,3).forEach(category => {
        const div = document.createElement('div');
        div.innerHTML = `
        <a onclick="handleLoadNews('${category.category_id}')" class="tab">${category.category_name}</a>
        `;
        tabContainer.appendChild(div);
     });






}

const handleLoadNews = async(categoryId) => {
    const response=await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`);
    const data = await response.json();
    const mainNews = data.data;
    console.log(mainNews);
const cardContainer = document.getElementById('card-container')
mainNews.forEach(newsCard => {
    console.log(newsCard);
const card = document.createElement('div');
card.classList = `card w-96 bg-base-100 shadow-xl`;
card.innerHTML = `
<figure><img src="${newsCard.image_url}" alt="Shoes" /></figure>
<div class="card-body">
  <h2 class="card-title">Shoes!</h2>
  <p>If a dog chews shoes whose shoes does he choose?</p>
  <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
  </div>
</div>
`;
cardContainer.appendChild(card);
})

         }
    


loadCategory();