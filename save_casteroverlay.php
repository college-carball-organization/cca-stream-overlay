<?php
  $myFile = "data.json";
  //$arr_data = array();

  try {
    $myObj->caster1 = $_POST['caster1'];
    $myObj->caster2 = $_POST['caster2'];
    $myObj->blueName = $_POST['blueName'];
    $myObj->orangeName = $_POST['orangeName'];
    $myObj->blueP1 = $_POST['blueP1'];
    $myObj->blueP2 = $_POST['blueP2'];
    $myObj->blueP3 = $_POST['blueP3'];
    $myObj->blueP4 = $_POST['blueP4'];
    $myObj->blueP5 = $_POST['blueP5'];
    $myObj->orangeP1 = $_POST['orangeP1'];
    $myObj->orangeP2 = $_POST['orangeP2'];
    $myObj->orangeP3 = $_POST['orangeP3'];
    $myObj->orangeP4 = $_POST['orangeP4'];
    $myObj->orangeP5 = $_POST['orangeP5'];

    $myJSON = json_encode($myObj);

    // Write json data into data.json file
    if(file_put_contents($myFile, $myJSON)) {
      echo 'Data sucessfully saved';
    } else {
      //echo 'Error';
    }
  } catch(Exception $e) {
    echo 'Caught Exception: ', $e->getMessage(), '\n';
  }
?>