<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ArtikelModel extends CI_Model {

    public function getById($id) {
        return $this->db->where('idTempatWisata', $id)->get('tempatwisata')->row(0);
    }

    public function getAll() {
        return $this->db->order_by("idTempatWisata", "desc")->get('tempatwisata')->result();
    }

    public function search($key) {
        $this->db->like('namaTempatWisata', $key);
        return $this->db->get('tempatwisata')->result();
    }

    public function delete($id) {
        $this->db->where('idTempatWisata', $id)->delete('tempatwisata');
    }

    public function update($id, $data) {
        $this->db->where('idTempatWisata', $id)->update('tempatwisata', $data);
    }

    public function deleteImg($id) {
        $this->db->where('idImage', $id)->delete('artikelimages');
    }

    public function insertArtikel($data) {
        $this->db->insert('tempatwisata', $data);
        return $this->db->insert_id();
    }

    public function insertImg($data) {
        $this->db->insert('artikelimages', $data);
        return $this->db->insert_id();
    }

    public function getImg($idTempatWisata) {
        return $this->db->where('idTempatWisata', $idTempatWisata)->get('artikelimages')->result();
    }

    public function getImgById($id) {
        return $this->db->where('idImage', $id)->get('artikelimages')->row(0);
    }

}