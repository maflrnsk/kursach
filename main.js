document.addEventListener("DOMContentLoaded", function() {
    const showMoreButton = document.querySelector(".showmore");
    if (showMoreButton) {
      let moreImagesVisible = false;
  
      showMoreButton.addEventListener("click", function() {
        const hiddenImages = document.querySelectorAll(".unshown");
        if (hiddenImages) {
          hiddenImages.forEach(function(image) {
            if (!moreImagesVisible) {
                image.style.display = "inline";
            } else {
                image.style.display = "none";
            }
          });
        }
    
        moreImagesVisible = !moreImagesVisible;
    
        if (moreImagesVisible) {
            showMoreButton.textContent = "Скрыть";
        } else {
            showMoreButton.textContent = "Показать больше";
        }
      });
    }
  });
document.addEventListener("DOMContentLoaded", function() {  
    const dropdown = document.querySelector(".dropdown");
    const dropdownContent = document.querySelector(".dropdown-content");
    const dropbtn = document.getElementsByClassName("dropbtn")[0];
    
    if (dropdown && dropdownContent && dropbtn) {
      dropdown.addEventListener("mouseover", function() {
          if (window.innerWidth > 800) {
              dropdownContent.style.display = "block";
          }
      });
      
      dropdown.addEventListener("mouseout", function() {
          if (window.innerWidth > 800) {
              dropdownContent.style.display = "none";
          }
      });
    }
  
    window.addEventListener("resize", function () {
      Resized()
    });
    
    function Resized() {
      if(window.innerWidth < 800) {
          dropbtn.innerText = "";
      }
      else {
          dropbtn.innerText = "Возможности ▾";
      }
    }
    
    Resized();
  });
  
  const MenuContainer = document.getElementsByClassName("menubar")[0];
  const MenuOpener = document.getElementById("menu-opener");
  const MenuLine = document.getElementsByClassName("menu-line");
  let MenuOpened = false;
  
  if (MenuOpener && MenuContainer && MenuLine.length > 2) {
    MenuOpener.addEventListener("click", function () {
      if (!MenuOpened) {
          MenuOpened = true;
          MenuContainer.style.transform = "translate(0, 0)";
          MenuLine[0].style.transform = "rotate(45deg)";
          MenuLine[2].style.transform = "rotate(-45deg)";
          MenuLine[0].style.transform = "translate(0, 24px)";
          MenuLine[1].style.transform = "translate(0, -24px)";
          MenuLine[1].style.opacity = "0";
          MenuLine[1].style.transform = "translate(24px, 0)";
      } else {
          MenuOpened = false;
          MenuContainer.style.transform = "translate(0, -100vh)";
          MenuLine[0].style.transform = "rotate(0deg)";
          MenuLine[2].style.transform = "rotate(0deg)";
          MenuLine[0].style.transform = "translate(0, 0)";
          MenuLine[1].style.transform = "translate(0, 0)";
          MenuLine[1].style.opacity = "1";
          MenuLine[1].style.transform = "translate(0, 0)";
      }
    });
  }