
  
    document.addEventListener("click", function () {
      const audio = document.getElementById("musik");
      audio.play().catch(function (e) {
        console.log("Gagal autoplay:", e);
      });
    }, { once: true });

    
     
     
  