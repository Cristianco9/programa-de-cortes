function redirect(container) {
    const path = container.getAttribute('data-path');
    window.location.href = path;
}