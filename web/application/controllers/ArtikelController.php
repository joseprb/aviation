<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ArtikelController extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->load->model('ArtikelModel');
    }

    public function index() {
        if (!$this->session->has_userdata('admin_logged_in')) {
            redirect(base_url('admin/login'));
        }

        $data['title'] = 'Artikel - Admin | Aviation';
        $data['titleonly'] = 'Artikel';
        $data['artikel'] = $this->ArtikelModel->getAll();
        $this->load->view('admin/artikel', $data);
    }

    public function findArtikel() {
        $artikel = $this->ArtikelModel->getById($this->input->post('id'));
        echo json_encode($artikel);
    }

    public function deleteArtikel() {
        $id = $this->input->post('id');

        $this->ArtikelModel->delete($id);
    }

    public function deleteImg() {
        $id = $this->input->post('id');
        $current = $this->ArtikelModel->getImgById($id);
        $this->ArtikelModel->deleteImg($id);
        unlink(FCPATH . 'assets/images/artikel/' . $current->imageName);
    }

    public function getImages() {
        $id = $this->input->post('id');

        echo json_encode($this->ArtikelModel->getImg($id));
    }

    public function addImage() {
        if (!empty($_FILES['image']['name'])) {
            $newname = $this->generateRandomString();
            
            $config['file_name'] = $newname;
            $config['upload_path'] = './assets/images/artikel/';
            $config['allowed_types'] = 'gif|jpg|png';
            $config['max_size']     = '2024';
            $this->load->library('upload', $config);

            $this->upload->initialize($config);

            if (!$this->upload->do_upload('image')) {
                echo json_encode(array('stats' => 0, 'msg' => $this->upload->display_errors()));
                return false;
            }
            else {
                $data['imageName'] = $newname . $this->upload->data('file_ext');
                $data['idTempatWisata'] = $this->input->post('idTempatWisata');
                // $x = array('upload_data' => $this->upload->data());
            }
        }
        $insert_id = $this->ArtikelModel->insertImg($data);
        echo json_encode(array('stats' => 1, 'msg' => 'Foto berhasil ditambah'));
    }

    public function addArtikel() {
        $data['namaTempatWisata'] = $this->input->post('nama');
        $data['alamat'] = $this->input->post('alamat');
        $data['deskripsi'] = $this->input->post('deskripsi');
        $data['idAdmin'] = $this->input->post('idAdmin');

        $insert_id = $this->ArtikelModel->insertArtikel($data);

        if (!empty($_FILES['image']['name'])) {
            $newname = $this->generateRandomString();
            
            $config['file_name'] = $newname;
            $config['upload_path'] = './assets/images/artikel/';
            $config['allowed_types'] = 'gif|jpg|png';
            $config['max_size']     = '2024';
            $this->load->library('upload', $config);

            $this->upload->initialize($config);

            if (!$this->upload->do_upload('image')) {
                echo json_encode(array('stats' => 0, 'msg' => $this->upload->display_errors()));
                return false;
            }
            else {
                $data2['imageName'] = $newname . $this->upload->data('file_ext');
                $data2['idTempatWisata'] = $insert_id;
                // $x = array('upload_data' => $this->upload->data());
            }
        }
        $this->ArtikelModel->insertImg($data2);

        echo json_encode(array('stats' => 1, 'msg' => 'Artikel berhasil ditambah'));
    }

    public function editArtikel() {
        $data['namaTempatWisata'] = $this->input->post('nama');
        $data['alamat'] = $this->input->post('alamat');
        $data['deskripsi'] = $this->input->post('deskripsi');
        $data['idAdmin'] = $this->input->post('idAdmin');

        $this->ArtikelModel->update($this->input->post('idTempatWisata'), $data);

        echo json_encode(array('stats' => 1, 'msg' => 'Artikel berhasil diubah'));
    }

    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

}