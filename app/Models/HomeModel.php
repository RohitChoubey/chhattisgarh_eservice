<?php 
namespace App\Models;
use CodeIgniter\Model;
class HomeModel extends Model
{
    protected $table = 'tree_species';
    protected $primaryKey = 'species_id';
    protected $allowedFields = ['species_name', 'species_id'];
}