<?php 
namespace App\Models;
use CodeIgniter\Model;

class MatureTreesModel extends Model {
    protected $table = 'tree_mature';
    protected $primaryKey = 'tree_dead_id';
    protected $allowedFields = ['tree_feling_id','mature_tree_species','mature_tree_number'];
}