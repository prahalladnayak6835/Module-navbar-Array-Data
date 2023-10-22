document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.querySelector(".container popup-container popup");
    const openModalBtn = document.getElementById('openModalBtn')
    const closeModal = document.getElementById('closeModal')
    const modal = document.getElementById('popup-container')
    modal.style.display = "block"

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
     });
    // You can add additional logic to close the popup, e.g., when the user submits the form.
    // Example: 
    popupContainer.style.display = "none";
});
