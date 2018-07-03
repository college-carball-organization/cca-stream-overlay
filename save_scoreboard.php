<?php
  $myFile = "scoreboardData.json";

  try {
    $myObj->blueName = $_POST['blueName'];
    $myObj->orangeName = $_POST['orangeName'];
    $myObj->bluePrimary = $_POST['bluePrimary'];
    $myObj->blueSecondary = $_POST['blueSecondary'];
    $myObj->orangePrimary = $_POST['orangePrimary'];
    $myObj->orangeSecondary = $_POST['orangeSecondary'];
    $myObj->bestOf = $_POST['bestOf'];
    $myObj->blueWins = $_POST['blueWins'];
    $myObj->orangeWins = $_POST['orangeWins'];

    $myJSON = json_encode($myObj);

    // Write json data into scoreboard.json file
    if(file_put_contents($myFile, $myJSON)) {
      echo 'Data sucessfully saved';
    } else {
      echo 'Error in saving';
    }
  } catch(Exception $e) {
    echo 'Caught Exception: ', $e->getMessage(), '\n';
  }
 ?>
