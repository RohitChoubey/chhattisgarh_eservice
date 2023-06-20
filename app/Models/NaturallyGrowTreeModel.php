<?php 
namespace App\Models;
use CodeIgniter\Model;

class NaturallyGrowTreeModel extends Model {
    protected $table = 'tree_grown_naturally';
    protected $primaryKey = 'tree_grown_naturally_id';
    protected $allowedFields = ['tree_feling_id','natural_tree_species','tree_grow'];
    // protected $allowedFields = ['tree_naturally_species','tree_naturally_number'];
}