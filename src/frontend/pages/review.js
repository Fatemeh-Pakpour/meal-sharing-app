function reviewRouter(req, router) {
  console.log("hello");
  document.body.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
      <div class ="container">
          <a class="navbar-brand order-1 mr-0">Meal Sharing</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ml-4">
                  <a class="nav-item nav-link" href="/">HOME <span class="sr-only">(current)</span></a>
                  <a class="nav-item nav-link" href="/meals">MEALS</a>
                  <a class="nav-item nav-link" href="/reviews">REVIEWS</a>
              </div>
          </div>
      </div>
  </nav>

  <div class ="container">
  <h1 class="display-4 text-center my-4 text-muted">Reviews</h1>
  <hr>
    <div id="reviews-container"></div>
    <div class ="1">
  </div> 
</div>
`
}

function fetchAllReviews() {
  const url = `/api/reviews`;
  fetch(url)
    .then(response => response.json())
    .then(review => renderAllReviews(review));
}
function renderAllReviews(allReviews) {
  allReviews.forEach(review => {
    
    const reviewElement = document.createElement("div");
    reviewElement.setAttribute("class", "featured-meal medium-size large-size");
    const reviewsContainer = document.querySelector("#reviews-container");
    
    reviewElement.innerHTML = `
            <div class ="featured-meal-sub-container">
                <div class ="featured-meal-content">
                    <h4>${review.title}</h4>
                    <li>Description : ${review.description}</li>
                    <li>Meal's id : ${review.meal_id}</li>
                    <li>Created date : ${review.created_date}</li> 
                    <div class ="stars-outer">
                      <li class ="stars-inner meal-${review.id}"></li>
                    </div>  
                </div>    
            </div>   
        `;
  reviewsContainer.appendChild(reviewElement);
  getRatings(review.stars , `meal-${review.id}`);
  });
}

fetchAllReviews();

// star rating

// total star
const TOTAL_STAR = 5;

function getRatings(starRating , ratingClass) {
    const starPercentage = (starRating / TOTAL_STAR) * 100;

    // Round to the nearest 10
    const starPercentageRounded = `${(starPercentage)}%`;

    // Set width of stars-inners to percentage
    let stars = document.querySelector(`.${ratingClass}`);
    stars.style.width = starPercentageRounded;
  }


export default reviewRouter;