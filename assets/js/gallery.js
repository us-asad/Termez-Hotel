const handleLoadMore = () => {
  const moreItems = $("#more")
  const loadMore = $("#load-more");

  loadMore.addEventListener("click", () => {
    if (moreItems.classList.contains("more")) {
      moreItems.classList.remove("more");
      loadMore.innerHTML = "Show More";
    } else {
      moreItems.classList.add("more");
      loadMore.innerHTML = "Show Less";
    }
  })
}

window.addEventListener("DOMContentLoaded", () => {
  handleLoadMore();
});