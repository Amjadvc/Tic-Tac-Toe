//get All squares
let squares = document.querySelectorAll("#container-box .square ");
let headerTurn = document.querySelector("#instruction");
let currentTurn = "x";
let counter = 1;
let board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
let finshBorder = 0;
let xWin = false;
let oWin = false;
headerTurn.innerHTML = "X turn";
//Add attribute value To each div

squares.forEach((ele) => {
  ele.setAttribute("value", counter++);
});

//Add class finsh to all element

function addFinshCalass() {
  squares.forEach((ele) => {
    ele.classList.add("finsh");
  });
}
squares.forEach((ele) => {
  ele.addEventListener("click", function () {
    //handel kliced element
    ele.classList.add("clicked");
    let value = ele.getAttribute("value");
    let index = value - 1;

    ele.innerHTML = currentTurn;
    // Check What is the currentTurn and Turn between x and y
    if (currentTurn == "x") {
      currentTurn = "o";
      headerTurn.innerHTML = "O turn";
    } else {
      currentTurn = "x";
      headerTurn.innerHTML = "X turn";
    }

    if (ele.innerHTML == "x") {
      board[index] = "x";
    } else {
      board[index] = "o";
    }

    //function to Check how is Win
    checkWinConditions();

    if (isNaN(ele)) {
      finshBorder++;
    }
    if (finshBorder === 9 && xWin != true && oWin != true) {
      addFinshCalass();
      setTimeout(finsh, 1000);
    }
  });
});

