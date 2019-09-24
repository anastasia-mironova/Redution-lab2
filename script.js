document.getElementById("strict").onclick = reduxStrict;
document.getElementById("notStrict").onclick = reduxNotStrict;

document.getElementById("var1").onclick = checkClick;
document.getElementById("var3").onclick = checkClick;
document.getElementById("var8").onclick = checkClick;
document.getElementById("primer").onclick = checkClick;

function outPutMassive(reduxion, id) {
    let text1 = "";
    for (let i = 0; i < reduxion.length; i++) {
        for (let j = 0; j < reduxion[0].length; j++) {
            text1 += String(reduxion[i][j]) + " ";
            if (j == reduxion[0].length - 1) {
                text1 += "\n";
            }
        };

    };


    let text = document.getElementById(id).value = text1;
}
function checkClick(){
if (document.getElementById("var1").checked == true){
    document.getElementById("var2").checked = false;
    document.getElementById("var8").checked = false;
    document.getElementById("primer").checked = false;
};

if (document.getElementById("var2").checked == true){
    document.getElementById("var1").checked = false;
    document.getElementById("var8").checked = false;
    document.getElementById("primer").checked = false;
};
if (document.getElementById("var8").checked == true){
    document.getElementById("var2").checked = false;
    document.getElementById("var1").checked = false;
    document.getElementById("primer").checked = false;
};
if (document.getElementById("primer").checked == true){
    document.getElementById("var2").checked = false;
    document.getElementById("var8").checked = false;
    document.getElementById("var1").checked = false;
};

};
let var1 = [[-31, -4, 43, 3, 29, 42],
    [-59, -50, -23, 25, -34, -62],
    [-42, -8, -1, 11, -32, -22],
    [24, -74, -23, -20, 2, -47],
    [-61, -67, 34, 10, -30, 42],
    [-31, -13, 35, 11, -62, -16]];

    let var3 = [[24, -12, 32, 14, 39],
    [-9, -12, -7, -11, -41],
    [-14, -33, -40, -69, -14],
    [-43, -25, 35, -73, -25],
    [9, 6, 41, -48, -32],
    [44, 21, 12, -19, 39]];
let var8 = [[-56, 7, -54, -74, -71, -72],
    [-52, 30, -31, -51, -28, 42],
    [-46, -52, -68, -12, -59, -75],
    [-46, 4, -54, -16, -54, 6],
    [-54, 39, -57, -47, -47, -6],
    [-48, 32, -67, -16, -8, 0]];

    let primer =   [[-58,-17,-44,-31,16,15],
                        [32,-12,-42,-53,25,39],
                        [36,11,-42,38,37,20],
                        [-49,-72,27,-13,1,-26],
                        [11,-14,-48,-10,-25,-18]];  

  



