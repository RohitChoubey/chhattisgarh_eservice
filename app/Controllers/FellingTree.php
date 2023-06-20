<?php
namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;
use CodeIgniter\API\ResponseTrait;
use App\Models\FeelingTreeModel;
use App\Models\NaturallyGrowTreeModel;
use App\Models\OwnersModel;
use App\Models\DeadTreesModel;
use App\Models\MatureTreesModel;
use App\Models\PlantedTreeModel;
use App\Models\TreeResponseTable;

class FellingTree extends ResourceController {
  use ResponseTrait;

  public $treeFeeling;
  public $naturallyTreeModel;
  public $ownerModes;
  public $matureTreesModel;
  public $deadTreesModel;
  public $plantedTreeModel;
  public $treeResponseTable;

  public function __construct() {
    $this->treeFeeling = new FeelingTreeModel();
    $this->naturallyTreeModel = new NaturallyGrowTreeModel();
    $this->ownerModes = new OwnersModel();
    $this->matureTreesModel = new MatureTreesModel();
    $this->deadTreesModel = new DeadTreesModel();
    $this->plantedTreeModel =  new PlantedTreeModel();
    $this->treeResponseTable = new TreeResponseTable();
  }
  
  public function index()  {
    $this->treeFeeling->select('tree_feeling_id, SRN , user_name, status, tree_feeling_created_at')
    ->where('status', 'Pending');
    $data = $this->treeFeeling->get()->getResult();


    // $data = $this->treeFeeling->select('tree_feeling_id, SRN , user_name, status, tree_feeling_created_at')->findAll();
    return $this->respond($data);
  }
  
  //insert tree feeling records
  public function insertFellingTrees() {
    $params = $this->request->getVar('fellingTreeData');
    $naturallyGrowTree = $this->request->getVar('formValues');
    $Owners = $this->request->getVar('ownwerValues');
    $deadTrees = $this->request->getVar('formDeadTreesValue');
    $matureTrees = $this->request->getVar('formMatureTreesValue');
    $plantedTrees = $this->request->getVar('formPlantedTree');
    
    if(isset($params) && isset($naturallyGrowTree) && isset($Owners) && isset($deadTrees) && isset($matureTrees)){
      $getSRNNUmber = $this->treeFeeling->select('SRN')->first();
      if($getSRNNUmber ==""){ 
        $params['SRN'] = 'CG-KW0-CUT-1';
      }
      else{
        $originalString = $getSRNNUmber['SRN'];

        // Extract the current number
        $pattern = '/(\d+)$/';
        preg_match($pattern, $originalString, $matches);
        $currentNumber = $matches[1];

        // Increment the number
        $nextNumber = $currentNumber + 1;

        // Generate the new string
        $newString = preg_replace($pattern, $nextNumber, $originalString);

        $params['SRN'] = $newString; 
      }
      $this->treeFeeling->insert($params);
      $insertId =  $this->treeFeeling->insertID();

      //insert tree_feeling_id into array
      foreach ($naturallyGrowTree as $key => $v1) {
        $naturallyGrowTree[$key]['tree_feling_id'] = $insertId;
      }
  
      foreach ($Owners as $key => $v2) {
        $Owners[$key]['tree_feeling_id'] = $insertId;
      }
  
      foreach ($deadTrees as $key => $v3) {
        $deadTrees[$key]['tree_feling_id'] = $insertId;
      }
  
      foreach ($matureTrees as $key => $v4) {
        $matureTrees[$key]['tree_feling_id'] = $insertId;
      }
      
      foreach ($plantedTrees as $key => $value) {
        $plantedTrees[$key]['tree_felling_id'] = $insertId;
      }
      
      //insert naturally Grown Trees data
      $naturally = $this->naturallyTreeModel->insertBatch($naturallyGrowTree);
      //insert dead treed data
      $deadTree = $this->deadTreesModel->insertBatch($deadTrees);
      //insert co-owners treed data
      $owner = $this->ownerModes->insertBatch($Owners);
      //insert mature treed data
      $mature = $this->matureTreesModel->insertBatch($matureTrees);
      //insert planted trees data
      $planted =  $this->plantedTreeModel->insertBatch($plantedTrees);

      
      if($naturally && $deadTree && $owner && $mature && $planted){
        return $this->respond($insertId);
      }
      else{
        $response = $this->requestResponse("error");
      }
    }
    else {
      $response = $this->requestResponse("error");
    }
    return $this->respondCreated($response);
  }

