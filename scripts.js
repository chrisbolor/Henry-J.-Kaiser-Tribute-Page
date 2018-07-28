
  // declaring universal variables
    var pageContainer = "#page-container";
    var contentContainer = "#content-container";
    var contentLeft = "#content-left";
    var contentRight = "#content-right";
    var mainImg = "#main-img";

    var headingContainer = "#heading-container";
    var headingHeight = $(headingContainer).height();
    //var headingHeight = window.getComputedStyle(document.getElementById("heading-container")).getPropertyValue("height");
    var headerElems = new Array();
    //headerElems[0] = document.getElementById("header-title").getElementsByClassName("textHover");
    headerElems[0] = document.getElementById("header-title").getElementsByClassName("textHover");
    headerElems[1] = document.getElementById("header-caption").getElementsByClassName("textHover");
    var headerArray = jQuery.makeArray(headerElems);
    var textHover = ".textHover";
    var textContainer = ".text-container";

    // **  BELOW COMMENTS FOR docWidth / docHeight **
    // Gets the actual FULL width and FULL height of entire document
    // It is responsive, accurate & consistent on both desktop and mobile
    // MOBILE ORIENTATION CHANGE: values do NOT change without page reload
    // DESKTOP RESIZING: values do NOT change without page reload
        var docWidth = document.body.clientWidth;
        var docHeight = document.body.clientHeight;

    // ** BELOW COMMENTS FOR screenWidth / screenHeight **
    // MOBILE ORIENTATION CHANGE: values do NOT change without page reload
    // DESKTOP RESIZING: values do NOT change without page reload;
        // may never change values since most desktops do have have frequent physical orientation changes

        var screenWidth = screen.width;
        var screenHeight = screen.height;

        var windowWidth = window.innerWidth;
        var windowHeight = window.innerHeight;

        // detect device length/width ratio to determine portrait or landscape modes
        // works for desktop as is, if using for mobile use '(screenWidth/screenHeight)'
        var deviceRatio = (docWidth/docHeight);
// ENDS declaration of universal variables (may need to be re-captured again later)





  // Below are the main image zoom in/out functions
  function imgHover(){
    $(mainImg).css({
        "animation-name": "imgHover",
        "animation-duration": "30s",
    });
  };

  function imgHoverOff(){
    $(mainImg).css({
        "animation-name": "imgHoverOff",
        "animation-duration": "30s",
    });
  }

   // End main img zoom in/out functions









// below function animations the header h1 texts (zoom in/out)
function headerTextResize(){
  for(i=0; i < (headerArray[0].length); i++){
    $(headerArray[0][i]).animate({
      'font-size': '1em',
      'opacity': 1,
      'background-color': 'purple',
    }, 3000); // animation duration
  }
  for(i=0; i < (headerArray[1].length); i++){
    $(headerArray[1][i]).animate({
      'font-size': '1em',
      'opacity': 1,
     }, 3000); // animation duration
  }
}

// Below are the header height / top positioning correction functions
function headerResize(){
  $(headingContainer).animate({
    'min-height': (headingHeight) + 'px',
    "opacity": 1,
  }, 1500);
} // closes headerResize

function headerMove(){
    setTimeout(function(){
      $(headingContainer).animate({
      'top': '0px',
    }, 0100);
    }, 0025);
    setTimeout(function(){
      $(contentContainer).animate({
        'top': headingHeight + 0 + 'px',
      }, 1500);
    }, 0025);
} // closes headerMove







// begin hiding functions //
function onLoadFunctions(){
  // moves the header to just above the viewable screen
  $(headingContainer).css({
    "top": "0",
    "opacity": "0",
    "overflow": "visible",
    //"min-height": (headingHeight*2 + 30) + "px",
    "margin-left": "auto",
    "margin-right": "auto",
  });

  // enlarges the header texts to be sized back down later

  $(headerArray[0]).css({
    "font-size": "4em",
  });
  $(headerArray[1]).css({
    "font-size": "2em",
  });


  // essentially hides the textContainer to be unhidden later
  $(textContainer).css("opacity", "0");
  $(textContainer).css("height", "0%");

  // sets the content container top css for animation later
  $(contentContainer).css({
     "top": "0",
  });

}
$(document).ready(onLoadFunctions);
// end hiding functions //














