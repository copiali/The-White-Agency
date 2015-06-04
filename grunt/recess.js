module.exports = {
    min: {
        files: {
            'angular/css/app.min.css': [
                'src/css/bootstrap.min.css',
                'src/css/*.css'
            ]
        },
        options: {
            compress: true
        }
    }
}