document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn')
    const closeModal = document.getElementById('closeModal')
    const modal = document.getElementById('myModal')
    const signupForm = document.getElementById('signupForm')
    const googleLogin = document.getElementById('googleLogin')
    const facebookLogin = document.getElementById('facebookLogin')
    const githubLogin = document.getElementById('githubLogin')
    
    modal.style.display = "block"

    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
            if (e.target == modal) {
                modal.style.display = 'none';
            }
     });



    // openModalBtn.addEventListener('click', function () {
    //     modal.style.display = 'block';
    // });
    

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;

        // Perform your signup logic here

        // Close the modal after signup
        modal.style.display = 'none';
    });

    // Implement social login handlers (e.g., using Firebase Authentication)

    googleLogin.addEventListener('click', function () {
        // Implement Google login logic here
    });

    facebookLogin.addEventListener('click', function () {
        // Implement Facebook login logic here
    });

    githubLogin.addEventListener('click', function () {
        // Implement GitHub login logic here
    });
});