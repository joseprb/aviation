<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ReviewModel extends CI_Model {

    public function getAll() {
        // return $this->db->get('review')->result();
        $this->db->select('*');
        $this->db->from('review a');
        $this->db->join('tempatwisata b', 'b.idTempatwisata = a.idTempatWisata', 'left');
        $this->db->join('registeredvisitor c', 'c.idVisitor = a.idVisitor', 'left');
        return $this->db->get()->result();
    }

    public function delete($id) {
        $this->db->where('idReview', $id)->delete('review');
    }

}