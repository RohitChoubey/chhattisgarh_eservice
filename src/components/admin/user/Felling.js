import '../assets/style.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormInputValidation } from "react-form-input-validation";
//For API Requests
import Swal from 'sweetalert2';
import axios from 'axios'
import $ from 'jquery';

export default function Felling() {
  var getUserId = JSON.parse(localStorage.getItem('token-info'))
  // React state to manage visibility
  const [validatefild, setValidatefild] = useState();
  const [speciesData, setSpeciesData] = useState([]);
  const [otherPurpose, setotherPurpose] = useState(false);
  const [termCondtion, setTermCondtion] = useState(true);
  const [ownwerValues, setOwnwerValues] = useState([{ co_owner_name: ""}])
  const [formValues, setFormValues] = useState([{ natural_tree_species: "", tree_grow : ""}]);
  const [formDeadTreesValue, setFormDeadTrees] = useState([{ dead_tree_species: "", dead_tree_number : ""}]);
  const [formMatureTreesValue, setFormMatureTreesValue] = useState([{ mature_tree_species: "", mature_tree_number : ""}]);
  const [formPlantedTree, setFormPlantedTree] = useState([{tree_planted_species: "", tree_planted_number: ""}]);
  const [fellingTreeData, setfellingTreeData] = new useState({
    place_name: "",
    gender: "",
    user_name: "",
    dob: "",
    father_name: "",
    address: "",
    email: "",
    mobile_number: "",
    tree_type: "",
    measure_unit: "",
    khasra_number: "",
    land_detail_place: "",
    land_village: "",
    patwari_halka_number:"",
    previous_recommendation: "",
    khasra : "",
    affidavit: "",
    bank_details : "",
    site_photograph : "",
    caste_certificate : "",
    purpose: "",
    other_purpose: "",
  });

  const navigate = useNavigate();

  //check validation of input fields
  const [fields, errors, form] = useFormInputValidation({
    email_address: "",
    password: "",
  }, {
    email_address: "required|email",
    password: "required"
  });


  const url = '/home';
  //get the species of tree from database
  useEffect(() => {
    getAllSpecies();
  }, []);

  const getAllSpecies = () => {
    axios.get(`${url}`).then((res) => {
    const abc =   res.data;
    setSpeciesData(abc);
    })
  }

  //check terms and conditions of Form  
  const checkTermsCondition=(e) =>{
    if(e.target.value==="Yes"){
      setTermCondtion(false);
    } 
    else {
      setTermCondtion(true);
    }
  }

   //handle and get muliple Natural grow trees data
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  //handle and get muliple Owners data
  let handleChangeOwner = (i, e) => {
    let newOwner = [...ownwerValues];
    newOwner[i][e.target.name] = e.target.value;
    setOwnwerValues(newOwner);
  }

  //handle and get muliple dead trees data
  let handleDeadTreeDetails = (i, e) => {
    let newDeadTreeDetails = [...formDeadTreesValue];
    newDeadTreeDetails[i][e.target.name] = e.target.value;
    setFormDeadTrees(newDeadTreeDetails);
  }

  //handle and get multiple mature trees data
  // var newMatTree = {}
  const handleMatureTreeDetails = (i, e) =>{
    let newFormMatureTreesDetails = [...formMatureTreesValue];
    newFormMatureTreesDetails[i][e.target.name] = e.target.value;
      // newMatTree.axc = newFormMatureTreesDetails;
    setFormMatureTreesValue(newFormMatureTreesDetails);
    // setfellingTreeData(...fellingTreeData, newMatTree.axc);
  }
  
  const handlePlantedTree = (i, e) => {
    let newformPlantedTree = [...formPlantedTree];
    newformPlantedTree[i][e.target.name] = e.target.value;
    setFormPlantedTree(newformPlantedTree);
  } 

  //check the reason of cutting tree is other or not
  const handlePurpose = (event) => {
    // 👇 Get input value from "event"
    let purpose = event.target.value;
    setfellingTreeData({...fellingTreeData, purpose});

    if(event.target.value==="other"){
      setotherPurpose(true);
    }
    else{
      setotherPurpose(false);
    }
  };

  //for add multiple fields of tree grow naturally
  let addFormFields = () => {
    setFormValues([...formValues, { natural_tree_species: "", tree_grow: "" }])
  }
  
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  //for add multiple fields of co-owner_name
  let addFormOwner = () =>{
    setOwnwerValues([...ownwerValues, { co_owner_name: ""}])
  }

  let removeOwnwerValues = (i) => {
    let newFormOwnerValues = [...ownwerValues];
    newFormOwnerValues.splice(i, 1);
    setOwnwerValues(newFormOwnerValues)
  }

  //for add multiple of dead trees
  let addFormDeadTrees = () =>{
    setFormDeadTrees([...formDeadTreesValue, { dead_tree_species: "", dead_tree_number: ""}]);
  }

  let removeFormDeadTreesValue =(i) => {
    let newFormDeadTreesValue =[...formDeadTreesValue];
    newFormDeadTreesValue.splice(i,1);
    setFormDeadTrees(newFormDeadTreesValue);
  }

  //for add/remove multiple of Mature trees
  let addFormMatureTrees = () =>{
    setFormMatureTreesValue([...formMatureTreesValue, { mature_tree_species: "", mature_tree_number: ""}]);
  }

  let removeFormMatureTreesValue =(i) => {
    let newFormMatureTreesValue =[...formMatureTreesValue];
    newFormMatureTreesValue.splice(i,1);
    setFormMatureTreesValue(newFormMatureTreesValue);
  }

  //to add/remove multiple tree plantes
  let addFormPlantedTree = () =>{
    setFormPlantedTree([...formPlantedTree, {tree_planted_species: "", tree_planted_number: ""}]);
  }

  let removeFormPlantedTree = (i) =>{
    let newFormPlantedTree = [...formPlantedTree];
    newFormPlantedTree.splice(i,1);
    setFormPlantedTree(newFormPlantedTree);
  }

  const inputEvents = (event) =>{
    const {name,value} = event.target;
    const data = {...fellingTreeData, [name]:value};
    //newMatTree.fellingMatTree = data;
    setfellingTreeData({...fellingTreeData, [name]:value});
    console.log(fellingTreeData);
  }

  function form_validate(){
    var land_detail_place_id = $("#land_detail_place_id").val()
    var gender =	$("#gender").val();
    var user_name	=	$("#user_name").val();
    var dob	=	$("#dob").val();
    var father_name	=	$("#father_name").val();
    var address	=	$("#address").val();
    var email	=	$("#email").val();
    var mobile_number	=	$("#mobile_number").val();
    var tree_feeling_land_measurement	=	$("#tree_feeling_land_measurementd").val();
    var khasra_number	=	$("#khasra_number").val();
    var land_detail_place	=	$("#land_detail_place").val();
    var patwari_halka_number = $("#patwari_halka_number").val();
    var natural_tree_species = $("#natural_tree_species").val();
    var tree_grow	=	$("#tree_grow").val();
    var previous_recommendation	=	$("#previous_recommendation").val();
    var tree_planted = $("#tree_planted_species").val();
    var tree_planted_number =	$("#tree_planted_number").val();
    var co_owner_name =	$("#co_owner_name").val();
    var dead_tree_species			=	$("#dead_tree_species").val();
    var dead_tree_number			=	$("#dead_tree_number").val();
    var mature_tree_species			=	$("#mature_tree_species").val();

    if(land_detail_place_id === null || land_detail_place_id === ""){
      setValidatefild("Field Required");
      $("#land_detail_place_id + .status_nameerror").addClass("has-error");
    }
    else{
      $("#land_detail_place_id + .status_nameerror").removeClass("has-error");
    }
    if(gender === null || gender === "") {
      setValidatefild("Field Required");
      $(".status_nameerror").addClass("has-error");
    } else {
      $(".status_nameerror").removeClass("has-error");
    }
    if (user_name === null || user_name === "") {
      setValidatefild("Field Required");
      $("#user_name+ .status_nameerror").addClass("has-error");
    } else {
      $(".status_nameerror").removeClass("has-error");
    }
    if (dob === null || dob === "") {
      setValidatefild("Field Required");
      $("#dob+ .status_nameerror").addClass("has-error");
    } else {
      $(".status_nameerror").removeClass("has-error");
    }
    if (father_name === null || father_name === "") {
      setValidatefild("Field Required");
      $("#father_name + .status_nameerror").addClass("has-error");
    } else {
      $(".status_nameerror").removeClass("has-error");
    }
    if (email === null || email === "") {
      setValidatefild("Field Required");
      $("#email + .status_nameerror").addClass("has-error");
    } else {
      $(".status_nameerror").removeClass("has-error");
    }
    if (address === null || address === "") {
      setValidatefild("Field Required");
      $("#address+ .status_nameerror").addClass("has-error");
    }
    else{
      $("#address+ .status_nameerror").removeClass("has-error");
    }
    if (mobile_number === null || mobile_number === "") {
      setValidatefild("Field Required");
      $("#mobile_number + .status_nameerror").addClass("has-error");
    } else {
      $("#mobile_number + .status_nameerror").removeClass("status_nameerror");
    }
    if (tree_feeling_land_measurement === null || tree_feeling_land_measurement === "") {
      setValidatefild("Field Required");
      $("#tree_feeling_land_measurement + .status_nameerror").addClass("has-error");
    } else {
      $("#tree_feeling_land_measurement + .status_nameerror").removeClass("has-error");
    }
    if (khasra_number === null || khasra_number === "") {
      setValidatefild("Field Required");
      $("#khasra_number + .status_nameerror").addClass("has-error");
    } else {
      $("#khasra_number + .status_nameerror").removeClass("has-error");
    }
    if (land_detail_place === null || land_detail_place === "") {
        setValidatefild("Field Required");
        $("#land_detail_place+ .status_nameerror").addClass("has-error");
    } else {
        $("#land_detail_place + .status_nameerror").removeClass("has-error");
    }
    if (patwari_halka_number === null || patwari_halka_number === "") {
      setValidatefild("Field Required");
      $("#patwari_halka_number+ .status_nameerror").addClass("has-error");
    } else {
      $("#patwari_halka_number + .status_nameerror").removeClass("has-error");
    }
    if (natural_tree_species === null || natural_tree_species === "") {
      setValidatefild("Field Required");
      $("#natural_tree_species + .status_nameerror").addClass("has-error");
    } else {
      $("#natural_tree_species + .status_nameerror").removeClass("has-error");
    }
    if (tree_grow === null || tree_grow === "") {
      setValidatefild("Field Required");
      $("#tree_grow + .status_nameerror").addClass("has-error");
    } else {
      $("#tree_grow + .status_nameerror").removeClass("has-error");
    }
    if (previous_recommendation === null || previous_recommendation === "") {
      setValidatefild("Field Required");
      $("#previous_recommendation + .status_nameerror").addClass("has-error");
    } else {
      $("#previous_recommendation + .status_nameerror").removeClass("has-error");
    }
    if (tree_planted === null || tree_planted === "") {
      setValidatefild("Field Required");
      $("#tree_planted_species + .status_nameerror").addClass("has-error");
    } else {
      $("#tree_planted_species + .status_nameerror").removeClass("has-error");
    }
    if (tree_planted_number === null || tree_planted_number === "") {
      setValidatefild("Field Required");
      $("#tree_planted_number + .status_nameerror").addClass("has-error");
    } else {
      $("#tree_planted_number + .status_nameerror").removeClass("has-error");
    }
    if (co_owner_name === null || co_owner_name === "") {
      setValidatefild("Field Required");
      $("#co_owner_name + .status_nameerror").addClass("has-error");
    } else {
      $("#co_owner_name + .status_nameerror").removeClass("has-error");
    }
    if (dead_tree_species === null || dead_tree_species === "") {
      setValidatefild("Field Required");
      $("#dead_tree_species + .status_nameerror").addClass("has-error");
    } else {
      $("#dead_tree_species + .status_nameerror").removeClass("has-error");
    }
    if (dead_tree_number === null || dead_tree_number === "") {
      setValidatefild("Field Required");
      $("#dead_tree_number + .status_nameerror").addClass("has-error");
    } else {
      $("#dead_tree_number + .status_nameerror").removeClass("has-error");
    }
    if (mature_tree_species === null || mature_tree_species === "") {
      setValidatefild("Field Required");
      $("#mature_tree_species + .status_nameerror").addClass("has-error");
    } else {
      $("#mature_tree_species + .status_nameerror").removeClass("has-error");
    }
  }

  //submit form to database
  const onSubmit = async (event) => {
    // $('#SaveRecord').prop('disabled', true);
    $("body").addClass("loading");
    event.preventDefault();
    const isValid = await form.validate(event);
    //set the values of natural grow trees
    let natural_tree_details = JSON.stringify(formValues);
  
    //set the values of co-owners
    let co_owners = JSON.stringify(ownwerValues);
  
    //set the values of multiple dead trees/
    let dead_tree_details = JSON.stringify(formDeadTreesValue);

    //set the values of multiple mature trees
    let mature_tree_details = JSON.stringify(formMatureTreesValue);
    // setfellingTreeData({...fellingTreeData, mature_tree_details});
    // setfellingTreeData({...fellingTreeData, dead_tree_details});
    // setfellingTreeData({...fellingTreeData, co_owners});
    // setfellingTreeData({...fellingTreeData, natural_tree_details});

    // let newMatTree = {}
    //fellingTreeData.append('file', khasra);


    var formData = new FormData();
    var fileInput = $('#khasra')[0];
    var file = fileInput.files[0];
    let affidavit = $('#affidavit')[0].files[0];
    let bank_details = $('#bank_details')[0].files[0];
    let site_photograph = $('#site_photograph')[0].files[0];
    let caste_certificate = $('#caste_certificate')[0].files[0];

    const params = {fellingTreeData, formValues, ownwerValues, formDeadTreesValue, formMatureTreesValue, formPlantedTree, };
    formData.append('bank_details', bank_details);
    formData.append('site_photograph', site_photograph);
    formData.append('affidavit', affidavit);
    formData.append('caste_certificate', caste_certificate)
    formData.append('khasra', file);

    $.ajax({
      type: 'POST',
      url: 'insertFellingTrees',
      dataType: 'JSON',
      data: params,
      crossDomain: true,
      
      success: function (result) {       
        formData.append('id', result);
        $.ajax({ 
          type: 'POST',
          url: 'uploadTreeFellingDocument',
          dataType: 'JSON',
          data: formData,
          processData: false,
          contentType: false,
          crossDomain: true,
          success: function (result) {
            console.log(result);
            if(result.status===201){
              Swal.fire({
                icon: 'success',
                text: "Tree Felling Successfully Inserted!",
                allowOutsideClick: false,
                allowEscapeKey: false
              }).then((result) => {
                if (result.isConfirmed) {
                  // Set the redirect URL
                  window.location.href = '/';
                }
              });
            }
          },
          error: function (error) {
            Swal.fire({
              text: "Something Went Wrong",
              icon: "error",
              confirmButtonText: 'OK',
              allowOutsideClick: false,
              allowEscapeKey: false
            });
          },
        });
      },
    });
  }

  return (
    <div>
      <div className="dashboard-ecommerce">
          <div className="container-fluid dashboard-content me-xxl-0 custom-container">
            <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="page-header">
                      <h2 className="pageheader-title">Tree Felling</h2>
                      <div className="page-breadcrumb">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                              <li className="breadcrumb-item"><Link to="/" className="breadcrumb-link">Forest Department</Link></li>
                              <li className="breadcrumb-item active" aria-current="page">Tree Felling</li>
                            </ol>
                        </nav>
                      </div>
                  </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                  <div className="form-popup" style={{marginLeft: "20px"}}>
                  <div align="center">
                      <div id="success"></div>
                      <div id="error"></div>
                  </div>
                  <h4>Terms & Condition</h4>
                      <hr/>
                      <div className='row'>
                        <div className='col-xl-2 col-lg-2 col-md-2 col-sm-2'>
                          <div className="form-group">
                        <label className="form-check-label" htmlFor ="flexRadioDefault1">
                          Is Tree under 20 Meter of bank of any water course.
                        </label>&ensp;
                            <input type="radio" id="water_course" name="water_course" value="Yes"  onClick={checkTermsCondition} />
                            <label htmlFor="html">&ensp;Yes</label>&ensp;
                            <input type="radio" id="water_course" name="water_course" value="No" onClick={checkTermsCondition} />
                            <label htmlFor="html">&ensp;No</label>
                          </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-2 col-sm-2'>
                          <div className="form-group">
                          <label className="form-check-label" htmlFor ="flexRadioDefault1">
                            Is Tree under 20 Meter of Sacred Place.
                          </label>&ensp;
                            <input type="radio" id="sacred_place" name="sacred_place" value="Yes" onClick={checkTermsCondition} />
                            <label htmlFor="html">&ensp;Yes</label>&ensp;
                            <input type="radio" id="sacred_place" name="sacred_place" value="No" onClick={checkTermsCondition} />
                            <label htmlFor="html">&ensp;No</label>
                          </div>
                        </div>
                        <div className='col-xl-2 col-lg-2 col-md-2 col-sm-2'>
                          <div className="form-group">
                          <label className="form-check-label" htmlFor ="flexRadioDefault1">
                            Is Tree Planted under the Van Mahotsava.
                          </label>&ensp;
                            <input type="radio" id="sacred_place" name="van_mahotsava" value="Yes" onClick={checkTermsCondition} />
                            <label htmlFor="html">&ensp;Yes</label>&ensp;
                            <input type="radio" id="sacred_place" name="van_mahotsava" value="No" onClick={checkTermsCondition} />
                            <label htmlFor="html">&ensp;No</label>
                          </div>
                        </div>
                        <div className='col-xl-4 col-lg-4 col-md-4 col-sm-4'>
                          <div className="form-group">
                          <label className="form-check-label" htmlFor ="flexRadioDefault1">
                            Is Tree over an area set apart for an Encamping ground, Burial/Burning ground. Gothan, Threshing floor, Bazaar or Abadi .
                          </label>&ensp;
                            <input type="radio" id="sacred_place" name="ground" value="Yes" onClick={checkTermsCondition} />
                            <label htmlFor="html">&ensp;Yes</label>&ensp;
                            <input type="radio" id="sacred_place" name="ground" value="No" onClick={checkTermsCondition} />
                            <label htmlFor="html">&ensp;No</label>
                          </div>
                        </div>
                      </div>
                    <form id="about_form"  method="post" onSubmit={onSubmit} className={`${termCondtion ? 'true' : 'd-none'}`} encType="multipart/form-data" > 
                      <h4 className='mt-3'>Personal Details</h4>
                      <hr/>
                      <div className="row mt-2">
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <div className="form-group">
                              <label>Select Place : <span className="red-text">*</span></label>
                              <select name="place_name" id="land_detail_place_id" className="form-control" onChange={inputEvents} required="required">
                                <option value="">Select Place</option>
                                <option value="Balod">Balod</option>
                                <option value="Baloda">Baloda</option>
                                <option value="Bazar">Bazar</option>
                                <option value="Balrampur">Balrampur</option>
                                <option value="Bastar">Bastar</option>
                                <option value="Bemetara">Bemetara</option>
                                <option value="Bijapur">Bijapur</option>
                                <option value="Bilaspur">Bilaspur</option>
                                <option value="Dantewada">Dantewada</option>
                                <option value="Dhamtari">Dhamtari</option>
                                <option value="Durg">Durg</option>
                                <option value="Gariaband">Gariaband</option>
                                <option value="Janjgir">Janjgir</option>
                                <option value="Champa">Champa</option>
                                <option value="Jashpur">Jashpur</option>
                                <option value="Kabirdham">Kabirdham</option>
                                <option value="Kanker">Kanker</option>
                                <option value="Kondagaon">Kondagaon</option>
                                <option value="Korba">Korba</option>
                                <option value="Koriya">Koriya</option>
                                <option value="Mahasamund">Mahasamund</option>
                                <option value="Mungeli">Mungeli</option>
                                <option value="Narayanpur">Narayanpur</option>
                                <option value="Raigarh">Raigarh</option>
                                <option value="Raipur">Raipur</option>
                                <option value="Sukma">Sukma</option>
                                <option value="Surajpur">Surajpur</option>
                                <option value="Surguja">Surguja</option>
                              </select>
                              <span className="text-danger status_nameerror">{validatefild}</span>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                          <label>Gender: <span className="red-text">*</span></label>
                          <div className="form-group">
                            <input type="radio" id="gender" name="gender" value="" onChange={inputEvents} />
                            <label htmlFor="html">&ensp;Male</label>&ensp;
                            <input type="radio" id="gender" name="gender" onChange={inputEvents} value="" />
                            <label htmlFor="html">&ensp;Female</label>
                          </div>
                          <span className="text-danger status_nameerror">{validatefild}</span>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                          <label>Name: <span className="red-text">*</span></label>
                          <div className="form-group">
                            <input type='text' id="user_name" name="user_name" onChange={inputEvents} className='form-control' />
                          </div>
                          <span className="text-danger status_nameerror">{validatefild}</span>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                          <label>Date of Birth: <span className="red-text">*</span></label>
                          <div className="form-group">
                            <input type='date' id="dob" name="dob"  onChange={inputEvents} className='form-control' />
                          </div>
                          <span className="text-danger status_nameerror">{validatefild}</span>
                        </div>
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                          <div className="form-group">
                            <label>Father's Name: <span className="red-text">*</span></label>
                            <input type='text' id="father_name" name="father_name"  onChange={inputEvents} className='form-control' />
                          </div>
                          <span className="text-danger status_nameerror">{validatefild}</span>
                        </div>
                        <div className="row my-xxl-3">
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <div className="form-group">
                                <label>Address: <span className="red-text">*</span></label>
                                <textarea id="address" name="address"  onChange={inputEvents} className='form-control' required></textarea>
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <label>Email Address: <span className="red-text" required>*</span></label>
                            <div className="form-group">
                                <input type='email' id="email" name="email" className='form-control' onChange={inputEvents} />
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <label>Mobile Number: <span className="red-text">*</span></label>
                            <div className="form-group">
                                <input type='number' id="mobile_number" name="mobile_number" className='form-control'  onChange={inputEvents} required />
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                        </div>
                        <div className="row my-xxl-3">
                          <h4>Land Detail</h4>
                          <hr/>
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <label>Select Tree Type: <span className="red-text">*</span></label>
                            <div className="form-group">
                              <select name="tree_type" id="tree_type" className="form-control"  onChange={inputEvents} required="required">
                                <option value="">Select Tree Type</option>
                                <option value="Tree Felling">Tree Felling</option>
                                <option value="Tree Transplant">Tree Transplant</option>
                              </select>
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <div className="form-group">
                              <label>Land Measurement: <span className="red-text">*</span></label>
                              <input type='text' id="tree_feeling_land_measurement" name="tree_feeling_land_measurement" className='form-control' onChange={inputEvents} required/>
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                          <div className="col-md-1">
                            <div className="form-group">
                              <label></label>
                              <select className="required input-sm col-md-3 form-control" id="measure_unit" name="measure_unit"  onChange={inputEvents} required="">
                                <option value="">Select</option>
                                <option value="acre">Acre</option>
                                <option value="meter">Meter</option>
                                <option value="meter square">Meter Square </option>
                                <option value="yard square">Yard Square </option>
                                <option value="yard">Yard</option>
                                <option value="hectare">Hectare</option>
                                <option value="kanal">Kanal</option>
                              </select>
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <label>Khasra number/Plot Number: <span className="red-text">*</span></label>
                            <div className="form-group">
                              <input type='text' id="khasra_number" name="khasra_number" className='form-control' onChange={inputEvents} />
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                          <div className="col-xl-2  col-lg-2 col-md-2 col-sm-6 col-2">
                            <div className="form-group">
                              <label>Select Place : <span className="red-text">*</span></label>
                              <select name="land_detail_place" id="land_detail_place" className="form-control"  onChange={inputEvents} required="required">
                                <option value="">Select Place</option>
                                <option value="Balod">Balod</option>
                                <option value="Baloda">Baloda</option>
                                <option value="Bazar">Bazar</option>
                                <option value="Balrampur">Balrampur</option>
                                <option value="Bastar">Bastar</option>
                                <option value="Bemetara">Bemetara</option>
                                <option value="Bijapur">Bijapur</option>
                                <option value="Bilaspur">Bilaspur</option>
                                <option value="Dantewada">Dantewada</option>
                                <option value="Dhamtari">Dhamtari</option>
                                <option value="Durg">Durg</option>
                                <option value="Gariaband">Gariaband</option>
                                <option value="Janjgir">Janjgir</option>
                                <option value="Champa">Champa</option>
                                <option value="Jashpur">Jashpur</option>
                                <option value="Kabirdham">Kabirdham</option>
                                <option value="Kanker">Kanker</option>
                                <option value="Kondagaon">Kondagaon</option>
                                <option value="Korba">Korba</option>
                                <option value="Koriya">Koriya</option>
                                <option value="Mahasamund">Mahasamund</option>
                                <option value="Mungeli">Mungeli</option>
                                <option value="Narayanpur">Narayanpur</option>
                                <option value="Raigarh">Raigarh</option>
                                <option value="Raipur">Raipur</option>
                                <option value="Sukma">Sukma</option>
                                <option value="Surajpur">Surajpur</option>
                                <option value="Surguja">Surguja</option>
                              </select>
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <div className="form-group">
                              <label>Select Village : <span className="red-text">*</span></label>
                              <select name="land_village" id="land_village" className="form-control"  onChange={inputEvents} required="required">
                                <option value='Faridabad'>Faridabad</option>
                              </select>
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                        </div>
                        <div className="row my-xxl-3">
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <label>Patwari Halka number: <span className="red-text">*</span></label>
                            <div className="form-group">
                                <input type="text" className='form-control' name="patwari_halka_number" id="patwari_halka_number"  onChange={inputEvents} required />
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                        </div>
                        {/* Tree Grown Naturally  section */}
                        <div className='row my-xxl-3'>
                          <h4>Grown Naturally Trees </h4>
                          <hr/>
                          {formValues.map((element, index) => (
                            <>
                              <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 col-2">
                                <label>Species of Trees : <span className="red-text">*</span>
                                </label>
                                <div className="form-group">
                                  <select name="natural_tree_species" id="natural_tree_species" className='form-control' value={element.natural_tree_species} onChange={e => handleChange(index, e)}>
                                    <option val=''>Select Species of Tree</option>
                                    {speciesData.map((res,index) => 
                                      <option value={res.species_id} key={res.species_id}>{res.species_name}</option>
                                    )}
                                  </select>
                                <span className="text-danger status_nameerror">{validatefild}</span>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-2 col-sm-6 col-2">
                                <label>Number of Trees grow: <span className="red-text">*</span></label>
                                <div className="form-group">
                                  <input type="number" className='form-control' name="tree_grow" id="tree_grow" required  value={element.tree_grow} onChange={e => handleChange(index, e)} />
                                <span className="text-danger status_nameerror">{validatefild}</span>
                                </div>
                                {
                                  index ? 
                                    <button type="button"  className="button remove btn btn-danger float-lg-end" onClick={() => removeFormFields(index)} title='Remove Field' style={{marginTop: "-38px"}}><i className="fa fa-trash" aria-hidden="true"></i></button> 
                                  : null
                                }
                              </div>
                            </>
                           ))}
                           <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2">
                            <label>Date of recommendation: <span className="red-text">*</span></label>
                            <div className="form-group">
                                <input type="date" className='form-control' name="previous_recommendation" id="previous_recommendation" onChange={inputEvents} required />
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                          </div>
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2 m-3">
                            <button className="button add btn btn-success" type="button" onClick={() => addFormFields()} title='Add Fields'><i className=" fa fa-solid fa-plus"></i></button>
                          </div> 
                          
                        </div>

                        {/* Trees Planted  section */}
                        <div className='row my-xxl-3'>
                          <h4>Planted Trees</h4>
                          <hr/>
                          {formPlantedTree.map((element, index) => (
                            <>
                              <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 col-2">
                                <label>Species of Trees : <span className="red-text">*</span>
                                </label>
                                <div className="form-group">
                                  <select name="tree_planted_species" id="tree_planted_species" className='form-control' value={element.tree_planted_species} onChange={e => handlePlantedTree(index, e)}>
                                    <option val=''>Select Species of Tree</option>
                                    {speciesData.map((res,index) => 
                                      <option value={res.species_id} key={res.species_id}>{res.species_name}</option>
                                    )}
                                  </select>
                                </div>
                                <span className="text-danger status_nameerror">{validatefild}</span>
                              </div>
                              <div className="col-xl-6 col-lg-6 col-md-2 col-sm-6 col-2">
                                <label>Number of Trees grow: <span className="red-text">*</span></label>
                                <div className="form-group">
                                  <input type="number" className='form-control' name="tree_planted_number" id="tree_planted_number"  value={element.tree_planted_number} onChange={e => handlePlantedTree(index, e)} required />
                                </div>
                                <span className="text-danger status_nameerror">{validatefild}</span>
                                {
                                  index ? 
                                    <button type="button" className="button remove btn btn-danger float-lg-end" onClick={() => removeFormPlantedTree(index)} title='Remove Field' style={{marginTop: "-38px"}}><i className="fa fa-trash" aria-hidden="true"></i></button> 
                                  : null
                                }
                              </div>
                            </>
                           ))}
                          <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2 m-3">
                            <button className="button add btn btn-success" type="button" onClick={() => addFormPlantedTree()} title='Add Fields'><i className=" fa fa-solid fa-plus"></i></button>
                          </div> 
                        </div>

                        {/*Co-owner(s) Name(s) section */}
                        <h4>Co-owner(s) Name(s):</h4>
                          <hr/>
                          
                        <div className='row'>
                          <>
                            {ownwerValues.map((element, index) => (
                              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-2">
                                <label>Name(s) of Co-owner(s): <span className="red-text">*</span></label>
                                <div className="form-group">
                                    <input type="text" className='form-control' name="co_owner_name" id="co_owner_name" value={element.co_owner_name} onChange={e => handleChangeOwner(index, e)} required />
                                </div>
                                {
                                  index ? 
                                    <button type="button"  className="button remove btn btn-danger float-lg-end" onClick={() => removeOwnwerValues(index)} title='Remove Field' style={{marginTop: "-38px"}}><i className="fa fa-trash" aria-hidden="true"></i></button> 
                                  : null
                                }
                              </div>
                              
                            ))}
                            <span className="text-danger status_nameerror">{validatefild}</span>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2 m-3">
                              <button className="button add btn btn-success" type="button" onClick={() => addFormOwner()} title='Add Fields'><i className=" fa fa-solid fa-plus"></i></button>
                            </div>
                         </>
                        </div>
                        <div className="row my-xxl-3">
                          <h4>Dead Trees Detail</h4>
                          <hr/>
                          {/* Dead Tree section */}
                        {formDeadTreesValue.map((element, i) => (
                          <>
                          <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 col-2">
                            <label>Species of Dead trees: <span className="red-text">*</span></label>
                            <div className="form-group">
                                <div className="form-group">
                                  <select name="dead_tree_species" id="dead_tree_species" className='form-control' value={element.dead_tree_species} onChange={e => handleDeadTreeDetails(i, e)} required="required" >
                                    <option val=''>Select Species of Tree</option>
                                    {speciesData.map((res,index) => 
                                      <option value={res.species_id} key={res.species_id}>{res.species_name}</option>
                                    )}
                                  </select>
                                </div>
                                <span className="text-danger status_nameerror">{validatefild}</span>
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 col-2">
                            <label>Number of Dead trees: <span className="red-text">*</span></label>
                            <div className="form-group">
                                <input type='number' id="dead_tree_number" name="dead_tree_number" className='form-control' value={element.dead_tree_number} onChange={e => handleDeadTreeDetails(i, e)} required="required" />
                            </div>
                            <span className="text-danger status_nameerror">{validatefild}</span>
                            {
                              i ? 
                                <button type="button"  className="button remove btn btn-danger float-lg-end" onClick={() => removeFormDeadTreesValue(i)} title='Remove Field' style={{marginTop: "-38px"}}><i className="fa fa-trash" aria-hidden="true"></i></button> 
                              : null
                            }
                          </div>

                          </>
                        ))}
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2 m-3">
                          <button className="button add btn btn-success" type="button" onClick={() => addFormDeadTrees()} title='Add Fields'><i className=" fa fa-solid fa-plus"></i></button>
                        </div>
                      </div>

                          {/* mature Tree section */}
                          <div className="row my-xxl-3">
                          <h4>Mature Trees Details</h4>
                            <hr/>
                            {formMatureTreesValue.map((element, index) => (
                            <>
                              <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 col-2">
                                <label>Species of Mature trees: <span className="red-text">*</span></label>
                                <div className="form-group">
                                    <div className="form-group">
                                      <select name="mature_tree_species" id="mature_tree_species" className='form-control' value={element.mature_tree_species} onChange={e => handleMatureTreeDetails(index, e)}>
                                        <option val=''>Select Species of Tree</option>
                                        {speciesData.map((res,index) => 
                                          <option value={res.species_id} key={res.species_id}>{res.species_name}</option>
                                        )}
                                      </select>
                                    </div>
                                    <span className="text-danger status_nameerror">{validatefild}</span>
                                </div>
                              </div>
                              <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6 col-2">
                                <div className="form-group">
                                  <label>Number of Mature trees: <span className="red-text">*</span></label>
                                  <input type='number' id="mature_tree_number" name="mature_tree_number" className='form-control' value={element.mature_tree_number} onChange={e => handleMatureTreeDetails(index, e)} />
                                </div>
                                <span className="text-danger status_nameerror">{validatefild}</span>
                                {
                                  index ? 
                                    <button type="button"  className="button remove btn btn-danger float-lg-end" onClick={() => removeFormMatureTreesValue(index)} title='Remove Field' style={{marginTop: "-38px"}}><i className="fa fa-trash" aria-hidden="true"></i></button> 
                                  : null
                                }
                              </div>
                            </>
                            ))}
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-2 m-3">
                              <button className="button add btn btn-success" type="button" onClick={() => addFormMatureTrees()} title='Add Fields'><i className=" fa fa-solid fa-plus"></i></button>
                            </div>
                          </div>
                           {/* Upload Documents */}
                          <div>
                            <h4>Upload Documents</h4>
                            <hr/>
                              <div className="row">
                                <div className='col-md-2'>
                                  <div className="form-group">
                                    <label>B-1 Khasra <span className='red-text'>*</span></label>
                                    <input type="file" name ="khasra" id ="khasra" className='form-control' />
                                  </div>
                                  <span className="text-danger status_nameerror">{validatefild}</span>
                                </div>
                                <div className="col-md-2">
                                  <div className="form-group">
                                    <label>Affidavit of Consent of Co-owner <span className='red-text'>*</span></label>
                                      <input type="file" name ="affidavit" id ="affidavit" className='form-control' />
                                  </div>
                                  <span className="text-danger status_nameerror">{validatefild}</span>
                                </div>
                                <div className="col-md-2">
                                  <div className="form-group">
                                    <label>Bank Account Details <span className='red-text'>*</span></label>
                                    <input type="file" name ="bank_details" id ="bank_details" className='form-control' />
                                  </div>
                                  <span className="text-danger status_nameerror">{validatefild}</span>
                                </div>
                                <div className="col-md-2">
                                  <div className="form-group">
                                    <label>Four Photographs of Site <span className='red-text'>*</span></label>
                                    <input type="file" name ="site_photograph" id ="site_photograph" className='form-control' />
                                    <p className='red-text'>Please merage all photo in a pdf.</p>
                                  </div>
                                  <span className="text-danger status_nameerror">{validatefild}</span>
                                </div>
                                <div className="col-md-2">
                                  <div className="form-group">
                                    <label>Caste Certificate <span className='red-text'>*</span></label>
                                    <input type="file" name ="caste_certificate" id ="caste_certificate" className='form-control' />
                                  </div>
                                  <span className="text-danger status_nameerror">{validatefild}</span>
                                </div>
                            </div>
                          </div>
                          <div className="row my-xxl-3">
                            <div className="col-md-2">
                              <div className="form-group">
                                <label>Purpose of Cutting Tree: <span className='red-text'>*</span></label>
                                <select className="required input-sm col-md-3 form-control" id="purpose" required="" name="purpose" onChange={handlePurpose}>
                                  <option value="">Select Purpose</option>
                                  <option value="1">Agriculture</option>
                                  <option value="2">business</option>
                                  <option value="3">Petrol Pump </option>
                                  <option value="4">Gas Station </option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                              <span className="text-danger status_nameerror">{validatefild}</span>
                            </div>
                            <div className={` col-md-2 ${otherPurpose ? 'true' : 'd-none'}`}>
                              <div className="form-group">
                                <label>Purpose of Cutting Tree: <span className='red-text'>*</span></label>
                                <input type='text' name="other_purpose" id="other_purpose" onChange={inputEvents} className='form-control' />
                              </div>
                              <span className="text-danger status_nameerror">{validatefild}</span>
                            </div>
                          </div>
                         
                        <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-2">
                          <button type="submit" id="SaveRecord" className="btn btn-primary btn-block edit_faculty_btn" data-id="" onClick={form_validate}>Submit</button>                    
                        </div>
                      </div>
                  </form>
                </div>
            </div>
          </div>
      </div>
    </div>
    </div>
  )
}