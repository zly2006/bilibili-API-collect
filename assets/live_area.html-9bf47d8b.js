import{_ as s,o as n,c as a,e as t}from"./app-e407321d.js";const p={},o=t(`<h1 id="直播间分区" tabindex="-1"><a class="header-anchor" href="#直播间分区" aria-hidden="true">#</a> 直播间分区</h1><h2 id="获取全部直播间分区列表" tabindex="-1"><a class="header-anchor" href="#获取全部直播间分区列表" aria-hidden="true">#</a> 获取全部直播间分区列表</h2><blockquote><p>https://api.live.bilibili.com/room/v1/Area/getList</p></blockquote><p><em>请求方式：GET</em></p><p>直播分区共有两级，分别是父分区和子分区</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>msg</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为success</td></tr><tr><td>data</td><td>array</td><td>父分区列表</td><td></td></tr></tbody></table><p><code>data</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>父分区1</td><td></td></tr><tr><td>n</td><td>obj</td><td>父分区(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>data</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>num</td><td>父分区id</td><td></td></tr><tr><td>name</td><td>name</td><td>父分区名</td><td></td></tr><tr><td>list</td><td>list</td><td>子分区列表</td><td></td></tr></tbody></table><p><code>data</code>数组中的对象中的<code>list</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>子分区1</td><td></td></tr><tr><td>n</td><td>obj</td><td>子分区(n+1)</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>list</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>id</td><td>str</td><td>子分区id</td><td></td></tr><tr><td>parent_id</td><td>str</td><td>父分区id</td><td></td></tr><tr><td>old_area_id</td><td>str</td><td>旧分区id</td><td></td></tr><tr><td>name</td><td>str</td><td>子分区名</td><td></td></tr><tr><td>act_id</td><td>str</td><td>0</td><td><strong>作用尚不明确</strong></td></tr><tr><td>pk_status</td><td>str</td><td>？？？</td><td><strong>作用尚不明确</strong></td></tr><tr><td>hot_status</td><td>num</td><td>是否为热门分区</td><td>0：否<br>1：是</td></tr><tr><td>lock_status</td><td>str</td><td>0</td><td><strong>作用尚不明确</strong></td></tr><tr><td>pic</td><td>str</td><td>子分区标志图片url</td><td></td></tr><tr><td>parent_name</td><td>str</td><td>父分区名</td><td></td></tr><tr><td>area_type</td><td>num</td><td></td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>如想在<code>网游</code>父分区下的<code>英雄联盟</code>分区开播，则查到子分区id为<code>86</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.live.bilibili.com/room/v1/Area/getList&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网游&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;86&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;old_area_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;英雄联盟&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;act_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pk_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hot_status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lock_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/dcfb14f14ec83e503147a262e7607858b05d7ac0.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网游&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;area_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;252&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;old_area_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;逃离塔科夫&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;act_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pk_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hot_status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lock_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/762a7de3dd5fe8165d1d55b232484a017941592f.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网游&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;area_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;80&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;old_area_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;绝地求生&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;act_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pk_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hot_status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lock_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/43ca83fdcd10505eaeef1b76cf8ce642a53b94da.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网游&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;area_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
               …………
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手游&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;35&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;old_area_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;王者荣耀&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;act_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pk_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hot_status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lock_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/0fefa924760b2dd492a12dddafe179bfa1216918.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;手游&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;area_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
               …………
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;单机&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;236&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;6&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;old_area_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;主机游戏&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;act_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pk_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hot_status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lock_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/edb636ee59f902e3134a2790545045bddd70978e.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;单机&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;area_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
               …………
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;娱乐&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;21&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;old_area_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;视频唱见&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;act_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pk_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hot_status&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lock_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/72b93ddafdf63c9f0b626ad546847a3c03c92b6f.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;cate_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;12&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;娱乐&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;area_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                …………
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;电台&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;list&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                <span class="token punctuation">{</span>
                    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;190&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;old_area_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;唱见电台&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;act_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pk_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;hot_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;lock_status&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;pic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://i0.hdslb.com/bfs/vc/d22d7fafbf9b24e2bc3ce1df5eb9f006e6035e5d.png&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;parent_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;电台&quot;</span><span class="token punctuation">,</span>
                    <span class="token property">&quot;area_type&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                …………
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,20),e=[o];function u(c,r){return n(),a("div",null,e)}const i=s(p,[["render",u],["__file","live_area.html.vue"]]);export{i as default};
