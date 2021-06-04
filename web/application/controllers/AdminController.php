<?php

/**
*
*		AdminController class for AVIATION
*		@version 1.0 
*
*       Date created 7/5/2021
*       
*       @read   this class is used for everything related to the Admin, such as login
*               logout, etc. see comments on each line for more informations.
*
**/

defined('BASEPATH') OR exit('No direct script access allowed');

class AdminController extends CI_Controller {

    // login page function. used for opening the login page
    public function login() {
        if ($this->session->has_userdata('admin_logged_in')) { // checking if the session is already logged_in
            redirect(base_url('admin/review')); // redirect to the admin page if true
        }
        // else (if not logged in yet)
        $data['title'] = 'Login Admin - Aviation'; // set the title of the page
        $this->load->view('admin/login', $data);   // load the login page
    }

    // logout function. used for logout/exiting admin session
    public function logout() {
        $this->session->unset_userdata('admin_logged_in'); // delete the admin logged in session
        redirect('admin/login'); // redirect to the login page
    }

    // login function. used for "triggering" the login action
    public function dologin() {
        $this->load->model('AdminModel'); // load Admin model to communicate with database
        $r = $this->AdminModel->loginCheck($this->input->post('username'), md5($this->input->post('password'))); // match the username and password given by the user with the database
        if ($r) { // if matches with database
            $this->session->set_userdata('admin_logged_in', $r->idAdmin); // set logged in session
            echo json_encode(array('st' => 1, 'msg' => 'Login berhasil')); // set success feedback
        } else { // if not
            echo json_encode(array('st' => 0, 'msg' => 'Username atau Password salah')); // set failed feedback
        }
    }

    public function printsession() {
        print_r($_SESSION);
    }

}