<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AdminModel extends CI_Model {

    public function loginCheck($u, $p) {
        return $this->db->where('username', $u)->where('password', $p)->get('admin')->row();
    }

}