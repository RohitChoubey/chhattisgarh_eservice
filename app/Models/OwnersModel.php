<?php 
namespace App\Models;
use CodeIgniter\Model;

class OwnersModel extends Model {
    protected $table = 'co_owner_names';
    protected $primaryKey = 'co_owner_id';
    protected $allowedFields = ['tree_feeling_id','co_owner_names'];
}