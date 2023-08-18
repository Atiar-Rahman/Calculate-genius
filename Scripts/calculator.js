function calculateTriangle() {
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);



    // get triangleHeight
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;
    console.log(area);

    // show triangle area
    const areaTriangle = document.getElementById('triangle-area');
    areaTriangle.innerText = area;
}

function calculateRectangleArea () {
    // get rectangle width

    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    // get rectangle length

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);


    // validate input
    if (isNaN(width)) {
        alert('please provide  a number');
        return;
    }
    if (isNaN(length)) {
        alert('please provide  a number');
        return;
    }

    const area = width * length;
    const areaRectangle = document.getElementById('rectangle-area');
    areaRectangle.innerText = area;
}

// ellipse card function
function calculateEllipseArea() {
    const major = getInputValue('ellipse-major-radius');
    const minor = getInputValue('ellipse-minor-radius');

    const area = 3.1416 * major * minor;
    setElementInnerText('ellipse-area', area);
}
// resable function

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-hight');
    const area = base * height;
    setElementInnerText('parallelogram-area', area);

    // add to calculation entry
    addToCalculationEntry('parallelogram', area);
}


function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// reuse able set text
function setElementInnerText(elementId,area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}

// added the calculation  entry
/*
1. get the element where you want to add the dynamic html
2. create an element you want to add
3. if needed add some class
4. set innerHtml. it could be dynamic Template string
5. append the created element as a child of the parent.
*/

function addToCalculationEntry(areaType, area) {
    const calculationEntry = document.getElementById('calculation-entry');
    const p = document.createElement('p');
    p.innerHTML = areaType+ ' '+area;
    calculationEntry.appendChild(p);

}



//data validation
/*
1. set the  proper type of the input field. (number,data,email)
2. check type using typeof
3. NaN means: not a number. isNaN is chech\king wether the input is not a number or not


*/