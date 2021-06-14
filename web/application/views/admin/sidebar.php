<aside class="main-sidebar sidebar-dark-primary elevation-4">
                <!-- Brand Logo -->
                <a href="<?php echo base_url('admin'); ?>" class="brand-link">
                    <img src="<?php echo base_url('assets/adminlte/'); ?>dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: 0.8;" />
                    <span class="brand-text font-weight-light">AVIATION</span>
                </a>

                <!-- Sidebar -->
                <div class="sidebar">
                    <!-- Sidebar user panel (optional) -->
                    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div class="info">
                            <a href="<?php echo base_url('admin/logout'); ?>" class="d-block">Logout</a>
                        </div>
                    </div>

                    <!-- SidebarSearch Form -->
                    <div class="form-inline">
                        <div class="input-group" data-widget="sidebar-search">
                            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div class="input-group-append">
                                <button class="btn btn-sidebar">
                                    <i class="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- Sidebar Menu -->
                    <nav class="mt-2">
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
                            <li class="nav-item">
                                <a href="<?php echo base_url('admin/artikel'); ?>" class="nav-link">
                                    <i class="nav-icon fas fa-comment-dots"></i>
                                    <p>Artikel</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?php echo base_url('admin/applied'); ?>" class="nav-link">
                                    <i class="nav-icon fas fa-comment-dots"></i>
                                    <p>Artikel Applied</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?php echo base_url('admin/review'); ?>" class="nav-link">
                                    <i class="nav-icon fas fa-comment-dots"></i>
                                    <p>Review</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?php echo base_url('admin/report'); ?>" class="nav-link">
                                    <i class="nav-icon fas fa-comment-dots"></i>
                                    <p>Report</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="<?php echo base_url('admin/komentar'); ?>" class="nav-link">
                                    <i class="nav-icon fas fa-comments"></i>
                                    <p>Komentar</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <!-- /.sidebar-menu -->
                </div>
                <!-- /.sidebar -->
            </aside>