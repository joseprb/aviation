<!DOCTYPE html>
<html lang="en">
    <head>
<?php $this->load->view('admin/headerscripts.php'); ?>
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        <div class="wrapper">
            <!-- Preloader -->
            <div class="preloader flex-column justify-content-center align-items-center">
                <img class="animation__shake" src="<?php echo base_url('assets/adminlte/'); ?>dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
            </div>

<?php $this->load->view('admin/navbar'); ?>

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
                                                    <th>Category</th>
                                                    <th>Detail</th>
                                                    <th>Review</th>
                                                    <th>Visitor</th>
                                                    <th>Timestamp</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <?php $i = 1; foreach ($reports as $rep) { ?>
                                                    <tr data-id="<?php echo $rep->idReport; ?>">
                                                        <td><?php echo $i++; ?></td>
                                                        <td><?php echo $rep->reportCategory; ?></td>
                                                        <td><?php echo $rep->reportDetail; ?></td>
                                                        <td><?php echo $rep->inputanReview; ?></td>
                                                        <td><?php echo $rep->nama; ?></td>
                                                        <td><?php echo $rep->timestamp; ?></td>
                                                        <td><button type="button" class="btn btn-delete btn-danger btn-sm"><i class="fas fa-trash"></i></button></td>
                                                    </tr>
                                                <?php } ?>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Category</th>
                                                    <th>Detail</th>
                                                    <th>Review</th>
                                                    <th>Visitor</th>
                                                    <th>Timestamp</th>
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
                    if (confirm('Hapus komentar ini?')) {
                        let id = $(this).parent().parent().attr('data-id');
                        $.ajax({
                            method: 'POST',
                            url: uri + 'KomentarController/deleteKomentar',
                            data: {id: id},
                        }).done(function(response) {
                            alert('Komentar berhasil dihapus');
                            location.reload();
                        });
                    }
                });

            });
        </script>
    </body>
</html>
