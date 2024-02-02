import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as t}from"./app-JabzxadU.js";const o={},e=t(`<p>在工作流中获取github的上下文、示例等，</p><h2 id="获取github上下文" tabindex="-1"><a class="header-anchor" href="#获取github上下文"><span>获取github上下文</span></a></h2><p><em>示例</em></p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> 输出github信息

<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> main
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">dump_contexts_to_log</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> GitHub context
        <span class="token key atrule">id</span><span class="token punctuation">:</span> github_context_step
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo &#39;$<span class="token punctuation">{</span><span class="token punctuation">{</span> toJSON(github) <span class="token punctuation">}</span><span class="token punctuation">}</span>&#39;

      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> startout2
        <span class="token key atrule">id</span><span class="token punctuation">:</span> github_context_message
        <span class="token comment"># toJSON 输出有双引号</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo $<span class="token punctuation">{</span><span class="token punctuation">{</span> toJSON(github.event.head_commit.message) <span class="token punctuation">}</span><span class="token punctuation">}</span>
    
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 根据提交信息来触发任务
        <span class="token key atrule">if</span><span class="token punctuation">:</span> startsWith(github.event.head_commit.message<span class="token punctuation">,</span> &#39;outpp&#39;)
        <span class="token key atrule">id</span><span class="token punctuation">:</span> message
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo \${{ github.event.head_commit.message }}
          echo 执行成功结束</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>Run echo outpp
  echo outpp
  echo 执行成功结束
  shell: /usr/bin/bash -e {0}
outpp
执行成功结束
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出github上下文内容</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token punctuation">{</span>
  <span class="token key atrule">&quot;token&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;***&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;job&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;dump_contexts_to_log&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;ref&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;refs/heads/main&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;sha&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1b7f2d4cb8395dcc3&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;repository&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to/to&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;repository_owner&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;repository_owner_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;12026&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;repositoryUrl&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;git://github.com/to/to.git&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;run_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;4692&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;run_number&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;retention_days&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;90&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;run_attempt&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;artifact_cache_size_limit&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;repository_visibility&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;repository_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;5717&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;actor_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;15&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;actor&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;triggering_actor&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;workflow&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;输出github信息&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;head_ref&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;base_ref&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;event_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;push&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;event&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
    <span class="token key atrule">&quot;after&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1b7f2dc4cadeb15dcc3&quot;</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;base_ref&quot;</span><span class="token punctuation">:</span> <span class="token null important">null</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;before&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;68b1b7209982075&quot;</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;commits&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;author&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to@163.com&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;committer&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token key atrule">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;noreply@github.com&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;GitHub&quot;</span><span class="token punctuation">,</span>
          <span class="token key atrule">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;web-flow&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;distinct&quot;</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1b7f2d4cbdeb15dcc3&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;更新github工作流输出信息\\n\\n66&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;timestamp&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2023-04-12T14:07:30+08:00&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;tree_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2ba03c9ec54bb9e1109a8fbc31&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/to/to/commit/1b77a6a9c4ca5dcc3&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;compare&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/to/to/compare/68bd9...1b7f239&quot;</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;created&quot;</span><span class="token punctuation">:</span> <span class="token boolean important">false</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;deleted&quot;</span><span class="token punctuation">:</span> <span class="token boolean important">false</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;forced&quot;</span><span class="token punctuation">:</span> <span class="token boolean important">false</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;head_commit&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;author&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to@163.com&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;committer&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token key atrule">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;noreply@github.com&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;GitHub&quot;</span><span class="token punctuation">,</span>
        <span class="token key atrule">&quot;username&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;web-flow&quot;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;distinct&quot;</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1b7f2d4c5dcc3&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;message&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;更新github工作流输出信息\\n\\n66&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;timestamp&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2023-04-12T14:07:30+08:00&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;tree_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;2ba03c9ec54b8fbc31&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/to/to/commit/1b7f2d4c9dcc3&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;organization&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;avatar_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://avatars.githubusercontent.com/u/12023?v=4&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;description&quot;</span><span class="token punctuation">:</span> <span class="token null important">null</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;events_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/orgs/to/events&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;hooks_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/orgs/to/hooks&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;id&quot;</span><span class="token punctuation">:</span> <span class="token number">12026</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;issues_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/orgs/to/issues&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;login&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;members_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/orgs/to/members{/member}&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;node_id&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;O_kgg&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;public_members_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/orgs/to/public_members{/member}&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;repos_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/orgs/to/repos&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/orgs/to&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;pusher&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to@163.com&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;ref&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;refs/heads/main&quot;</span><span class="token punctuation">,</span>
    <span class="token key atrule">&quot;repository&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
      <span class="token key atrule">&quot;allow_forking&quot;</span><span class="token punctuation">:</span> <span class="token boolean important">true</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;archive_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/repos/to/to/{archive_format}{/ref}&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;archived&quot;</span><span class="token punctuation">:</span> <span class="token boolean important">false</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;assignees_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/repos/to/to/assignees{/user}&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;blobs_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/repos/to/to/git/blobs{/sha}&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;branches_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/repos/to/to/branches{/branch}&quot;</span><span class="token punctuation">,</span>
      <span class="token key atrule">&quot;clone_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com/to/to.git&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">...</span>.
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;server_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://github.com&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;api_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;graphql_url&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;https://api.github.com/graphql&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;ref_name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;main&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;ref_protected&quot;</span><span class="token punctuation">:</span> <span class="token boolean important">false</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;ref_type&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;branch&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;secret_source&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Actions&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;workflow_ref&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;to/to/.github/workflows/echogithub.yml@refs/heads/main&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;workflow_sha&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;1b7f2d4cb839ca1b993a0b7a&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;workspace&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;/home/runner/work/blogres/blogres&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;action&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;github_context_step&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;event_path&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;/home/runner/work/_temp/_github_workflow/event.json&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;action_repository&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;action_ref&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;path&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;/home/runner/work/_temp/_runner_file_commands/add_path_ae68aad5-a472&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;env&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;/home/runner/work/_temp/_runner_file_commands/set_env_ae68aad5-a472&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;step_summary&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;/home/runner/work/_temp/_runner_file_commands/step_summary_ae68aad5-a472&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;state&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;/home/runner/work/_temp/_runner_file_commands/save_state_ae68aad5-a472&quot;</span><span class="token punctuation">,</span>
  <span class="token key atrule">&quot;output&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;/home/runner/work/_temp/_runner_file_commands/set_output_ae68aad5-a472&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),p=[e];function u(c,l){return s(),a("div",null,p)}const r=n(o,[["render",u],["__file","github-docs.html.vue"]]);export{r as default};