function reduxStrict(tempArr) {
  
    
//let reduxion = _.cloneDeep(getArr()); 
    let reduxion ;
    if (document.getElementById("var1").checked == true){

        reduxion = _.clone(var1);
    }else{
        if (document.getElementById("var3").checked == true){
            reduxion = _.clone(var3);
        } else {
            if (document.getElementById("primer").checked == true){
                reduxion = _.clone(primer);
            };
        }
    };
    // let reduxion = [[-56, 7, -54, -74, -71, -72],
    // [-52, 30, -31, -51, -28, 42],
    // [-46, -52, -68, -12, -59, -75],
    // [-46, 4, -54, -16, -54, 6],
    // [-54, 39, -57, -47, -47, -6],
    // [-48, 32, -67, -16, -8, 0]];
   
    //   let reduxion =   [[-58,-17,-44,-31,16,15],
    //                     [32,-12,-42,-53,25,39],
    //                     [36,11,-42,38,37,20],
    //                     [-49,-72,27,-13,1,-26],
    //                     [11,-14,-48,-10,-25,-18]];  
                       outPutMassive(reduxion,"textareaInp");

    function compareRow(num, reduxion1, numCol, type) {
        let delRow = [];
        let isDel = 0;

        for (let i = 0; i < reduxion1.length; i++) {
            for (let j = 0; j < numCol; j++) {
                if (i != num) {
                    if (type == 0) {
                        if (reduxion1[num][j] > reduxion1[i][j]) {
                            isDel++;
                        };
                    };
                    if (type == 1) {
                        if (reduxion1[num][j] < reduxion1[i][j]) {
                            isDel++;
                        };
                    };
                };
            };

            if (isDel === numCol) {
                delRow.push(i);
                isDel = 0;
            } else {
                isDel = 0;
            };
        };


        return delRow;
    };



    function rowEquals(fuckRow, el) {
        if (fuckRow.length == 0) {
            return true;
        } else {
            for (let i = 0; i < fuckRow.length; i++) {
                if (fuckRow[i] == el) {
                    return false;
                };

            };
            return true;
        };

    };


    let temp;
    function pushDelRow(type) {
        let fuckRow = [];
        for (let num = 0; num < reduxion.length; num++) {
            for (let k = 0; k < compareRow(num, reduxion, reduxion[0].length, type).length; k++) {
                if (rowEquals(fuckRow, compareRow(num, reduxion, reduxion[0].length, type)[k])) {
                    fuckRow.push(compareRow(num, reduxion, reduxion[0].length, type)[k]);
                };
            };
        };

        console.log(fuckRow);
        temp = _.cloneDeep(fuckRow);
        console.log("temp");
        console.log(temp);
    };
    pushDelRow(0);


    function deleteRow() {
        let newArray = [];

        for (let i = 0; i < reduxion.length; i++) {
            if (!temp.includes(i)) {
                newArray.push(reduxion[i]);
            };

        };

        reduxion = _.cloneDeep(newArray);
        console.log("reduxion");
        console.log(reduxion);
    };
    deleteRow();

    function tranpose(matrix) {
        return _.zip(...matrix);
    };
    console.log("reduxion");
    console.log(reduxion);
    console.log(" transpreduxion");
    reduxion = _.cloneDeep(tranpose(reduxion));
    pushDelRow(1);
    deleteRow();
    reduxion = _.cloneDeep(tranpose(reduxion));
    console.log(reduxion);

    outPutMassive(reduxion,"textarea");


}
function reduxNotStrict() {
    // let reduxion =   [[-56,7,-54,-74,-71,-72],
    //                 [-52,30,-31,-51,-28,42],
    //                 [-46,-52,-68,-12,-59,-75],
    //                 [-46,4,-54,-16,-54,6],
    //                 [-54,39,-57,-47,-47,-6],
    //                 [-48,32,-67,-16,-8,0]];

    // let reduxion = [[-58, -17, -44, -31, 16, 15],
    // [32, -12, -42, -53, 25, 39],
    // [36, 11, -42, 38, 37, 20],
    // [-49, -72, 27, -13, 1, -26],
    // [11, -14, -48, -10, -25, -18]];
    let reduxion ;
    if (document.getElementById("var1").checked == true){

        reduxion = _.clone(var1);
    }else{
        if (document.getElementById("var3").checked == true){
            reduxion = _.clone(var3);
        } else {
            if (document.getElementById("primer").checked == true){
                reduxion = _.clone(primer);
            };
        }
    };
    function compareRow(num, reduxion1, numCol, type) {
        let delRow = [];
        let isDel = 0;

        for (let i = 0; i < reduxion1.length; i++) {
            for (let j = 0; j < numCol; j++) {
                if (i != num) {
                    if (type == 0) {
                        if (reduxion1[num][j] >= reduxion1[i][j]) {
                            isDel++;
                        };
                    };
                    if (type == 1) {
                        if (reduxion1[num][j] <= reduxion1[i][j]) {
                            isDel++;
                        };
                    };
                };
            };

            if (isDel === numCol) {
                delRow.push(i);
                isDel = 0;
            } else {
                isDel = 0;
            };
        };


        return delRow;
    };



    function rowEquals(fuckRow, el) {
        if (fuckRow.length == 0) {
            return true;
        } else {
            for (let i = 0; i < fuckRow.length; i++) {
                if (fuckRow[i] == el) {
                    return false;
                };

            };
            return true;
        };

    };


    let temp;
    function pushDelRow(type) {
        let fuckRow = [];
        for (let num = 0; num < reduxion.length; num++) {
            for (let k = 0; k < compareRow(num, reduxion, reduxion[0].length, type).length; k++) {
                if (rowEquals(fuckRow, compareRow(num, reduxion, reduxion[0].length, type)[k])) {
                    fuckRow.push(compareRow(num, reduxion, reduxion[0].length, type)[k]);
                };
            };
        };

        console.log(fuckRow);
        temp = _.cloneDeep(fuckRow);
        console.log("temp");
        console.log(temp);
    };
    pushDelRow(0);


    function deleteRow() {
        let newArray = [];

        for (let i = 0; i < reduxion.length; i++) {
            if (!temp.includes(i)) {
                newArray.push(reduxion[i]);
            };

        };

        reduxion = _.cloneDeep(newArray);
        console.log("reduxion");
        console.log(reduxion);
    };
    deleteRow();

    function tranpose(matrix) {
        return _.zip(...matrix);
    };
    console.log("reduxion");
    console.log(reduxion);
    console.log(" transpreduxion");
    reduxion = _.cloneDeep(tranpose(reduxion));
    pushDelRow(1);
    deleteRow();
    reduxion = _.cloneDeep(tranpose(reduxion));
    console.log(reduxion);
    pushDelRow(0);
    deleteRow();
    reduxion = _.cloneDeep(tranpose(reduxion));
    pushDelRow(1);
    deleteRow();
    reduxion = _.cloneDeep(tranpose(reduxion));
    outPutMassive(reduxion,"textarea");
}