var game = {
    correct: 0,
    wrong: 0,
    unanswered: 0,
    questions: {
      q1: "Which is not an interal link for https://www.thevape.guide?",
      q2: "Which option is not a metric in Google Analytics?",
      q3: "What is the most important SEO factor for ranking a webpage on Google?",
      q4: "Which of the following doesn't belong?"  
    },
    options: {
      o1: ["https://www.thevape.guide/latest", "https://www.thevape.guide/best-vaporizer", "https://www.vapingdaily.com/the-vape-guide", "https://www.thevape.guide/vaping-hacks"],
      o2: ["Time spent on page", "Exits", "On page scroll", "Click through rate"],
      o3: [
        "Website information architecture",
        "Keyword density",
        "Image alt tags",
        "All of the above"
      ],
      o4: ["Spiders", "Crawlers", "Jiggers", "Automated Robots"]
    },
    answers: {
      a1: "https://www.vapingdaily.com/the-vape-guide",
      a2: "On page scroll",
      a3: "All of the above",
      a4: "Jiggers"
    }
  };
  
  // number variable is seconds for timer
  var number = 45;
  var intervalId;
  
  // hide div
  $(".result").hide();
  $(".quiz").hide();
  $("#show-number").hide();
  
  // Start button
  $("#start").on("click", function() {
    run();
    $(".quiz").show();
    $("#show-number").show();
    $("#start").hide();
  });
  
  // Countdown (decrement) timer function
  function decrement() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
      stop();
      count();
      $("#time-left").text("Your meter ran out!!");
      $(".quiz").hide();
      $(".result").show();
      $(".correct").text("Correct Answers: " + game.correct);
      $(".wrong").text("Wrong Answers: " + game.wrong);
      $(".unanswered").text("Unanswered: " + game.unanswered);
    }
  }
  // Game timer function
  function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }
  //  Stop timer function
  function stop() {
    clearInterval(intervalId);
  }
  
  // Jquery writing values to the HTML
  
  //Q1
  $(".question1").text(game.questions.q1); // sets the text to according value
  // for loop which creates a button and text for each question and its answer
  for (i = 0; i < game.options.o1.length; i++) {
    var newspan = $("<input/>").attr({
      type: "radio",
      value: game.options.o1[i],
      name: "o1"
    });
    newspan.text(game.options.o1[i]);
    $(".option1").append(newspan);
    $(".option1").append(game.options.o1[i]);
  }
  //Q2
  $(".question2").text(game.questions.q2);
  for (i = 0; i < game.options.o2.length; i++) {
    var newspan = $("<input/>").attr({
      type: "radio",
      value: game.options.o2[i],
      name: "o2"
    });
    newspan.text(game.options.o2[i]);
    $(".option2").append(newspan);
    $(".option2").append(game.options.o2[i]);
  }
  //Q3
  $(".question3").text(game.questions.q3);
  for (i = 0; i < game.options.o3.length; i++) {
    var newspan = $("<input/>").attr({
      type: "radio",
      value: game.options.o3[i],
      name: "o3"
    });
    newspan.text(game.options.o3[i]);
    $(".option3").append(newspan);
    $(".option3").append(game.options.o3[i]);
  }
  //Q 4
  $(".question4").text(game.questions.q4);
  for (i = 0; i < game.options.o4.length; i++) {
    var newspan = $("<input/>").attr({
      type: "radio",
      value: game.options.o4[i],
      name: "o4"
    });
    newspan.text(game.options.o4[i]);
    $(".option4").append(newspan);
    $(".option4").append(game.options.o4[i]);
  }
  
  // Submit function button
  $("#sub").on("click", function() {
    count();
    // Show Result
    stop();
    // Hide/show to change the displayed elements
    $(".quiz").hide();
    $(".result").show();
    $(".correct").text("Correct: " + game.correct);
    $(".wrong").text("Wrong: " + game.wrong);
    $(".unanswered").text("Unanswered: " + game.unanswered);
  });
  
  // Score-count function, per question
  function count() {
    game.correct = 0;
    game.wrong = 0;
    game.unanswered = 0;
    // question 1
  
    // This if statement considers the user choice against the correct answer, if they match, the correct score goes up one, console logs that it's correct.
    if ($('input:radio[name="o1"]:checked').val() === game.answers.a1) {
      game.correct++;
      console.log("Correct! number:");
  
      //Otherwise, if you submit no answer or a wrong one the wrong answer score is increased 1.
    } else if ($('input:radio[name="o1"]:checked').val() === undefined) {
      game.unanswered++;
      console.log("At least guess...");
    } else {
      game.wrong++;
      console.log("Wrong! number:");
    }
  
    // question 2
    if ($('input:radio[name="o2"]:checked').val() === game.answers.a2) {
      game.correct++;
      console.log("Correct! number:");
    } else if ($('input:radio[name="o2"]:checked').val() === undefined) {
      game.unanswered++;
      console.log("At least guess...");
    } else {
      game.wrong++;
      console.log("Wrong! number:");
    }
  
    // question 3
    if ($('input:radio[name="o3"]:checked').val() === game.answers.a3) {
      game.correct++;
      console.log("Correct! number:");
    } else if ($('input:radio[name="o3"]:checked').val() === undefined) {
      game.unanswered++;
      console.log("At least guess...");
    } else {
      game.wrong++;
      console.log("Wrong! number:");
    }
  
    // question 4
    if ($('input:radio[name="o4"]:checked').val() === game.answers.a4) {
      game.correct++;
      console.log("Correct! number:");
    } else if ($('input:radio[name="o4"]:checked').val() === undefined) {
      game.unanswered++;
      console.log("At least guess...");
    } else {
      game.wrong++;
      console.log("Wrong! number:");
    }
  
    // Last thing is another button to reset everything, it reloads the whole document.
    $("#restart").click(function() {
      location.reload();
    });
  }
  