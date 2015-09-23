module.exports = {
    'pre-commit': function(next){
        var stagedFiles = this.stagedFilesSync('ACM'),
            csscomb = __dirname  + '/.githooks/node_modules/csscomb/bin/csscomb',
            cssTest = /\.css$/;

        stagedFiles.forEach((function(file){
            if(cssTest.test(file)){
                console.log('CSSComb: ' + file);
                this.execSync(csscomb + ' ' + file);
                this.execSync('git', ['add', file]);
            }
        }).bind(this));

        next();
    }
};