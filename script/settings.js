const settings = document.getElementById("settings");
const settingsModal = document.getElementById("settings-modal");

settings.addEventListener("click", () => {
    settingsModal.classList.add("settings-visible");
});

const settingsClose = document.getElementById("settings-close");

settingsClose.addEventListener("click", () => {
    settingsModal.classList.remove("settings-visible");
});