$(document).ready(() => {
    const ID = 'ucid-courses';
    const STRUCT = ['organic', 'inorganic', 'physical', 'industrial', 'applied', 'analytical']
    const DB_STRUCT = {
        'book-org': `${STRUCT[0]}`,
        'book-inorg': `${STRUCT[1]}`,
        'book-phy': `${STRUCT[2]}`,
        'book-ind': `${STRUCT[3]}`,
        'book-apd': `${STRUCT[4]}`,
        'book-ana': `${STRUCT[5]}`
    }

    const LOCAL_DB = localStorage;
    var SIZE;

    $("#clear-db").click(() => {
        LOCAL_DB.removeItem(ID);
        setTimeout(() => {
            location.reload();
        }, 500);
    });

    const Hide = (id) => $(`#${id}-card`).hide();

    const Show = (id) => $(`#${id}-card`).fadeToggle(3000);

    for (i=0; i<STRUCT.length; i++) Hide(STRUCT[i])

    var DATABASE_ARRAY = JSON.parse(LOCAL_DB.getItem('ucid-courses'))

    if (DATABASE_ARRAY == undefined) {
        SIZE = 0;
    } else {
        SIZE = DATABASE_ARRAY.length;
    }

    document.getElementById("booked-count").innerHTML = SIZE;
    if (SIZE == 0) {
        alert("You Haven't Booked Any Course Yet!");
        setTimeout(() => {
            alert("Redirecting You To The Available Courses!");
            location.href = "courses.html";
        }, 10000)
    }

    for (i=0; i<DATABASE_ARRAY.length; i++) Show(DB_STRUCT[DATABASE_ARRAY[i]])

    const Render = (id) => {
        $(`#${id}-chem`).click(() => {
            Hide(`${id}`);
            if (id == STRUCT[0]) {
                DATABASE_ARRAY.splice(DATABASE_ARRAY.indexOf('book-org'), 1);
            } else if (id == STRUCT[1]) {
                DATABASE_ARRAY.splice(DATABASE_ARRAY.indexOf('book-inorg'), 1);
            } else if (id == STRUCT[2]) {
                DATABASE_ARRAY.splice(DATABASE_ARRAY.indexOf('book-phy'), 1);
            } else if (id == STRUCT[3]) {
                DATABASE_ARRAY.splice(DATABASE_ARRAY.indexOf('book-ind'), 1);
            } else if (id == STRUCT[4]) {
                DATABASE_ARRAY.splice(DATABASE_ARRAY.indexOf('book-apd'), 1);
            } else if (id == STRUCT[5]) {
                DATABASE_ARRAY.splice(DATABASE_ARRAY.indexOf('book-ana'), 1);
            }
            LOCAL_DB.removeItem(ID);
            if (DATABASE_ARRAY.length == 0) {
                DATABASE_ARRAY = new Array();
            }
            LOCAL_DB.setItem(ID, JSON.stringify(DATABASE_ARRAY));
            setTimeout(() => location.reload(), 1000);
        })
    }

    for (i=0; i<STRUCT.length; i++) Render(STRUCT[i])
})

