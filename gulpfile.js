var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
/*实质上gulp-load-plugins是为我们做了如下的转换
plugins.rename = require('gulp-rename');
plugins.rubySass = require('gulp-ruby-sass');*/

gulp.task('default', function() {
	// 将你的默认的任务代码放在这
	console.log(111)
});

//重命名
gulp.task('rename', function() {
	gulp.src('js/main.js')
		.pipe(plugins.uglify()) //压缩
		.pipe(plugins.rename('main.min.js')) //会将jquery.js重命名为jquery.min.js
		.pipe(gulp.dest('js'));
	//关于gulp-rename的更多强大的用法请参考https://www.npmjs.com/package/gulp-rename

	// rename via string 
	/*gulp.src("./src/main/text/hello.txt")
		.pipe(rename("main/text/ciao/goodbye.md"))
		.pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/goodbye.md */

	// rename via function 
	//gulp.src("./src/**/hello.txt")
	/*.pipe(rename(function(path) {
		path.dirname += "/ciao";
		path.basename += "-goodbye";
		path.extname = ".md"
	}))
	.pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/hello-goodbye.md */

	// rename via hash 
	/*gulp.src("./src/main/text/hello.txt", { base: process.cwd() })
		.pipe(rename({
			dirname: "main/text/ciao",
			basename: "aloha",
			prefix: "bonjour-",
			suffix: "-hola",
			extname: ".md"
		}))
		.pipe(gulp.dest("./dist")); // ./dist/main/text/ciao/bonjour-aloha-hola.md */
});

//css文件压缩
gulp.task('minifyCss', function() {
	gulp.src(['css/svn/*.min.js', 'css/svn/*.css']) // 要压缩的css文件
		.pipe(plugins.minifyCss()) //压缩css
		.pipe(plugins.rename({ suffix: '.min' }
			/*function(path) {
				path.dirname += "/ciao";
				path.basename += "-goodbye";
				path.extname = ".md"
			}*/
		))
		.pipe(gulp.dest('css/svn'));
});
//js文件压缩
gulp.task('minifyJs', function() {
	gulp.src('js/*.js') // 要压缩的js文件
		.pipe(plugins.uglify()) //使用uglify进行压缩,更多配置请参考：
		.pipe(gulp.dest('js')); //压缩后的路径
});
//文件合并
gulp.task('concat', ['concatCss'], function() {
	gulp.src('js/merge/*.js') //要合并的文件
		/*.pipe(plugins.order([	//排序
			"js/merge/*.js",
			"js/merge/*.js",
			"js/merge/*.js"
		]))*/
		.pipe(plugins.concat('all.js')) // 合并匹配到的js文件并命名为 "all.js"
		.pipe(gulp.dest('js/merge'));
});
gulp.task('concatCss', function() {
	gulp.src('js/merge/*.css') //要合并的文件
		.pipe(plugins.concat('all.css')) // 合并匹配到的js文件并命名为 "all.js"
		.pipe(gulp.dest('js/merge'));
});