import{_ as t,o as n,c as s,e as a}from"./app-e407321d.js";const p={},e=a(`<h1 id="直播间视频流" tabindex="-1"><a class="header-anchor" href="#直播间视频流" aria-hidden="true">#</a> 直播间视频流</h1><h2 id="根据真实直播间号获取直播视频流" tabindex="-1"><a class="header-anchor" href="#根据真实直播间号获取直播视频流" aria-hidden="true">#</a> 根据真实直播间号获取直播视频流</h2><blockquote><p>https://api.live.bilibili.com/room/v1/Room/playUrl</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>cid</td><td>num</td><td>目标真实直播间号</td><td>必要</td><td>直播间的<code>room_id</code>（非短号）</td></tr><tr><td>platform</td><td>str</td><td>直播流格式</td><td>非必要</td><td>h5：hls方式<br>web：http-flv方式<br>默认为http-flv方式</td></tr><tr><td>quality</td><td>num</td><td>画质</td><td>非必要</td><td><code>qn</code>与<code>quality</code>任选其一<br>2：流畅<br>3：高清<br>4：原画</td></tr><tr><td>qn</td><td>str</td><td>画质</td><td>非必要</td><td><code>qn</code>与<code>quality</code>任选其一<br>80：流畅<br>150：高清<br>400：蓝光<br>10000：原画<br>20000：4K<br>30000：杜比</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-400：参数错误<br>19002003：房间信息不存在</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>str</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>current_quality</td><td>num</td><td>当前画质代码<code>qn</code></td><td></td></tr><tr><td>accept_quality</td><td>array</td><td>可选画质数参数</td><td></td></tr><tr><td>current_qn</td><td>num</td><td>当前画质代码<code>quality</code></td><td></td></tr><tr><td>quality_description</td><td>array</td><td>可选画质参数<code>quality</code></td><td></td></tr><tr><td>durl</td><td>array</td><td>直播流url组</td><td></td></tr></tbody></table><p><code>accept_quality</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>str</td><td><code>qn</code>画质代码1</td><td></td></tr><tr><td>n</td><td>str</td><td><code>qn</code>画质代码(n+1)</td><td></td></tr><tr><td>……</td><td>str</td><td>……</td><td>……</td></tr></tbody></table><p><code>quality_description</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>画质代码1</td><td></td></tr><tr><td>n</td><td>obj</td><td>画质代码(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>quality_description</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>qn</td><td>num</td><td>画质代码</td><td></td></tr><tr><td>desc</td><td>str</td><td>该代码对应的画质名称</td><td></td></tr></tbody></table><p><code>durl</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>主线服务器</td><td></td></tr><tr><td>n</td><td>obj</td><td>备线n服务器</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>durl</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>url</td><td>str</td><td>直播流url</td><td>flv或m3u8格式<br><strong>注：带有转义</strong></td></tr><tr><td>length</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>order</td><td>num</td><td>服务器线路序号</td><td></td></tr><tr><td>stream_type</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>p2p_type</td><td>num</td><td>0</td><td>作用尚不明确</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询直播间<code>cid=14073662</code>的直播间信息</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.live.bilibili.com/room/v1/Room/playUrl&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=14073662&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;qn=10000&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;platform=web&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;current_quality&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;accept_quality&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;2&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;current_qn&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;quality_description&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;qn&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;原画&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;qn&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;高清&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;qn&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;desc&quot;</span><span class="token operator">:</span> <span class="token string">&quot;流畅&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;durl&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://d1--cn-gotcha04.bilivideo.com/live-bvc/601131/live_14073662_bs_3699814_1500.flv?cdn=cn-gotcha04&amp;expires=1602496530&amp;len=0&amp;oi=1939228219&amp;pt=&amp;qn=150&amp;trid=e6540d81a5d04c2ea459c46ebe77472a&amp;sigparams=cdn,expires,len,oi,pt,qn,trid&amp;sign=20e4ac695fbdd1d11d5dac4f93caa783&amp;ptype=0&amp;src=9&amp;sl=1&amp;order=1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stream_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;p2p_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://d1--cn-gotcha01.bilivideo.com/live-bvc/757951/live_14073662_bs_3699814_1500.flv?cdn=cn-gotcha01&amp;expires=1602496530&amp;len=0&amp;oi=1939228219&amp;pt=&amp;qn=150&amp;trid=e6540d81a5d04c2ea459c46ebe77472a&amp;sigparams=cdn,expires,len,oi,pt,qn,trid&amp;sign=9deea67bb9e9c1f0fa3886a34aa09473&amp;ptype=0&amp;src=9&amp;sl=1&amp;order=2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stream_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;p2p_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://d1--cn-gotcha04.bilivideo.com/live-bvc/982058/live_14073662_bs_3699814_1500.flv?cdn=cn-gotcha04&amp;expires=1602496530&amp;len=0&amp;oi=1939228219&amp;pt=&amp;qn=150&amp;trid=e6540d81a5d04c2ea459c46ebe77472a&amp;sigparams=cdn,expires,len,oi,pt,qn,trid&amp;sign=8753b270960034660184d975d86c0161&amp;ptype=0&amp;src=9&amp;sl=1&amp;order=3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stream_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;p2p_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://d1--cn-gotcha04.bilivideo.com/live-bvc/139554/live_14073662_bs_3699814_1500.flv?cdn=cn-gotcha04&amp;expires=1602496530&amp;len=0&amp;oi=1939228219&amp;pt=&amp;qn=150&amp;trid=e6540d81a5d04c2ea459c46ebe77472a&amp;sigparams=cdn,expires,len,oi,pt,qn,trid&amp;sign=cf93474e923c9ba8288c45d954f81045&amp;ptype=0&amp;src=9&amp;sl=1&amp;order=4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;length&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
        <span class="token property">&quot;stream_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;p2p_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,25),o=[e];function d(r,c){return n(),s("div",null,o)}const i=t(p,[["render",d],["__file","live_stream.html.vue"]]);export{i as default};
