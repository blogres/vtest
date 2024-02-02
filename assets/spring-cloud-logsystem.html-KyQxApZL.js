import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-JabzxadU.js";const e="/vtest/assets/01-PkYJqJvw.png",p="/vtest/assets/02--jQYwBlo.png",o={},c=t(`<p>无论在什么系统中，日志管理模块都属于十分重要的部分，接下来会通过注解+AOP+MQ的方式实现一个简易的日志管理系统</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><ul><li><p><em>注解</em>：标记需要记录日志的方法</p></li><li><p><em>AOP</em>：通过AOP增强代码，利用后置/异常通知的方式获取相关日志信息，最后使用MQ将日志信息发送到专门处理日志的系统</p></li><li><p><em>RabbitMQ</em>：利用解耦、异步的特性，协调完成各个微服务系统之间的通信</p></li></ul><h2 id="工作流程" tabindex="-1"><a class="header-anchor" href="#工作流程"><span>工作流程</span></a></h2><blockquote><p><code>注解标记</code>---&gt;<code>AOP拦截</code>---&gt;<code>日志发送到MQ</code>---&gt;<code>专门处理日志的系统监听MQ消息</code> ---&gt;<code>日志插入到数据库</code></p></blockquote><h2 id="日志表结构" tabindex="-1"><a class="header-anchor" href="#日志表结构"><span>日志表结构</span></a></h2><h3 id="表结构-sys-log" tabindex="-1"><a class="header-anchor" href="#表结构-sys-log"><span>表结构（sys_log）</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>CREATE TABLE \`sys_log\` (
  \`id\` int(11) NOT NULL AUTO_INCREMENT COMMENT &#39;唯一ID&#39;,
  \`opt_id\` int(11) DEFAULT NULL COMMENT &#39;操作用户id&#39;,
  \`opt_name\` varchar(50) DEFAULT NULL COMMENT &#39;操作用户名&#39;,
  \`log_type\` varchar(20) DEFAULT NULL COMMENT &#39;日志类型&#39;,
  \`log_message\` varchar(255) DEFAULT NULL COMMENT &#39;日志信息（具体方法名）&#39;,
  \`create_time\` datetime DEFAULT NULL COMMENT &#39;创建时间&#39;,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 COMMENT=&#39;系统日志表&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实体类-syslog" tabindex="-1"><a class="header-anchor" href="#实体类-syslog"><span>实体类（SysLog）</span></a></h3><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SysLog</span>  <span class="token punctuation">{</span>
 
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
 
    <span class="token doc-comment comment">/**
     * 唯一ID
     */</span>
    <span class="token annotation punctuation">@TableId</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> type <span class="token operator">=</span> <span class="token class-name">IdType</span><span class="token punctuation">.</span><span class="token constant">AUTO</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 操作用户id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> optId<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 操作用户名
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> optName<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 日志类型
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> logType<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 日志信息（具体方法名）
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> logMessage<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 创建时间
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注解" tabindex="-1"><a class="header-anchor" href="#注解"><span>注解</span></a></h2><h3 id="注解-systemlog" tabindex="-1"><a class="header-anchor" href="#注解-systemlog"><span>注解（SystemLog）</span></a></h3><p>仅作为标记的作用，目的让JVM可以识别，然后可以从中获取相关信息</p><ul><li><p><strong>@Target</strong>： 定义注解作用的范围，这里是方法</p></li><li><p><strong>@Retention</strong>： 定义注解生命周期，这里是运行时</p></li></ul><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span><span class="token constant">METHOD</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span><span class="token constant">RUNTIME</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SystemLog</span> <span class="token punctuation">{</span>
 
    <span class="token class-name">SystemLogEnum</span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="枚举-systemlogenum" tabindex="-1"><a class="header-anchor" href="#枚举-systemlogenum"><span>枚举（SystemLogEnum）</span></a></h3><p>限定日志类型范围</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">SystemLogEnum</span> <span class="token punctuation">{</span>
 
    <span class="token function">SAVE_LOG</span><span class="token punctuation">(</span><span class="token string">&quot;保存&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">DELETE_LOG</span><span class="token punctuation">(</span><span class="token string">&quot;删除&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">REGISTER_LOG</span><span class="token punctuation">(</span><span class="token string">&quot;注册&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">LOGIN_LOG</span><span class="token punctuation">(</span><span class="token string">&quot;登录&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">LAUD_LOG</span><span class="token punctuation">(</span><span class="token string">&quot;点赞&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">COLLECT_LOG</span><span class="token punctuation">(</span><span class="token string">&quot;收藏&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">THROW_LOG</span><span class="token punctuation">(</span><span class="token string">&quot;异常&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> type<span class="token punctuation">;</span>
 
    <span class="token class-name">SystemLogEnum</span><span class="token punctuation">(</span><span class="token class-name">String</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>type <span class="token operator">=</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> type<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aop切面" tabindex="-1"><a class="header-anchor" href="#aop切面"><span>AOP切面</span></a></h2><h3 id="aop-syslogaspect" tabindex="-1"><a class="header-anchor" href="#aop-syslogaspect"><span>AOP（SysLogAspect）</span></a></h3><p>实现代码的增强，主要通过动态代理方式实现的代码增强。拦截注解，并获取拦截到的相关信息，封装成日志对象发送到MQ队列（生产端）</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token class-name">Component</span>
<span class="token annotation punctuation">@Aspect</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SysLogAspect</span> <span class="token punctuation">{</span>
 
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">MqStream</span> stream<span class="token punctuation">;</span>
 
    <span class="token comment">//切点</span>
    <span class="token annotation punctuation">@Pointcut</span><span class="token punctuation">(</span><span class="token string">&quot;@annotation(cn.zdxh.commons.utils.SystemLog)&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">logPointcut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
 
    <span class="token comment">//后置通知</span>
    <span class="token annotation punctuation">@After</span><span class="token punctuation">(</span><span class="token string">&quot;logPointcut()&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterLog</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//一般日志</span>
        <span class="token class-name">SysLog</span> sysLog <span class="token operator">=</span> <span class="token function">wrapSysLog</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Log值：{}&quot;</span><span class="token punctuation">,</span> sysLog<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">//发送mq消息</span>
        stream<span class="token punctuation">.</span><span class="token function">logOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">MessageBuilder</span><span class="token punctuation">.</span><span class="token function">withPayload</span><span class="token punctuation">(</span>sysLog<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token punctuation">}</span>
 
    <span class="token comment">//异常通知</span>
    <span class="token annotation punctuation">@AfterThrowing</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;logPointcut()&quot;</span><span class="token punctuation">,</span> throwing <span class="token operator">=</span> <span class="token string">&quot;e&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">throwingLog</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">,</span> <span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//异常日志</span>
        <span class="token class-name">SysLog</span> sysLog <span class="token operator">=</span> <span class="token function">wrapSysLog</span><span class="token punctuation">(</span>joinPoint<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sysLog<span class="token punctuation">.</span><span class="token function">setLogType</span><span class="token punctuation">(</span><span class="token class-name">SystemLogEnum</span><span class="token punctuation">.</span><span class="token constant">THROW_LOG</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sysLog<span class="token punctuation">.</span><span class="token function">setLogMessage</span><span class="token punctuation">(</span>sysLog<span class="token punctuation">.</span><span class="token function">getLogMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;===&quot;</span><span class="token operator">+</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;异常Log值：{}&quot;</span><span class="token punctuation">,</span> sysLog<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">//发送mq消息</span>
        stream<span class="token punctuation">.</span><span class="token function">logOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token class-name">MessageBuilder</span><span class="token punctuation">.</span><span class="token function">withPayload</span><span class="token punctuation">(</span>sysLog<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token doc-comment comment">/**
     * 封装SysLog对象
     * <span class="token keyword">@param</span> <span class="token parameter">joinPoint</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">SysLog</span> <span class="token function">wrapSysLog</span><span class="token punctuation">(</span><span class="token class-name">JoinPoint</span> joinPoint<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//获取请求响应对象</span>
        <span class="token class-name">ServletRequestAttributes</span> attributes <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ServletRequestAttributes</span><span class="token punctuation">)</span> <span class="token class-name">RequestContextHolder</span><span class="token punctuation">.</span><span class="token function">getRequestAttributes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> attributes<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">MethodSignature</span> signature <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">MethodSignature</span><span class="token punctuation">)</span>joinPoint<span class="token punctuation">.</span><span class="token function">getSignature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SysLog</span> sysLog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SysLog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token comment">//获取方法全路径</span>
        <span class="token class-name">String</span> methodName <span class="token operator">=</span> signature<span class="token punctuation">.</span><span class="token function">getDeclaringTypeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;.&quot;</span><span class="token operator">+</span>signature<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//获取注解参数值</span>
        <span class="token class-name">SystemLog</span> systemLog <span class="token operator">=</span> signature<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">SystemLog</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//从header取出token</span>
        <span class="token class-name">String</span> token <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getHeader</span><span class="token punctuation">(</span><span class="token string">&quot;token&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//操作人信息</span>
            <span class="token class-name">Integer</span> userId <span class="token operator">=</span> <span class="token class-name">JwtUtils</span><span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token class-name">JwtUtils</span><span class="token punctuation">.</span><span class="token function">getUsername</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sysLog<span class="token punctuation">.</span><span class="token function">setOptId</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
            sysLog<span class="token punctuation">.</span><span class="token function">setOptName</span><span class="token punctuation">(</span>username<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>systemLog<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            sysLog<span class="token punctuation">.</span><span class="token function">setLogType</span><span class="token punctuation">(</span>systemLog<span class="token punctuation">.</span><span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        sysLog<span class="token punctuation">.</span><span class="token function">setLogMessage</span><span class="token punctuation">(</span>methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sysLog<span class="token punctuation">.</span><span class="token function">setCreateTime</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sysLog<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rabbitmq消息队列" tabindex="-1"><a class="header-anchor" href="#rabbitmq消息队列"><span>RabbitMQ消息队列</span></a></h2><h3 id="mq" tabindex="-1"><a class="header-anchor" href="#mq"><span>MQ</span></a></h3><p>这里主要是通过 <code>Spring Cloud Stream</code> 集成的 RabbitMQ</p><h3 id="spring-cloud-stream" tabindex="-1"><a class="header-anchor" href="#spring-cloud-stream"><span>Spring Cloud Stream</span></a></h3><p>作为MQ的抽象层，已屏蔽各种MQ的各自名词，统称为<code>input、output</code>两大块。可以更方便灵活地切换各种MQ，如 <code>kafka、RocketMQ</code> 等</p><figure><img src="`+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>（1）定义Input/Ouput接口（MqStream）</strong></p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">MqStream</span> <span class="token punctuation">{</span>
 
    <span class="token class-name">String</span> <span class="token constant">LOG_INPUT</span> <span class="token operator">=</span> <span class="token string">&quot;log_input&quot;</span><span class="token punctuation">;</span>
 
    <span class="token class-name">String</span> <span class="token constant">LOG_OUTPUT</span> <span class="token operator">=</span> <span class="token string">&quot;log_output&quot;</span><span class="token punctuation">;</span>
  
    <span class="token annotation punctuation">@Input</span><span class="token punctuation">(</span><span class="token constant">LOG_INPUT</span><span class="token punctuation">)</span>
    <span class="token class-name">SubscribableChannel</span> <span class="token function">logInput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token annotation punctuation">@Output</span><span class="token punctuation">(</span><span class="token constant">LOG_OUTPUT</span><span class="token punctuation">)</span>
    <span class="token class-name">MessageChannel</span> <span class="token function">logOutput</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>（2）MQ生产者</strong></p><blockquote><p>注：这里使用到AOP切面的微服务，都属于MQ生产者服务</p></blockquote><p><em>引入依赖</em>：这里没有版本号的原因是spring cloud已经帮我们管理好各个版本号，已无需手动定义版本号</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>&lt;<span class="token tag">!--Spring</span> Cloud Stream<span class="token punctuation">-</span><span class="token punctuation">-</span><span class="token punctuation">&gt;</span>
