document.addEventListener("keydown", function (event) {
    const target = event.target;
    const tag = target.tagName;
    const isEditable =
        tag === "INPUT" ||
        tag === "TEXTAREA" ||
        target.isContentEditable;

    if (event.key === "Backspace" && !isEditable) {
        event.preventDefault();
    }

    if (event.key === "Enter" && !isEditable) {
        if (!(tag === "BUTTON" || tag === "A" || tag === "INPUT")) {
            event.preventDefault();
        }
    }
});
