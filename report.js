const newman = require('newman');

newman.run({
    ///collection:require('./collection/dmoney.json'),
    collection:'https://api.postman.com/collections/27427115-6a6d14d8-9fb4-41ec-b326-0cf9fa42a1f4?access_key=PMAT-01H1C6HHNJ6WRGG9MS3Z1Z90ZP',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter:{
        htmlextra:{
            export:'./Reports/report.html',
        }
    }    
}, function (err) {
    if(err) { throw err; }
    console.log('collection run complete!');
});