<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AdminLTE 3 | Log in</title>

        <!-- Google Font: Source Sans Pro -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
        <!-- Font Awesome -->
        <link rel="stylesheet" href="<?php echo base_url('assets/adminlte/'); ?>plugins/fontawesome-free/css/all.min.css" />
        <!-- icheck bootstrap -->
        <link rel="stylesheet" href="<?php echo base_url('assets/adminlte/'); ?>plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
        <!-- Theme style -->
        <link rel="stylesheet" href="<?php echo base_url('assets/adminlte/'); ?>dist/css/adminlte.min.css" />
    </head>
    <body class="hold-transition login-page">
        <div class="login-box">
            <div class="login-logo">
                <a href="<?php echo base_url('assets/adminlte/'); ?>index2.html"><b>AVIATION</b></a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form id="loginForm">
                        <div class="input-group mb-3">
                            <input type="text" name="username" class="form-control" placeholder="Username" />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-user"></span>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" name="password" class="form-control" placeholder="Password" />
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <!-- /.col -->
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->

        <!-- jQuery -->
        <script src="<?php echo base_url('assets/adminlte/'); ?>plugins/jquery/jquery.min.js"></script>
        <!-- Bootstrap 4 -->
        <script src="<?php echo base_url('assets/adminlte/'); ?>plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- AdminLTE App -->
        <script src="<?php echo base_url('assets/adminlte/'); ?>dist/js/adminlte.min.js"></script>

        <script>
            var uri = '<?php echo base_url(); ?>';

            $(function () {
                $('#loginForm').submit(function(e) {
                    e.preventDefault();
                    let data = $(this).serializeArray();
                    $.ajax({
                        method: 'POST',
                        url: uri + 'AdminController/dologin',
                        data: data,
                    }).done(function(response) {
                        // console.log(response);
                        let r = $.parseJSON(response);
                        if (r.st == 0) {
                            alert(r.msg);
                        } else {
                            location.replace(uri + 'admin/review');
                        }
                    });
                })
            });
        </script>
    </body>
</html>