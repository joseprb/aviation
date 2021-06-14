<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class KomentarModel extends CI_Model {

    public function getAll() {
        // return $this->db->get('review')->result();
        $this->db->select('*');
        $this->db->from('komentar a');
        $this->db->join('tempatwisata b', 'b.idTempatwisata = a.idTempatWisata', 'left');
        $this->db->join('registeredvisitor c', 'c.idVisitor = a.idVisitor', 'left');
        $this->db->join('review d', 'd.idReview = a.idReview', 'left');
        return $this->db->get()->result();
    }

    public function delete($id) {
        $this->db->where('idKomentar', $id)->delete('komentar');
    }

    public function getById($id) {
        return $this->db->where('idKomentar', $id)->get('komentar')->row(0);
    }

    public function getByReview($id) {
        $this->db->select('*');
        $this->db->from('komentar a');
        $this->db->join('review b', 'b.idReview = a.idReview', 'left');
        $this->db->join('registeredvisitor c', 'c.idVisitor = a.idVisitor', 'left');
        $this->db->where('b.idReview', $id);
        return $this->db->get()->result();
    }

    public function insert($data) {
        $this->db->insert('komentar', $data);
        return $this->db->insert_id();
    }


}