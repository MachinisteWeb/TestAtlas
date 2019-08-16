exports.changeVariations = function (next, locals, request, response) {

    console.log("param request:", request.params.member);
    // \> undefined, 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.
    console.log("param variation:", locals.params.member);
    // \> undefined, 'toto', 'bob-eponge99', 'node-atlas' or 'etc'.

    console.log("param request", request.params.action);
    // \> undefined, 'show' or 'lolol'.
    console.log("param variation", locals.params.action);
    // \> undefined, 'show' or 'lolol'.

    console.log("query request", request.query.example);
    // \> undefined or 'test'
    console.log("query variation", locals.query.example);
    // \> undefined or 'test'

    console.log("body request", request.body.test);
    // \> undefined or 'This is a test'.
    console.log("body variation", locals.body.test);
    // \> undefined or 'This is a test'.

    next();
};