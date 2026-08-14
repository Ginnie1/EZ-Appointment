
document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".option, .choice").forEach(item => {
    item.addEventListener("click", () => {
      const group = item.closest(".choice-group") || item.parentElement;
      if (item.classList.contains("option")) {
        group.querySelectorAll(".option").forEach(x => x.classList.remove("active"));
      } else {
        group.querySelectorAll(".choice").forEach(x => x.classList.remove("active"));
      }
      item.classList.add("active");
    });
  });

  document.querySelectorAll("[data-go]").forEach(button => {
    button.addEventListener("click", () => {
      window.location.href = button.dataset.go;
    });
  });
});

  document.querySelectorAll(".accordion-header").forEach(header => { 
 
    header.addEventListener("click", () => { 
 
      const accordion = header.closest(".accordion"); 
 
      accordion.classList.toggle("open"); 
 
    }); 
 
  }); 
 
 
  document.querySelectorAll(".accordion-option").forEach(option => { 
 
    option.addEventListener("click", () => { 
 
      const accordion = option.closest(".accordion"); 
      const headerText = accordion.querySelector(".accordion-header span"); 
      const options = accordion.querySelectorAll(".accordion-option"); 
 
      options.forEach(item => { 
        item.classList.remove("selected"); 
      }); 
 
      option.classList.add("selected"); 
 
      headerText.textContent = option.textContent.trim(); 
 
      accordion.classList.remove("open"); 
 
    }); 
 
  });