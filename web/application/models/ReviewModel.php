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

    public function getRandom3() {
        $this->db->select('*');
        $this->db->from('review a');
        $this->db->order_by('rand()');
        $this->db->limit(3);
        $this->db->join('registeredvisitor b', 'b.idVisitor = a.idVisitor', 'left');
        $this->db->join('tempatwisata c', 'c.idTempatwisata = a.idTempatwisata', 'left');
        $query = $this->db->get();
        return $query->result();
    }

    public function getByIdArtikel($id) {
        $this->db->select('*');
        $this->db->from('review a');
        $this->db->where('a.idTempatWisata', $id);
        $this->db->join('registeredvisitor b', 'b.idVisitor = a.idVisitor', 'left');
        return $this->db->get()->result();
    }

    public function insertReview($data) {
        $this->db->insert('review', $data);
        return $this->db->insert_id();
    }

    public function insertRating($data) {
        $this->db->insert('rating', $data);
        return $this->db->insert_id();
    }

    public function delete($id) {
        $this->db->where('idReview', $id)->delete('review');
    }

}