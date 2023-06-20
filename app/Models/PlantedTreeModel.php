<?php 
namespace App\Models;
use CodeIgniter\Model;

class PlantedTreeModel extends Model {
    protected $table = 'tree_planted';
    protected $primaryKey = 'tree_planted_id';
    protected $allowedFields = ['tree_felling_id','tree_planted_species','tree_planted_number'];
}