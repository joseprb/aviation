<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ReportModel extends CI_Model {

	public function getAll() {
        $this->db->select('*');
        $this->db->from('report a');
        $this->db->join('review b', 'b.idReview = a.idReview', 'left');
        $this->db->join('registeredvisitor c', 'c.idVisitor = a.idVisitor', 'left');
        return $this->db->get()->result();
	}

	public function insert($data) {
		$this->db->insert('report', $data);
		return $this->db->insert_id();
	}	

}