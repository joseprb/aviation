<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class DashboardController extends CI_Controller {

    public function index() {
        $data['title'] = 'Dashboard - Aviation';
        $this->load->view('home', $data);
    }

}