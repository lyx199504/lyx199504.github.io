(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{499:function(_,v,t){"use strict";t.r(v);var a=t(5),i=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("blockquote",[t("p",[_._v("以下内容均摘抄自老师的PPT")])]),_._v(" "),t("h2",{attrs:{id:"_1-从密码学谈起"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-从密码学谈起"}},[_._v("#")]),_._v(" 1 从密码学谈起")]),_._v(" "),t("ul",[t("li",[_._v("密码学是信息安全、网络安全的基础")]),_._v(" "),t("li",[_._v("密码学技术的发展：\n"),t("ul",[t("li",[_._v("1948年Shannon《保密系统的通信理论》")]),_._v(" "),t("li",[_._v("Simmons的认证系统理论")]),_._v(" "),t("li",[_._v("Diffie-Hellman公开密钥系统理论，划时代发展和应用")])])]),_._v(" "),t("li",[_._v("现代密码学目标是为了使得加密变换更复杂、更随机、更难解密")]),_._v(" "),t("li",[_._v("伪装式信息安全：\n"),t("ul",[t("li",[_._v("密码学加密方法将信息本身加密，但信息传递过程是暴露的")]),_._v(" "),t("li",[_._v("伪装式信息安全则是将信息的传递过程进行了掩盖")])])])]),_._v(" "),t("h2",{attrs:{id:"_2-古老的信息隐藏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-古老的信息隐藏"}},[_._v("#")]),_._v(" 2 古老的信息隐藏")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("古希腊奴隶携带秘密消息的故事")]),_._v(" "),t("blockquote",[t("p",[_._v("  奴隶主将一个奴隶的头发剃光，把秘密信息刺在该奴隶的头皮上，等奴隶的头发重新长起来，再派该奴隶去传递秘密信息。")])])]),_._v(" "),t("li",[t("p",[_._v("希腊人告知斯巴达有人侵略的故事")]),_._v(" "),t("blockquote",[t("p",[_._v("  古希腊时期，书写用的木匾通常是用两片打上蜡的木片，连起来作为一本书，字是写在蜡上的。希腊人通过把消息写在木片上，再把木片打上蜡，来给斯达巴人传递秘密信息。")])])]),_._v(" "),t("li",[t("p",[_._v("将秘密信息隐藏在画的草丛中")])])]),_._v(" "),t("h2",{attrs:{id:"_3-什么是信息隐藏"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-什么是信息隐藏"}},[_._v("#")]),_._v(" 3 什么是信息隐藏")]),_._v(" "),t("ul",[t("li",[_._v("信息隐藏是利用信息传递的冗余来进行信息隐藏和隐蔽信息传输过程\n"),t("ul",[t("li",[t("font",{attrs:{color:"red"}},[_._v("信息时空冗余")]),_._v("：有头发的时候，头皮人眼看不到")],1),_._v(" "),t("li",[t("font",{attrs:{color:"red"}},[_._v("通信通道空间冗余")]),_._v("：使用蜡来进行通信，而蜡下面的木片对于本次通信没有作用")],1),_._v(" "),t("li",[t("font",{attrs:{color:"red"}},[_._v("人类感觉系统冗余")]),_._v("：人眼对复杂的草丛、树林场景有主观性、惰性，不愿花精力看里面的细节")],1)])]),_._v(" "),t("li",[_._v("信息隐藏就是将秘密信息隐藏到一般的非秘密的数字媒体载体中，如图像、声音、视频和文档等载体，从而不让对手发觉的一种方法")]),_._v(" "),t("li",[_._v("信息隐藏就是在一些载体信息中将需要保密传递的信息隐藏进去，而载体本身并没有太大的变化，不会引起怀疑，这样就达到了信息隐藏的目的")])]),_._v(" "),t("h2",{attrs:{id:"_4-期望什么安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-期望什么安全"}},[_._v("#")]),_._v(" 4 期望什么安全？")]),_._v(" "),t("ul",[t("li",[_._v("如果敌人知道了奴隶的头皮上有秘密信息，怎么办？")]),_._v(" "),t("li",[_._v("故我们期望在不引起任何怀疑的情况下实现秘密传送信息——"),t("font",{attrs:{color:"red"}},[_._v("隐写术")])],1)]),_._v(" "),t("h2",{attrs:{id:"_5-隐写术的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-隐写术的定义"}},[_._v("#")]),_._v(" 5 隐写术的定义")]),_._v(" "),t("ul",[t("li",[_._v("隐写术（steganography），最早源于古希腊词汇steganos（“秘密的”）和graphia（“写”）")]),_._v(" "),t("li",[_._v("目的是在不引起任何怀疑的情况下秘密传送消息")])]),_._v(" "),t("h2",{attrs:{id:"_6-隐写术的发展历史"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-隐写术的发展历史"}},[_._v("#")]),_._v(" 6 隐写术的发展历史")]),_._v(" "),t("ul",[t("li",[_._v("技术性隐写术：头发、蜡板、字母高度、符号斑点、隐性墨水等")]),_._v(" "),t("li",[_._v("语言学中的隐写术：藏头诗、打孔字段等")]),_._v(" "),t("li",[_._v("数字隐写术")])]),_._v(" "),t("h2",{attrs:{id:"_7-隐写术与密码学"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-隐写术与密码学"}},[_._v("#")]),_._v(" 7 隐写术与密码学")]),_._v(" "),t("h3",{attrs:{id:"_7-1-密码学"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-密码学"}},[_._v("#")]),_._v(" 7.1 密码学")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("密码学模型")]),_._v(" "),t("p",[t("img",{attrs:{src:"/views/%E5%AF%86%E7%A0%81%E5%AD%A6%E6%A8%A1%E5%9E%8B.png",alt:"密码学模型"}})])]),_._v(" "),t("li",[t("p",[_._v("密码编码学（Cryptography）")]),_._v(" "),t("ul",[t("li",[_._v("明文（plaintext）：原始的消息")]),_._v(" "),t("li",[_._v("密文（ciphertext）：被伪装的消息")]),_._v(" "),t("li",[_._v("加密（encrypt/encipher）：明文转换为密文的过程")]),_._v(" "),t("li",[_._v("解密（decrypt/decipher）：密文还原为明文的过程")]),_._v(" "),t("li",[_._v("算法（algorithm/cipher）：用于加密和解密的数学函数")])])]),_._v(" "),t("li",[t("p",[_._v("密码分析学（Cryptanalysis）")]),_._v(" "),t("ul",[t("li",[_._v("密码分析专家（cryptanalyst）")]),_._v(" "),t("li",[_._v("穷举攻击（Brute-force attack）")])])])]),_._v(" "),t("h3",{attrs:{id:"_7-2-隐写术"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-隐写术"}},[_._v("#")]),_._v(" 7.2 隐写术")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("隐写术模型")]),_._v(" "),t("p",[t("img",{attrs:{src:"/views/%E9%9A%90%E5%86%99%E6%9C%AF%E6%A8%A1%E5%9E%8B.png",alt:"隐写术模型"}})])]),_._v(" "),t("li",[t("p",[_._v("隐写术（Steganography）")]),_._v(" "),t("ul",[t("li",[_._v("载体（cover/host signal）：公开的数据")]),_._v(" "),t("li",[_._v("消息（message/watermark）：需隐藏的数据")]),_._v(" "),t("li",[_._v("含密载体（stego signal）：嵌有秘密消息的数据")]),_._v(" "),t("li",[_._v("嵌入（encoder/embedder）：将消息嵌入载体的过程")]),_._v(" "),t("li",[_._v("提取（decoder/extractor）：从载体中提取消息的过程")]),_._v(" "),t("li",[_._v("算法（algorithm）：用于嵌入和提取的数学函数")])])]),_._v(" "),t("li",[t("p",[_._v("隐写术对抗技术（Attacker）")]),_._v(" "),t("ul",[t("li",[_._v("主动攻击（Active attacker）")]),_._v(" "),t("li",[_._v("被动攻击（Passive attacker/Steganalysis）")])])])]),_._v(" "),t("h3",{attrs:{id:"_7-3-隐写术与密码学的关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-隐写术与密码学的关系"}},[_._v("#")]),_._v(" 7.3 隐写术与密码学的关系")]),_._v(" "),t("ul",[t("li",[_._v("隐写术与密码学紧密相连")]),_._v(" "),t("li",[_._v("通信保密是以密码学为基础的")])]),_._v(" "),t("h2",{attrs:{id:"_8-隐写术的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-隐写术的分类"}},[_._v("#")]),_._v(" 8 隐写术的分类")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("按载体类型分类")]),_._v(" "),t("ul",[t("li",[_._v("包括基于文本、图像、声音和视频的信息隐藏技术")])])]),_._v(" "),t("li",[t("p",[_._v("按嵌入域分类")]),_._v(" "),t("ul",[t("li",[_._v("主要可分为空域（或时域）方法及变换域方法")]),_._v(" "),t("li",[_._v("空域方法是用待隐藏的信息替换载体信息中的冗余部分，变换域方法是把待隐藏的信息嵌入到载体的一个变换空间中（如频域）")])])]),_._v(" "),t("li",[t("p",[_._v("按提取的要求分类")]),_._v(" "),t("ul",[t("li",[_._v("非盲检测（Non-blind detection）：使用原始信号（original signal）")]),_._v(" "),t("li",[_._v("盲检测（Blind detection）：不使用原始信号（original signal）或附带信息（side information）")]),_._v(" "),t("li",[_._v("半盲检测（Semi-blind/Informed detection）：不使用原始信号（original signal），但使用附带信息（side information）或原始水印（original watermark）")])])])])])}),[],!1,null,null,null);v.default=i.exports}}]);