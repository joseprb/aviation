<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AdminController extends CI_Controller {

    public function index() {
        $this->load->model('ReviewModel');

        $data['title'] = 'Admin - Aviation';
        $data['reviews'] = $this->ReviewModel->getAll();
        $this->load->view('admin/index', $data);
    }

    public function login() {
        if ($this->session->has_userdata('admin_logged_in')) {
            redirect(base_url('admin/review'));
        }
        $data['title'] = 'Login Admin - Aviation';
        $this->load->view('admin/login', $data);
    }

    public function logout() {
        $this->session->unset_userdata('admin_logged_in');
        redirect('admin/login');
    }

    public function dologin() {
        $this->load->model('AdminModel');
        $r = $this->AdminModel->loginCheck($this->input->post('username'), md5($this->input->post('password')));
        if ($r) {
            $this->session->set_userdata('admin_logged_in', 1);
            echo json_encode(array('st' => 1, 'msg' => 'Login berhasil'));
        } else {
            echo json_encode(array('st' => 0, 'msg' => 'Username atau Password salah'));
        }
    }

}