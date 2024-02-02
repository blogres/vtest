const l=JSON.parse('{"key":"v-b0eacb26","path":"/java/cloud-lock-cache.html","title":"分布式锁、缓存","lang":"zh-CN","frontmatter":{"icon":"lock","title":"分布式锁、缓存","category":["Java","Cloud"],"headerDepth":5,"date":"2020-05-12T00:00:00.000Z","tag":["lock","cache"],"description":"1. 双写模式：写数据库，写缓存 2. 失效模式：缓存失效（删除缓存），写数据库 读取缓存步骤数据一致性一般没有什么问题，但是一旦涉及到数据更新：数据库和缓存更新，就容易出现缓存(Redis)和数据库（MySQL）间的数据一致性问题。 不管先保存到MySQL，还是先保存到Redis都面临着一个保存成功而另外一个保存失败的情况。 不管是先写MySQL数据...","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/vtest/java/cloud-lock-cache.html"}],["meta",{"property":"og:title","content":"分布式锁、缓存"}],["meta",{"property":"og:description","content":"1. 双写模式：写数据库，写缓存 2. 失效模式：缓存失效（删除缓存），写数据库 读取缓存步骤数据一致性一般没有什么问题，但是一旦涉及到数据更新：数据库和缓存更新，就容易出现缓存(Redis)和数据库（MySQL）间的数据一致性问题。 不管先保存到MySQL，还是先保存到Redis都面临着一个保存成功而另外一个保存失败的情况。 不管是先写MySQL数据..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blogres.github.io/vtest/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T07:51:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"分布式锁、缓存"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"lock"}],["meta",{"property":"article:tag","content":"cache"}],["meta",{"property":"article:published_time","content":"2020-05-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T07:51:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"分布式锁、缓存\\",\\"image\\":[\\"https://blogres.github.io/vtest/\\"],\\"datePublished\\":\\"2020-05-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T07:51:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"解决","slug":"解决","link":"#解决","children":[{"level":3,"title":"1 基于mysql的binlog日志（canal）","slug":"_1-基于mysql的binlog日志-canal","link":"#_1-基于mysql的binlog日志-canal","children":[]},{"level":3,"title":"2 消息队列MQ","slug":"_2-消息队列mq","link":"#_2-消息队列mq","children":[]}]},{"level":2,"title":"1.1 使用场景","slug":"_1-1-使用场景","link":"#_1-1-使用场景","children":[]},{"level":2,"title":"1.2 使用流程","slug":"_1-2-使用流程","link":"#_1-2-使用流程","children":[]},{"level":2,"title":"1.3 简单实例格式","slug":"_1-3-简单实例格式","link":"#_1-3-简单实例格式","children":[]},{"level":2,"title":"1.4 本地缓存","slug":"_1-4-本地缓存","link":"#_1-4-本地缓存","children":[]},{"level":2,"title":"1.5 分布式缓存","slug":"_1-5-分布式缓存","link":"#_1-5-分布式缓存","children":[{"level":3,"title":"1.5.1 缓存穿透","slug":"_1-5-1-缓存穿透","link":"#_1-5-1-缓存穿透","children":[]},{"level":3,"title":"1.5.2 缓存雪崩","slug":"_1-5-2-缓存雪崩","link":"#_1-5-2-缓存雪崩","children":[]},{"level":3,"title":"1.5.3 缓存击穿","slug":"_1-5-3-缓存击穿","link":"#_1-5-3-缓存击穿","children":[]},{"level":3,"title":"1.5.4 缓存穿透、击穿、雪崩的区别","slug":"_1-5-4-缓存穿透、击穿、雪崩的区别","link":"#_1-5-4-缓存穿透、击穿、雪崩的区别","children":[{"level":4,"title":"1.穿透是缓存不命中，DB也没有不命中","slug":"_1-穿透是缓存不命中-db也没有不命中","link":"#_1-穿透是缓存不命中-db也没有不命中","children":[]},{"level":4,"title":"2.击穿是一个热点key失效","slug":"_2-击穿是一个热点key失效","link":"#_2-击穿是一个热点key失效","children":[]},{"level":4,"title":"3.雪崩是很多key集体失效","slug":"_3-雪崩是很多key集体失效","link":"#_3-雪崩是很多key集体失效","children":[]}]}]},{"level":2,"title":"1.6 总结","slug":"_1-6-总结","link":"#_1-6-总结","children":[{"level":3,"title":"1.6.1、解决缓存穿透：空结果缓存","slug":"_1-6-1、解决缓存穿透-空结果缓存","link":"#_1-6-1、解决缓存穿透-空结果缓存","children":[]},{"level":3,"title":"1.6.2、解决缓存雪崩：设置过期时间(加随机值) 。存在的数据，大面积数据同时失效","slug":"_1-6-2、解决缓存雪崩-设置过期时间-加随机值-。存在的数据-大面积数据同时失效","link":"#_1-6-2、解决缓存雪崩-设置过期时间-加随机值-。存在的数据-大面积数据同时失效","children":[]},{"level":3,"title":"1.6.3、解决缓存击穿【难点】：加锁，存在的数据，某一个数据热点失效","slug":"_1-6-3、解决缓存击穿【难点】-加锁-存在的数据-某一个数据热点失效","link":"#_1-6-3、解决缓存击穿【难点】-加锁-存在的数据-某一个数据热点失效","children":[]}]},{"level":2,"title":"2.1 业务测试","slug":"_2-1-业务测试","link":"#_2-1-业务测试","children":[]},{"level":2,"title":"2.2 压力测试与bug解决","slug":"_2-2-压力测试与bug解决","link":"#_2-2-压力测试与bug解决","children":[]},{"level":2,"title":"2.3 加锁解决缓存击穿","slug":"_2-3-加锁解决缓存击穿","link":"#_2-3-加锁解决缓存击穿","children":[]},{"level":2,"title":"2.4 本地锁在分布式服务","slug":"_2-4-本地锁在分布式服务","link":"#_2-4-本地锁在分布式服务","children":[]},{"level":2,"title":"2.5 分布式锁原理&使用","slug":"_2-5-分布式锁原理-使用","link":"#_2-5-分布式锁原理-使用","children":[{"level":3,"title":"2.5.1 redis锁","slug":"_2-5-1-redis锁","link":"#_2-5-1-redis锁","children":[]},{"level":3,"title":"2.5.2 简单的业务+分析","slug":"_2-5-2-简单的业务-分析","link":"#_2-5-2-简单的业务-分析","children":[{"level":4,"title":"A、测试问题1：setnx占好了位，业务代码异常或者程序在页面过程中宕机。没有执行删除锁逻辑，这就造成了死锁","slug":"a、测试问题1-setnx占好了位-业务代码异常或者程序在页面过程中宕机。没有执行删除锁逻辑-这就造成了死锁","link":"#a、测试问题1-setnx占好了位-业务代码异常或者程序在页面过程中宕机。没有执行删除锁逻辑-这就造成了死锁","children":[{"level":5,"title":"- - 解决: 设置锁的自动过期，即使没有删除，会自动删除","slug":"解决-设置锁的自动过期-即使没有删除-会自动删除","link":"#解决-设置锁的自动过期-即使没有删除-会自动删除","children":[]}]},{"level":4,"title":"B、测试问题2：setnx设置好， 正要去设置过期时间，宕机。又死锁了","slug":"b、测试问题2-setnx设置好-正要去设置过期时间-宕机。又死锁了","link":"#b、测试问题2-setnx设置好-正要去设置过期时间-宕机。又死锁了","children":[{"level":5,"title":"- - 解决: 设置过期时间和占位必须是原子的。redis支持使用setnx ex命令","slug":"解决-设置过期时间和占位必须是原子的。redis支持使用setnx-ex命令","link":"#解决-设置过期时间和占位必须是原子的。redis支持使用setnx-ex命令","children":[]}]},{"level":4,"title":"C、测试问题3（加锁原子型）：删除锁直接删除？？? 如果由于业务时间很长（超时），锁自己过期了，我们直接删除，有可能把别人正在持有的锁删除了","slug":"c、测试问题3-加锁原子型-删除锁直接删除-如果由于业务时间很长-超时-锁自己过期了-我们直接删除-有可能把别人正在持有的锁删除了","link":"#c、测试问题3-加锁原子型-删除锁直接删除-如果由于业务时间很长-超时-锁自己过期了-我们直接删除-有可能把别人正在持有的锁删除了","children":[{"level":5,"title":"- - 解决: 占锁的时候，值指定为uuid,每个人匹配是自己的锁才删除","slug":"解决-占锁的时候-值指定为uuid-每个人匹配是自己的锁才删除","link":"#解决-占锁的时候-值指定为uuid-每个人匹配是自己的锁才删除","children":[]}]},{"level":4,"title":"D、 测试问题4：占锁时指定为uuid,每个人匹配是自己的锁才删除。如果正好判断是当前值，正要删除锁的时候，锁已经过期了，别人已经设置到了新的值，那么我们删除的就是别人的锁了","slug":"d、-测试问题4-占锁时指定为uuid-每个人匹配是自己的锁才删除。如果正好判断是当前值-正要删除锁的时候-锁已经过期了-别人已经设置到了新的值-那么我们删除的就是别人的锁了","link":"#d、-测试问题4-占锁时指定为uuid-每个人匹配是自己的锁才删除。如果正好判断是当前值-正要删除锁的时候-锁已经过期了-别人已经设置到了新的值-那么我们删除的就是别人的锁了","children":[{"level":5,"title":"- - 解决: lua脚本解锁","slug":"解决-lua脚本解锁","link":"#解决-lua脚本解锁","children":[]}]},{"level":4,"title":"E、 测试问题5：lua脚本解锁（最终形态）","slug":"e、-测试问题5-lua脚本解锁-最终形态","link":"#e、-测试问题5-lua脚本解锁-最终形态","children":[]}]}]},{"level":2,"title":"2.6 完整业务实例","slug":"_2-6-完整业务实例","link":"#_2-6-完整业务实例","children":[]},{"level":2,"title":"发现加锁与解锁重复，把他提出来到工具类，但分布式框架有成型产品《RedisSon 整合》","slug":"发现加锁与解锁重复-把他提出来到工具类-但分布式框架有成型产品《redisson-整合》","link":"#发现加锁与解锁重复-把他提出来到工具类-但分布式框架有成型产品《redisson-整合》","children":[]},{"level":2,"title":"3.1. RedisSon 整合","slug":"_3-1-redisson-整合","link":"#_3-1-redisson-整合","children":[{"level":3,"title":"- - 依赖","slug":"依赖","link":"#依赖","children":[]},{"level":3,"title":"- - 配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"- - 测试","slug":"测试","link":"#测试","children":[]}]},{"level":2,"title":"3.2. RedisSon-lock 锁测试","slug":"_3-2-redisson-lock-锁测试","link":"#_3-2-redisson-lock-锁测试","children":[{"level":3,"title":"- - 简单测试","slug":"简单测试","link":"#简单测试","children":[]},{"level":3,"title":"lock特点","slug":"lock特点","link":"#lock特点","children":[]}]},{"level":2,"title":"3.3. RedisSon-lock 看门狗原理","slug":"_3-3-redisson-lock-看门狗原理","link":"#_3-3-redisson-lock-看门狗原理","children":[]},{"level":2,"title":"3.4. RedisSon 读写锁 ReadWriteLock","slug":"_3-4-redisson-读写锁-readwritelock","link":"#_3-4-redisson-读写锁-readwritelock","children":[{"level":3,"title":"- - 测试","slug":"测试-1","link":"#测试-1","children":[]},{"level":3,"title":"- - 结论","slug":"结论","link":"#结论","children":[]}]},{"level":2,"title":"3.5. RedisSon 闭锁CountDownLatch 测试","slug":"_3-5-redisson-闭锁countdownlatch-测试","link":"#_3-5-redisson-闭锁countdownlatch-测试","children":[{"level":3,"title":"- - 放假，锁门 测试","slug":"放假-锁门-测试","link":"#放假-锁门-测试","children":[]},{"level":3,"title":"- - 结论","slug":"结论-1","link":"#结论-1","children":[]}]},{"level":2,"title":"3.6. RedisSon 信号量Semaphore 测试","slug":"_3-6-redisson-信号量semaphore-测试","link":"#_3-6-redisson-信号量semaphore-测试","children":[{"level":3,"title":"- - 车库停车测试","slug":"车库停车测试","link":"#车库停车测试","children":[]}]},{"level":2,"title":"3.7. RedisSon 缓存一致性解决","slug":"_3-7-redisson-缓存一致性解决","link":"#_3-7-redisson-缓存一致性解决","children":[{"level":3,"title":"- - 原理：双写模式、失效模式","slug":"原理-双写模式、失效模式","link":"#原理-双写模式、失效模式","children":[]},{"level":3,"title":"- - 解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":3,"title":"- - Canal","slug":"canal","link":"#canal","children":[]},{"level":3,"title":"- - 使用失效模式","slug":"使用失效模式","link":"#使用失效模式","children":[]}]},{"level":2,"title":"RedissonLock完整业务实例","slug":"redissonlock完整业务实例","link":"#redissonlock完整业务实例","children":[]},{"level":2,"title":"4.1. 整合","slug":"_4-1-整合","link":"#_4-1-整合","children":[]},{"level":2,"title":"4.2. @Cacheable细节设置","slug":"_4-2-cacheable细节设置","link":"#_4-2-cacheable细节设置","children":[]},{"level":2,"title":"4.3. 自定义缓存设置","slug":"_4-3-自定义缓存设置","link":"#_4-3-自定义缓存设置","children":[]},{"level":2,"title":"4.4. @CacheEvict+Caching 失效模式使用","slug":"_4-4-cacheevict-caching-失效模式使用","link":"#_4-4-cacheevict-caching-失效模式使用","children":[{"level":3,"title":"4.4.1 删除一个","slug":"_4-4-1-删除一个","link":"#_4-4-1-删除一个","children":[]},{"level":3,"title":"4.4.2 删除多个","slug":"_4-4-2-删除多个","link":"#_4-4-2-删除多个","children":[]}]},{"level":2,"title":"4.5. @CachePut 双写模式使用","slug":"_4-5-cacheput-双写模式使用","link":"#_4-5-cacheput-双写模式使用","children":[]},{"level":2,"title":"4.6. 原理与不足","slug":"_4-6-原理与不足","link":"#_4-6-原理与不足","children":[]},{"level":2,"title":"4.7. 总结","slug":"_4-7-总结","link":"#_4-7-总结","children":[]}],"git":{"createdTime":1706860273000,"updatedTime":1706860273000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":14.96,"words":4487},"filePathRelative":"java/cloud-lock-cache.md","localizedDate":"2020年5月12日","excerpt":"","autoDesc":true}');export{l as data};
