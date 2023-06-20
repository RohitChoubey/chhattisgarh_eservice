<html>
      <head>
        <title>Letter</title>
        <style type="text/css">
          .bodyBody {
            margin: 10px;
            font-size: 1.50em;
          }
          .divHeader {
            text-align: right;
            border: 1px solid;
          }
          .divReturnAddress {
            text-align: right;
            float: left;
          }
          .divSubject {
            clear: both;
            font-weight: bold;
            padding-top: 80px;
          }
          .divAdios {
            float: right;
            padding-top: 50px;
          }
          .divLeft{
            float: right;
            padding-top: 50px;
          }
        </style>
      </head>
      <body class="bodyBody">
        <h3><center>Inspection Report</center></h3>
        <div>
            To,<br/>
            Sub-Divisional Officer (revenue) <br/>
            Sub-Divisional _________________ District___________ <br/>
            Chhattisgarh 
        </div>

        <div class="divSubject">
          Subject:  Inspection report regarding felling of trees<br/><br/>
          Ref.- Memo No......... dated ......... of your court.
        </div>

        <div class="divContents">
          <p> In obeyance to the referred order, the joint field inspection was done on ..........(date). The following were persent as witness during the field inspection- </p>

          (a) Applicant and his kin : <?= $name ?> <br/>
          (b) Sarpanch/Panch <br/>
          (c) Patwari/Kotwar :  <?= $patwari ?><br/>
          (d) Independent local witness .<br/>

          <p><strong>The details of trees on the land as per registration of trees and revenue record (B-1/Khasra) are as follows:- </strong></p>

          (a) Species and number of trees grown naturally 
         
            <?php
              foreach ($naturalTree as $key => $v1) { ?>
              <ul>
                <li style="margin-left:20px;"> Tree Species Name : <?= $v1->tree_name; ?></li>
                <li style="margin-left:20px;">Number of Trees: <?= $v1->tree_grow;  ?></li><br>
              </ul>
              <?php } ?>
         
          <br/>
          (b) Species and number of trees planted <br/>
            <?php
              foreach ($plantedTrees as $key => $v2) { ?>
              <ul>
                <li style="margin-left:20px;"> Tree Species Name : <?= $v2->tree_name; ?></li>
                <li style="margin-left:20px;">Number of Trees: <?= $v2->tree_planted_number;  ?></li><br>
              </ul>
            <?php } ?>
         
          (c) Date of previous recommentdation for felling of trees grown naturally on this holding:  <?= $previous_recommendation ?><br/>

          <p><strong>Field inspection shows that,-</strong></p>
          
          (a) Species and number of dead trees .................<br/>
          (b) Species and number of mature trees .................<br/>
          (c) Species and number of trees to be cut in interst of agriculture/ business .................<br/>
          (d) Applicable clause of rule 2, if any, .................<br/>
          (e) Other detail ..................................<br/>

        </div>
        <div class="divLeft">
        Name of revenue officer................. <br/>
        Post.................
        <!-- Space for signature. -->
        <br/>
        <br/>
        <br/>
        Signature.
      </div>

        <div class="divAdios">
          Name of forest officer................. <br/>
          Post.................
          <!-- Space for signature. -->
          <br/>
          <br/>
          <br/>
          Signature.
        </div>
      </body>
    </html>';