&lt;dependency<span class="token punctuation">&gt;</span>
    &lt;groupId<span class="token punctuation">&gt;</span>org.springframework.cloud&lt;/groupId<span class="token punctuation">&gt;</span>
     &lt;artifactId<span class="token punctuation">&gt;</span>spring<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>stream&lt;/artifactId<span class="token punctuation">&gt;</span>
&lt;/dependency<span class="token punctuation">&gt;</span>
&lt;dependency<span class="token punctuation">&gt;</span>
    &lt;groupId<span class="token punctuation">&gt;</span>org.springframework.cloud&lt;/groupId<span class="token punctuation">&gt;</span>
    &lt;artifactId<span class="token punctuation">&gt;</span>spring<span class="token punctuation">-</span>cloud<span class="token punctuation">-</span>stream<span class="token punctuation">-</span>binder<span class="token punctuation">-</span>rabbit&lt;/artifactId<span class="token punctuation">&gt;</span>
&lt;/dependency<span class="token punctuation">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在程序入口开启MQ的Input/Output绑定：</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>scanBasePackages <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;cn.zdxh.user&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;cn.zdxh.commons&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@MapperScan</span><span class="token punctuation">(</span><span class="token string">&quot;cn.zdxh.user.mapper&quot;</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableBinding</span><span class="token punctuation">(</span><span class="token class-name">MqStream</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token comment">//开启绑定</span>
<span class="token annotation punctuation">@EnableFeignClients</span> 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">YouquServiceProviderUserApplication</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">YouquServiceProviderUserApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>yml配置</em></p><p>在生产者端设置output</p><ul><li><strong>destination</strong>： 相当于rabbitmq的exchange</li><li><strong>group</strong>： 相当于rabbitmq的queue，不过是和destination一起组合成的queue名</li><li><strong>binder</strong>： 需要绑定的MQ</li></ul><p><em>Spring Cloud Stream相关配置</em></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring:
  cloud:
    stream:
      bindings: # exchange与queue绑定
        log_output: # 日志生产者设置output
          destination: log.exchange
          content-type: application/json
          group: log.queue
          binder: youqu_rabbit #自定义名称
      binders:
        youqu_rabbit:  #自定义名称
          type: rabbit
          environment:
            spring:
              rabbitmq:
                host: localhost
                port: 5672
                username: guest
                password: 25802580
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：完成以上操作，即完成MQ生产端的所有工作</p></blockquote><p><strong>（3）MQ消费者</strong></p><p>引入依赖、开启Input/Output绑定：均和生产者的设置一致</p><p><em>yml配置</em></p><p>在生产者端设置input</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">stream</span><span class="token punctuation">:</span>
      <span class="token key atrule">bindings</span><span class="token punctuation">:</span> <span class="token comment"># exchange与queue绑定</span>
        <span class="token key atrule">log_input</span><span class="token punctuation">:</span> <span class="token comment"># 日志消费者设置input</span>
          <span class="token key atrule">destination</span><span class="token punctuation">:</span> log.exchange
          <span class="token key atrule">content-type</span><span class="token punctuation">:</span> application/json
          <span class="token key atrule">group</span><span class="token punctuation">:</span> log.queue
          <span class="token key atrule">binder</span><span class="token punctuation">:</span> youqu_rabbit
      <span class="token key atrule">binders</span><span class="token punctuation">:</span>
        <span class="token key atrule">youqu_rabbit</span><span class="token punctuation">:</span>
          <span class="token key atrule">type</span><span class="token punctuation">:</span> rabbit
          <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token key atrule">spring</span><span class="token punctuation">:</span>
              <span class="token key atrule">rabbitmq</span><span class="token punctuation">:</span>
                <span class="token key atrule">host</span><span class="token punctuation">:</span> localhost
                <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">5672</span>
                <span class="token key atrule">username</span><span class="token punctuation">:</span> guest
                <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token number">25802580</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="消费者监听-logmqlistener" tabindex="-1"><a class="header-anchor" href="#消费者监听-logmqlistener"><span>消费者监听（LogMqListener）</span></a></h3><p>监听生产者发过来的日志信息，将信息添加到数据库即可</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LogMqListener</span> <span class="token punctuation">{</span>
 
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">SysLogService</span> sysLogService<span class="token punctuation">;</span>
 
    <span class="token annotation punctuation">@StreamListener</span><span class="token punctuation">(</span><span class="token class-name">MqStream</span><span class="token punctuation">.</span><span class="token constant">LOG_INPUT</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token class-name">SysLog</span> sysLog<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;开始记录日志========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        sysLogService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>sysLog<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;结束记录日志========================&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：完成以上操作，即完成MQ消费端的所有工作</p></blockquote><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h2><p>简述：</p><p>只需将 <code>@SystemLog(type = SystemLogEnum.REGISTER_LOG)</code> ，标记在需要记录的方法上，当有客户端访问该方法时，就可以自动完成日志的记录</p><figure><img src="`+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',55),i=[c];function l(u,d){return s(),a("div",null,i)}const v=n(o,[["render",l],["__file","spring-cloud-logsystem.html.vue"]]);export{v as default};
