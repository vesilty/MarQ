var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');


paths = {
		'bower': './bower_components'
	};

gulp.task('scss', function() {
	  return gulp.src(['scss/**/*.scss',
	                   'scss/*.scss'
	   ])
		.pipe(sass())
		// .pipe(uglifycss())
	    .pipe(gulp.dest('app/assets/css/'))
	});
gulp.task('clean:dist', function() {
	  return del.sync('dist');
	})

//Copy, compile, minify all scripts
gulp.task('scripts', function(){
	gulp.src([
		paths.bower + '/jquery/dist/jquery.js',
		paths.bower + '/jquery-validation/dist/jquery.validate.js',
		paths.bower + '/popper.js/dist/umd/popper.js',
		paths.bower + '/bootstrap/dist/js/bootstrap.js',
		paths.bower + '/bootstrap-select/dist/js/bootstrap-select.js',
		paths.bower + '/jquery-slimscroll/jquery.slimscroll.min.js',
		paths.bower + '/materialize/dist/js/materialize.js',
		paths.bower + '/Waves/dist/waves.js',
		paths.bower + '/bootstrap-sweetalert/dist/sweetalert.min.js',
		paths.bower + '/jquery-countTo/jquery.countTo.js',
		paths.bower + '/jquery-sparkline/dist/jquery.sparkline.js',
		paths.bower + '/jquery-ui/jquery-ui.min.js',
		paths.bower + '/momentjs/min/moment.min.js',
		paths.bower + '/remarkable-bootstrap-notify/dist/bootstrap-notify.js',
		paths.bower + '/jquery.nestable/jquery.nestable.js',
		paths.bower + '/wait-me/src/waitMe.js',
		paths.bower + '/fullcalendar/dist/fullcalendar.min.js',
		paths.bower + '/owl.carousel/dist/owl.carousel.min.js',
		
		
	])
	.pipe(concat('app.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/assets/js/'));
});

//Copy, compile, minify all chart script
gulp.task('chart', function(){
	gulp.src([
		paths.bower + '/morris.js/morris.js',
		paths.bower + '/raphael/raphael.min.js',
		paths.bower + '/chart.js/dist/Chart.bundle.js',
		paths.bower + '/Flot/jquery.flot.js',
		paths.bower + '/Flot/jquery.flot.resize.js',
		paths.bower + '/Flot/jquery.flot.pie.js',
		paths.bower + '/Flot/jquery.flot.categories.js',
		paths.bower + '/Flot/jquery.flot.time.js',
		paths.bower + '/jquery-knob/dist/jquery.knob.min.js',
	])
	.pipe(concat('chart.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/assets/js/'));
});
//Copy, compile, minify all form script
gulp.task('form', function(){
	gulp.src([
	    paths.bower + '/autosize/dist/autosize.js',
		paths.bower + '/dropzone/dist/dropzone.js',
		paths.bower + '/inputmask/dist/min/jquery.inputmask.bundle.min.js',
		paths.bower + '/jquery.spinner/dist/js/jquery.spinner.js',
		paths.bower + '/bootstrap-tagsinput/dist/bootstrap-tagsinput.js',
		paths.bower + '/nouislider/distribute/nouislider.js',
		paths.bower + '/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js',
		paths.bower + '/jquery.steps/build/jquery.steps.js',
		
	])
	.pipe(concat('form.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/assets/js/'));
});
//Copy, compile, minify all table script
gulp.task('table', function(){
	gulp.src([
		paths.bower + '/datatables/media/js/jquery.dataTables.js',
		paths.bower + '/datatables/media/js/dataTables.bootstrap4.js',
		paths.bower + '/jquery-datatable/extensions/export/dataTables.buttons.min.js',
		paths.bower + '/jquery-datatable/extensions/export/buttons.flash.min.js',
		paths.bower + '/jquery-datatable/extensions/export/jszip.min.js',
		paths.bower + '/jquery-datatable/extensions/export/pdfmake.min.js',
		paths.bower + '/jquery-datatable/extensions/export/vfs_fonts.js',
		paths.bower + '/jquery-datatable/extensions/export/buttons.html5.min.js',
		paths.bower + '/jquery-datatable/extensions/export/buttons.print.min.js',
		paths.bower + '/editable-table/mindmup-editabletable.js',    
		
	])
	.pipe(concat('table.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/assets/js/'));
});
//Copy, compile, minify all map script
gulp.task('map', function(){
	gulp.src([
		paths.bower + '/gmaps/gmaps.js',
		paths.bower + '/jqvmap/dist/jquery.vmap.min.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.world.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.usa.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.russia.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.europe.js',
		paths.bower + '/jqvmap/dist/maps/jquery.vmap.germany.js',
	])
	.pipe(concat('map.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/assets/js/'));
});
//Copy, compile, minify all plugins styles
gulp.task('style', function(){
	return gulp.src([
	    paths.bower + '/materialize/dist/css/materialize.css',
		paths.bower + '/bootstrap/dist/css/bootstrap.css',
		paths.bower + '/simple-line-icons/css/simple-line-icons.css',
		paths.bower + '/Waves/dist/waves.css',
		paths.bower + '/animate.css/animate.css',
		paths.bower + '/morris.js/morris.css',
		paths.bower + '/wait-me/src/waitMe.css',
		paths.bower + '/bootstrap-sweetalert/dist/sweetalert.css',
		paths.bower + '/jqvmap/dist/jqvmap.min.css',
		paths.bower + '/datatables/media/css/dataTables.bootstrap4.css',
		paths.bower + '/jquery.nestable/jquery.nestable.css',
		paths.bower + '/fullcalendar/dist/fullcalendar.min.css',
		paths.bower + '/owl.carousel/dist/assets/owl.carousel.min.css',
		paths.bower + '/owl.carousel/dist/assets/owl.theme.default.min.css'
	
	])
	.pipe(concat('app.min.css'))
	.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
	.pipe(uglifycss())
	.pipe(gulp.dest('app/assets/css/'));
});
//Copy, compile, minify all forms styles
gulp.task('formStyle', function(){
	return gulp.src([
		paths.bower + '/dropzone/dist/dropzone.css',
		paths.bower + '/jquery.spinner/dist/css/bootstrap-spinner.css',
		paths.bower + '/bootstrap-tagsinput/dist/bootstrap-tagsinput.css',
		paths.bower + '/bootstrap-select/dist/css/bootstrap-select.css',
		paths.bower + '/nouislider/distribute/nouislider.min.css',
		paths.bower + '/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css',
	
	])
	.pipe(concat('form.min.css'))
	.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
	.pipe(uglifycss())
	.pipe(gulp.dest('app/assets/css/'));
});


gulp.task('start', ['scss','scripts','style','chart','form','table','map','formStyle'/*,'watch'*/]);

gulp.task('default', function (callback) {
	  runSequence('clean:dist', 
	    ['start'],
	    callback
	  )
	})