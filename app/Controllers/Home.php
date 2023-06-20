<?php
namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\HomeModel;

class Home extends ResourceController
{
    use ResponseTrait;
    public function index()  {
        $model = new HomeModel();
        $data = $model->findAll();
      // $data['user'] = $model->getWhere((['product_id' => $id])->getResult());
        return $this->respond($data);
    }

}
