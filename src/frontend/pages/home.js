function homeRouter(req, router) {
  document.body.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary fixed-top">
    <div class ="container">
        <a class="navbar-brand order-1 mr-0">MEAL SHARING </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-4">
                <a class="nav-item nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="#">MEALS</a>
                <a class="nav-item nav-link" href="#">REVIEWS</a>
            </div>
        </div>
    </div>
  </nav>
  
  <div class="col-lg order-lg-2 text-center">
    <h3 class = "my-4">Let's Eat</h3>
    <img  class = "mb-4 img-fluid rounded center-block" src="../assets/mealsharing.jpg" alt="meal sharing">
    <h4>Discover Home Cooking in 150+ Counties!</h4>
  </div>
  <div class ="container">
  <h1 class="display-4 text-center my-5 text-muted">Featured Meals</h1>
    <div id="featured-meal-container"></div>
  </div>
  `;
}

export default homeRouter;
