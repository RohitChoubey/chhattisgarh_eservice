<?php 
namespace App\Models;
use CodeIgniter\Model;
class UserModel extends Model
{
    protected $table = 'idm_users';
    protected $primaryKey = 'user_id';
    protected $allowedFields = ['name', 'email','user_role','password'];
}