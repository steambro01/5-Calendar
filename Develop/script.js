// currently is only choosing the first text area. need to seperate each text area to its own object
$(function () {

  //save the id/hour of the saved block
  var hour =  $("textarea").parent('div').attr('id');
  //found this solution @ https://stackoverflow.com/questions/10003683/how-can-i-extract-a-number-from-a-string-in-javascript
  var hourNumb = hour.replace(/^\D+/g, ''); // This replaces all non number characters with nothing;
  var currentHour = dayjs().hour();
  console.log(hourNumb);
  console.log(currentHour);
  
  if(hourNumb === currentHour ){
    //add class present to hour id
    $(".row").addClass("present");
  }
  else if(hourNumb > currentHour){
    //add class future
    $(".row").addClass("future");
  }
  else{
    //add class past
    $(".row").addClass("past");
  }

//everytime the save button is pressed
  $(".saveBtn").click(function(){
    
  
   //  save hour and input to local storage
    // convert entered text to a variable

  // var text = $(this.).html();
  // console.log(text);
  // localStorage.setItem(hourNumb, text);

  
  
    });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  var today = dayjs().format('MMM D, YYYY');
  $("#currentDay").html(today);
});
