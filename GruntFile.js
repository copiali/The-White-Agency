module.exports = function(grunt) {
	var gtx = require('gruntfile-gtx').wrap(grunt);

    gtx.loadAuto();

    var gruntConfig = require('./grunt');
    gruntConfig.package = require('./package.json');

    gtx.config(gruntConfig);
    
	
    // We need our bower components in order to develop
    gtx.alias('build:angular', ['clean:angular', 'copy:angular', 'clean:angulars', 'recess:min', 'concat:angular', 'uglify:angular']);

    gtx.finalise();
}