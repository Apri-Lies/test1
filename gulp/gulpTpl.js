//暂时不支持目录修改、 创建、 删除。
var gulp = require('gulp');
var fs = require('fs');
var path = require('path');
var less = require('gulp-less');
var sass = require('gulp-sass');
var minifycss = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');
var tinylr = require('tiny-lr');
var server = tinylr();
var port = 1234;

// browser-sync
var browserSync = require('browser-sync');

// 创建多层目录
function mkdirs(dirname, mode, callback) {
	fs.exists(dirname, function(exists) {
		if(exists) {
			callback();
		} else {
			//console.log(path.dirname(dirname));
			mkdirs(path.dirname(dirname), mode, function() {
				fs.mkdir(dirname, mode, callback);
			});
		}
	});
}

// 拷贝文件
function copyfile(oldPath, newPath) {
	console.log('复制' + oldPath + ' -> ' + newPath);

	var stat = fs.lstatSync(oldPath);
	if(stat.isDirectory()) {
		console.log(oldPath + '是目录');
		return false;
	}

	var readStream = fs.createReadStream(oldPath);
	var writeStream = fs.createWriteStream(newPath);
	readStream.pipe(writeStream);
	readStream.on('end', function() {
		console.log('copy end');
	});
	readStream.on('error', function() {
		console.log('copy error');
	});
}

gulp.task('default', function() {

});

gulp.task('css', function() {
	return gulp.src('src/*.css') //压缩的文件
		.pipe(gulp.dest('target/css')) //输出文件夹
		.pipe(minifycss()); //执行压缩
});

// 编译Sass
gulp.task('sass', function() {
	gulp.src('./src/css/*.scss')
		.pipe(sass())
		.pipe(rename({ suffix: '.min' }))
		.pipe(minifycss())
		.pipe(gulp.dest('target/css'));
});

gulp.task('js', function() {
	return gulp.src('./src/js/*.js')
		.pipe(gulp.dest('target/js')) //输出main.js到文件夹
		.pipe(rename({ suffix: '.min' })) //rename压缩后的文件名
		.pipe(uglify()) //压缩
		.pipe(gulp.dest('target/js')); //输出
});

gulp.task('html', function() {
	return gulp.src('./src/*.php')
		.pipe(gulp.dest('target/')); //输出
});

// 监听任务 运行语句 gulp watch
gulp.task('watch', function() {
	server.listen(port, function(err) {
		if(err) {
			return console.log(err);
		}

		//拷贝修改过的文件
		gulp.watch('src/**/**', function(e) {
			console.log(e);
			var oldPath = e.path;
			var newPath = oldPath.replace('\\src\\', '\\target\\');
			var newDirPathTemp = newPath.split("\\");
			var currentPath = fs.realpathSync('.');
			var newDirPath = [];
			for(var i = 0; i < newDirPathTemp.length - 1; i++) {
				newDirPath[i] = newDirPathTemp[i];
			}
			newDirPath = newDirPath.join("\\");
			newDirPath = newDirPath.replace(currentPath, '');
			newDirPath = newDirPath.replace(/\\/g, "/");
			newDirPath = newDirPath.replace("/", "./");
			//console.log('当前路径'+newDirPath);

			// 修改或增加时
			if('added' == e.type || 'changed' == e.type || 'renamed' == e.type) {
				// 判断目录是否存在，不存在则创建
				fs.exists(newDirPath, function(exists) {
					if(exists) {
						//console.log("文件夹存在");
						copyfile(oldPath, newPath);
					} else {
						//console.log("文件夹不存在，则创建目录");
						mkdirs(newDirPath);

						// 延时，等待目录创建完成
						setTimeout(function() {
							copyfile(oldPath, newPath);
						}, 200);
					}
				});
			} else if('deleted' == e.type) { //删除
				fs.unlink(newPath, function(err) {
					console.log('删除' + newPath + err);
				});
			}
		});

		// 监听sass
		gulp.watch('src/css/*.scss', function() {
			gulp.run('sass');
		});

		// 监听js
		gulp.watch('./src/js/*.js', function() {
			gulp.run('js');
		});

		// 监听html
		gulp.watch('./src/*.php', function() {
			gulp.run('html');
		});

	});

	// 实时同步到浏览器
	browserSync.init(['target/css/*', 'target/js/*', 'target/*.html', 'target/*.php'], {
		/* 静态服务
		server: {
		    baseDir: "target"
		}
		*/

		// 代理模式
		proxy: "dz.com"
	});

});