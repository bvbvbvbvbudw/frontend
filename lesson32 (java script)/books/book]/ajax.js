// AJAX
$.ajax({
    url: 'index.php',
    dataType: 'json',
    type: 'Get', // or Post(safery request)
    async: true, // or false(default : false)
    data: { 'name': 'Oleg' },
    success: function (data) {
        // output date in html
        console.log(data)
    },
    error: function (xhr, exception) {
        // output date in html
        let msg = '';

        if (xhr.status == 404) {
            // type what it is error
            msg = 'page or data not found(404)' + xhr.responseText; // backend . ;; frontend +
        } // or 500 number error
        console.log(msg)
    },
});


//                      JSON
// json_encode()
// json_decode()

// json_encode(json_decode(data))


// ` {}  ` !!! ```````````````````````````````````` ~!!
`{
    name: 'Sofija',
    text: 'Hello,World!'
}`

let ast = {
    name: 'Sofija',
    text: 'Hello,World!',
    arr:{
        first:1,
        second:2,
    }
}
ast.name // output name Sofija
ast.arr.first // output first 1