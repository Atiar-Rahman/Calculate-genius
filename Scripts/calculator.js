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