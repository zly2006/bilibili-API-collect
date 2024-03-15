import{_ as s}from"./download-d77df227.js";import{_ as t,o as n,c as a,e}from"./app-e407321d.js";const o={},p=e('<h1 id="音频流url" tabindex="-1"><a class="header-anchor" href="#音频流url" aria-hidden="true">#</a> 音频流URL</h1><img src="'+s+`" width="100" height="100"><h2 id="音质qn参数定义" tabindex="-1"><a class="header-anchor" href="#音质qn参数定义" aria-hidden="true">#</a> 音质qn参数定义</h2><p>音质<code>qn</code>参数：</p><table><thead><tr><th>代码</th><th>含义</th></tr></thead><tbody><tr><td>0</td><td>流畅 128K</td></tr><tr><td>1</td><td>标准 192K</td></tr><tr><td>2</td><td>高品质 320K</td></tr><tr><td>3</td><td>无损 FLAC （大会员）</td></tr></tbody></table><h2 id="获取音频流url-web端" tabindex="-1"><a class="header-anchor" href="#获取音频流url-web端" aria-hidden="true">#</a> 获取音频流URL(web端)</h2><blockquote><p>https://www.bilibili.com/audio/music-service-c/web/url</p></blockquote><p><em>请求方式：GET</em></p><p><strong>注：web端无法播放完整付费歌曲，付费歌曲为30s试听片段</strong></p><p>本接口仅能获取192K音质的音频</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>sid</td><td>num</td><td>音频auid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0:成功<br>7201006：未找到或已下架<br>72000000：请求错误</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>sid</td><td>num</td><td>音频auid</td><td></td></tr><tr><td>type</td><td>num</td><td>音质标识</td><td>-1：试听片段（192K）<br>1：192K</td></tr><tr><td>info</td><td>str</td><td>空</td><td><strong>作用尚不明确</strong></td></tr><tr><td>timeout</td><td>num</td><td>有效时长</td><td>单位为秒<br>一般为3h</td></tr><tr><td>size</td><td>num</td><td>文件大小</td><td>单位为字节<br>当<code>type</code>为-1时<code>size</code>为0</td></tr><tr><td>cdns</td><td>array</td><td>音频流url</td><td></td></tr><tr><td>qualities</td><td>null</td><td>-</td><td></td></tr><tr><td>title</td><td>null</td><td>-</td><td></td></tr><tr><td>cover</td><td>null</td><td>-</td><td></td></tr></tbody></table><p><code>data</code>对象的<code>cdns</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>音频流url</td><td></td></tr><tr><td>1</td><td>str</td><td>备用音频流url</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://www.bilibili.com/audio/music-service-c/web/url&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;sid=sid=15664&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;sid&quot;</span><span class="token operator">:</span> <span class="token number">15664</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">10800</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">4853263</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cdns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;https://upos-sz-mirrorkodo.bilivideo.com/ugaxcode/7bf6a3a3e94421ccc653f005457b1e8c-192k.m4a?deadline=1595331310&amp;gen=uga&amp;os=kodobv&amp;uparams=deadline,gen,os&amp;upsig=0ecd3c7a8d9539f260239d8fa4c093db&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;https://upos-sz-mirrorks3.bilivideo.com/ugaxcode/7bf6a3a3e94421ccc653f005457b1e8c-192k.m4a?deadline=1595331310&amp;gen=uga&amp;os=ks3bv&amp;uparams=deadline,gen,os&amp;upsig=f3fe53aff56655b1b7264ae4ab65872e&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;qualities&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="获取音频流url-可获取付费音频" tabindex="-1"><a class="header-anchor" href="#获取音频流url-可获取付费音频" aria-hidden="true">#</a> 获取音频流URL（可获取付费音频）</h2><blockquote><p>https://api.bilibili.com/audio/music-service-c/url</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：APP或Cookie（SESSDATA）</p><p><strong>注：付费音乐需要有带大会员或音乐包的账号登录（Cookie或APP），否则为试听片段</strong></p><p>无损音质需要登录的用户为会员</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>songid</td><td>num</td><td>音频auid</td><td>必要</td><td></td></tr><tr><td>quality</td><td>num</td><td>音质代码</td><td>必要</td><td><strong>详情见上表</strong></td></tr><tr><td>privilege</td><td>num</td><td>必须为<code>2</code></td><td>必要</td><td></td></tr><tr><td>mid</td><td>num</td><td>当前用户mid</td><td>必要</td><td>可为任意值</td></tr><tr><td>platform</td><td>str</td><td>平台标识</td><td>必要</td><td>可为任意值</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0:成功<br>7201006：未找到或已下架<br>72000000：请求错误</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>obj</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>sid</td><td>num</td><td>音频auid</td><td></td></tr><tr><td>type</td><td>num</td><td>音质标识</td><td>-1：试听片段（192K）<br>0：128K<br>1：192K<br>2：320K<br>3：FLAC</td></tr><tr><td>info</td><td>str</td><td>空</td><td><strong>作用尚不明确</strong></td></tr><tr><td>timeout</td><td>num</td><td>有效时长</td><td>单位为秒<br>一般为3h</td></tr><tr><td>size</td><td>num</td><td>文件大小</td><td>单位为字节<br>当<code>type</code>为-1时<code>size</code>为0</td></tr><tr><td>cdns</td><td>array</td><td>音频流url</td><td></td></tr><tr><td>qualities</td><td>array</td><td>音质列表</td><td></td></tr><tr><td>title</td><td>str</td><td>音频标题</td><td></td></tr><tr><td>cover</td><td>str</td><td>音频封面url</td><td></td></tr></tbody></table><p><code>data</code>对象的<code>cdns</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td>音频流url</td><td></td></tr><tr><td>1</td><td>str</td><td>备用音频流url</td><td></td></tr></tbody></table><p><code>data</code>对象的<code>qualities</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>音质1</td><td>音质由高向低顺序</td></tr><tr><td>n</td><td>obj</td><td>音质（n+1）</td><td></td></tr></tbody></table><p><code>qualities</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>type</td><td>num</td><td>音质代码</td><td><strong>详情见上表</strong></td></tr><tr><td>desc</td><td>str</td><td>音质名称</td><td></td></tr><tr><td>size</td><td>num</td><td>该音质的文件大小</td><td>单位为字节</td></tr><tr><td>bps</td><td>str</td><td>比特率标签</td><td></td></tr><tr><td>tag</td><td>str</td><td>音质标签</td><td></td></tr><tr><td>require</td><td>num</td><td>是否需要会员权限</td><td>0：不需要<br>1：需要</td></tr><tr><td>requiredesc</td><td>str</td><td>会员权限标签</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>获取音频<code>au682118</code>的音频流url，音质为<code>3（无损）</code></p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/audio/music-service-c/url
--data-urlencode &#39;</span>songid<span class="token operator">=</span><span class="token number">682118</span><span class="token string">&#39; \\
--data-urlencode &#39;</span>quality<span class="token operator">=</span><span class="token number">3</span><span class="token string">&#39; \\
--data-urlencode &#39;</span>privilege<span class="token operator">=</span><span class="token number">2</span><span class="token string">&#39; \\
--data-urlencode &#39;</span>platform<span class="token operator">=</span>android<span class="token string">&#39; \\
--data-urlencode &#39;</span>mid<span class="token operator">=</span><span class="token number">293793435</span><span class="token string">&#39; \\
-b &#39;</span><span class="token assign-left variable">SESSDATA</span><span class="token operator">=</span>xxx&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/audio/music-service-c/url
--data-urlencode &#39;</span>access_key<span class="token operator">=</span>xxx<span class="token string">&#39; \\
--data-urlencode &#39;</span>songid<span class="token operator">=</span><span class="token number">682118</span><span class="token string">&#39; \\
--data-urlencode &#39;</span>quality<span class="token operator">=</span><span class="token number">3</span><span class="token string">&#39; \\
--data-urlencode &#39;</span>privilege<span class="token operator">=</span><span class="token number">2</span><span class="token string">&#39; \\
--data-urlencode &#39;</span>platform<span class="token operator">=</span>android<span class="token string">&#39; \\
--data-urlencode &#39;</span>mid<span class="token operator">=</span><span class="token number">293793435</span>&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;sid&quot;</span><span class="token operator">:</span> <span class="token number">682118</span><span class="token punctuation">,</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;timeout&quot;</span><span class="token operator">:</span> <span class="token number">10800</span><span class="token punctuation">,</span>
        <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">34456494</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cdns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;https://upos-sz-mirrorkodo.bilivideo.com/ugaxcode/m190102ws2pzf6jitbem841vq2x0du5x-flac.flac?deadline=1595332269&amp;gen=uga&amp;os=kodobv&amp;uparams=deadline,gen,os&amp;upsig=ac2284d97a61ef8758681eccf621c56d&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;https://upos-sz-mirrorks3.bilivideo.com/ugaxcode/m190102ws2pzf6jitbem841vq2x0du5x-flac.flac?deadline=1595332269&amp;gen=uga&amp;os=ks3bv&amp;uparams=deadline,gen,os&amp;upsig=3ac7d94dda5664f6f95dbfffeb289744&quot;</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;qualities&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;无损音质&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">34456494</span><span class="token punctuation">,</span>
                <span class="token property">&quot;bps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SQ&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;requiredesc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;付费享受&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;高品质&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10788682</span><span class="token punctuation">,</span>
                <span class="token property">&quot;bps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;320kbit/s&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HQ&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;requiredesc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;标准&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">6491973</span><span class="token punctuation">,</span>
                <span class="token property">&quot;bps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;192kbit/s&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;requiredesc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;流畅&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">4343667</span><span class="token punctuation">,</span>
                <span class="token property">&quot;bps&quot;</span><span class="token operator">:</span> <span class="token string">&quot;128kbit/s&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;tag&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;require&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                <span class="token property">&quot;requiredesc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;aLIEz&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;cover&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/music/61d3f8cfdce14d2d1b006af59559c9bd22a2d21b.jpg&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="音频流的获取" tabindex="-1"><a class="header-anchor" href="#音频流的获取" aria-hidden="true">#</a> 音频流的获取</h2><p>将<code>data</code>.<code>cdns</code>.<code>[0]</code>或<code>data</code>.<code>cdns</code>.<code>[1]</code>中的内容作为url进行GET操作</p><p>需要验证请求<code>user-agent</code> 不为空</p><p><strong>user-agent错误并且referer不在<code>*.bilibili.com</code>域名下的情况下会导致403 Forbidden，故无法获取</strong></p><p><strong>以上述音频url为例：</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">wget</span> <span class="token string">&#39;https://upos-sz-mirrorkodo.bilivideo.com/ugaxcode/m190102ws2pzf6jitbem841vq2x0du5x-flac.flac?deadline=1595332269&amp;gen=uga&amp;os=kodobv&amp;uparams=deadline,gen,os&amp;upsig=ac2284d97a61ef8758681eccf621c56d&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-O</span> <span class="token string">&#39;Download_music.flac&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>响应正文将返回一个flac文件</p>`,55),d=[p];function r(c,l){return n(),a("div",null,d)}const k=t(o,[["render",r],["__file","musicstream_url.html.vue"]]);export{k as default};