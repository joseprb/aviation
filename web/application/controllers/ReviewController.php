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
        $data['titleonly'] = 'Review';
        $data['reviews'] = $this->ReviewModel->getAll();
        $this->load->view('admin/index', $data);
    }

    public function rating() {
        if (!$this->session->has_userdata('admin_logged_in')) {
            redirect(base_url('admin/login'));
        }
        $data['title'] = 'Rating - Admin | Aviation';
        $data['titleonly'] = 'Rating';
        $data['reviews'] = $this->ReviewModel->getAllRating();
        $this->load->view('admin/index', $data);
    }

    public function addReviewRate() {
        $data['idTempatWisata'] = $this->input->post('idTempatWisata');
        $data['idVisitor'] = $this->input->post('idVisitor');
        $data['inputanReview'] = $this->input->post('comment');

        $data2['idVisitor'] = $this->input->post('idVisitor');
        $data2['idTempatWisata'] = $this->input->post('idTempatWisata');
        $data2['inputanRating'] = $this->input->post('rate');

        $insert1 = $this->ReviewModel->insertReview($data);
        $insert1 = $this->ReviewModel->insertRating($data2);

        json_encode(array('stats' => 1, 'msg' => 'Review telah disubmit'));
    }

    public function deleteReview() {
        $id = $this->input->post('id');

        $this->ReviewModel->delete($id);
    }

}