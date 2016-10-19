<div class="blog-post">
    <h2>清除浮动</h2>
    <div class="blog-post-meta"><em>Time:</em><span>December 10, 2015</span><em>source:</em> <a href="#">Internet</a></div>
    <p class="textIndent">浮动会使当前标签产生向上浮的效果，同时会影响到前后标签、父级标签的位置及 width height 属性。而且同样的代码，在各种浏览器中显示效果也有可能不相同，这样让清除浮动更难了。解决浮动引起的问题有多种方法，但有些方法在浏览器兼容性方面还有问题。</p>
    <p>下面总结8种清除浮动的方法（测试已通过 ie chrome firefox opera）</p>
    <h3>1、父级div定义 height </h3>
    <pre>
        <code>
            &lt;style type="text/css"&gt;
                .div1{background:#000080;border:1px solid red;/*解决代码*/height:200px;}
                .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
                .left{float:left;width:20%;height:200px;background:#DDD}
                .right{float:right;width:30%;height:80px;background:#DDD}
            &lt;/style&gt;
            &lt;div class="div1"&gt;
                &lt;div class="left"&gt;Left&lt;/div&gt;
                &lt;div class="right"&gt;Right&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="div2"&gt;
                div2
            &lt;/div&gt;
        </code>
    </pre>
    <p>原理：父级div手动定义height，就解决了父级div无法自动获取到高度的问题。</p>
    <p>优点：简单、代码少、容易掌握</p>
    <p>缺点：只适合高度固定的布局，要给出精确的高度，如果高度和父级div不一样时，会产生问题</p>
    <p>建议：不推荐使用，只建议高度固定的布局时使用</p>

    <h3>2、结尾处加空div标签 clear:both</h3>
    <pre>
        <code>
            &lt;style type="text/css"&gt;
                .div1{background:#000080;border:1px solid red}
                .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
                .left{float:left;width:20%;height:200px;background:#DDD}
                .right{float:right;width:30%;height:80px;background:#DDD}
                /*清除浮动代码*/
                .clearfloat{clear:both}
            &lt;/style&gt;
            &lt;div class="div1"&gt;
                &lt;div class="left"&gt;Left&lt;/div&gt;
                &lt;div class="right"&gt;Right&lt;/div&gt;
                &lt;div class="clearfloat"&gt;&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="div2"&gt;
                div2
            &lt;/div&gt;
        </code>
    </pre>
    <p>原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度 </p>
    <p>优点：简单、代码少、浏览器支持好、不容易出现怪问题</p>
    <p>缺点：不少初学者不理解原理；如果页面浮动布局多，就要增加很多空div</p>
    <p>建议：不推荐使用，但此方法是以前主要使用的一种清除浮动方法 </p>

    <h3>3、父级div定义 伪类:after 和 zoom</h3>
    <pre>
        <code>
            &lt;style type="text/css"&gt;
                .div1{background:#000080;border:1px solid red;}
                .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px}
                .left{float:left;width:20%;height:200px;background:#DDD}
                .right{float:right;width:30%;height:80px;background:#DDD}
                /*清除浮动代码*/
                .clearfloat:after{display:block;clear:both;content:"";visibility:hidden;height:0}
                .clearfloat{zoom:1}
            &lt;/style&gt;
            &lt;div class="div1 clearfloat"&gt;
                &lt;div class="left"&gt;Left&lt;/div&gt;
                &lt;div class="right"&gt;Right&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="div2"&gt;
                div2
            &lt;/div&gt;
        </code>
    </pre>
    <p>原理：IE8以上和非IE浏览器才支持:after，原理和方法2有点类似，zoom(IE转有属性)可解决ie6,ie7浮动问题 </p>
    <p>优点：浏览器支持好、不容易出现怪问题（目前：大型网站都有使用，如：腾迅，网易，新浪等等）</p>
    <p>缺点：代码多、不少初学者不理解原理，要两句代码结合使用才能让主流浏览器都支持。</p>
    <p>建议：推荐使用，建议定义公共类，以减少CSS代码。</p>

    <h3>4、父级div定义 overflow:hidden</h3>
    <pre>
        <code>
            &lt;style type="text/css"&gt;
                .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;overflow:hidden}
                .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px;width:98%}
                .left{float:left;width:20%;height:200px;background:#DDD}
                .right{float:right;width:30%;height:80px;background:#DDD}
            &lt;/style&gt;
            &lt;div class="div1"&gt;
                &lt;div class="left"&gt;Left&lt;/div&gt;
                &lt;div class="right"&gt;Right&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="div2"&gt;
                div2
            &lt;/div&gt;
        </code>
    </pre>
    <p>原理：必须定义width或zoom:1，同时不能定义height，使用overflow:hidden时，浏览器会自动检查浮动区域的高度</p>
    <p>优点：简单、代码少、浏览器支持好 </p>
    <p>缺点：不能和position配合使用，因为超出的尺寸的会被隐藏。</p>
    <p>建议：只推荐没有使用position或对overflow:hidden理解比较深的朋友使用。</p>

    <h3>5、父级div定义 overflow:auto</h3>
    <pre>
        <code>
            &lt;style type="text/css"&gt;
                .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;overflow:auto}
                .div2{background:#800080;border:1px solid red;height:100px;margin-top:10px;width:98%}
                .left{float:left;width:20%;height:200px;background:#DDD}
                .right{float:right;width:30%;height:80px;background:#DDD}
            &lt;/style&gt;
            &lt;div class="div1"&gt;
                &lt;div class="left"&gt;Left&lt;/div&gt;
                &lt;div class="right"&gt;Right&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="div2"&gt;
                div2
            &lt;/div&gt;
        </code>
    </pre>
    <p>原理：必须定义width或zoom:1，同时不能定义height，使用overflow:auto时，浏览器会自动检查浮动区域的高度 </p>
    <p>优点：简单、代码少、浏览器支持好 </p>
    <p>缺点：内部宽高超过父级div时，会出现滚动条。</p>
    <p>建议：不推荐使用，如果你需要出现滚动条或者确保你的代码不会出现滚动条就使用吧</p>

    <h3>6、父级div 也一起浮动</h3>
    <pre>
        <code>
            &lt;style type="text/css"&gt;
                .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;margin-bottom:10px;float:left}
                .div2{background:#800080;border:1px solid red;height:100px;width:98%;/*解决代码*/clear:both}
                .left{float:left;width:20%;height:200px;background:#DDD}
                .right{float:right;width:30%;height:80px;background:#DDD}
            &lt;/style&gt;
            &lt;div class="div1"&gt;
                &lt;div class="left"&gt;Left&lt;/div&gt;
                &lt;div class="right"&gt;Right&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="div2"&gt;
                div2
            &lt;/div&gt;
        </code>
    </pre>
    <p>原理：所有代码一起浮动，就变成了一个整体</p>
    <p>优点：没有优点</p>
    <p>缺点：会产生新的浮动问题</p>
    <p>建议：不推荐使用，只作了解</p>

    <h3>7、父级div定义 display:table</h3>
    <pre>
        <code>
            &lt;style type="text/css"&gt;
                .div1{background:#000080;border:1px solid red;/*解决代码*/width:98%;display:table;margin-bottom:10px;}
                .div2{background:#800080;border:1px solid red;height:100px;width:98%;}
                .left{float:left;width:20%;height:200px;background:#DDD}
                .right{float:right;width:30%;height:80px;background:#DDD}
            &lt;/style&gt;
            &lt;div class="div1"&gt;
                &lt;div class="left"&gt;Left&lt;/div&gt;
                &lt;div class="right"&gt;Right&lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="div2"&gt;
                div2
            &lt;/div&gt;
        </code>
    </pre>
    <p>原理：将div属性变成表格</p>
    <p>优点：没有优点</p>
    <p>缺点：会产生新的未知问题</p>
    <p>建议：不推荐使用，只作了解</p>

    <h3>8、结尾处加 br标签 clear:both</h3>
    <pre>
        <code>
            &lt;style type="text/css"&gt;
                .div1{background:#000080;border:1px solid red;margin-bottom:10px;zoom:1}
                .div2{background:#800080;border:1px solid red;height:100px}
                .left{float:left;width:20%;height:200px;background:#DDD}
                .right{float:right;width:30%;height:80px;background:#DDD}
                .clearfloat{clear:both}
            &lt;/style&gt;
            &lt;div class="div1"&gt;
                &lt;div class="left"&gt;Left&lt;/div&gt;
                &lt;div class="right"&gt;Right&lt;/div&gt;
                &lt;br class="clearfloat" /&gt;
            &lt;/div&gt;
            &lt;div class="div2"&gt;
                div2
            &lt;/div&gt;
        </code>
    </pre>
    <p>原理：父级div定义zoom:1来解决IE浮动问题，结尾处加 br标签 clear:both</p>
    <p>建议：不推荐使用，只作了解。</p>
</div>