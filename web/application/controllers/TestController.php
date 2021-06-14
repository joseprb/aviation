<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class TestController extends CI_Controller {

	public function __construct() {
		parent::__construct();
		$this->load->library('unit_test');
		$this->load->model('VisitorModel');
		$this->load->model('ArtikelModel');
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

    public function addArtikel() {
        if (!empty($_FILES['image']['name'])) {
	        $data['namaTempatWisata'] = $this->input->post('nama');
	        $data['alamat'] = $this->input->post('alamat');
	        $data['deskripsi'] = $this->input->post('deskripsi');
	        $data['idAdmin'] = $this->input->post('idAdmin');

	        $insert_id = $this->ArtikelModel->insertArtikel($data);

            $newname = $this->generateRandomString();
            
            $config['file_name'] = $newname;
            $config['upload_path'] = './assets/images/artikel/';
            $config['allowed_types'] = 'gif|jpg|png';
            $config['max_size']     = '2024';
            $this->load->library('upload', $config);

            $this->upload->initialize($config);

            if (!$this->upload->do_upload('image')) {
                return json_encode(array('stats' => 0, 'msg' => $this->upload->display_errors()));
                // return false;
            }
            else {
                $data2['imageName'] = $newname . $this->upload->data('file_ext');
                $data2['idTempatWisata'] = $insert_id;
                // $x = array('upload_data' => $this->upload->data());
            }
        } else {
        	return json_encode(array('stats' => 0, 'msg' => 'gambar tidak ada'));
        }
        $this->ArtikelModel->insertImg($data2);

        return json_encode(array('stats' => 1, 'msg' => 'Artikel berhasil ditambah'));
    }

	public function index() {
		// echo "Login Method Test";
		$test = $this->addArtikel();
		$expected_result = '{"stats":0,"msg":"gambar tidak ada"}';
		$test_name = 'addArtikel Method Test';
		echo $this->unit->run($test, $expected_result, $test_name);
	}

}