<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class VisitorController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('VisitorModel'); // load Admin model to communicate with database
    }

	public function login() {
        $r = $this->VisitorModel->loginCheck($this->input->post('user_login_username'), md5($this->input->post('user_login_password'))); // match the username and password given by the user with the database
        
        if ($r) { // if matches with database
            $this->session->set_userdata('visitor_logged_in', $r->idVisitor); // set logged in session
            echo json_encode(array('st' => 1, 'msg' => 'Login berhasil')); // set success feedback
        } else { // if not
            echo json_encode(array('st' => 0, 'msg' => 'Username atau Password salah')); // set failed feedback
        }
	}

    public function register() {
        $r = $this->VisitorModel->getByUsername($this->input->post('username')); // match the username and password given by the user with the database
        // print_r($r);
        if (!$r) { // if matches with database
            $data['nama'] = $this->input->post('nama');
            $data['username'] = $this->input->post('username');
            $data['password'] = md5($this->input->post('password'));
            $insertid = $this->VisitorModel->insertVisitor($data);
            echo json_encode(array('st' => 1, 'msg' => 'Register berhasil')); // set success feedback
        } else { // if not
            echo json_encode(array('st' => 0, 'msg' => 'Username telah digunakan')); // set failed feedback
        }
    }

    public function logout() {
        $this->session->unset_userdata('visitor_logged_in'); // delete the admin logged in session
        redirect('/'); // redirect to the login page
    }

}