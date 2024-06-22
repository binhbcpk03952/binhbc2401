
    let users = JSON.parse(localStorage.getItem('users'));
    let isId = JSON.parse(localStorage.getItem('currentUserId'));
    let fullName = document.querySelector('#full-name');
    let yourEmail = document.querySelector('#your-email');
    let yourPassword = document.querySelector('#your-password');

    if (isId) {
        let showUser = users.find(user => user.id == isId);
        if (showUser) {
            console.log(showUser.fullName);
            fullName.value = showUser.fullName;
            yourEmail.value = showUser.email;
            yourPassword.value = showUser.password;
        }
    }

    function updateAccount(event) {
        event.preventDefault(); 
        
        let newFullName = fullName.value
        let newEmail = yourEmail.value
        let newPassword = yourPassword.value
        let regexPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let bool = true;

        if (newFullName.trim() === "") {
            document.querySelector('.error1').textContent = "Name is requied.";
            bool = false;
        }
        if (newEmail.trim() === "") {
            document.querySelector('.error2').textContent = "Email is requied.";
            bool = false;
        }
        else if (!regex.test(newEmail)) {
            document.querySelector('.error2').innerHTML = "Invalid email."
            bool = false
        }
    
        if (newPassword.trim() === "") {
            document.querySelector('.error3').textContent = "Password is requied.";
            bool = false;
        }
        else if (!regexPassword.test(newPassword)) {
            document.querySelector('.error3').innerHTML = "Password is not valid."
            bool = false
        }

        // kiem tra email da ton tai hay chua
        let emailInUse = users.some(user => user.email === newEmail && user.id !== isId);

        if (emailInUse) {
            alert("Email da ton tai");
            return;
        }

        // cap nhat dua vao id
        if (bool)  {
            users = users.map(user => {
                if (user.id === isId) {
                    return {
                        ...user,
                        fullName: newFullName,
                        email: newEmail,
                        password: newPassword
                    };
                }
                return user;
            });
    
            // luu vao local
            localStorage.setItem('users', JSON.stringify(users));
    
            alert("Account updated successfully.");
            location.href = "account.html";
        } 
    }