// begin functions for document post load //
// begin overflow = this function set is automatically called at page load, and on rotation change
function overflow(){
  // below sets the DEFAULT overflow properties of the following containers so content is scrollable but still fits inside the viewable screen
  setTimeout(function(){
    // re-capture the following variable values
      /*var headingHeight = $(headingContainer).height();
      var docWidth = document.body.clientWidth;
      var docHeight = document.body.clientHeight;
      var screenWidth = screen.width;
      var screenHeight = screen.height;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;*/

  $(pageContainer).css({
    "overflow": "hidden",
    "height": (screenHeight) + 'px',
  });
  $(headingContainer).css({
    "overflow": "hidden",
    'height': (headingHeight) + 'px',
  });
  $("span#header-caption").css({

  });
  $(contentContainer).css({
    "height": (screenHeight - headingHeight + 60) + 'px', // the '60' accounts for the padding/margins of the other containers
    "overflow": "hidden",
    //"box-shadow": "5px 5px 5px blue",
  });
  $(contentRight).css({
    "height": (screenHeight - headingHeight  - 75) + 'px',
    //"background-color": "green",
    "overflow": "hidden",
  });
  $(textContainer).css({
    "height": '100%',
    "overflow": "scroll",
    //"background": "yellow",
  });

    // below addjusts the overflow & height of the containers for mobile devices
      // this is for mobile devices similar to iPhone 5 in portrait mode
    if(deviceRatio < 0.57){

      $(pageContainer).css({
        "overflow": "visible",
        "height": "100%",
      });
      $(headingContainer).css({
        //"font-size": "100%",
        //'height': (headingHeight),
      });
      $(contentContainer).css({
        "height": "100%",
        "overflow": "visible",
      });
      $(contentRight).css({
        "height": "100%",
        "overflow": "visible",
      });
      $(textContainer).css({
        "height": '100%',
        "overflow": "visible",
      });
    };
}, 0025); // closes timeout

    // below adjusts the overflow & height of the containers for mobile devices and desktops in landscape
    if(deviceRatio > 1.3){
      $(pageContainer).css({
        "overflow": "hidden",
        "max-height": (docHeight) + 'px',
        //"box-shadow": "5px 5px 5px red",
      });
      $(headingContainer).css({
        "min-height": (headingHeight + 30) + "px",
        "max-height": (headingHeight*2 + 60) + "px",
        "overflow": "hidden",
      });
      $(contentContainer).css({
        "height": (docHeight - headingHeight) + 'px',
        "overflow": "hidden",
      });
      $(contentRight).css({
        "height": (docHeight - headingHeight) + 'px',
        "overflow": "scroll",
      });
      $(textContainer).css({
        //"height": "100%",
        "overflow": "scroll",
      });
    };
// end containers fixing


}
// end overflow function set










function docReady(){

    // below constrains the size of the following containers to fit the viewable screen

  setTimeout(function(){
      //$(textContainer).css("height", (docHeight - headingHeight - 90) + 'px');
      $(textContainer).animate({
      opacity: '1',
    }, 1000); // animation duration
  }, 3000); // time delay

  overflow(); // call-back to overflow function


  // begin header fade in //


  setTimeout(headerTextResize, 0100);
  setTimeout(headerResize, 1500);
  setTimeout(headerMove, 0100);

  // end header fade in //


  // begin animation for left side/main image
  setTimeout(function(){
    $(contentLeft).css("opacity", "0");
    $(contentLeft).animate({'opacity': "1"}, 3000);
    $("#content-right blockquote p:nth-of-type(2)").css("display", "block");
  }, 0);

  setTimeout(function(){
    $(mainImg).css("width", "115%");
    $(mainImg).animate({'width': "100%"}, 2500);
  }, 0);
  // end animation for left side/main image

  // begin functions for rotating the left side/main image //
  var rotate = 35;
  var imgRotate;

  function rotator(){

      rotate--;
      $(mainImg).css('transform', 'rotate('+rotate+'deg)');
      $(mainImg).css('-webkit-transform', 'rotate('+rotate+'deg)');
      $(mainImg).css('-ms-transform', 'rotate('+rotate+'deg)');
      $(mainImg).css('-moz-transform', 'rotate('+rotate+'deg)');
      //return rotate;

  } // closes rotator()

  if($(mainImg).attr("class") == "img-responsive container-fluid"){
    $(mainImg).addClass("rotateOn");
    imgRotate = "yes";

  } // closes if statement

  for(i=0; i < 35; i++){
    if(imgRotate = "yes"){
      setTimeout(rotator, (i*50));
    } // closes if statement
  } // closes for loop
  // END functions for rotating the left side/main image //

}
// END doc ready functions //

// calls docReady() when onLoadFunctions finishes & the document is ready
if($(document).ready){$.when(onLoadFunctions).then(docReady)};





// Below are the title text focus functions
 function textHoverOff(){
    $(textHover).css({
        "animation-name": "textHoverOff",
     });
 }
   function textHover(){
     $(textHover).css({
         "animation-name": "textHover",
     });
   }
// End title text focus functions

//$(mainImg).mouseover(imgHover);
//$(mainImg).mouseout(imgHoverOff);
//$(textHover).mouseover(textHover);
//$(textHover).mouseout(textHoverOff);


// begin post doc ready functions //
 function postDocReady(){
      setTimeout(function(){
        //$(textContainer).css("height", (docHeight - headingHeight - 90) + 'px');
        $(textContainer).animate({
        opacity: '1',
      }, 1000); // animation duration
    }, 3000); // time delay
};// end post doc ready functions //

// calls postDocReady()
if($(document).ready){$.when(docReady).then(docReady)};

/*
 //re-capture the following variable values
  var headingHeight = $(headingContainer).height();
  var docWidth = document.body.clientWidth;
  var docHeight = document.body.clientHeight;
  var screenWidth = screen.width;
  var screenHeight = screen.height;
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
*/


// Code below will trigger overflow & resizing of containers based on orientation change
$(window).resize(function(){
  overflow();
  headerResize();
  headerTextResize();
  headerMove();
});
