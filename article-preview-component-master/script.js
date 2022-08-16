document.getElementById("share-btn").addEventListener("click", shareFunction);

    function shareFunction() {

      let activeState = document.getElementById("active-state");

      if (activeState.style.display === "none") {

      activeState.style.display = "flex";


      } else {

        activeState.style.display = "none";
      }
    }
