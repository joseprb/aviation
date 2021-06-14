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
        $data['titleonly'] = 'Komentar';
        $data['komentar'] = $this->KomentarModel->getAll();
        $this->load->view('admin/komentar', $data);
    }

    public function findKomentarByReview() {
        $artikel = $this->KomentarModel->getByReview($this->input->post('id'));
        echo json_encode($artikel);
    }

    public function deleteKomentar() {
        $id = $this->input->post('id');

        $this->KomentarModel->delete($id);
    }

    public function addComment() {
        $this->load->model('ReviewModel');

        $data['inputanKomentar'] = $this->input->post('comment');
        $data['idVisitor'] = $this->input->post('idVisitor');
        $data['idReview'] = $this->input->post('idReview');
        $data['idTempatWisata'] = $this->ReviewModel->getById($data['idReview'])->idTempatWisata;

        $insert = $this->KomentarModel->insert($data);

        echo json_encode(array('stats' => 1, 'msg' => 'Komentar berhasil ditambah'));
    }

}