import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as t,c as d,b as a,e,d as p,a as c}from"./app-JabzxadU.js";const n="/vtest/assets/true-raid0-inq6bt84.jpg",s="/vtest/assets/true-raid1-AQOsyxMl.jpg",l="/vtest/assets/raid5-xbQXPVgB.png",D="/vtest/assets/true-raid10-9XWAZxqQ.jpg",I="/vtest/assets/true-raid-ZFE2Or2Y.jpg",A="/vtest/assets/raidall1-1m8lMYDX.png",R="/vtest/assets/raidall2-p120mfwl.png",h={},g=c('<h2 id="raid磁盘阵列" tabindex="-1"><a class="header-anchor" href="#raid磁盘阵列"><span>RAID磁盘阵列</span></a></h2><h3 id="raid-概念" tabindex="-1"><a class="header-anchor" href="#raid-概念"><span>RAID 概念</span></a></h3><p>RAID 是英文 (<em>Redundant Array of Independent Disks</em>) 的缩写，翻译成中文是“独立磁盘冗余阵列”, 简称[磁盘阵列]（Disk Array）。</p><blockquote><p>在单机时代，采用单块磁盘进行数据存储和读写的方式，由于寻址和读写的时间消耗，导致I/O性能非常低，且存储容量还会受到限制。<br> 另外，单块磁盘极其容易出现物理故障，经常导致数据的丢失。<br> 因此大家就在想，有没有一种办法将多块独立的磁盘结合在一起组成一个技术方案，来提高数据的可靠性和I/O性能。</p></blockquote><p>简单的说，RAID 是一种把多块独立的硬盘（物理硬盘）按不同的方式组合起来形成一个硬盘组（逻辑硬盘），从而提供比单个硬盘更高的存储性能和提供[数据备份]技术。</p><p>在这种情况下，RAID技术就应运而生了。</p><p>RAID 技术的两大特点：<strong>一是速度、二是安全</strong></p><h3 id="raid-有哪些" tabindex="-1"><a class="header-anchor" href="#raid-有哪些"><span>RAID 有哪些？</span></a></h3><p>RAID方案常见的可以分为：</p><ul><li>RAID0</li><li>RAID1</li><li>RAID5</li><li>RAID6</li><li>RAID10</li></ul><h3 id="raid0-读写性能高-拆分" tabindex="-1"><a class="header-anchor" href="#raid0-读写性能高-拆分"><span>RAID0 读写性能高（拆分）</span></a></h3><p>RAID 0 技术把多块物理硬盘设备（至少两块）通过硬件或软件的方式串联在一起，组成一个大的卷组，并将数据一次写入到各个物理硬盘中。<br> 这样硬盘设备的读写性能会提升数倍，但是若任意一块硬盘发生故障将导致整个系统的数据都受到破坏。</p><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>优点：使用 <em>n</em> 颗硬盘，即可拥有将近 <em>n</em> 倍的读写效能，读写性能是所有 RAID 级别中最高的。（仅限理论，因为实际中磁盘的寻址时间也是性能占用的大头）</li><li>缺点：不提供数据校验或数据冗余，因此一旦用户数据损坏，损坏的数据将无法得到恢复, RAID0 运行时只要其中任一块硬盘出现问题就会导致整个数据的故障。<br> 因此RAID0就不可能用于高要求的业务中，但可以用在对可靠性要求不高，对读写性能要求高的场景中。</li></ul><p>那有没有可以让存储可靠性变高的方案呢？</p><p>有的，下面的RAID1就是。</p><h3 id="raid1-可靠性变高-备份" tabindex="-1"><a class="header-anchor" href="#raid1-可靠性变高-备份"><span>RAID1 可靠性变高（备份）</span></a></h3><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>RAID1 是将一个两块硬盘所构成 RAID 磁盘阵列，其容量仅等于一块硬盘的容量，因为另一块只是当作数据 “镜像”。</p><ul><li>优点：安全性依照数组里的实体硬盘数量倍数成长。</li><li>缺点：空间利用率是所有 RAID 中最没有效率的。</li></ul><p>硬盘数量：最少 <em>2</em> 个, 磁盘空间使用率：<em>50%</em>，故成本是非常昂贵的。</p><blockquote><p>RAID1其实与RAID0效果刚好相反。RAID1 这种双写的做法，就给数据做了一个冗余备份。<br> 这样的话，任何一块磁盘损坏了，都可以再基于另外一块磁盘去恢复数据，数据的可靠性非常强，但性能就没那么好了。</p></blockquote><p>了解了RAID0和RAID1之后，我们发现这两个方案都不完美啊。</p><p>这时候就该 性能又好、可靠性也高 的方案 RAID5 登场了。</p><h3 id="raid5-性能与数据备份的均衡考虑" tabindex="-1"><a class="header-anchor" href="#raid5-性能与数据备份的均衡考虑"><span>RAID5 性能与数据备份的均衡考虑</span></a></h3><p>这是目前用的最多的一种方式。</p><p>因为 RAID5 是一种将 <strong>存储性能、数据安全、存储成本</strong> 兼顾的一种方案。</p><p>在了解 RAID5 之前，我们可以先简单看一下 <code>RAID3</code>，虽然RAID3用的很少，但弄清楚了RAID3就很容易明白RAID5的思路。</p><hr><p>RAID3的方式是：将数据按照RAID0的形式，分成多份同时写入多块磁盘，但是还会另外再留出一块磁盘用于写「奇偶校验码」。</p><blockquote><p>例如总共有 <code>N</code> 块磁盘，那么就会让其中额度 <code>N-1</code> 块用来并发的写数据，第 <code>N</code> 块磁盘用记录校验码数据。一旦某一块磁盘坏掉了，就可以利用其它的 <code>N-1</code> 块磁盘去恢复数据。<br> 但是由于第 <code>N</code> 块磁盘是校验码磁盘，因此有任何数据的写入都会要去更新这块磁盘，导致这块磁盘的读写是最频繁的，也就非常的容易损坏。</p></blockquote><hr><p>RAID5的方式可以说是对RAID3进行了改进。</p><p>RAID5模式中，不再需要用单独的磁盘写校验码了。它把校验码信息分布到各个磁盘上。</p><blockquote><p>例如，总共有 <code>N</code> 块磁盘，那么会将要写入的数据分成 <code>N</code> 份，并发的写入到 <code>N</code> 块磁盘中，<br> 同时还将数据的校验码信息（<code>Parity</code>）也写入到这 <code>N</code> 块磁盘中（<code>数据与对应的校验码信息必须得分开存储在不同的磁盘上</code>）。<br> 一旦某一块磁盘损坏了，就可以用剩下的数据和对应的奇偶校验码信息去恢复损坏的数据。</p></blockquote><p>RAID5 技术是把多块硬盘设备（至少三块）的数据奇偶校验信息（<code>Parity</code>）保存到其他硬盘设备中。<br> RAID5 磁盘阵列组中数据的奇偶校验信息（<code>Parity</code>）并不是单独保存到某一块硬盘设备中，<br> 而是存储到 <em>除自身以外</em> 的其他每一块硬盘设备上，这样的好处是其中任何一设备损坏后不至于出现致命缺陷；</p><p>RAID5 不对存储的数据进行备份，而是把数据和相对应的奇偶校验信息存储到组成 RAID5 的各个磁盘上，<br> 并且奇偶校验信息和相对应的数据分别存储于不同的磁盘上。当 RAID5 的一个磁盘数据发生损坏后，<br> 利用剩下的数据和相应的奇偶校验信息去恢复被损坏的数据。</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>RAID5 校验位算法原理：<code>P = D1 xor D2 xor D3 … xor Dn</code> （<code>D1,D2,D3 … Dn</code>为数据块，<code>P</code>为校验，<code>xor</code>为异或运算）</p><p>RAID5 允许最多同时坏一块磁盘。如果有两块磁盘同时损坏了，那数据就无法恢复了。</p><ul><li>优点：兼顾空间利用率与安全性。</li><li>缺点：需要额外的运算资源，仅能忍受 <code>1</code> 个硬盘损毁。</li><li>硬盘数量：至少 <code>3</code> 个。</li></ul><h3 id="raid6-进一步提高存储的高可用" tabindex="-1"><a class="header-anchor" href="#raid6-进一步提高存储的高可用"><span>RAID6 进一步提高存储的高可用</span></a></h3><p>为了进一步提高存储的高可用，聪明的人们又提出了RAID6方案，可以在有两块磁盘同时损坏的情况下，也能保障数据可恢复。</p><p>为什么RAID6这么牛呢，因为RAID6在RAID5的基础上再次改进，引入了双重校验的概念。</p><p>RAID6除了每块磁盘上都有同级数据XOR校验区以外，还有针对每个数据块的XOR校验区，这样的话，相当于每个数据块有两个校验保护措施，因此数据的冗余性更高了。</p><p>但是RAID6的这种设计也带来了很高的复杂度，虽然数据冗余性好，读取的效率也比较高，但是写数据的性能就很差。因此RAID6在实际环境中应用的比较少。</p><h3 id="raid10" tabindex="-1"><a class="header-anchor" href="#raid10"><span>RAID10</span></a></h3><p>RAID10其实就是RAID1与RAID0的一个合体。</p><p>如下图，RAID10 技术需要至少四块硬盘来组建，其中先分别两两制作成 RAID1 磁盘阵列，以保证数据的安全性；<br> 然后再对两个 RAID1 磁盘阵列实施 RAID0 技术，进一步提高硬盘设备的读写速度。<br> 这样子从理论上讲，只要坏的不是同一组中的所有硬盘，那么最多可以损坏 <em>50%</em> 的硬盘设备而不丢失数据。<br> RAID10 技术继承了 RAID0 的高读写速度和 RAID1 的数据安全性。</p><figure><img src="'+D+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>RAID10兼备了 RAID1 和 RAID0 的有优点。首先基于RAID1模式将磁盘分为2份，当要写入数据的时候，<br> 将所有的数据在两份磁盘上同时写入，相当于写了双份数据，起到了数据保障的作用。且在每一份磁盘上<br> 又会基于RAID0技术讲数据分为N份并发的读写，这样也保障了数据的效率。</p><ul><li>优点：利用 RAID1 写了双份数据，保障了数据安全性；利用 RAID0 保障了数据的使用效率。</li><li>缺点：有一半的磁盘空间用于存储冗余数据的，浪费的很严重，因此用的也不是很多。</li></ul><h3 id="对比" tabindex="-1"><a class="header-anchor" href="#对比"><span>对比</span></a></h3><p>整体对比一下 <code>RAID0、RAID1、RAID5、RAID6、RAID10</code> 的几个特征：</p><figure><img src="'+I+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-容错对比" tabindex="-1"><a class="header-anchor" href="#_1-容错对比"><span>1）容错对比</span></a></h4><figure><img src="'+A+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_2-性能对比" tabindex="-1"><a class="header-anchor" href="#_2-性能对比"><span>2）性能对比</span></a></h4><figure><img src="'+R+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',59),f={href:"https://m.imooc.com/article/264962",target:"_blank",rel:"noopener noreferrer"},b=a("strong",null,"入门小站",-1);function u(m,_){const i=o("ExternalLinkIcon");return t(),d("div",null,[g,a("p",null,[e("以上内容来自: "),a("a",f,[e("不止思考_奎哥"),p(i)]),e("，微信公众号："),b])])}const N=r(h,[["render",u],["__file","disk.html.vue"]]);export{N as default};