  //upload the documents of felling trees
  public function uploadTreeFellingDocument(){
    $db = \Config\Database::connect();
    $id = $this->request->getVar('id');
    $khasra = $_FILES['khasra'];
    $bank_details = $_FILES['bank_details'];
    $site_photograph = $_FILES['site_photograph'];
    $affidavit = $_FILES['affidavit'];
    $caste_certificate = $_FILES['caste_certificate'];
    
    if(isset($id) && isset($khasra)){
      $temp_exten = explode(".", $khasra['name']);
      $file_exten = $temp_exten[count($temp_exten)-1];
      $fileName =  date("YmdHis").substr(md5(rand()), 10, 10).".".$file_exten;

      $temp_exten = explode(".", $bank_details['name']);
      $file_exten = $temp_exten[count($temp_exten)-1];
      $bank_details =  date("YmdHis").substr(md5(rand()), 10, 10).".".$file_exten;
      
      $temp_exten = explode(".", $site_photograph['name']);
      $file_exten = $temp_exten[count($temp_exten)-1];
      $site_photograph =  date("YmdHis").substr(md5(rand()), 10, 10).".".$file_exten;
      
      $temp_exten = explode(".", $affidavit['name']);
      $file_exten = $temp_exten[count($temp_exten)-1];
      $affidavit =  date("YmdHis").substr(md5(rand()), 10, 10).".".$file_exten;
      
      $temp_exten = explode(".", $caste_certificate['name']);
      $file_exten = $temp_exten[count($temp_exten)-1];
      $caste_certificate =  date("YmdHis").substr(md5(rand()), 10, 10).".".$file_exten;
      
      // Define the update/insert file names into database
      $updateData = [
        'khasra' => $fileName,
        'caste_certificate' => $caste_certificate,
        'affidavit' => $affidavit,
        'site_photograph' => $site_photograph,
        'bank_details' => $bank_details
      ];
      
      // Perform the update
      $updatedTreeFelingRecords = $db->table('felling_trees')->where('tree_feeling_id', $id)->update($updateData);
      $targetDirectory = 'asset/treeFellingfiles/'; // Specify the directory where you want to save the uploaded file
      $targetFile = $targetDirectory . $fileName;
      $bank_details =  $targetDirectory . $bank_details;
      $site_photograph =  $targetDirectory . $site_photograph;
      $affidavit =  $targetDirectory . $affidavit;
      $caste_certificate =  $targetDirectory . $caste_certificate;
      
      $uploadKharsa = move_uploaded_file($_FILES['khasra']['tmp_name'], $targetFile);
      $uploadBankDetails = move_uploaded_file($_FILES['bank_details']['tmp_name'], $bank_details);
      $uploadsitePhotograph = move_uploaded_file($_FILES['site_photograph']['tmp_name'], $site_photograph);
      $uploadCasteCertificate = move_uploaded_file($_FILES['caste_certificate']['tmp_name'], $caste_certificate);
      $uploadAffidavit = move_uploaded_file($_FILES['affidavit']['tmp_name'], $affidavit);

      if (isset($uploadKharsa) && isset($uploadBankDetails) && isset($uploadsitePhotograph) && isset($uploadCasteCertificate) && isset($uploadAffidavit) && isset($updatedTreeFelingRecords)) {
        $response =  $this->requestResponse("success");
      } else {
        $response =  $this->requestResponse("error");
      }
      return $this->respond($response);
    }
    else {
      return $this->respond("error");
    }
  }

  //get tree details
  public function getTreeFeelingRecords($id, $inFun=''){
    $this->treeFeeling->select('*')
    ->where('tree_feeling_id', $id)
    ->where('tree_feeling_is_deleted', 'N');
    $personalLandDetails = $this->treeFeeling->get()->getResult();

    if(isset($inFun) && !empty($inFun)){
      return $personalLandDetails;
    }else{
      return $this->respond($personalLandDetails);
    }
  }

