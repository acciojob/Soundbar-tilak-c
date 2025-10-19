    const buttons = document.querySelectorAll(".btn");
    const stopButton = document.querySelector(".stop");
    const audios = {};

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const sound = button.textContent.trim().toLowerCase(); // match filename

        if (!audios[sound]) {
          const audio = document.createElement("audio");
          audio.src = `./sounds/${sound}.mp3`;
          audio.id = sound;
          audio.preload = "auto";
          document.body.appendChild(audio);
          audios[sound] = audio;
        }

        audios[sound].currentTime = 0;
        audios[sound].play().catch(err => console.error("Audio playback failed:", err));
      });
    });

    stopButton.addEventListener("click", () => {
      Object.values(audios).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
      });
    });