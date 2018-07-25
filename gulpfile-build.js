const gulp = require('gulp');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');
const proxy = require('http-proxy-middleware');
const rev = require('gulp-rev');
const revCollector = require('gulp-rev-collector');
const del = require('del');//删除文件和文件夹
const minjs = require('gulp-uglify');
const mincss = require('gulp-minify-css');
const minhtml = require('gulp-minify-html');
const sequence = require('gulp-sequence');
const babel = require('gulp-babel');

gulp.task('sass',function(){
	return gulp.src('./src/style/app.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(rev())
	.pipe(mincss())
	.pipe(gulp.dest('./dist/style'))
	.pipe(rev.manifest())
	.pipe(gulp.dest('./dist/rev/style'))
})
gulp.task('js',function(){
	 return gulp.src('./src/scripts/app.js')
    .pipe(webpack({
      entry:'./src/scripts/app.js',
      output:{
        filename: 'app.js',
      },
    }))
    .pipe(babel({
    	presets:['env']
    }))
    .pipe(rev())
    .pipe(minjs())
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./dist/rev/scripts'));
})

gulp.task('copyhtml',function(){
	return gulp.src(['./*.html','./dist/**/*.json'])
	.pipe(revCollector({
		replaceReved: true
	}))
	.pipe(minhtml())
	.pipe(gulp.dest('./dist'))	
})

gulp.task('copylibs',function(){
	return gulp.src('./src/libs/*.js')
	.pipe(gulp.dest('./dist/libs'))
})
gulp.task('clear',function(){
	return del.bind(null,['./dist/**/*'],{
		force:true
	})	
})

gulp.task('default',(cb)=>{
	sequence('clear',['sass','js'],['copyhtml','copylibs'])(cb)
	console.log("sucss")
})
