<?php 
namespace App\Models;
use CodeIgniter\Model;

class DeadTreesModel extends Model {
    protected $table = 'tree_dead';
    protected $primaryKey = 'tree_dead_id';
    protected $allowedFields = ['tree_feling_id','dead_tree_species','dead_tree_number'];
}