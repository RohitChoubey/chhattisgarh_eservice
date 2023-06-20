<?php 
namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;

class User extends ResourceController
{
    use ResponseTrait;
    // all users
    public function index(){
      $model = new UserModel();
      $data['employees'] = $model->orderBy('user_id', 'DESC')->findAll();
    // $data['user'] = $model->getWhere((['product_id' => $id])->getResult());
      return $this->respond($data);
    }


    public function userLogin(){
        $userModel = new UserModel();
        $email = $this->request->getVar('email');
        $pass = base64_decode($this->request->getVar('password'));
        $password = md5($pass);
        $data = $userModel->where('email', $email)->first();
        if($data){
            $pass = $data['password'];
            $authenticatePassword = strcmp($password, $pass);
            if($authenticatePassword=='0'){
                $ses_data = [
                    'id' => $data['user_id'],
                    'name' => $data['user_name'],
                    'email' => $data['email'],
                    'role' => $data['user_role'],
                    'isLoggedIn' => TRUE
                ];
                return $this->respond($ses_data, 200);
            }else{
                return $this->respond(['error' => 'Invalid username or password.'], 401);
            }
        }else{
            return $this->respond(['error' => 'Invalid username or password.'], 401);
        }
    }

    //resend to the front end
    public function jsonReturn($resArray)  {
        return json_encode($resArray);
    }

    // create
    // public function create() {
    //     $model = new UserModel();
    //     $data = [
    //         'name' => $this->request->getVar('name'),
    //         'email'  => $this->request->getVar('email'),
    //     ];
    //     $model->insert($data);
    //     $response = [
    //       'status'   => 201,
    //       'error'    => null,
    //       'messages' => [
    //           'success' => 'Employee created successfully'
    //       ]
    //   ];
    //   return $this->respondCreated($response);
    // }
    // single user
    // public function show($id = null){
    //     $model = new UserModel();
    //     $data = $model->where('id', $id)->first();
    //     if($data){
    //         return $this->respond($data);
    //     }else{
    //         return $this->failNotFound('No employee found');
    //     }
    // }
    // // update
    // public function update($id = null){
    //     $model = new UserModel();
    //     $id = $this->request->getVar('id');
    //     $data = [
    //         'name' => $this->request->getVar('name'),
    //         'email'  => $this->request->getVar('email'),
    //     ];
    //     $model->update($id, $data);
    //     $response = [
    //       'status'   => 200,
    //       'error'    => null,
    //       'messages' => [
    //           'success' => 'Employee updated successfully'
    //       ]
    //   ];
    //   return $this->respond($response);
    // }
    // // delete
    // public function delete($id = null){
    //     $model = new UserModel();
    //     $data = $model->where('id', $id)->delete($id);
    //     if($data){
    //         $model->delete($id);
    //         $response = [
    //             'status'   => 200,
    //             'error'    => null,
    //             'messages' => [
    //                 'success' => 'Employee successfully deleted'
    //             ]
    //         ];
    //         return $this->respondDeleted($response);
    //     }else{
    //         return $this->failNotFound('No employee found');
    //     }
    // }
}