import{_ as t,o as d,c as s,e as n}from"./app-e407321d.js";const a={},e=n(`<h1 id="弹幕个人配置修改" tabindex="-1"><a class="header-anchor" href="#弹幕个人配置修改" aria-hidden="true">#</a> 弹幕个人配置修改</h1><h2 id="修改弹幕个人配置-web端" tabindex="-1"><a class="header-anchor" href="#修改弹幕个人配置-web端" aria-hidden="true">#</a> 修改弹幕个人配置（web端）</h2><blockquote><p>https://api.bilibili.com/x/v2/dm/web/config</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）或APP</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>dm_switch</td><td>bool</td><td>弹幕开关</td><td>非必要</td><td>true：开启<br>false：关闭</td></tr><tr><td>blockscroll</td><td>bool</td><td>屏蔽类型-滚动</td><td>非必要</td><td>true：不屏蔽<br>false：屏蔽</td></tr><tr><td>blocktop</td><td>bool</td><td>屏蔽类型-顶部</td><td>非必要</td><td>同上</td></tr><tr><td>blockbottom</td><td>bool</td><td>屏蔽类型-底部</td><td>非必要</td><td>同上</td></tr><tr><td>blockcolor</td><td>bool</td><td>屏蔽类型-彩色</td><td>非必要</td><td>同上</td></tr><tr><td>blockspecial</td><td>bool</td><td>屏蔽类型-特殊</td><td>非必要</td><td>同上</td></tr><tr><td>ai_switch</td><td>bool</td><td>是否打开智能云屏蔽</td><td>非必要</td><td>true：开启<br>false：关闭</td></tr><tr><td>ai_level</td><td>num</td><td>智能云屏蔽等级</td><td>非必要</td><td>区间：[0-10]<br>0为默认等级（3级）</td></tr><tr><td>preventshade</td><td>bool</td><td>防挡弹幕（底部15%）</td><td>非必要</td><td>true：开启<br>false：关闭</td></tr><tr><td>dmask</td><td>bool</td><td>智能防挡弹幕（人像蒙版）</td><td>非必要</td><td>同上</td></tr><tr><td>opacity</td><td>num</td><td>弹幕不透明度</td><td>非必要</td><td>区间：[0-1]</td></tr><tr><td>dmarea</td><td>num</td><td>弹幕显示区域</td><td>非必要</td><td>100：不重叠<br>75：3/4屏<br>50：半瓶<br>25：1/4屏<br>0：不限</td></tr><tr><td>speedplus</td><td>num</td><td>弹幕速度</td><td>非必要</td><td>区间：[0.4-1.6]</td></tr><tr><td>fontsize</td><td>num</td><td>字体大小</td><td>非必要</td><td>区间：[0.4-1.6]</td></tr><tr><td>screensync</td><td>bool</td><td>跟随屏幕缩放比例</td><td>非必要</td><td>true：开启<br>false：关闭</td></tr><tr><td>speedsync</td><td>bool</td><td>根据播放倍速调整速度</td><td>非必要</td><td>同上</td></tr><tr><td>fontfamily</td><td>str</td><td>字体类型</td><td>非必要</td><td>未启用</td></tr><tr><td>bold</td><td>bool</td><td>粗体</td><td>非必要</td><td>未启用</td></tr><tr><td>fontborder</td><td>num</td><td>描边类型</td><td>非必要</td><td>0：重墨<br>1：描边<br>2：45°投影</td></tr><tr><td>drawType</td><td>string</td><td>渲染类型</td><td>非必要</td><td>未启用</td></tr><tr><td>ts</td><td>num</td><td>当前时间戳</td><td>非必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf校验失败<br>-400：请求错误<br>23004：数据没有修改</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>关闭弹幕</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/v2/dm/web/config&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;dm_switch=false&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span><span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,14),r=[e];function o(l,c){return d(),s("div",null,r)}const p=t(a,[["render",o],["__file","config.html.vue"]]);export{p as default};
