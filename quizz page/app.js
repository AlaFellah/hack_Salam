function selectOption(element) {
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('active');
    });
    element.classList.add('active');
}