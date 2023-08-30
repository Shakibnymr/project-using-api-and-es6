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
const cardContainer = document.getElementById('card-container');
cardContainer.innerHTML = "";
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
    <button onclick="handleModal('${newsCard._id}')" class="btn btn-primary">Buy Now</button>
  </div>
</div>
`;
cardContainer.appendChild(card);
})

         }

const handleModal = async(newsId) => {
const response = await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`);
const news = await response.json();
console.log(news);
  console.log(newsId)
  const modalContainer = document.getElementById('modal-container')
const div = document.createElement('div');
div.innerHTML =`
<dialog id="my_modal_1" class="modal">
  <form method="dialog" class="modal-box">
    <h3 class="font-bold text-lg">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <!-- if there is a button in form, it will close the modal -->
      <button class="btn">Close</button>
    </div>
  </form>
</dialog>
`
modalContainer.appendChild(div);
const modal = document.getElementById('my_modal_1');
modal.showModal();
}






    handleLoadNews('03');


loadCategory();