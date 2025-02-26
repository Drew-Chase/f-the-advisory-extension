(() =>
{
    // Exit if the current hostname is not "music.youtube.com"
    if (window.location.hostname !== "music.youtube.com") return;

    // Set an interval to repeatedly check for the presence of the warning dialog
    setInterval(() =>
    {
        // Select the error wrapper element
        const errorWrapper = document.getElementById("error-wrapper");
        // Exit if the error wrapper is hidden
        if (errorWrapper?.style?.display === "none") return;

        // Select all elements with the ID "reason"
        const reasonElements = document.querySelectorAll("#reason");
        // Exit if no reason elements are found
        if (!reasonElements) return;

        // Iterate through each reason element
        reasonElements.forEach((reasonElement) =>
        {
            // Check if the reason text contains the specific advisory message
            if (reasonElement.textContent !== "The following content may contain suicide or self-harm topics.") return;

            // Get the parent element of the reason element
            const parentElement = reasonElement.parentElement;
            // Exit if the parent element is null
            if (parentElement === null) return;

            // Find the button element within the parent container
            const buttonElement = parentElement.querySelector("#buttons #button yt-button-renderer button") as HTMLButtonElement | null;
            // Exit if the button element is not found
            if (!buttonElement) return;

            // Check if the button has the correct aria-label attribute
            if (buttonElement.getAttribute("aria-label") !== "I understand and wish to proceed") return;

            // Log the action and programmatically click the button
            console.log("F-ing the advisory");
            buttonElement.click();
        });
    }, 500); // Repeat every 500 milliseconds
})();