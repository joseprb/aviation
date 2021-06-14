<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class DashboardController extends CI_Controller {

    function __construct() {
        parent::__construct();

        $this->load->model('ArtikelModel');
        $this->load->model('Reviewmodel');
    }

    public function index() {
        $data['title'] = 'Home - Aviation';
        $data['artikel'] = $this->ArtikelModel->getAll();
        $data['reviews'] = $this->Reviewmodel->getRandom3();
        $this->load->view('home', $data);
    }

    public function search($q) {
        $data['title'] = 'Search Result - Aviation';
        $data['artikel'] = $this->ArtikelModel->search($q);
        $this->load->view('search', $data);
    }

    public function artikel($id) {
        $data['artikel'] = $this->ArtikelModel->getById($id);
        if (isset($data['artikel']->idTempatWisata)) {
            $data['title'] = $data['artikel']->namaTempatWisata . ' - Aviation';
            $data['reviews'] = $this->Reviewmodel->getByIdArtikel($id);
            $this->load->view('artikel', $data);
        } else {
            redirect(base_url(), 'refresh');
        }
    }

}