function checkWinConditions() {
  const winCondtions = [
    [0, 1, 2], //rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];
  for (const condtion of winCondtions) {
    const [a, b, c] = condtion;

    if (board[a] === "x" && board[b] === "x" && board[c] === "x") {
      xWin = true;
      addFinshCalass();
      setTimeout(finsh, 1000);
    } else if (board[a] === "o" && board[b] === "o" && board[c] === "o") {
      oWin = true;
      addFinshCalass();
      setTimeout(finsh, 1000);
    }
  }
}

function finsh() {
  let finshContainer = document.createElement("div");
  finshContainer.className = "poupResult";

  let svg = document.createElement("div");
  svg.className = "mysvg";

  if (xWin === true) {
    svg.innerHTML = `<svg class="x-svg"width="205px" height="205px" viewBox="-2.38 -2.38 21.76 21.76" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-tic-tac-toe" fill="#000000" stroke="#000000">

    <g id="SVGRepo_bgCarrier" stroke-width="0">
    
    <path transform="translate(-2.38, -2.38), scale(0.68)" d="M16,27.153505355119705C18.29286419518858,27.533294039381648,20.513509889623922,29.565011487188798,22.68569649468031,28.738530383300272C24.799453330913973,27.934280840790564,25.087129502115843,25.01961739496718,26.4166946745421,23.190125186286654C27.78295064909851,21.310146143248957,30.513483366470247,20.098850519208593,30.650503276250795,17.7788931630066C30.78938098673152,15.427480389795234,28.318550007368934,13.803810201493238,27.089753202406918,11.794211370729975C26.077073607214498,10.138054940131665,25.459158659304414,8.24993517354691,24.02436138252577,6.9423684029077215C22.580120350527693,5.626195301106057,20.678118441479864,5.079171978267657,18.88058840124031,4.312993443688756C16.793376490609052,3.423341016611671,14.760809046972206,1.4920781799335305,12.56342390083095,2.0572626811390275C10.361449444089368,2.623627588622903,9.6943721862763,5.462133794676443,8.102237417233347,7.08526890728295C6.633675949936335,8.58242463111879,4.664175561793487,9.507516140813266,3.5270136527088187,11.269620234552022C2.2550740039777457,13.240570935689853,0.5097473781338974,15.553065231163382,1.188569565015806,17.79843325777432C1.8979960375531375,20.145032336958252,5.1023744028504465,20.60116436946305,6.863654440224716,22.3063640024417C8.231951896055612,23.631093897732427,8.70136410775477,25.808275567680493,10.383763119638216,26.700845334098723C12.067339473651124,27.594039720468622,14.119778877128393,26.8420666280135,16,27.153505355119705" fill="#06eab1" strokewidth="0"/>
    
    </g>
    
    
    <g id="SVGRepo_iconCarrier">  <g stroke-width="0.425" fill="none" fill-rule="evenodd"> 
    <g  class="edit-x-svg"  fill="#fff700">
      <path d="M7.006,9.97 L6.1,9.063 L3.54,11.624 L0.979,9.063 L0.072,9.97 L2.633,12.531 L0.072,15.09 L0.979,15.996 L3.54,13.438 L6.1,15.996 L7.006,15.09 L4.446,12.531 L7.006,9.97 Z" class="si-glyph-fill"> </path>
    </svg>`;
  }
  if (oWin === true) {
    svg.innerHTML = `<svg  class="o-svg" width="205px" height="205px" viewBox="-2.38 -2.38 21.76 21.76" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-tic-tac-toe" fill="#000000" stroke="#000000">

    <g id="SVGRepo_bgCarrier" stroke-width="0">
    
    <path transform="translate(-2.38, -2.38), scale(0.68)" d="M16,27.153505355119705C18.29286419518858,27.533294039381648,20.513509889623922,29.565011487188798,22.68569649468031,28.738530383300272C24.799453330913973,27.934280840790564,25.087129502115843,25.01961739496718,26.4166946745421,23.190125186286654C27.78295064909851,21.310146143248957,30.513483366470247,20.098850519208593,30.650503276250795,17.7788931630066C30.78938098673152,15.427480389795234,28.318550007368934,13.803810201493238,27.089753202406918,11.794211370729975C26.077073607214498,10.138054940131665,25.459158659304414,8.24993517354691,24.02436138252577,6.9423684029077215C22.580120350527693,5.626195301106057,20.678118441479864,5.079171978267657,18.88058840124031,4.312993443688756C16.793376490609052,3.423341016611671,14.760809046972206,1.4920781799335305,12.56342390083095,2.0572626811390275C10.361449444089368,2.623627588622903,9.6943721862763,5.462133794676443,8.102237417233347,7.08526890728295C6.633675949936335,8.58242463111879,4.664175561793487,9.507516140813266,3.5270136527088187,11.269620234552022C2.2550740039777457,13.240570935689853,0.5097473781338974,15.553065231163382,1.188569565015806,17.79843325777432C1.8979960375531375,20.145032336958252,5.1023744028504465,20.60116436946305,6.863654440224716,22.3063640024417C8.231951896055612,23.631093897732427,8.70136410775477,25.808275567680493,10.383763119638216,26.700845334098723C12.067339473651124,27.594039720468622,14.119778877128393,26.8420666280135,16,27.153505355119705" fill="#06eab1" strokewidth="0"/>
    
    </g>
    <g id="SVGRepo_iconCarrier">  
    <g stroke-width="0.425" fill="none" fill-rule="evenodd"> 
    <g  class="edit-o-svg" fill="#fff700">
     <path d="M3.512,0.079 C1.62,0.079 0.086,1.614 0.086,3.506 C0.086,5.4 1.62,6.934 3.512,6.934 C5.405,6.934 6.94,5.4 6.94,3.506 C6.939,1.614 5.404,0.079 3.512,0.079 L3.512,0.079 Z M3.512,6.095 C2.084,6.095 0.925,4.935 0.925,3.506 C0.925,2.079 2.084,0.919 3.512,0.919 C4.94,0.919 6.101,2.079 6.101,3.506 C6.101,4.935 4.939,6.095 3.512,6.095 L3.512,6.095 Z" class="si-glyph-fill"> </path>
    
    </svg>`;
  }
  if (finshBorder === 9) {
    svg.innerHTML = `<svg  class ="noOneSvg" width="800px" height="800px" viewBox="-2 -2 24.00 24.00" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000">

    <g id="SVGRepo_bgCarrier" stroke-width="0">
    
    <path transform="translate(-2, -2), scale(0.75)" d="M16,25.743807883726227C18.896708668400162,25.658599768241075,21.574902850588053,28.395272655815003,24.310192028839495,27.43799806413834C27.249612216889737,26.40928333713434,30.00716070769057,23.77540056627313,30.437587705199594,20.691056611509396C30.863928517863886,17.6359933468437,27.40617101685728,15.536223435383473,26.376912929723744,12.628336603038845C25.391830362982546,9.845255604786411,26.882734772115423,6.03657057966978,24.591566118807314,4.174723725540929C22.31325622367992,2.3233261407978985,18.859578254073345,3.531646743146188,16,4.195861470368174C13.67359188212444,4.736232950400451,11.647664090198889,5.973140477948644,9.88953709565612,7.589669332751303C8.30302798892906,9.048402266943272,7.029122732402208,10.825075048459812,6.514044092525131,12.91782608806452C6.024009278580075,14.908824718042174,6.997683002910414,16.841608633727642,7.108480423697143,18.889029839781262C7.275601559719672,21.977254777173282,4.877481813019077,26.049272067121947,7.326846584572314,27.93757155446747C9.747829072665962,29.803990163991582,12.944415613106786,25.833689406902263,16,25.743807883726227" fill="#7ed0ec" strokewidth="0"/>
    
    </g>  
    <g id="SVGRepo_iconCarrier">
       <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> 
       <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -5759.000000)" fill="#000000"> 
       <g id="icons" class="edit-NoOne-svg" transform="translate(56.000000, 160.000000)"> 
       <path d="M176,5607 C176,5605.895 176.895,5605 178,5605 C179.105,5605 180,5605.895 180,5607 C180,5608.105 179.105,5609 178,5609 C176.895,5609 176,5608.105 176,5607 M168,5607 C168,5605.895 168.895,5605 170,5605 C171.105,5605 172,5605.895 172,5607 C172,5608.105 171.105,5609 170,5609 C168.895,5609 168,5608.105 168,5607 M174,5617 C169.589,5617 166,5613.411 166,5609 C166,5604.589 169.589,5601 174,5601 C178.411,5601 182,5604.589 182,5609 C182,5613.411 178.411,5617 174,5617 M174,5599 C168.477,5599 164,5603.477 164,5609 C164,5614.523 168.477,5619 174,5619 C179.523,5619 184,5614.523 184,5609 C184,5603.477 179.523,5599 174,5599" id="emoji_simple_no_face_circle-[#554]"> </path> </g> </g> </g> </g>
    
    </svg>`;
    svg.classList.add("my-svg-no-own");
  }

  let message = document.createElement("div");
  message.className = "message";

  if (xWin === true) {
    message.innerHTML = "<span class='x-letter'>X</span> IS Won";
  }
  if (oWin === true) {
    message.innerHTML = "<span class='x-letter'>O</span> IS Won";
  }
  if (finshBorder === 9) {
    message.innerHTML = `<span class='noOwn-letter'>No</span> One Has Won`;
    message.classList.add("noOwn");
  }

  let rest = document.createElement("div");
  rest.className = "rest";
  rest.innerHTML = `<svg  class="restSvg"viewBox="-7.6 -7.6 91.21 91.21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.01 76.01" xml:space="preserve" fill="#1a1a1a" transform="rotate(90)" stroke="#1a1a1a"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path  class="arrow" fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 50.672,20.5864L 55.4219,25.3364L 55.422,38.0031L 42.7553,38.0031L 38.0053,33.2531L 46.8578,33.2522C 44.6831,30.8224 41.5227,29.2932 38.0052,29.2932C 31.4459,29.2932 26.1285,34.6106 26.1285,41.1699C 26.1285,44.4495 27.4579,47.4187 29.6071,49.5679L 25.6881,53.4869C 22.5359,50.3347 20.5862,45.9799 20.5862,41.1698C 20.5862,31.5494 28.385,23.7507 38.0053,23.7507C 42.9966,23.7507 47.4975,25.8499 50.6734,29.2137L 50.672,20.5864 Z "></path> </g></svg>`;
  rest.addEventListener("click", (ele) => {
    again(finshContainer);
  });

  //Append all child
  finshContainer.appendChild(svg);
  finshContainer.appendChild(message);
  finshContainer.appendChild(rest);
  document.body.appendChild(finshContainer);
}

function again(finshContainer) {
  //remove  popup
  document.body.removeChild(finshContainer);

  // remove classes  form square element
  squares.forEach((ele) => {
    ele.className = "square ";
    ele.innerHTML = "";
  });

  headerTurn.innerHTML = "X turn";
  finshBorder = 0;
  xWin = false;
  oWin = false;
  currentTurn = "x";
  counter = 1;
  board = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
}
