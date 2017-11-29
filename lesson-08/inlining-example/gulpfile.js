// GULP UTILS
var gulp = require("gulp");
var run = require("gulp-run-command").default;
var clean = require("gulp-clean");
var rename = require("gulp-rename");

// INLINER PACKAGES
// ==================================================
var gulpPremailer = require("gulp-premailer");
var gulpJuice = require("premailer-gulp-juice");
var emailBuilder = require('gulp-email-builder');

// FILE PATHS
// ==================================================
var input = "input.html";
var output = "results/";

// CLEANING TASK
// ==================================================
gulp.task("clean", function () {
    return gulp.src("results/*", { read: false })
        .pipe(clean());
});

var purify = "gulp clean";


// INLINER TASKS
// ==================================================
// Gulp-premailer
gulp.task("gPremailer", function () {
    gulp.src(input)
        .pipe(gulpPremailer())
        .pipe(rename("gpremailer.html"))
        .pipe(gulp.dest(output));
});

// Gulp-Juice
gulp.task("gJuice", function () {
    gulp.src(input)
        .pipe(gulpJuice({}))
        .pipe(rename("gJuice.html"))
        .pipe(gulp.dest(output));
});

var gJuice = "gulp gJuice";

// Email-Builder
gulp.task('eBuilder', function () {
    var options = {
        encodeSpecialChars: true,
        relativePath: '/' }
    return gulp.src([input])
        .pipe(emailBuilder(options).inlineCss())
        .pipe(rename("emailBuilder.html"))
        .pipe(gulp.dest(output));
});

var eBuilder = "gulp eBuilder";


// Runing multiple inlining task with "default" task
gulp.task("default", run([
    gPremailer, gJuice, eBuilder,
]));