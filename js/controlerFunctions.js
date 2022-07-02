// Selecting all sections with class of section
$(document).ready(function () {
  const sections = document.querySelectorAll('.section');
  const innerSections = document.querySelectorAll('.tabSection');
  // console.log(sections);
  // On click event for each section
  sections.forEach((section)=>{
    section.addEventListener('click',()=>{
      // console.log("click");
      // remove active class from all another section
      // and add it to the selected section
      sections.forEach((section) => {
        // console.log(section.classList);
        section.classList.remove('active');

        // section.child().toggle();
      });
      section.classList.add('active');

      // toggle visibility
      var innerS = section.lastElementChild; // TODO do this by class name/selector
      // console.log(section.children);
      innerS.css("display");
      // innerS.toggle('.hidden');
      // console.log(innerS.css("display"));
      // console.log(innerS);
    });
  });
});



// toggle sections
// $('#GFG_UP').text(
// "Click on button to toggle the DIV Box using Bootstrap.");
//
//         function toggler(divId) {
//             $("#" + divId).toggle();
//         }
//
//         function GFG_Fun() {
//             toggler('div');
//             $('#GFG_DOWN').text("DIV Box is toggling.");
//         }



//
// $(document).ready(function () {
//   const sections = document.querySelectorAll('.section');
//   console.log(sections);
//   // On click event for each section
//   sections.forEach((section)=>{
//
//     section.addEventListener('click',()=>{
//
//       console.log("click");
//       // remove active class from all another section
//       // and add it to the selected section
//       sections.forEach((section) => {
//         console.log(section.classList);
//         section.classList.remove('active');
//       });
//       section.classList.add('active');
//     });
//   });
// });

// element.addEventListener("click", function() {
//   document.getElementById("demo").innerHTML = "Hello World";
// });

// $(document).ready(function () {
//   $("[contenteditable='true']").keydown(function(e) { // NOTE very annoying double quote
//       // trap the return key being pressed
//       if (e.keyCode == 13) {
//         // insert br tags, optional <br><br>
//         document.execCommand('insertHTML', false, '<br>');
//         // prevent the default behaviour of return key pressed
//         return false;
//       }
//     });
// });


// // size
// function updateSize(target) {
//   control = target + ' controlers';
//   var currclass = document.getElementsByClassName(control)[0];
//   var trgtclass = document.getElementsByClassName(target);
//   // console.log(trgtclass);
//   var v = currclass.getElementsByClassName("sizeInput")[0].value;
//   for (let i = 0; i < trgtclass.length; i++) {
//     trgtclass[i].style.fontSize = v + "px"; // update value
//   }
//   currclass.getElementsByClassName("sizeLabel")[0].innerHTML = v; // update label
// }
//
// // shared parameter function
// function updateAxis(target, mainAxis, secondaryAxis) {
//   control = target + ' controlers';
//   var currclass = document.getElementsByClassName(control)[0];
//   var trgtclass = document.getElementsByClassName(target);
//   var v = currclass.getElementsByClassName(mainAxis + "Input")[0].value;
//   var secondary_v = currclass.getElementsByClassName(secondaryAxis + "Input")[0].value;
//   for (let i = 0; i < trgtclass.length; i++) {
//     trgtclass[i].style.fontVariationSettings = pad(mainAxis) + v + ', ' + pad(secondaryAxis) + secondary_v ; // update value + keep other axis value
//   }
//   currclass.getElementsByClassName(mainAxis+"Label")[0].innerHTML = v; // update label
// }
//
//  // specific function wrappers
// function updateWght(target, secondaryAxis) {
//   updateAxis(target, 'wght', secondaryAxis);
// }
//
// function updateMono(target) {
//   updateAxis(target, 'mono', 'wght');
// }
//
// function updateOpsz(target) {
//   updateAxis(target, 'opsz', 'wght');
// }
//
// function updateWdth(target) {
//   updateAxis(target, 'wdth', 'wght');
// }
//
// function pad(string){
//   return '"' + string + '"';
// }
//
// // prevent <Enter> creating new div in editable text
// $(document).ready(function () {
//   $("[contenteditable='true']").keydown(function(e) { // NOTE very annoying double quote
//       // trap the return key being pressed
//       if (e.keyCode == 13) {
//         // insert br tags, optional <br><br>
//         document.execCommand('insertHTML', false, '<br>');
//         // prevent the default behaviour of return key pressed
//         return false;
//       }
//     });
// });
//
// // enforce plaintext upon 'paste'
// $(document).ready(function () {
//     $('[contenteditable]').on('paste', function(e) {
//       e.preventDefault();
//       var text = '';
//       if (e.clipboardData || e.originalEvent.clipboardData) {
//         text = (e.originalEvent || e).clipboardData.getData('text/plain');
//       } else if (window.clipboardData) {
//         text = window.clipboardData.getData('Text');
//       }
//       if (document.queryCommandSupported('insertText')) {
//         document.execCommand('insertText', false, text);
//       } else {
//         document.execCommand('paste', false, text);
//       }
//   });
// });
