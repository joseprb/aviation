<!DOCTYPE html>
<html lang="en">
    <head>
<?php $this->load->view('admin/headerscripts.php'); ?>

        <style type="text/css">
            #modalImg img {
                max-width: 100%;
            }
            #modalImg .col-md-4 {
                margin-bottom: 10px;
            }
        </style>

    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <!-- Preloader -->
            <div class="preloader flex-column justify-content-center align-items-center">
                <img class="animation__shake" src="<?php echo base_url('assets/adminlte/'); ?>dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
            </div>

            <!-- Navbar -->
<?php $this->load->view('admin/navbar'); ?>
            <!-- /.navbar -->

            <!-- Main Sidebar Container -->
<?php $this->load->view('admin/sidebar') ?>

            <!-- Content Wrapper. Contains page content -->
            <div class="content-wrapper">
                <!-- Content Header (Page header) -->
<?php $this->load->view('admin/header'); ?>

                <!-- Main content -->
                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#modalAdd" style="margin-bottom:10px">Tambah Artikel</button>
                                <div class="card">
                                    <div class="card-header">
                                        <!-- <h3 class="card-title">DataTable with minimal features & hover style</h3> -->
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body">
                                        <table id="example2" class="table table-bordered table-hover">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama</th>
                                                    <th>Alamat</th>
                                                    <th>Deskripsi</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php
                                                $CI =& get_instance();
                                                $CI->load->model('AdminModel');
                                                $i = 1; foreach ($artikel as $art) { ?>
                                                    <tr data-id="<?php echo $art->idApplied; ?>">
                                                        <td><?php echo $i++; ?></td>
                                                        <td><?php echo $art->namaApplied; ?></td>
                                                        <td><?php echo $art->alamatApplied; ?></td>
                                                        <td><?php echo $art->deskripsiApplied; ?></td>
                                                        <?php if ($art->isApproved == 1) { ?>
                                                        <td><span class="badge bg-success">Approved</span></td>
                                                        <?php } else { ?>
                                                        <td><button type="button" class="btn btn-approve btn-success btn-sm"><i class="fa fa-check"></i></button> <button type="button" class="btn btn-delete btn-danger btn-sm"><i class="fas fa-times"></i></button></td>
                                                        <?php } ?>
                                                    </tr>
                                                <?php } ?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Nama</th>
                                                    <th>Alamat</th>
                                                    <th>Deskripsi</th>
                                                    <th></th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                    <!-- /.card-body -->
                                </div>
                                <!-- /.card -->
                            </div>
                            <!-- /.col -->
                        </div>
                        <!-- /.row -->
                    </div>
                    <!-- /.container-fluid -->
                </section>
                <!-- /.content -->
            </div>

            <!-- /.content-wrapper -->
<?php $this->load->view('admin/footer'); ?>

            <!-- Control Sidebar -->
            <aside class="control-sidebar control-sidebar-dark">
                <!-- Control sidebar content goes here -->
            </aside>
            <!-- /.control-sidebar -->
        </div>
        <!-- ./wrapper -->
<?php $this->load->view('admin/footerscripts'); ?>

        <script>

            var uri = '<?php echo base_url(); ?>';

            $(function () {
                $("#example1").DataTable({
                    "responsive": true, "lengthChange": false, "autoWidth": false,
                    "buttons": ["copy", "csv", "excel", "pdf", "print", "colvis"]
                }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
                $('#example2').DataTable({
                    "paging": true,
                    "lengthChange": false,
                    "searching": false,
                    "ordering": true,
                    "info": true,
                    "autoWidth": false,
                    "responsive": true,
                });

                $('.btn-delete').click(function(e) {
                    if (confirm('Tolak artikel ini?')) {
                        let id = $(this).parent().parent().attr('data-id');
                        $.ajax({
                            method: 'POST',
                            url: uri + 'RequestController/deleteArtikel',
                            data: {id: id},
                        }).done(function(response) {
                            alert('Artikel telah dihapus');
                            location.reload();
                        });
                    }
                });

                $('.btn-approve').click(function(e) {
                    if (confirm('Approve artikel ini?')) {
                        let id = $(this).parent().parent().attr('data-id');
                        $.ajax({
                            method: 'POST',
                            url: uri + 'RequestController/approve',
                            data: {id: id},
                        }).done(function(response) {
                            // console.log(response);
                            alert('Artikel telah diapprove');
                            location.reload();
                        });
                    }
                });

                $('.btn-showimg').click(function(e) {
                    e.preventDefault();
                    $('#modalImg .modal-body .row:eq(0)').html("");
                    let id = $(this).parent().parent().attr('data-id');
                    $('#modalImg .modal-body input[type=hidden]').val(id);
                    $.ajax({
                        method: 'POST',
                        url: uri + 'ArtikelController/getImages',
                        data: {id: id},
                    }).done(function(response) {
                        response = $.parseJSON(response);
                        if (response.length > 0) {
                            for (var i = response.length - 1; i >= 0; i--) {
                                $('#modalImg .modal-body .row:eq(0)').append('<div class="col-md-4"><img src="' + uri + 'assets/images/artikel/' + response[i].imageName + '"/><button class="btn btn-deleteImg btn-danger btn-block btn-sm" data-id="' + response[i].idImage + '">Hapus</button></div>')
                            }
                        } else {
                            $('#modalImg .modal-body .row:eq(0)').append('<div class="col">Belum ada foto</div>')
                        }
                        $('#modalImg').modal("show");
                    });
                });

                $('#formImg').submit(function(e) {
                    e.preventDefault();
                    let data = new FormData($(this)[0]);
                    $.ajax({
                        method: 'POST',
                        url: uri + 'ArtikelController/addImage',
                        data: data,
                        processData: false,
                        contentType: false
                    }).done(function(response) {
                        // console.log(response);
                        let r = $.parseJSON(response);
                        if (r.stats == 1) {
                            alert(r.msg);
                            location.reload();
                        } else {
                            alert(r.msg);
                        }
                    });
                });

                $('#addForm').submit(function(e) {
                    e.preventDefault();
                    let data = new FormData($(this)[0]);
                    $.ajax({
                        method: 'POST',
                        url: uri + 'ArtikelController/addArtikel',
                        data: data,
                        processData: false,
                        contentType: false
                    }).done(function(response) {
                        let r = $.parseJSON(response);
                        if (r.stats == 1) {
                            alert(r.msg);
                            location.reload();
                        } else {
                            alert(r.msg);
                        }
                    });
                });

                $('#editForm').submit(function(e) {
                    e.preventDefault();
                    let data = $(this).serializeArray();
                    $.ajax({
                        method: 'POST',
                        url: uri + 'ArtikelController/editArtikel',
                        data: data,
                    }).done(function(response) {
                        let r = $.parseJSON(response);
                        if (r.stats == 1) {
                            alert(r.msg);
                            location.reload();
                        } else {
                            alert(r.msg);
                        }
                    });
                });

            });

            function doInsert() {
                if( document.getElementById("imgupload").files.length == 0 ){
                    alert('Pilih file');
                } else {
                    $('#formImg').submit();
                }
            }

            $(document).on("click", '.btn-deleteImg', function(event) { 
                if (confirm('Hapus foto ini?')) {
                    let id = $(this).attr('data-id');
                    $.ajax({
                        method: 'POST',
                        url: uri + 'ArtikelController/deleteImg',
                        data: {id: id},
                    }).done(function(response) {
                        alert('Foto berhasil dihapus');
                        location.reload();
                    });
                }
            });

        </script>
    </body>
</html>
