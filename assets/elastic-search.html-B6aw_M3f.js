const l=JSON.parse('{"key":"v-44f10275","path":"/middleware/elastic-search.html","title":"ElasticSearch 全文检索","lang":"zh-CN","frontmatter":{"icon":"elasticsearch","title":"ElasticSearch 全文检索","category":["ElasticSearch"],"headerDepth":5,"date":"2020-05-15T00:00:00.000Z","tag":["ElasticSearch"],"description":"1. ElasticSearch概念 1.1 ES介绍 应用程序搜索 网站搜索 企业搜索 日志处理和分析 基础设施指标和容器监测 应用程序性能监测 地理空间数据分析和可视化 安全分析 业务分析 官方文档 : 官方中文 : 社区中文: 1.2 基本概念 Elasticsearch也是基于Lucene的全文检索库，本质也是存储数据，很多概念与MySQL类似...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/vtest/middleware/elastic-search.html"}],["meta",{"property":"og:title","content":"ElasticSearch 全文检索"}],["meta",{"property":"og:description","content":"1. ElasticSearch概念 1.1 ES介绍 应用程序搜索 网站搜索 企业搜索 日志处理和分析 基础设施指标和容器监测 应用程序性能监测 地理空间数据分析和可视化 安全分析 业务分析 官方文档 : 官方中文 : 社区中文: 1.2 基本概念 Elasticsearch也是基于Lucene的全文检索库，本质也是存储数据，很多概念与MySQL类似..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blogres.github.io/vtest/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T07:51:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ElasticSearch 全文检索"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"ElasticSearch"}],["meta",{"property":"article:published_time","content":"2020-05-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T07:51:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ElasticSearch 全文检索\\",\\"image\\":[\\"https://blogres.github.io/vtest/\\"],\\"datePublished\\":\\"2020-05-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T07:51:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"1. ElasticSearch概念","slug":"_1-elasticsearch概念","link":"#_1-elasticsearch概念","children":[{"level":3,"title":"1.1 ES介绍","slug":"_1-1-es介绍","link":"#_1-1-es介绍","children":[]},{"level":3,"title":"1.2 基本概念","slug":"_1-2-基本概念","link":"#_1-2-基本概念","children":[]}]},{"level":2,"title":"2 安装","slug":"_2-安装","link":"#_2-安装","children":[{"level":3,"title":"查看 elasticsearch","slug":"查看-elasticsearch","link":"#查看-elasticsearch","children":[]},{"level":3,"title":"查看 kibana","slug":"查看-kibana","link":"#查看-kibana","children":[]}]},{"level":2,"title":"3 索引操作（indices）","slug":"_3-索引操作-indices","link":"#_3-索引操作-indices","children":[{"level":3,"title":"3.1 查询索引","slug":"_3-1-查询索引","link":"#_3-1-查询索引","children":[]},{"level":3,"title":"3.2 创建索引","slug":"_3-2-创建索引","link":"#_3-2-创建索引","children":[{"level":4,"title":"响应结果","slug":"响应结果","link":"#响应结果","children":[]},{"level":4,"title":"PUT","slug":"put","link":"#put","children":[]},{"level":4,"title":"POST","slug":"post","link":"#post","children":[]}]},{"level":3,"title":"3.3 get 查询文档&乐观锁","slug":"_3-3-get-查询文档-乐观锁","link":"#_3-3-get-查询文档-乐观锁","children":[{"level":4,"title":"并发修改测试:多个人同时修改一个数据","slug":"并发修改测试-多个人同时修改一个数据","link":"#并发修改测试-多个人同时修改一个数据","children":[]}]},{"level":3,"title":"3.4 post 更新文档","slug":"_3-4-post-更新文档","link":"#_3-4-post-更新文档","children":[]},{"level":3,"title":"3.5 删除文档&索引","slug":"_3-5-删除文档-索引","link":"#_3-5-删除文档-索引","children":[]},{"level":3,"title":"3.6 post bulk批量导入 API","slug":"_3-6-post-bulk批量导入-api","link":"#_3-6-post-bulk批量导入-api","children":[{"level":4,"title":"使用postman请求","slug":"使用postman请求","link":"#使用postman请求","children":[]},{"level":4,"title":"可视化操作","slug":"可视化操作","link":"#可视化操作","children":[]},{"level":4,"title":"样本测试数据","slug":"样本测试数据","link":"#样本测试数据","children":[]}]}]},{"level":2,"title":"4 映射配置（_mapping）","slug":"_4-映射配置-mapping","link":"#_4-映射配置-mapping","children":[{"level":3,"title":"4.1 PUT 创建映射字段","slug":"_4-1-put-创建映射字段","link":"#_4-1-put-创建映射字段","children":[]},{"level":3,"title":"4.2 GET 查看映射关系","slug":"_4-2-get-查看映射关系","link":"#_4-2-get-查看映射关系","children":[]},{"level":3,"title":"4.3 PUT 添加索引字段","slug":"_4-3-put-添加索引字段","link":"#_4-3-put-添加索引字段","children":[]},{"level":3,"title":"4.4 映射 PUT 数据迁移","slug":"_4-4-映射-put-数据迁移","link":"#_4-4-映射-put-数据迁移","children":[]}]},{"level":2,"title":"5 新增文档（document）","slug":"_5-新增文档-document","link":"#_5-新增文档-document","children":[{"level":3,"title":"5.1 基本玩法","slug":"_5-1-基本玩法","link":"#_5-1-基本玩法","children":[]},{"level":3,"title":"5.2 智能判断","slug":"_5-2-智能判断","link":"#_5-2-智能判断","children":[]}]},{"level":2,"title":"6 删除数据","slug":"_6-删除数据","link":"#_6-删除数据","children":[]},{"level":2,"title":"7 分词","slug":"_7-分词","link":"#_7-分词","children":[{"level":3,"title":"7.1 默认分词器，对中文不友好","slug":"_7-1-默认分词器-对中文不友好","link":"#_7-1-默认分词器-对中文不友好","children":[]},{"level":3,"title":"7.2 ik 分词器","slug":"_7-2-ik-分词器","link":"#_7-2-ik-分词器","children":[]},{"level":3,"title":"7.3 自定义分词","slug":"_7-3-自定义分词","link":"#_7-3-自定义分词","children":[]}]},{"level":2,"title":"8 查询","slug":"_8-查询","link":"#_8-查询","children":[{"level":3,"title":"8.1 2种查询","slug":"_8-1-2种查询","link":"#_8-1-2种查询","children":[]},{"level":3,"title":"8.2 数据准备","slug":"_8-2-数据准备","link":"#_8-2-数据准备","children":[]},{"level":3,"title":"8.3 匹配查询（match && match_all）","slug":"_8-3-匹配查询-match-match-all","link":"#_8-3-匹配查询-match-match-all","children":[{"level":4,"title":"8.3.1 查询所有（match_all ）","slug":"_8-3-1-查询所有-match-all","link":"#_8-3-1-查询所有-match-all","children":[]},{"level":4,"title":"8.3.2 条件匹配（match ）","slug":"_8-3-2-条件匹配-match","link":"#_8-3-2-条件匹配-match","children":[]},{"level":4,"title":"8.3.3 短语匹配 （match phrase）","slug":"_8-3-3-短语匹配-match-phrase","link":"#_8-3-3-短语匹配-match-phrase","children":[]},{"level":4,"title":"8.3.4 子属性匹配（字段.xx）","slug":"_8-3-4-子属性匹配-字段-xx","link":"#_8-3-4-子属性匹配-字段-xx","children":[]},{"level":4,"title":"8.3.5 多字段匹配（multi_match）","slug":"_8-3-5-多字段匹配-multi-match","link":"#_8-3-5-多字段匹配-multi-match","children":[]}]},{"level":3,"title":"8.4 词条查询，精确值匹配（term）","slug":"_8-4-词条查询-精确值匹配-term","link":"#_8-4-词条查询-精确值匹配-term","children":[]},{"level":3,"title":"8.5 范围查询（range）","slug":"_8-5-范围查询-range","link":"#_8-5-范围查询-range","children":[{"level":4,"title":"range查询允许以下字符：gt、gte、lt、lte","slug":"range查询允许以下字符-gt、gte、lt、lte","link":"#range查询允许以下字符-gt、gte、lt、lte","children":[]}]},{"level":3,"title":"8.6 布尔组合（bool)","slug":"_8-6-布尔组合-bool","link":"#_8-6-布尔组合-bool","children":[]},{"level":3,"title":"8.7 过滤（filter）","slug":"_8-7-过滤-filter","link":"#_8-7-过滤-filter","children":[]},{"level":3,"title":"8.8 排序（sort）","slug":"_8-8-排序-sort","link":"#_8-8-排序-sort","children":[]},{"level":3,"title":"8.9 分页（from/size）","slug":"_8-9-分页-from-size","link":"#_8-9-分页-from-size","children":[]},{"level":3,"title":"8.10 高亮（highlight）","slug":"_8-10-高亮-highlight","link":"#_8-10-高亮-highlight","children":[]},{"level":3,"title":"8.11 结果过滤（_source）","slug":"_8-11-结果过滤-source","link":"#_8-11-结果过滤-source","children":[]}]},{"level":2,"title":"9 聚合（aggregations）","slug":"_9-聚合-aggregations","link":"#_9-聚合-aggregations","children":[{"level":3,"title":"9.1 基本概念","slug":"_9-1-基本概念","link":"#_9-1-基本概念","children":[]},{"level":3,"title":"9.2 聚合为桶","slug":"_9-2-聚合为桶","link":"#_9-2-聚合为桶","children":[]},{"level":3,"title":"9.3 桶内度量","slug":"_9-3-桶内度量","link":"#_9-3-桶内度量","children":[]},{"level":3,"title":"9.4 桶内嵌套桶","slug":"_9-4-桶内嵌套桶","link":"#_9-4-桶内嵌套桶","children":[]}]},{"level":2,"title":"10 SpringData-Elasticsearch","slug":"_10-springdata-elasticsearch","link":"#_10-springdata-elasticsearch","children":[{"level":3,"title":"10.1 介绍","slug":"_10-1-介绍","link":"#_10-1-介绍","children":[]},{"level":3,"title":"10.2 创建springboot 项目","slug":"_10-2-创建springboot-项目","link":"#_10-2-创建springboot-项目","children":[]},{"level":3,"title":"10.3 ban测试","slug":"_10-3-ban测试","link":"#_10-3-ban测试","children":[]},{"level":3,"title":"10.4 测试保存","slug":"_10-4-测试保存","link":"#_10-4-测试保存","children":[]},{"level":3,"title":"10.5 测试检索","slug":"_10-5-测试检索","link":"#_10-5-测试检索","children":[{"level":4,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":4,"title":"实例","slug":"实例","link":"#实例","children":[]}]},{"level":3,"title":"10.6 创建module","slug":"_10-6-创建module","link":"#_10-6-创建module","children":[]},{"level":3,"title":"10.7 实体类","slug":"_10-7-实体类","link":"#_10-7-实体类","children":[]},{"level":3,"title":"10.8 创建索引及映射","slug":"_10-8-创建索引及映射","link":"#_10-8-创建索引及映射","children":[]},{"level":3,"title":"10.9 Repository文档操作","slug":"_10-9-repository文档操作","link":"#_10-9-repository文档操作","children":[{"level":4,"title":"10.9.1 新增","slug":"_10-9-1-新增","link":"#_10-9-1-新增","children":[]},{"level":4,"title":"10.9.2 删除","slug":"_10-9-2-删除","link":"#_10-9-2-删除","children":[]}]},{"level":3,"title":"10.10 查询","slug":"_10-10-查询","link":"#_10-10-查询","children":[{"level":4,"title":"10.10.1 基本查询","slug":"_10-10-1-基本查询","link":"#_10-10-1-基本查询","children":[]},{"level":4,"title":"10.10.2 条件查询","slug":"_10-10-2-条件查询","link":"#_10-10-2-条件查询","children":[]},{"level":4,"title":"10.10.3 自定义查询","slug":"_10-10-3-自定义查询","link":"#_10-10-3-自定义查询","children":[]}]}]}],"git":{"createdTime":1706860273000,"updatedTime":1706860273000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":24.96,"words":7487},"filePathRelative":"middleware/elastic-search.md","localizedDate":"2020年5月15日","excerpt":"","autoDesc":true}');export{l as data};