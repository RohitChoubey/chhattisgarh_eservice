<?php 
namespace App\Models;
use CodeIgniter\Model;

class FeelingTreeModel extends Model {
    protected $table = 'felling_trees';
    protected $primaryKey = 'feeling_tree_id';
    protected $allowedFields = ['SRN','tree_feeling_place_name','user_name','gender','dob','father_name','address','email','mobile_number','tree_type','tree_feeling_land_measurement','measure_unit','khasra_number','land_detail_place','land_village','patwari_halka_number','khasra','caste_certificate','affidavit','site_photograph','bank_details','previous_recommendation', 'previous_recommendation','other_purpose','purpose'];
}
