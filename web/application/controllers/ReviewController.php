<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ReviewController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('ReviewModel');
    }

    public function index() {
        if (!$this->session->has_userdata('admin_logged_in')) {
            redirect(base_url('admin/login'));
        }
        $data['title'] = 'Review - Admin | Aviation';
        $data['reviews'] = $this->ReviewModel->getAll();
        $this->load->view('admin/index', $data);
    }

    public function deleteReview() {
        $id = $this->input->post('id');

        $this->ReviewModel->delete($id);
    }

}