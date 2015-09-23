module.exports = {
    'pre-commit': function(next){
        var stagedFiles = this.stagedFilesSync('ACM'),
            cssTest = /\.css$/;

        stagedFiles.forEach((function(file){
            if(cssTest.test(file)){
                console.log('CSSComb: ' + file);
                this.execSync('csscomb ' + file);
            }
        }).bind(this));

        next();
    }
};