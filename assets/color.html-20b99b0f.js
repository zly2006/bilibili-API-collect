import{_ as s,o as n,c as a,e as t}from"./app-e407321d.js";const p={},o=t(`<h1 id="主题色" tabindex="-1"><a class="header-anchor" href="#主题色" aria-hidden="true">#</a> 主题色</h1><h2 id="获取主题色基本信息1" tabindex="-1"><a class="header-anchor" href="#获取主题色基本信息1" aria-hidden="true">#</a> 获取主题色基本信息1</h2><blockquote><p>https://club.bilibili.com/api/query.skin.list.do</p></blockquote><p><em>请求方式：GET</em></p><p>鉴权方式：appkey</p><p>认证方式：仅可APP</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>appkey</td><td>str</td><td>APP密钥</td><td>APP方式必要</td><td></td></tr><tr><td>build</td><td>num</td><td>版本</td><td>APP方式必要</td><td>可为<code>6082000</code></td></tr><tr><td>sign</td><td>str</td><td>APP签名</td><td>APP方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>ts</td><td>num</td><td>当前时间戳</td><td></td></tr><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-3：API校验密匙错误<br>-400：请求错误</td></tr><tr><td>data</td><td>array</td><td>主题颜色列表</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>主题颜色1</td><td></td></tr><tr><td>n</td><td>obj</td><td>主题颜色(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>颜色id</td><td></td></tr><tr><td>name</td><td>str</td><td>颜色名称</td><td></td></tr><tr><td>is_free</td><td>bool</td><td>是否免费</td><td>false：收费<br>true：免费</td></tr><tr><td>price</td><td>num</td><td>价格</td><td>单位为硬币</td></tr><tr><td>is_bought</td><td>bool</td><td>是否已购买</td><td>false：未购买<br>true：已购买</td></tr><tr><td>status</td><td>num</td><td>状态</td><td>1：自动续费<br>4：已退订</td></tr><tr><td>buy_time</td><td>num</td><td>购买时间</td><td>毫秒时间戳</td></tr><tr><td>due_time</td><td>num</td><td>到期时间</td><td>毫秒时间戳</td></tr><tr><td>color_name</td><td>str</td><td>颜色类型名称</td><td></td></tr><tr><td>is_overdue</td><td>bool</td><td>是否已到期</td><td>false：未到期<br>true：已到期</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://club.bilibili.com/api/query.skin.list.do&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;appkey=1d8b6e7d45233436&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;build=6082000&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;sign=2d37f2cd6f86337a6a07cb3cf311be86&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;ts&quot;</span><span class="token operator">:</span> <span class="token number">1599225638239</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;少女粉&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;夜间模式&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;姨妈红&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;咸蛋黄&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;早苗绿&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">1599219782000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">1601811782000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;胖次蓝&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;基佬紫&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;purple&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取主题色基本信息2" tabindex="-1"><a class="header-anchor" href="#获取主题色基本信息2" aria-hidden="true">#</a> 获取主题色基本信息2</h2><blockquote><p>https://api.bilibili.com/x/garb/skin/color/list</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：仅可Cookie</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mobi_app</td><td>str</td><td>平台标识</td><td>非必要</td><td>可为<code>android</code></td></tr><tr><td>build</td><td>num</td><td>版本</td><td>非必要</td><td>可为<code>6082000</code></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-3：API校验密匙错误<br>-400：请求错误</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>data</td><td>array</td><td>主题颜色列表</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>主题颜色1</td><td></td></tr><tr><td>n</td><td>obj</td><td>主题颜色(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>颜色id</td><td></td></tr><tr><td>name</td><td>str</td><td>颜色名称</td><td></td></tr><tr><td>is_free</td><td>bool</td><td>是否免费</td><td>false：收费<br>true：免费</td></tr><tr><td>price</td><td>num</td><td>价格</td><td>单位为硬币</td></tr><tr><td>is_bought</td><td>bool</td><td>是否已购买</td><td>false：未购买<br>true：已购买</td></tr><tr><td>status</td><td>num</td><td>状态</td><td>1：自动续费<br>4：已退订</td></tr><tr><td>buy_time</td><td>num</td><td>购买时间</td><td>毫秒时间戳</td></tr><tr><td>due_time</td><td>num</td><td>到期时间</td><td>毫秒时间戳</td></tr><tr><td>color_name</td><td>str</td><td>颜色类型名称</td><td></td></tr><tr><td>is_overdue</td><td>bool</td><td>是否已到期</td><td>false：未到期<br>true：已到期</td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/garb/skin/color/list&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;mobi_app=android&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;build=6082000&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">8</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;简洁白&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;少女粉&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;夜间模式&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;black&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;姨妈红&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;咸蛋黄&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yellow&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;早苗绿&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">1599219782000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">1601811782000</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;green&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;胖次蓝&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blue&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;基佬紫&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_free&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_bought&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;buy_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;due_time&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
            <span class="token property">&quot;color_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;purple&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;is_overdue&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,34),e=[o];function l(r,c){return n(),a("div",null,e)}const i=s(p,[["render",l],["__file","color.html.vue"]]);export{i as default};
