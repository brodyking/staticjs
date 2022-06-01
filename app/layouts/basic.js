layoutSet(`
  
<nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">StaticJS Bootstrap Example</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#index" target="_blank">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#quickstart" target="_blank">Quick Start Guide</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<main class="container">
  <div class="bg-light p-5 rounded">
	<div id='content'></div>
  </div>
</main>
`)
