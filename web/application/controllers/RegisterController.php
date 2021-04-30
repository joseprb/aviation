<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class RegisterController extends CI_Controller {

    public function index() {
        $data['title'] = 'Register - Aviation';
        $this->load->view('register', $data);
    }

    public function usernamecheck() {
        $username = $this->input->post('username');
        $this->load->model('RegisterModel');    
        echo $this->RegisterModel->getByUsername($username);
    } 

}