(() =>
{
    if (window.location.hostname !== "music.youtube.com") return;

    setInterval(() =>
    {
        const errorWrapper = document.getElementById("error-wrapper");
        if (errorWrapper?.style?.display === "none") return;
        const reasonElements = document.querySelectorAll("#reason");
        if (!reasonElements) return;
        reasonElements.forEach((reasonElement) =>
        {
            if (reasonElement.textContent !== "The following content may contain suicide or self-harm topics.") return;
            const parentElement = reasonElement.parentElement;
            if (parentElement === null) return;
            const buttonElement = parentElement.querySelector("#buttons #button yt-button-renderer button") as HTMLButtonElement | null;
            if (!buttonElement) return;
            if (buttonElement.getAttribute("aria-label") !== "I understand and wish to proceed") return;
            console.log("F-ing the advisory");
            buttonElement.click();
        });
    }, 500);
})();