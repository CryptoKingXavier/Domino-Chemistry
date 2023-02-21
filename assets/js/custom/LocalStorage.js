$(document).ready(() => {
    const STRUCT = ['org', 'inorg', 'phy', 'ind', 'apd', 'ana'];
    const LOCAL_DB = localStorage;
    const ID = 'ucid-courses';
    var DATABASE_ARRAY = new Array();

    // Creating DataBase
    const DB_CREATE = (key, arr = new Array()) => {
        LOCAL_DB.setItem(key, JSON.stringify(arr));
    }

    // Reading DataBase
    const DB_READ = (key) => {
        return JSON.parse(LOCAL_DB.getItem(key));
    }

    // Updating Database
    const DB_UPDATE = (id) => {
        $(`#book-${id}`).click(() => {
            if (DB_READ(ID) != undefined && DATABASE_ARRAY.includes(`book-${id}`) == false) {
                DATABASE_ARRAY = DB_READ(ID);
                DATABASE_ARRAY.push(`book-${id}`);
                DB_DELETE(ID);
                DB_CREATE(ID, DATABASE_ARRAY);
            }
        })
    }

    // Deleting DataBase
    const DB_DELETE = (key) => {
        LOCAL_DB.removeItem(key);
    }

    if (DB_READ(ID) == undefined) DB_CREATE(ID)
    DB_UPDATE(STRUCT[0], 'click');
    DB_UPDATE(STRUCT[1], 'click');
    DB_UPDATE(STRUCT[2], 'click');
    DB_UPDATE(STRUCT[3], 'click');
    DB_UPDATE(STRUCT[4], 'click');
    DB_UPDATE(STRUCT[5], 'click');

})


