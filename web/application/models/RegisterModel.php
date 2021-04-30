<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class RegisterModel extends CI_Model {

    public function getByUsername($username) {
        return $this->db->get_where('Visitor', array('username_visitor' => $username))->num_rows();
    }

}