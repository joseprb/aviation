<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class ReportController extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->model('ReportModel');
	}

    public function isLoggedIn() {
        if (!$this->session->has_userdata('admin_logged_in')) {
            redirect(base_url('admin/login'));
        }
    }

	public function index() {
		$data['reportCategory'] = $this->input->post('kategori');
		$data['reportDetail'] = $this->input->post('detail');
		$data['idReview'] = $this->input->post('idReview');
		$data['idVisitor'] = $this->input->post('idVisitor');
		$data['timestamp'] = date('Y-m-d h:i:s a', time());

		$this->ReportModel->insert($data);

		echo json_encode(array('stats' => 1, 'msg' => 'Report berhasil'));
	}

    public function admin() {
        $this->isLoggedIn();
        
        $data['title'] = 'Report - Admin | Aviation';
        $data['titleonly'] = 'Report';
        $data['reports'] = $this->ReportModel->getAll();
        $this->load->view('admin/report', $data);
    }

}