import{_ as l,r as o,o as i,c as p,a as t,b as n,d as a,w as e,e as d}from"./app-e407321d.js";const r={},c=d(`<h1 id="仲裁操作" tabindex="-1"><a class="header-anchor" href="#仲裁操作" aria-hidden="true">#</a> 仲裁操作</h1><h2 id="申请加入风纪委员会" tabindex="-1"><a class="header-anchor" href="#申请加入风纪委员会" aria-hidden="true">#</a> 申请加入风纪委员会</h2><blockquote><p>https://api.bilibili.com/x/credit/v2/jury/apply</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie</p><p>只有用户会员90天内无违规、实名认证且非封禁状态才可以申请加入风纪委员会</p><p>申请成功后可获得30天资格</p><p><strong>正文参数（ application/x-www-form-urlencoded）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th></tr></thead><tbody><tr><td>csrf</td><td>str</td><td>cookie中<code>bili_jct</code>的值</td><td>必要</td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf 校验失败<br>25001：申请等级限制(会员等级&lt;3)<br>25002：没有实名认证<br>25003：90天内有封禁记录<br>25013：不能重复申请风纪委资格<br>25016：当日风纪委员名额已发完</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="旧api" tabindex="-1"><a class="header-anchor" href="#旧api" aria-hidden="true">#</a> 旧API</h4><details><summary>查看旧版API：</summary><blockquote><p>https://api.bilibili.com/x/credit/jury/apply</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）或APP</p><p>只有用户会员等级≥Lv4、90天内无违规、实名认证且非封禁状态才可以申请加入风纪委员会</p><p>每日10:00开放新名额</p><p>申请成功后可获得30天资格</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录<br>-111：csrf 校验失败<br>25001：申请等级限制(会员等级&lt;3)<br>25002：没有实名认证<br>25003：90天内有封禁记录<br>25013：不能重复申请风纪委资格<br>25016：当日风纪委员名额已发完</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/jury/apply&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/jury/apply&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></details><h2 id="拉取新案件" tabindex="-1"><a class="header-anchor" href="#拉取新案件" aria-hidden="true">#</a> 拉取新案件</h2><blockquote><p>https://api.bilibili.com/x/credit/v2/jury/case/next</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie</p><p><strong>标头参数（Headers）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>Cookie</td><td>str</td><td>Cookie</td><td>必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>25006：风纪委员资格已过期<br>25008：没有案件<br>25014：已审满</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为0，当code不为0时，显示错误信息</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td>作用尚不明确</td></tr><tr><td>data</td><td>object</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>case_id</td><td>str</td><td>仲裁案件id</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-G</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/v2/jury/case/next&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">--header</span> <span class="token string">&#39;cookie: XXXXX&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;case_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;AC2m4HlrIrHv&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="旧api-1" tabindex="-1"><a class="header-anchor" href="#旧api-1" aria-hidden="true">#</a> 旧API</h4><details><summary>查看旧版API：</summary><blockquote><p>https://api.bilibili.com/x/credit/jury/caseObtain</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie（SESSDATA）或APP</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>access_key</td><td>str</td><td>APP登录Token</td><td>APP方式必要</td><td></td></tr><tr><td>csrf</td><td>str</td><td>CSRF Token（位于cookie）</td><td>Cookie方式必要</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>25005：不是风纪委员<br>25008：没有案件<br>25014：已审满</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td>作用尚不明确</td></tr><tr><td>data</td><td>object</td><td>数据本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>仲裁案件id</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/jury/caseObtain&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/jury/caseObtain&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1239790</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details></details><h2 id="进行仲裁投票" tabindex="-1"><a class="header-anchor" href="#进行仲裁投票" aria-hidden="true">#</a> 进行仲裁投票</h2><blockquote><p>https://api.bilibili.com/x/credit/v2/jury/vote</p></blockquote><p><em>请求方式：POST</em></p><p>认证方式：Cookie</p><p><strong>正文参数（ application/x-www-form-urlencoded ）：</strong></p>`,37),u=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),b=t("tr",null,[t("td",null,"case_id"),t("td",null,"str"),t("td",null,"案件id"),t("td",null,"必要"),t("td")],-1),h=t("td",null,"vote",-1),m=t("td",null,"num",-1),k=t("td",null,"投票类型",-1),v=t("td",null,"必要",-1),g=t("td",null,"insiders",-1),_=t("td",null,"num",-1),y=t("td",null,"是否观看此类视频",-1),x=t("td",null,"非必要",-1),q=t("br",null,null,-1),j=t("tr",null,[t("td",null,"content"),t("td",null,"str"),t("td",null,"理由"),t("td",null,"非必要"),t("td")],-1),f=t("tr",null,[t("td",null,"anonymous"),t("td",null,"num"),t("td",null,"是否匿名"),t("td",null,"非必要"),t("td",null,[n("默认值为0"),t("br"),n("0：不匿名"),t("br"),n("1：匿名")])],-1),P=t("tr",null,[t("td",null,"csrf"),t("td",null,"str"),t("td",null,[n("cookie中"),t("code",null,"bili_jct"),n("的值")]),t("td",null,"必要"),t("td")],-1),A=d(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：未登录<br>-111：csrf 错误<br>-400：请求错误（投票类型错误）<br>25005：不是风纪委员<br>25011：投票类型错误<br>25018：不能进行此操作<br><br><em>注：新版本对于一个不存在的<code>case_id</code>，不会报错。</em></td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td>作用尚不明确</td></tr></tbody></table><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h4 id="旧api-2" tabindex="-1"><a class="header-anchor" href="#旧api-2" aria-hidden="true">#</a> 旧API</h4>`,5),S=t("summary",null,"查看旧版API：",-1),C=t("p",null,[t("em",null,"请求方式：POST")],-1),T=t("p",null,"认证方式：Cookie（SESSDATA）或APP",-1),w=t("p",null,[t("strong",null,"正文参数（ application/x-www-form-urlencoded ）：")],-1),E=t("thead",null,[t("tr",null,[t("th",null,"参数名"),t("th",null,"类型"),t("th",null,"内容"),t("th",null,"必要性"),t("th",null,"备注")])],-1),O=t("tr",null,[t("td",null,"cid"),t("td",null,"num"),t("td",null,"案件id"),t("td",null,"必要"),t("td")],-1),I=t("td",null,"vote",-1),D=t("td",null,"num",-1),R=t("td",null,"投票类型",-1),X=t("td",null,"必要",-1),N=t("td",null,"content",-1),V=t("td",null,"str",-1),B=t("td",null,"理由",-1),F=t("td",null,"非必要",-1),H=t("tr",null,[t("td",null,"likes"),t("td",null,"nums"),t("td",null,"支持的观点"),t("td",null,"非必要"),t("td")],-1),L=t("tr",null,[t("td",null,"hates"),t("td",null,"nums"),t("td",null,"反对的观点"),t("td",null,"非必要"),t("td")],-1),G=t("tr",null,[t("td",null,"attr"),t("td",null,"num"),t("td",null,"是否匿名"),t("td",null,"非必要"),t("td",null,[n("0：匿名"),t("br"),n("1：不匿名")])],-1),z=t("tr",null,[t("td",null,"apply_type"),t("td",null,"num"),t("td",null,"是否更改原因"),t("td",null,"非必要"),t("td",null,[n("0：保持原来原因"),t("br"),n("1：投票给新原因")])],-1),J=t("tr",null,[t("td",null,"origin_reason"),t("td",null,"num"),t("td",null,"原始原因"),t("td",null,"非必要"),t("td",null,"见「封禁公示」中表")],-1),K=t("tr",null,[t("td",null,"apply_reason"),t("td",null,"num"),t("td",null,"新原因"),t("td",null,"非必要"),t("td",null,"见「封禁公示」中表")],-1),M=t("tr",null,[t("td",null,"csrf"),t("td",null,"str"),t("td",null,"CSRF Token（位于cookie）"),t("td",null,"Cookie方式必要"),t("td")],-1),Q=d(`<p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：未登录<br>-111：csrf 错误<br>-400：请求错误（投票类型错误）<br>25005：不是风纪委员<br>25009： 案件不存在<br>25011：投票类型错误<br>25012：重复投票</td></tr><tr><td>message</td><td>str</td><td>信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td>作用尚不明确</td></tr></tbody></table><p><strong>示例：</strong></p><p>为案件<code>2333</code>投票，建议封禁，无理由，不匿名，无支持/反对观点，不修改投票原因</p><p>Cookie方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/jury/vote&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=2333&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;vote=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;content=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;likes=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;hates=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;attr=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;apply_type=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;origin_reason=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;apply_reason=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;csrf=xxx&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>APP方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/credit/jury/vote&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;access_key=xxx&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;cid=2333&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;vote=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;content=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;likes=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;hates=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;attr=1&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;apply_type=0&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;origin_reason=&#39;</span> <span class="token punctuation">\\</span>
--data-urlencode <span class="token string">&#39;apply_reason=&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,10);function U(W,Y){const s=o("RouterLink");return i(),p("div",null,[c,t("table",null,[u,t("tbody",null,[b,t("tr",null,[h,m,k,v,t("td",null,[n("见「"),a(s,{to:"/docs/blackroom/jury/judgement_info.html"},{default:e(()=>[n("众裁信息")]),_:1}),n("」中表")])]),t("tr",null,[g,_,y,x,t("td",null,[n("默认值为0"),q,n("见「"),a(s,{to:"/docs/blackroom/jury/judgement_info.html"},{default:e(()=>[n("众裁信息")]),_:1}),n("」中表")])]),j,f,P])]),A,t("details",null,[S,n(" > https://api.bilibili.com/x/credit/jury/vote "),C,T,w,t("table",null,[E,t("tbody",null,[O,t("tr",null,[I,D,R,X,t("td",null,[n("见「"),a(s,{to:"/docs/blackroom/jury/judgement_info.html"},{default:e(()=>[n("众裁信息")]),_:1}),n("」中表")])]),t("tr",null,[N,V,B,F,t("td",null,[n("见「"),a(s,{to:"/docs/blackroom/jury/judgement_info.html"},{default:e(()=>[n("众裁信息")]),_:1}),n("」中表")])]),H,L,G,z,J,K,M])]),Q])])}const $=l(r,[["render",U],["__file","action.html.vue"]]);export{$ as default};
