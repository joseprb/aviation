<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class KomentarController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('KomentarModel');
    }

    public function index() {
        if (!$this->session->has_userdata('admin_logged_in')) {
            redirect(base_url('admin/login'));
        }
        $data['title'] = 'Komentar - Admin | Aviation';
        $data['komentar'] = $this->KomentarModel->getAll();
        $this->load->view('admin/komentar', $data);
    }

    public function deleteKomentar() {
        $id = $this->input->post('id');

        $this->KomentarModel->delete($id);
    }

}