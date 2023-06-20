<?php 
namespace App\Models;
use CodeIgniter\Model;

class TreeResponseTable extends Model {
    protected $table = 'response_tree_table';
    protected $primaryKey = 'id';
    protected $allowedFields = ['tree_resp_id','inspection_range','inspection_by','inspection_report'];
}