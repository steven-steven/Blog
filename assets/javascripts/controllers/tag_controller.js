import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["tag", "year"];

  connect() {
    this.selectedTags = new Set();
    this.filterPosts();
  }

  toggleTag(event) {
    const tag = event.currentTarget.dataset.tag;
    event.currentTarget.classList.toggle('active');

    if (this.selectedTags.has(tag)) {
      this.selectedTags.delete(tag);
    } else {
      this.selectedTags.add(tag);
    }
    this.filterPosts();
  }

  filterPosts() {
    const selected = [...this.selectedTags];
    this.yearTargets.forEach(yearGroup => {
      const posts = yearGroup.querySelectorAll(".post");
      let hasVisiblePosts = false;

      posts.forEach((post) => {
        const postTags = post.dataset.tags.split(",");
        const isVisible = selected.length === 0 || selected.some(tag => postTags.includes(tag));
        post.style.display = isVisible ? "block" : "none";
        if (isVisible) hasVisiblePosts = true;
      });

      const yearHeading = yearGroup.querySelector(".year-heading");
      yearHeading.style.display = hasVisiblePosts ? "block" : "none";
    });
  }
}
