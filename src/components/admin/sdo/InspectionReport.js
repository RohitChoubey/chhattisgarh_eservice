import React from 'react'
import '../assets/inspectionReport.css';

export default function InspectionReport() {
  return (
    <div>
      <h3><center>Inspection Report</center></h3>
        <div>
            To,<br/>
            Sub-Divisional Officer (revenue) <br/>
            Sub-Divisional _________________ District___________ <br/>
            Chhattisgarh <br/>
        </div>

        <div className="divSubject">
          Subject:  Inspection report regarding felling of trees<br/><br/>
          Ref.- Memo No………….. dated …………… of your court.
        </div>

        <div className="divContents">
          <p> In obeyance to the referred order, the joint field inspection was done on ……........(date). The following were persent as witness during the field inspection- </p>

          (a) Applicant and his kin '.$userName.' <br/>
          (b) Sarpanch/Panch ……………………………………<br/>
          (c) Patwari/Kotwar ……………………………………..<br/>
          (d) Independent local witness ………………………..<br/>

          <p>The details of trees on the land as per registration of trees and revenue record (B-1/Khasra) are as follows:- </p>

          (a) Species and number of trees grown naturally ………………<br/>
          (b) Species and number of trees planted …………………………<br/>
          (c) Date of previous recommentdation for felling of trees grown naturally on this holding …………………………………………….<br/>

          <p>Field inspection shows that,-</p>
          
          (a) Species and number of dead trees ……………………<br/>
          (b) Species and number of mature trees ……………………<br/>
          (c) Species and number of trees to be cut in interst of agriculture/ business ………………………………….<br/>
          (d) Applicable clause of rule 2, if any, ………………………<br/>
          (e) Other detail ………………………………………………<br/>

        </div>
        <div className="divLeft">
        Name of revenue officer…………. <br/>
        Post……………………
   
        <br/>
        <br/>
        <br/>
        Signature………………………..
      </div>

        <div className="divAdios">
          Name of forest officer…………… <br/>
          Post…………………………
          
          <br/>
          <br/>
          <br/>
          Signature………………………..
        </div>
    </div>
  )
}
