(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{500:function(t,i,s){"use strict";s.r(i);var a=s(5),l=Object(a.a)({},(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("以下内容均摘抄自老师的PPT，由于PPT逻辑有问题、很乱，所以我摘抄的内容也没什么逻辑")])]),t._v(" "),s("h2",{attrs:{id:"_1-最简单的隐写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-最简单的隐写"}},[t._v("#")]),t._v(" 1 最简单的隐写")]),t._v(" "),s("ul",[s("li",[t._v("LSB（Least Significant Bits）：最不重要位，有时也称为最低有效位或简称最低位")]),t._v(" "),s("li",[t._v("MSB（Most Significant Bits）：最重要位")]),t._v(" "),s("li",[t._v("LSB嵌入（embedding）：顺序选取图像载体像素，将消息隐藏于LSB\n"),s("ul",[s("li",[t._v("嵌入过程：将图像所有像素点的LSB与秘密信息"),s("span",{staticClass:"katex"},[s("span",{staticClass:"katex-mathml"},[s("math",[s("semantics",[s("mrow",[s("msub",[s("mi",[t._v("m")]),s("mi",[t._v("i")])],1)],1),s("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("m_i")])],1)],1)],1),s("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[s("span",{staticClass:"strut",staticStyle:{height:"0.43056em"}}),s("span",{staticClass:"strut bottom",staticStyle:{height:"0.58056em","vertical-align":"-0.15em"}}),s("span",{staticClass:"base textstyle uncramped"},[s("span",{staticClass:"mord"},[s("span",{staticClass:"mord mathit"},[t._v("m")]),s("span",{staticClass:"vlist"},[s("span",{staticStyle:{top:"0.15em","margin-right":"0.05em","margin-left":"0em"}},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),s("span",{staticClass:"reset-textstyle scriptstyle cramped"},[s("span",{staticClass:"mord mathit"},[t._v("i")])])]),s("span",{staticClass:"baseline-fix"},[s("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[s("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v("进行替换")]),t._v(" "),s("li",[t._v("提取过程：把图像所有像素点的LSB取出来，即为秘密信息")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-什么是好的隐写术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-什么是好的隐写术"}},[t._v("#")]),t._v(" 2 什么是好的隐写术？")]),t._v(" "),s("ul",[s("li",[s("p",[s("font",{attrs:{color:"red"}},[t._v("好的隐写术应当即安全又实用")])],1)]),t._v(" "),s("li",[s("p",[t._v("LSB embedding安全吗？")]),t._v(" "),s("ul",[s("li",[t._v("从视觉上看，看不出什么区别")]),t._v(" "),s("li",[t._v("但如果把LSB单独拿出来显示，则能看出区别")])]),t._v(" "),s("blockquote",[s("p",[t._v("最基本假设：Kerchoffs（柯克霍夫）原则")]),t._v(" "),s("ul",[s("li",[t._v("攻击者知道\n"),s("ul",[s("li",[t._v("选择哪种类型的载体")]),t._v(" "),s("li",[t._v("使用哪种隐写算法")]),t._v(" "),s("li",[t._v("隐写算法的各个参数")])])]),t._v(" "),s("li",[t._v("攻击者不知道\n"),s("ul",[s("li",[t._v("密钥")]),t._v(" "),s("li",[t._v("选用的载体")])])])])])]),t._v(" "),s("li",[s("p",[t._v("LSB embadding实用吗？")]),t._v(" "),s("ul",[s("li",[t._v("若一幅高清图像只改变一个像素点的LSB，则一张图只能传1bit，发送单词“Today”需要5×4=20张图")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-隐写术的属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-隐写术的属性"}},[t._v("#")]),t._v(" 3 隐写术的属性")]),t._v(" "),s("ul",[s("li",[t._v("嵌入容量（Embedding Capacity）：在给定的cover work中，能够被隐藏的最大比特数")]),t._v(" "),s("li",[t._v("隐写容量（Steganographic Capacity）：攻击者检测到的概率可忽略不计的最大比特数")]),t._v(" "),s("li",[t._v("嵌入效率（Embedding efficiency）：每个失真单元被嵌入的秘密信息比特数")]),t._v(" "),s("li",[t._v("所有的隐写方案都可以通过减少隐写容量来防止被检测到，但容量过少的隐写方案没有实用性，因此现在隐写方案的涉及目标都是同时满足"),s("font",{attrs:{color:"red"}},[t._v("不可检测性")]),t._v("和"),s("font",{attrs:{color:"red"}},[t._v("高隐写容量")])],1),t._v(" "),s("li",[t._v("盲/信息辅助提取（Blind or Informed Extraction）：通常假设接收方不拥有发送方使用的原始载体，因此隐写一般都是盲提取，但在一些特殊情况下，比如双方使用共同的载体库，或是可以将载体的部分信息先嵌入到指定位置。此时可以使用信息辅助提取来减少嵌入强度，从而减少被检测出的概率")]),t._v(" "),s("li",[t._v("盲/针对性隐写分析（Blind or Targeted Steganalysis）：\n"),s("ul",[s("li",[t._v("盲隐写分析\n"),s("ul",[s("li",[t._v("检测的方法与使用隐写术的方法无关")]),t._v(" "),s("li",[t._v("work通常在高维度特征空间中表示。机器学习方法被用于区分在特征空间中的cover和stego works的聚类")]),t._v(" "),s("li",[t._v("盲方法的一个重要优点是它们可以潜在地检测未知的隐秘方案")])])]),t._v(" "),s("li",[t._v("针对性隐写分析\n"),s("ul",[s("li",[t._v("用于检测通过一个或多个特定的隐写方法来构建的stego works")]),t._v(" "),s("li",[t._v("可能比盲方案更精确")])])])])]),t._v(" "),s("li",[t._v("统计不可检测性（Statistical Undetectablity）：\n"),s("ul",[s("li",[t._v("包含隐秘信息的stego work对于攻击者来说应该要不显眼的，这个属性很难捉摸，且不容易形式化")]),t._v(" "),s("li",[t._v("现代隐写术和隐写分析与stego work的这些属性相关，这些属性可以被量化为：\n"),s("ul",[s("li",[t._v("直方图（Histograms）")]),t._v(" "),s("li",[t._v("高阶统计（Higher order statistics）")])])]),t._v(" "),s("li",[t._v("隐写术和隐写分析问题的一个近似值")])])]),t._v(" "),s("li",[t._v("假阳性率（False Positive Rate）\n"),s("ul",[s("li",[t._v("隐写分析算法将非隐秘信息报告为隐秘信息的概率")])])]),t._v(" "),s("li",[t._v("鲁棒性（Robustness）\n"),s("ul",[s("li",[t._v("在常见信号处理操作后的检测信息的能力")])])]),t._v(" "),s("li",[t._v("安全性（Security）")]),t._v(" "),s("li",[t._v("隐写密钥（Stego Key）\n"),s("ul",[s("li",[t._v("隐写密钥和密码 、数字水印的密钥差别都很大，因为隐写分析仅仅只需要察觉到秘密信息的存在就完成任务")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-隐写术的评估"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-隐写术的评估"}},[t._v("#")]),t._v(" 4 隐写术的评估")]),t._v(" "),s("ul",[s("li",[t._v("最佳的概念\n"),s("ul",[s("li",[t._v("大量盲隐写分析算法")]),t._v(" "),s("li",[t._v("大量和多样的数据库可以准确地构建隐写术条件")]),t._v(" "),s("li",[t._v("数据库被分为两个数据集，训练集和测试集\n"),s("ul",[s("li",[t._v("训练集：一组隐写分析算法已知的cover和stego works，两者用于训练盲隐写分析分类器")]),t._v(" "),s("li",[t._v("测试集：先前未见过的cover和stego works，用于测量假正例和假反例")])])])])]),t._v(" "),s("li",[t._v("标杆管理（Benchmarking）\n"),s("ul",[s("li",[t._v("隐写算法：\n"),s("ul",[s("li",[t._v("空间领域：S-UNIWARD、WOW、MG、Pentary、MVG、MiPOD、Synch")]),t._v(" "),s("li",[t._v("JPEG：J-UNIWARD、SI-MiPOD、NS in JPEG")])])]),t._v(" "),s("li",[t._v("隐写分析算法：\n"),s("ul",[s("li",[t._v("空间领域：SRM、PSRM、SRNet")]),t._v(" "),s("li",[t._v("JPEG：CC-JRM、DCTR、PhaseAwareNet")])])])])])])])}),[],!1,null,null,null);i.default=l.exports}}]);