let srcHtml='\x3c!-- 2. 准备模板 --\x3e\n    \x3c!-- 2.1 介绍 --\x3e\n    <script type="text/html" id="tpl">\n    {{each data}}\n    <p class="in_p">{{$value}}</p>\n    {{/each}}\n    <\/script>\n    \n    \x3c!-- 3.2 --\x3e\n    <script type="text/html" id="tpl2">\n    \n    \n    {{each data}}\n    <div>\n        <div class="left">\n            <img src={{$value.img}} alt="">\n        </div>\n        <div class="rigth">\n            <div class="title">{{$value.title}}</div>\n            <div class="text">{{$value.text}}</div>\n        </div>\n    </div>\n    {{/each}}\n    <\/script>\n    \n    \x3c!-- 3.3 工资 --\x3e\n    <script type="text/html" id="tpl3">\n    {{each data}}\n    <li>\n        <ul class="wa_ul3">\n            <li>{{@$value.text}}</li>\n            <li>{{@$value.text1}}</li>\n            <li>{{@$value.text2}}</li>\n            <li>{{@$value.text3}}</li>\n        </ul>\n    </li>\n    {{/each}}\n    <\/script>\n    \n    <script type="text/html" id="tpl4">\n    {{each data}}\n    <div class="swiper-slide">\n        <div class="img mg bg_p" style="background-image: url({{$value.img}});"></div>\n        <div class="text">{{$value.title}}<br />\n            {{$value.text}}\n        </div>\n    </div>\n    {{/each}}\n    <\/script>\n    ';$("body").append(srcHtml);