const gulp = require('gulp');
const gulpsever = require('gulp-webserver');
const sass = require('gulp-sass');
const webpack = require('webpack-stream');//解析html
const proxy = require('http-proxy-middleware');
const babel = require('gulp-babel');
const watch = require('gulp-watch');
gulp.task('webserver', function(){
  return gulp.src('./dev')
    .pipe(gulpsever({
      host:'localhost',
      prot:8000,
      livereload: true,
      directoryListing: {
      	enable:true,
      	path:'./dev'
      },
      middleware: [
        proxy('/api', {
          target: 'http://localhost:9000',
          changeOrigin: true
        })
      ]
    }));
});
gulp.task('scss',function(){
	return gulp.src('./src/style/app.scss')
	.pipe(sass().on('error', sass.logError))//防止sass报错影响gulp
	.pipe(gulp.dest('./dev/style'))
})
gulp.task('js',function(){
	 return gulp.src('./src/scripts/app.js')
    .pipe(webpack({//webpack将js打包实现commenJS模块化
      entry:{
      	app : './src/scripts/app.js'
      },
      output:{
        filename: '[name].js',
      },
     module: {
        loaders: [
          { test: /\.html$/, loader: 'string-loader' },
        ],
      }
    }))
    .pipe(gulp.dest('./dev/scripts'));
})

gulp.task('copyhtml',function(){
	return gulp.src('./*.html')
	.pipe(gulp.dest('./dev'))
})

gulp.task('copyjs',function(){
	return gulp.src('./src/libs/*.js')
	.pipe(gulp.dest('./dev/libs'))
})
gulp.task('copyiconf',function(){
	return gulp.src('./src/style/iconfonts/**/*')
	.pipe(gulp.dest('./dev/iconfonts'))
})
gulp.task('watch',function(){
	watch('./*.html',function(){
		gulp.start('copyhtml')
	})
	watch('./src/style/**/*',function(){
		gulp.start('scss')
	})
	watch('./src/scripts/**/*',function(){
		gulp.start('js')
	})
	
})
gulp.task('default',['js','scss','copyhtml','copyjs','copyiconf','webserver'],function(){
	console.log("sucss")
})
