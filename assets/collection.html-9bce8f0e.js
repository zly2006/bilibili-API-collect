import{_ as t,o as d,c as r,e}from"./app-e407321d.js";const a={},h=e('<h1 id="视频合集信息" tabindex="-1"><a class="header-anchor" href="#视频合集信息" aria-hidden="true">#</a> 视频合集信息</h1><h2 id="获取视频合集信息" tabindex="-1"><a class="header-anchor" href="#获取视频合集信息" aria-hidden="true">#</a> 获取视频合集信息</h2><blockquote><p>https://api.bilibili.com/x/polymer/web-space/seasons_archives_list</p></blockquote><p><em>请求方式：GET</em></p><p><strong>url参数：</strong></p><table><thead><tr><th>参数名</th><th>类型</th><th>内容</th><th>必要性</th><th>备注</th></tr></thead><tbody><tr><td>mid</td><td>num</td><td>UP 主 ID</td><td>必要</td><td></td></tr><tr><td>season_id</td><td>num</td><td>视频合集 ID</td><td>必要</td><td></td></tr><tr><td>sort_reverse</td><td>bool</td><td>未知</td><td>可选</td><td></td></tr><tr><td>page_num</td><td>num</td><td>页码索引</td><td>可选</td><td></td></tr><tr><td>page_size</td><td>num</td><td>单页内容数量</td><td>可选</td><td></td></tr></tbody></table><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p><code>data</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aids</td><td>array</td><td>稿件avid</td><td>对应下方数组中内容 aid</td></tr><tr><td>archives</td><td>array</td><td>合集中的视频</td><td></td></tr><tr><td>meta</td><td>obj</td><td>合集元数据</td><td></td></tr><tr><td>page</td><td>obj</td><td>分页信息</td><td></td></tr></tbody></table><p><code>data</code>中的<code>archives</code>数组：</p><table><thead><tr><th>项</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>0</td><td>obj</td><td>合集内容</td><td></td></tr><tr><td>n</td><td>obj</td><td>(n+1)P内容</td><td></td></tr><tr><td>……</td><td>obj</td><td>……</td><td>……</td></tr></tbody></table><p><code>archives</code>数组中的对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>aid</td><td>num</td><td>稿件avid</td><td></td></tr><tr><td>bvid</td><td>str</td><td>稿件bvid</td><td></td></tr><tr><td>ctime</td><td>num</td><td>创建时间</td><td>Unix 时间戳</td></tr><tr><td>duration</td><td>num</td><td>视频时长</td><td>单位为秒</td></tr><tr><td>enable_vt</td><td>bool</td><td>false</td><td></td></tr><tr><td>interactive_video</td><td>bool</td><td>false</td><td></td></tr><tr><td>pic</td><td>str</td><td>封面 URL</td><td></td></tr><tr><td>playback_position</td><td>num</td><td></td><td>会随着播放时间增长，播放完成后为 -1 。单位未知</td></tr><tr><td>pubdate</td><td>num</td><td>发布日期</td><td>Unix 时间戳</td></tr><tr><td>stat</td><td>obj</td><td>稿件信息</td><td></td></tr><tr><td>state</td><td>num</td><td>0</td><td></td></tr><tr><td>title</td><td>str</td><td>稿件标题</td><td></td></tr><tr><td>ugc_pay</td><td>num</td><td>0</td><td></td></tr><tr><td>vt_display</td><td>str</td><td></td><td></td></tr></tbody></table><p><code>archives</code>中的<code>stat</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>view</td><td>num</td><td>稿件播放量</td><td></td></tr><tr><td>vt</td><td>num</td><td>0</td><td></td></tr></tbody></table><p><code>data</code>中的<code>meta</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>category</td><td>num</td><td>0</td><td></td></tr><tr><td>covr</td><td>str</td><td>合集封面 URL</td><td></td></tr><tr><td>description</td><td>str</td><td>合集描述</td><td></td></tr><tr><td>mid</td><td>num</td><td>UP 主 ID</td><td></td></tr><tr><td>name</td><td>num</td><td>合集标题</td><td></td></tr><tr><td>ptime</td><td>num</td><td>发布时间</td><td>Unix 时间戳</td></tr><tr><td>season_id</td><td>num</td><td>合集 ID</td><td></td></tr><tr><td>total</td><td>num</td><td>合集内视频数量</td><td></td></tr></tbody></table><p><code>data</code>中的<code>page</code>对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>page_num</td><td>num</td><td>分页页码</td><td></td></tr><tr><td>page_size</td><td>num</td><td>单页个数</td><td></td></tr><tr><td>total</td><td>num</td><td>合集内视频数量</td><td></td></tr></tbody></table>',21),o=[h];function n(c,s){return d(),r("div",null,o)}const b=t(a,[["render",n],["__file","collection.html.vue"]]);export{b as default};