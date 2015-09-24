module.exports = {
    'pre-commit': function(next){
        var stagedFiles = this.stagedFilesSync('ACM'),
            csscomb = __dirname  + '/node_modules/csscomb/bin/csscomb',
            cssTest = /\.css$/,
            Uppercode = this;

        stagedFiles.forEach(function(file){
            if(cssTest.test(file)){
                console.log('CSSComb: ' + file);
                Uppercode.exec(csscomb + ' ' + file, function(err, data){
                    if(!err){
                        Uppercode.exec('git', ['add', file]);
                    }
                });
            }
        });

        next();
    }
};