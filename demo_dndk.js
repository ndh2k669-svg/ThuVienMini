const loginPanel = document.getElementById('loginPanel');
        const registerPanel = document.getElementById('registerPanel');
        const message = document.getElementById('message');

        function showMessage(text, type = 'info') {
            message.textContent = text;
            message.className = 'message show ' + type;
        }
        // hàm ẩn hiện đăng nhập, đăng ký
        function switchPanel(panel) {
            const isLogin = panel === 'login';
            loginPanel.classList.toggle('hidden', !isLogin);
            registerPanel.classList.toggle('hidden', isLogin);
            message.className = 'message';
            if (isLogin) document.getElementById('username').focus();
            else document.getElementById('fullName').focus();
        }
        // mở đăng ký
        document.getElementById('showRegister').addEventListener('click', () => switchPanel('register'));

        // mở đăng nhập
        document.getElementById('showLogin').addEventListener('click', () => switchPanel('login'));

        // ẩn hiện mật khẩu
        document.querySelectorAll('.toggle-password').forEach(button => {
            button.addEventListener('click', () => {
                const input = document.getElementById(button.dataset.target);
                const show = input.type === 'password';
                input.type = show ? 'text' : 'password';
                button.innerHTML = show ? '<i class="fa-regular fa-eye-slash"></i>' : '<i class="fa-regular fa-eye"></i>';
            });
        });

        // chức năng đăng nhập
        document.getElementById('loginForm').addEventListener('submit', event => {
            event.preventDefault();
            alert("Đăng nhập thành công")
        });

        // chức năng đăng ký
        document.getElementById('registerForm').addEventListener('submit', event => {
            event.preventDefault();
            const password = document.getElementById('regPassword').value;
            const confirm = document.getElementById('confirmPassword').value;
            if (password !== confirm) {
                showMessage('Mật khẩu xác nhận không khớp. Vui lòng nhập lại.', 'error');
                document.getElementById('confirmPassword').focus();
                return;
            }
            alert("Đăng ký tài khoản thành công")
        });

        // chức năng quên mật khẩu
        document.getElementById('forgotPassword').addEventListener('click', event => {
            event.preventDefault();
            alert("Quên mật khẩu")
        });
