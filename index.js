module.exports = {
    'pre-commit': function(next){
        var stagedFiles = this.stagedFilesSync('ACM');

        console.log(stagedFiles);

        next();
    }
};