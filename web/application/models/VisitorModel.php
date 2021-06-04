<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class VisitorModel extends CI_Model {

    public function loginCheck($u, $p) {
        return $this->db->where('username', $u)->where('password', $p)->get('registeredvisitor')->row();
    }

    public function getByUsername($u) {
        return $this->db->where('username', $u)->get('registeredvisitor')->row();
    }

    public function insertVisitor($data) {
        $this->db->insert('registeredvisitor', $data);
        return $this->db->insert_id();
    }

}