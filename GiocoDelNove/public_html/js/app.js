var APP = {
    array1: ["A", "B", "C", "D", "E", "F", "G", "H", "-"],
    arrayFin: ["A", "B", "C", "D", "E", "F", "G", "H", "-"],

    dizPosVicine: {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4, 6],
        4: [1, 5, 7, 3],
        5: [2, 8, 4],
        6: [3, 7],
        7: [4, 8, 6],
        8: [5, 7]
    },

    mescola: function (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    },

    callBack_inizioGioco: function (event) {
        event.preventDefault();
        APP.mescola(APP.array1);
        APP.printBottoni();
    },

    printBottoni: function () {
        for (var i = 0; i < 9; i++) {
            $('#btn' + i).html(APP.array1[i]);
        }
    },

    fineGioco: function () {
        var esito = true;
        for (var i = 0; i < 9; i++) {
            if (APP.arrayFin[i] !== APP.array1[i]) {
                esito = false;
            }
        }
        return esito;
    },

    mossa: function (idBtn) {
        var posVicine = APP.dizPosVicine[idBtn];
        var mossaCorretta = false;

        posVicine.forEach(function(i) {
            if(APP.array1[i] === "-") {
                mossaCorretta = true;
                APP.array1[i] = APP.array1[idBtn];
                APP.array1[idBtn] = "-";
            }
        });

        if (mossaCorretta) {
            $("#esito").html("");
            APP.printBottoni();
        } else {
            $("#esito").html("mossa sbagliata");
        }
        
        if (APP.fineGioco()) {
            $("#esito").html("Hai vinto!");
        }
    }
};

$(document).ready(function () {
    $('#btn0').on('click', function (event) {
        event.preventDefault();
        APP.mossa(0);
    }),
            $('#btn1').on('click', function (event) {
        event.preventDefault();
        APP.mossa(1);
    }),
            $('#btn2').on('click', function (event) {
        event.preventDefault();
        APP.mossa(2);
    }),
            $('#btn3').on('click', function (event) {
        event.preventDefault();
        APP.mossa(3);
    }),
            $('#btn4').on('click', function (event) {
        event.preventDefault();
        APP.mossa(4);
    }),
            $('#btn5').on('click', function (event) {
        event.preventDefault();
        APP.mossa(5);
    }),
            $('#btn6').on('click', function (event) {
        event.preventDefault();
        APP.mossa(6);
    }),
            $('#btn7').on('click', function (event) {
        event.preventDefault();
        APP.mossa(7);
    }),
            $('#btn8').on('click', function (event) {
        event.preventDefault();
        APP.mossa(8);
    }),
            $("#inizio_gioco").on('click', APP.callBack_inizioGioco);
});