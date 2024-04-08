function initializeSearchForm(cb) {
  const searchForm = document.querySelector("form");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const searchField = form.querySelector('[type="search"]');

    if (!searchField.value) {
      const errorDiv = document.querySelector(".error");
      errorDiv.textContent = "This field is required!";
      setTimeout(() => {
        errorDiv.textContent = "";
      }, 3000);
    } else {
      cb(searchField.value);
    }
  });
}

export { initializeSearchForm };
