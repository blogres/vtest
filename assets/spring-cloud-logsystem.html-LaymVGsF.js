const e=JSON.parse('{"key":"v-2d53492a","path":"/java/spring-cloud-logsystem.html","title":"SpringCloud使用注解+AOP+MQ来实现日志管理模块","lang":"zh-CN","frontmatter":{"icon":"java","title":"SpringCloud使用注解+AOP+MQ来实现日志管理模块","category":["Cloud","Java"],"headerDepth":5,"date":"2023-04-05T00:00:00.000Z","tag":["logsystem","springcloud"],"description":"无论在什么系统中，日志管理模块都属于十分重要的部分，接下来会通过注解+AOP+MQ的方式实现一个简易的日志管理系统","head":[["meta",{"property":"og:url","content":"https://blogres.github.io/vtest/java/spring-cloud-logsystem.html"}],["meta",{"property":"og:title","content":"SpringCloud使用注解+AOP+MQ来实现日志管理模块"}],["meta",{"property":"og:description","content":"无论在什么系统中，日志管理模块都属于十分重要的部分，接下来会通过注解+AOP+MQ的方式实现一个简易的日志管理系统"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://blogres.github.io/vtest/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-02T07:51:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"SpringCloud使用注解+AOP+MQ来实现日志管理模块"}],["meta",{"property":"article:author","content":"blogres"}],["meta",{"property":"article:tag","content":"logsystem"}],["meta",{"property":"article:tag","content":"springcloud"}],["meta",{"property":"article:published_time","content":"2023-04-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T07:51:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringCloud使用注解+AOP+MQ来实现日志管理模块\\",\\"image\\":[\\"https://blogres.github.io/vtest/\\"],\\"datePublished\\":\\"2023-04-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-02T07:51:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"blogres\\",\\"url\\":\\"/article\\"}]}"]]},"headers":[{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"工作流程","slug":"工作流程","link":"#工作流程","children":[]},{"level":2,"title":"日志表结构","slug":"日志表结构","link":"#日志表结构","children":[{"level":3,"title":"表结构（sys_log）","slug":"表结构-sys-log","link":"#表结构-sys-log","children":[]},{"level":3,"title":"实体类（SysLog）","slug":"实体类-syslog","link":"#实体类-syslog","children":[]}]},{"level":2,"title":"注解","slug":"注解","link":"#注解","children":[{"level":3,"title":"注解（SystemLog）","slug":"注解-systemlog","link":"#注解-systemlog","children":[]},{"level":3,"title":"枚举（SystemLogEnum）","slug":"枚举-systemlogenum","link":"#枚举-systemlogenum","children":[]}]},{"level":2,"title":"AOP切面","slug":"aop切面","link":"#aop切面","children":[{"level":3,"title":"AOP（SysLogAspect）","slug":"aop-syslogaspect","link":"#aop-syslogaspect","children":[]}]},{"level":2,"title":"RabbitMQ消息队列","slug":"rabbitmq消息队列","link":"#rabbitmq消息队列","children":[{"level":3,"title":"MQ","slug":"mq","link":"#mq","children":[]},{"level":3,"title":"Spring Cloud Stream","slug":"spring-cloud-stream","link":"#spring-cloud-stream","children":[]},{"level":3,"title":"消费者监听（LogMqListener）","slug":"消费者监听-logmqlistener","link":"#消费者监听-logmqlistener","children":[]}]},{"level":2,"title":"应用","slug":"应用","link":"#应用","children":[]}],"git":{"createdTime":1706860273000,"updatedTime":1706860273000,"contributors":[{"name":"topjfy","email":"topjfk@163.com","commits":1}]},"readingTime":{"minutes":4.46,"words":1337},"filePathRelative":"java/spring-cloud-logsystem.md","localizedDate":"2023年4月5日","excerpt":"<p>无论在什么系统中，日志管理模块都属于十分重要的部分，接下来会通过注解+AOP+MQ的方式实现一个简易的日志管理系统</p>\\n","autoDesc":true}');export{e as data};