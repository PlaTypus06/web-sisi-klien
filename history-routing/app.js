const pages = {
  "/": "<h2>Home Page</h2> <p>Welcome to the home page!</p>",
  "/about": "<h2>About Page</h2> <p>We Are blablabla blebleble blublublu</p>",
  "/contact": "<h2>Contact Page</h2> <p>Contact us at blablabla@gmail.com</p>",
};

function navigateTo(url) {
  history.pushState(null, null, url);
  router();
}

function router() {
  const path = window.location.pathname;
  const content =
    pages[path] ||
    "<h2>404 Not Found</h2> <p>The page you are looking for does not exist.</p>";
  document.getElementById("app").innerHTML = content;
}

//intercept link clicks
document.addEventListener("click", (e) => {
  if (e.target.matches("a[data-link]")) {
    e.preventDefault();
    navigateTo(e.target.href);
  }
});

window.addEventListener("popstate", router);