  //get tree species 
  public function getTreeSpecies($id){
    error_reporting(1);
    $personalInfo = $this->getTreeFeelingRecords($id, 'true');
    $this->naturallyTreeModel->select('tree_grown_naturally.tree_grow, tree_species.species_name as tree_name')
    ->join('tree_species', 'tree_species.species_id = tree_grown_naturally.natural_tree_species')
    ->where('tree_grown_naturally.tree_feling_id', $id)
    ->where('tree_grown_naturally.tree_naturally_is_deleted', 'N')
    ->where('tree_species.species_is_active', 'Y');
    $treeData = $this->naturallyTreeModel->get()->getResult();

    //get the data of tree planted
    $this->plantedTreeModel->select('tree_planted.tree_planted_number, tree_species.species_name as tree_name')
    ->join('tree_species', 'tree_species.species_id = tree_planted.tree_planted_species')
    ->where('tree_planted.tree_felling_id', $id)
    ->where('tree_planted.tree_planted_is_deleted', 'N')
    ->where('tree_species.species_is_active', 'Y');
    $plantedTrees = $this->plantedTreeModel->get()->getResult();
    foreach ($personalInfo as $key => $value) {
      $userName =  $value->user_name;
      $patwariHalwa = $value->patwari_halka_number;
      $previous_recommendation = $value->previous_recommendation;
    }

    // Load the pdf_helper
    helper('pdf');

    // Generate the dynamic HTML content
    $data = [
      'name' => $userName,
      'patwari' => $patwariHalwa,
      'naturalTree' => $treeData,
      'previous_recommendation' => $previous_recommendation,
      'plantedTrees' => $plantedTrees,
    ];
    // Load the view and pass the data
    $html = view('inspectionReport', $data);
    // Generate the PDF
    generate_pdf($html, 'dynamic_document', 'A4', 'portrait');
  }


  public function inspectionReportAction() {
    $db = \Config\Database::connect();
    // Handle the string data and perform any necessary operations
    $reportData = json_decode($this->request->getVar('reportData'));

    // Get the uploaded file from the request
    $uploadedFile = $this->request->getFile('file');
    
    //check validation
    if(empty($updateData)){
      $reportStatus = ($reportData->reportStatus == 1) ? 'Accepted' : 'Rejected';
    
      //update the status of tree felling application status
      $updateData = [
        'status' => $reportStatus,
      ];
      
      //make array to insert the data to database
      $params= array(	
       'inspection_range'=> $reportData->range_name,
        'inspection_by' => $reportData->officer_name,
        'tree_resp_id'=> $reportData->reportStatus
      );
      
      //change the file name and move file to tree felling folders
      if ($uploadedFile->isValid() && !$uploadedFile->hasMoved()) {
        $currentDateTime = date('YmdHisu'); // Get the current date and time
        $extension = $uploadedFile->getExtension(); // Get the file extension
        $newName = $currentDateTime . '.' . $extension; // Combine the current date and time with the extension
        $uploadedFile->move(ROOTPATH . 'asset/treeFellingfiles/', $newName);
        $params['inspection_report'] = $newName;
      }
      
      // Perform the update
      $updatedTreeFelingRecords = $db->table('felling_trees')->where('tree_feeling_id', $reportData->tree_felling_id)->update($updateData);
      
      //insert data to database
      $inserData = $this->treeResponseTable->insert($params);
      if(isset($inserData) && !empty($inserData) && isset($updatedTreeFelingRecords) && !empty($updatedTreeFelingRecords)){
        $response =  $this->requestResponse("success");
      }
      else{
        $response =  $this->requestResponse("error");
      }
      return $this->respond($response);
    }
    else{
      $response =  $this->requestResponse("error");
      return $this->respond($response);
    }
  }

  public function approvedRejectedApplications(){
    $this->treeFeeling->select('tree_feeling_id, SRN , user_name, status, tree_feeling_created_at')
    ->where('status !=', 'Pending');
    $data = $this->treeFeeling->get()->getResult();
    return $this->respond($data);
  }

  //send response to user
  public function requestResponse($res){
    if($res=="success"){
    $response = [
      'status'   => 201,
      'error'    => null,
      'messages' => [
        'success' => 'Tree Falling Record Inserted'
      ]
    ];
      return $response;
    }
    else{
      $response = [
        'status'   => 500,
        'error'    => null,
        'messages' => [
          'success' => 'Something Went Wrong'
        ]
      ];
      return $response;
    }
  }
}
