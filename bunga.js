<script>
  document.addEventListener("DOMContentLoaded", function () {
    const totalBunga = 30;
    document.querySelectorAll("section")

    if (home) {
      for (let i = 0; i < totalBunga; i++) {
        const bunga = document.createElement("div");
        bunga.classList.add("bunga", "bunga-1");

        // Posisi horizontal acak relatif ke .home
        bunga.style.left = Math.random() * home.offsetWidth + "px";

        // Delay animasi acak
        bunga.style.animationDelay = Math.random() * 5 + "s";

        // Ukuran acak
        const size = Math.random() * 15 + 10;
        bunga.style.width = size + "px";
        bunga.style.height = size + "px";

        // Posisi absolut relatif ke .home
        bunga.style.position = "absolute";
        bunga.style.top = "0";

        home.appendChild(bunga);
      }

      // Pastikan .home punya position: relative supaya bunga bisa posisi absolut di dalamnya
      home.style.position = "relative";
      home.style.overflow = "hidden";
    }
  });
</script>
