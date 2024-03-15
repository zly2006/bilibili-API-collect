import{_ as t,o as s,c as a,e as n}from"./app-e407321d.js";const e={},d=n(`<h1 id="音频投币-收藏" tabindex="-1"><a class="header-anchor" href="#音频投币-收藏" aria-hidden="true">#</a> 音频投币&amp;收藏</h1><h2 id="查询音频收藏状态" tabindex="-1"><a class="header-anchor" href="#查询音频收藏状态" aria-hidden="true">#</a> 查询音频收藏状态</h2><blockquote><p>https://www.bilibili.com/audio/music-service-c/web/collections/songs-coll</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>DedeUserID</code>存在且不为0</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>sid</td><td>num</td><td>音频auid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>72000000：参数错误<br>72010002：账号未登陆<br>7201006：该音频不存在或已被下架</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>bool</td><td>是否收藏</td><td>false：未收藏<br>true：已收藏</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询音频<code>au13598</code>的收藏状态</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://www.bilibili.com/audio/music-service-c/web/collections/songs-coll&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;sid=13598&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;DedeUserID=1;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="查询音频投币数" tabindex="-1"><a class="header-anchor" href="#查询音频投币数" aria-hidden="true">#</a> 查询音频投币数</h2><blockquote><p>https://www.bilibili.com/audio/music-service-c/web/coin/audio</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p>鉴权方式：Cookie中<code>DedeUserID</code>存在且不为0</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>sid</td><td>num</td><td>音频auid</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>72000000：参数错误<br>72010002：账号未登陆<br>7201006：该音频不存在或已被下架</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>num</td><td>投币数量</td><td>0为未投币，上限为2</td></tr></tbody></table><p><strong>示例：</strong></p><p>查询音频<code>au13598</code>的投币数</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://www.bilibili.com/audio/music-service-c/web/coin/audio&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;sid=15664&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;DedeUserID=1;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="投币音频" tabindex="-1"><a class="header-anchor" href="#投币音频" aria-hidden="true">#</a> 投币音频</h2><blockquote><p>https://www.bilibili.com/audio/music-service-c/web/coin/add</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>sid</td><td>num</td><td>音频 auid</td><td>必要</td><td></td></tr><tr><td>multiply</td><td>num</td><td>投币数量（最大为 2）</td><td>必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于 cookie）</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>72000000：参数错误<br>72010002：账号未登陆<br>7201006：该音频不存在或已被下架</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为 0</td></tr><tr><td>data</td><td>str</td><td>当前投币数量</td><td>0 为未投币，上限为 2</td></tr></tbody></table><p><strong>示例：</strong></p><p>为音频<code>au13598</code>投币</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://www.bilibili.com/audio/music-service-c/web/coin/add&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;sid=15664&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx;DedeUserID=1;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,42),o=[d];function r(i,p){return s(),a("div",null,o)}const l=t(e,[["render",r],["__file","action.html.vue"]]);export{l as default};
