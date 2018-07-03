<?php
  $myFile = "scoreboard.json"

  try {
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
