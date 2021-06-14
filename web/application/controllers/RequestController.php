<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class RequestController extends CI_Controller {

    public function __construct() {
        parent::__construct();
		$this->load->model('RequestModel');
    }

	public function index() {
        $data['title'] = 'Request Artikel - Aviation';

        $this->load->view('request', $data);
	}

	public function approve() {
		$admin = $this->session->userdata('admin_logged_in');
		$applied = $this->RequestModel->getById($this->input->post('id'));

		$data['namaTempatWisata'] = $applied->namaApplied;
		$data['deskripsi'] = $applied->deskripsiApplied;
		$data['alamat'] = $applied->alamatApplied;
		$data['idAdmin'] = $admin;

		$data2['isApproved'] = 1;
		$data2['idAdmin'] = $admin;

		$this->load->model('ArtikelModel');
        $insert_id = $this->ArtikelModel->insertArtikel($data);

        $this->RequestModel->approve($this->input->post('id'), $data2);
	}

    public function admin() {
        if (!$this->session->has_userdata('admin_logged_in')) {
            redirect(base_url('admin/login'));
        }

        $data['title'] = 'Artikel Applied - Admin | Aviation';
        $data['titleonly'] = 'Artikel Applied';
        $data['artikel'] = $this->RequestModel->getAll();
        $this->load->view('admin/applied', $data);
    }

    public function deleteArtikel() {
        $id = $this->input->post('id');

        $this->RequestModel->delete($id);
    }

	public function submit() {
		$data['namaApplied'] = $this->input->post('nama');
		$data['deskripsiApplied'] = $this->input->post('deskripsi');
		$data['alamatApplied'] = $this->input->post('alamat');
		$data['idVisitor'] = $this->input->post('idVisitor');
		$data['isApproved'] = 0;
		$data['idAdmin'] = 0;

		$this->RequestModel->insert($data);

		echo json_encode(array('stats' => 1, 'msg' => 'Request telah diinput'));
	}

}
