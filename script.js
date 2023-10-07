const section = document.getElementById("main-container");
const body = document.getElementById("body");

for(let i=65; i<=90; i++){
    let char =String.fromCharCode(i);
    const bold = document.createElement("b");
    bold.className = "style";
    bold.innerText = char;
    section .appendChild(bold);
}

function createAndAppendChild(NumberRow){
const Row2= document.createElement("div");

Row2.className="row";
for(let i=64; i<=90; i++){
    if(i===64)
    {
        let boldElement = document.createElement("B");
        boldElement.innerText = NumberRow;
        //  boldElement.id=`${String.fromCharCode(i)} ${NumberRow}`;
        //  boldElement.addEventListener("focus", onCellfocus);
        //  boldElement.contentEditable="true";
        Row2.appendChild(boldElement);
    }
    else{
        let div = document.createElement("div");
        div.id=`${String.fromCharCode(i)} ${NumberRow}`;
        div.addEventListener("focus", onCellfocus);
        div.contentEditable="true";
        Row2.appendChild(div);
    }
    
}
body.appendChild(Row2);
}

for(let i=1; i<=100; i++){
    createAndAppendChild(i);
}

const activeCellElement = document.getElementById("active-cell");

let activeCell = null;
let activeOptionsState;
 function onCellfocus(e){
    // activeCellElement.innerText= (e.target.id);
    activeCell = e.target;
  activeCellElement.innerText = e.target.id;
  // intialise the state of this cell.
  const computedStyle = getComputedStyle(activeCell);

  activeOptionsState = {
    fontFamily: computedStyle.fontFamily,
    isBoldSelected: computedStyle.fontWeight === "600",
    isItalicSelected: computedStyle.fontStyle === "italic",
    isUnderLineSelected: computedStyle.textDecoration === "underline",
    textAlign: computedStyle.textAlign,
    textColor: computedStyle.color,
    backgroundColor: computedStyle.backgroundColor,
    fontSize: computedStyle.fontSize,
    fontFamily: computedStyle.fontFamily,
  };
 }

 function onClickBold(boldButton){
    
    boldButton.classList.toggle("active-option");
  if (activeCell) {
    if (activeOptionsState.isBoldSelected === false) {
      // make the text to bold
      activeCell.style.fontWeight = "600";
    } else {
      // make the text to normal
      activeCell.style.fontWeight = "400";
    }
    activeOptionsState.isBoldSelected = !activeOptionsState.isBoldSelected;
  }
 }

 function onClickItalic(italicButton){
    italicButton.classList.toggle("active-option");
    if(activeCell)
    {
        if(activeOptionsState.isItalicSelected){
              activeCell.style.fontStyle="normal";
        }
        else{
            activeCell.style.fontStyle="italic";
        }
        activeOptionsState.isItalicSelected = !activeOptionsState.isItalicSelected;
    }
 }

 function onClickUnderline(underlinedButton) {
    underlinedButton.classList.toggle("active-option");
    if (activeCell) {
      if (activeOptionsState.isUnderLineSelected) {
        // if the text is underlined => none
        activeCell.style.textDecoration = "none";
      } else {
        activeCell.style.textDecoration = "underline";
      }
      activeOptionsState.isUnderLineSelected =
        !activeOptionsState.isUnderLineSelected;
    }
  }
  const textAlignElements = document.getElementsByClassName("text-align");


 function highlightTextAlignButtons(textAlignValue) {
  // textAlignValue === "left" => we have to highlight only left button
  // textAlignValue === "right" => we have to highlight only right button
  // textAlignValue === "center" => we have to highlight only center button
  for (let i = 0; i < textAlignElements.length; i++) {
    
    if (textAlignElements[i].getAttribute("data-value") === textAlignValue) {
      textAlignElements[i].classList.add("active-option");
    } else {
      textAlignElements[i].classList.remove("active-option");
    }
  }
}

function onClickTextAlign(textAlignButton) {
  let selectedValue = textAlignButton.getAttribute("data-value");
  highlightTextAlignButtons(selectedValue);

  // change the text alignment.
  if (activeCell) {
    activeCell.style.textAlign = selectedValue;
    activeOptionsState.textAlign = selectedValue;
  }
}

function onChangeTextColor(textColorInput) {
  let selectedColor = textColorInput.value;
  if (activeCell) {
    activeCell.style.color = selectedColor;
    activeOptionsState.color = selectedColor;
  }
}

function onChangeBackgroundColor(textColorInput) {
  let selectedColor = textColorInput.value;
  if (activeCell) {
    activeCell.style.backgroundColor = selectedColor;
    activeOptionsState.backgroundColor = selectedColor;
  }
}

const fontSizeElement = document.getElementById("fontSize");

function updateFontSize(fontSizeValue){
  const selectedFontSize=fontSizeValue.value;
  if(activeCell){
    activeCell.style.fontSize=selectedFontSize;
    activeOptionsState.fontSize=selectedFontSize;
   }
}

const fontFamilyElement = document.getElementById("fontFamily");


function onClickFontFamily(fontFamilyValue){
  const selectedFontStyle=fontFamilyValue.value;
  console.log(selectedFontStyle)
  if(activeCell){
    activeCell.style.fontFamily=selectedFontStyle;
    activeOptionsState.fontFamily=selectedFontStyle;
   }
}




 
 