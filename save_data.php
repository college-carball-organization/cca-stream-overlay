<?php
  $myFile = "data.json";
  //$arr_data = array();

  // Attempt to convert element data to JSON format and store it to data.json
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

    $myObj->bluePrimary = $_POST['bluePrimary'];
    $myObj->blueSecondary = $_POST['blueSecondary'];
    $myObj->orangePrimary = $_POST['orangePrimary'];
    $myObj->orangeSecondary = $_POST['orangeSecondary'];
    $myObj->bestOf = $_POST['bestOf'];
    $myObj->blueWins = $_POST['blueWins'];
    $myObj->orangeWins = $_POST['orangeWins'];
    $myObj->tickerText = $_POST['tickerText'];
    $myObj->tickerSpeed = $_POST['tickerSpeed'];

    $myJSON = json_encode($myObj);

    // Write json data into data.json file
    if(file_put_contents($myFile, $myJSON)) {
      echo 'Data sucessfully saved';
      header("Location: http://prod.collegecarball.net/");
      exit();
    } else {
      //echo 'Error';
    }
  } catch(Exception $e) {
    echo 'Caught Exception: ', $e->getMessage(), '\n';
  }
?>
