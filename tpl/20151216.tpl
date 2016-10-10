<div class="blog-post">
    <h2 class="blog-post-title">js判断一个对象是否为空对象</h2>

    <h3>原生JS方法</h3>
    <pre>
        <code>
            if (typeof model.rows === "object" && !(model.rows instanceof Array)){
            var hasProp = false;
            for (var prop in model.rows){
            hasProp = true;
            break;
            }
            if (hasProp){
            model.rows = [model.rows];
            }else{
            throw "model.rows is empty object";
            return false;
            }
            }
        </code>
    </pre>
    <h3>jQuery中的实现方法</h3>

    <p class="textIndent">JavaScript判断object/json 是否为空，可以使用jQuery的isEmptyObject()方法</p>
    <pre>
        <code>
            function isEmptyObject(e) {
            var t;
            for (t in e)
            return !1;
            return !0
            }
        </code>
    </pre>
    <p class="textIndent">调用</p>
    <pre>
        <code>
            console.log($.isEmptyObject({"re": 2}));    //false
            console.log(isEmptyObject());           //true
            console.log(isEmptyObject({}));         //true
            console.log(isEmptyObject(null));       //true
            console.log(isEmptyObject(23));         //true
            console.log(isEmptyObject({"te": 2}));      //false
        </code>
    </pre>
</div>