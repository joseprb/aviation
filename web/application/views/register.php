<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<!-- <meta http-equiv="X-UA-Compatible" content="IE=edge"> -->
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0"> -->
	<title>Home - AVIATION</title>
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
</head>
<body>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container"> <a class="navbar-brand" href="#">AVIATION</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span> </button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item"> <a class="nav-link active" aria-current="page" href="#">Home</a> </li>
					<li class="nav-item"> <a class="nav-link" href="#">About Us</a> </li>
				</ul>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>

<div class="container" style="padding:50px 0">
    <div class="row justify-content-md-center">
        <div class="col-6">
            <div class="alert alert-danger alert-dismissible fade show" role="alert" style="display:none">
                
            </div>

            <h3>Registrasi Visitor</h3>
            <form id="formRegis">
                <div class="mb-3">
                    <label for="nama" class="form-label">Nama</label>
                    <input type="text" class="form-control" name="nama" id="nama" required/>
                </div>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" name="username" id="username" required/>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" name="password" id="password" required/>
                </div>
                <div class="mb-3">
                    <label for="password2" class="form-label">Konfirmasi Password</label>
                    <input type="password" class="form-control" name="password2" id="password2" required/>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    </div>
</div>

<footer class="container-fluid">
    <div class="row">
        <div class="col-12 text-center" style="padding:17px 0">
            Copyright AVIATION 2021
        </div>
    </div>
</footer>
	
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="assets/js/bootstrap.min.js"></script>
    <script type="text/javascript">

        var uri = '<?php echo base_url(); ?>';

        $('#formRegis').submit(function(e) {
            e.preventDefault()
            let error_data = '';
            let nama = $('input[name=nama]').val();
            let username = $('input[name=username]').val();
            let password = $('input[name=password]').val();
            let password2 = $('input[name=password2]').val();
            if (nama.length > 40) {
                error_data += 'Nama tidak boleh lebih dari 40 karakter<br/>';
            }
            if (username.length > 12) {
                error_data += 'Username tidak boleh lebih dari 12 karakter<br/>';
            }
            $.ajax({
                method: 'POST',
                url: uri + 'RegisterController/usernamecheck',
                data: {username: username},
                async: false
            }).done(function(response) {
                // console.log(response);
                if (parseInt(response) > 0) {
                    error_data += 'Username sudah digunakan<br/>';
                }
            });
            if (password.length < 8) {
                error_data += 'Password tidak boleh kurang dari 8 karakter<br/>';
            }
            if (password != password2) {
                error_data += 'Password konfirmasi salah<br/>'
            }
            if (error_data != '') {
                console.log(error_data)
                $('.alert-danger').html(error_data + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');
                $('.alert-danger').show();
            }
        })
    </script>

</body>
</html>