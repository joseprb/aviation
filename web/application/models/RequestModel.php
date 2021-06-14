<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class RequestModel extends CI_Model {

    public function insert($data) {
        $this->db->insert('appliedtempatwisata', $data);
        return $this->db->insert_id();
    }

    public function getAll() {
        // return $this->db->where('isApproved', 0)->get('appliedtempatwisata')->result();
        return $this->db->order_by("idApplied", "desc")->get('appliedtempatwisata')->result();
    }

    public function getById($id) {
        return $this->db->where('idApplied', $id)->get('appliedtempatwisata')->row(0);
    }

    public function delete($id) {
        $this->db->where('idApplied', $id)->delete('appliedtempatwisata');
    }

    public function approve($id, $data) {
    	$this->db->where('idApplied', $id)->update('appliedtempatwisata', $data);
    }

}