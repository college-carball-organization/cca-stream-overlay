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
    $myObj->game1BlueScore = $_POST['game1BlueScore'];
    $myObj->game1OrangeScore = $_POST['game1OrangeScore'];
    $myObj->game2BlueScore = $_POST['game2BlueScore'];
    $myObj->game2OrangeScore = $_POST['game2OrangeScore'];
    $myObj->game3BlueScore = $_POST['game3BlueScore'];
    $myObj->game3OrangeScore = $_POST['game3OrangeScore'];
    $myObj->game4BlueScore = $_POST['game4BlueScore'];
    $myObj->game4OrangeScore = $_POST['game4OrangeScore'];
    $myObj->game5BlueScore = $_POST['game5BlueScore'];
    $myObj->game5OrangeScore = $_POST['game5OrangeScore'];
    $myObj->game6BlueScore = $_POST['game6BlueScore'];
    $myObj->game6OrangeScore = $_POST['game6OrangeScore'];
    $myObj->game7BlueScore = $_POST['game7BlueScore'];
    $myObj->game7OrangeScore = $_POST['game7OrangeScore'];

    $myObj->tickerText = $_POST['tickerText'];
    $myObj->tickerSpeed = $_POST['tickerSpeed'];

    $myObj->eventTitle = $_POST['eventTitle'];

    $myObj->blueStanding = $_POST['blueStanding'];
    $myObj->orangeStanding = $_POST['orangeStanding'];

    $myJSON = json_encode($myObj);

    // Write json data into data.json file
    if(file_put_contents($myFile, $myJSON)) {
      echo 'Data sucessfully saved';
      header("Location: https://prod.cca.gg/control-panel/index.html");
      exit();
    } else {
      echo 'Error';
    }
  } catch(Exception $e) {
    echo 'Caught Exception: ', $e->getMessage(), '\n';
  }
?>
