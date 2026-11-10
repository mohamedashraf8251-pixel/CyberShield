const TOOL_DATA = {
  nmap:{
    phase:{ar:"الاستطلاع والمسح",en:"Recon & Scanning"},
    ar:{ name:"Nmap", d:"أشهر أداة مفتوحة المصدر لمسح الشبكات واكتشاف الأجهزة والمنافذ والخدمات المفعّلة عليها.",
      features:["اكتشاف الأجهزة الحيّة على الشبكة","تحديد المنافذ المفتوحة والخدمات المرتبطة بها","التعرّف على نظام التشغيل ونسخة البرمجيات","يُستخدم كخطوة أولى في أي عملية Recon مصرح بها"],
      legal:"يُستخدم رسمياً من فرق الـ IT لجرد الأصول، ومن فرق الأمن لفحص شبكاتهم الخاصة، وفي بيئات تدريب مثل TryHackMe وHackTheBox." },
    en:{ name:"Nmap", d:"The most well-known open-source tool for network scanning, discovering hosts, ports and running services.",
      features:["Discovering live hosts on a network","Identifying open ports and their services","OS and software version fingerprinting","Commonly the first step in any authorized recon phase"],
      legal:"Used officially by IT teams for asset inventory, security teams on their own networks, and in training labs like TryHackMe and HackTheBox." },
    link:"https://nmap.org/"
  },
  shodan:{
    phase:{ar:"الاستطلاع والمسح",en:"Recon & Scanning"},
    ar:{ name:"Shodan", d:"محرك بحث متخصص في فهرسة الأجهزة المتصلة بالإنترنت (كاميرات، سيرفرات، أجهزة IoT) بدل صفحات الويب.",
      features:["البحث عن أجهزة مكشوفة على الإنترنت حسب النوع أو البلد","عرض معلومات عن الخدمات والمنافذ المفتوحة علناً","يستخدمه الباحثون لرصد أجهزة بإعدادات غير آمنة","مفيد في أبحاث الأمن وتقييم المخاطر على مستوى واسع"],
      legal:"أداة بحث شرعية بالكامل تعرض بيانات عامة متاحة أصلاً؛ تُستخدم في الأبحاث الأمنية وتقييم التعرض (Attack Surface) لمؤسسات عن أصولها هي." },
    en:{ name:"Shodan", d:"A search engine that indexes internet-connected devices (cameras, servers, IoT) instead of web pages.",
      features:["Searching for exposed devices by type or country","Viewing information on publicly open services and ports","Used by researchers to spot insecurely configured devices","Useful for security research and large-scale risk assessment"],
      legal:"A fully legitimate search tool surfacing already-public data; used in security research and for organizations assessing their own attack surface." },
    link:"https://www.shodan.io/"
  },
  metasploit:{
    phase:{ar:"الاستغلال (Exploitation)",en:"Exploitation"},
    ar:{ name:"Metasploit Framework", d:"إطار عمل شامل لتطوير واختبار استغلال الثغرات الأمنية ضمن بيئات مصرح بها قانونياً فقط.",
      features:["قاعدة بيانات ضخمة من وحدات اختبار الثغرات المعروفة","بيئة موحّدة لمحاكاة سيناريوهات الهجوم بشكل منهجي","يُستخدم في اختبارات الاختراق المرخّصة (Authorized Pentest)","أساسي في شهادات مثل OSCP وبيئات التدريب المعملية"],
      legal:"استخدامه خارج نطاق مصرح به كتابياً يُعد جريمة إلكترونية في معظم الدول. يُستخدم فقط على أنظمتك الخاصة أو بعقد اختبار اختراق موقّع." },
    en:{ name:"Metasploit Framework", d:"A comprehensive framework for developing and testing exploits strictly within legally authorized environments.",
      features:["A large database of known exploit modules","A unified environment to simulate attack scenarios methodically","Used in authorized, contracted penetration tests","Core to certifications like OSCP and hands-on training labs"],
      legal:"Using it outside an authorized scope is a cybercrime in most countries. Only use it on systems you own or under a signed pentest agreement." },
    link:"https://www.metasploit.com/"
  },
  burp:{
    phase:{ar:"اختبار تطبيقات الويب",en:"Web App Testing"},
    ar:{ name:"Burp Suite", d:"منصة متكاملة لاختبار أمان تطبيقات الويب، بتعترض الطلبات بين المتصفح والسيرفر لتحليلها وتعديلها.",
      features:["اعتراض وتحليل طلبات HTTP/HTTPS بين المتصفح والسيرفر","فحص تلقائي للثغرات الشائعة في تطبيقات الويب","أداة Repeater لإعادة إرسال الطلبات المعدّلة للاختبار اليدوي","معيار صناعي في اختبار اختراق الويب الاحترافي"],
      legal:"تُستخدم فقط على تطبيقات تملكها أو حاصل على تصريح رسمي لاختبارها، أو في منصات CTF وبرامج Bug Bounty المرخّصة." },
    en:{ name:"Burp Suite", d:"An integrated platform for web application security testing that intercepts browser-server traffic for analysis and manipulation.",
      features:["Intercepting and analyzing HTTP/HTTPS requests between browser and server","Automated scanning for common web app vulnerabilities","The Repeater tool for manually resending modified requests","An industry standard in professional web pentesting"],
      legal:"Only use it on applications you own or are authorized to test, or on legitimate CTF and Bug Bounty platforms." },
    link:"https://portswigger.net/burp"
  },
  autopsy:{
    phase:{ar:"التحليل الجنائي الرقمي",en:"Digital Forensics"},
    ar:{ name:"Autopsy", d:"أداة مفتوحة المصدر للتحليل الجنائي الرقمي، تُستخدم لفحص الأقراص الصلبة واستخراج الأدلة بعد وقوع حادثة أمنية.",
      features:["استعادة الملفات المحذوفة وتحليل نظام الملفات","بناء جدول زمني (Timeline) لأحداث النظام","فحص سجلات النشاط والبريد الإلكتروني والصور","تُستخدم رسمياً من جهات إنفاذ القانون وفرق الاستجابة للحوادث"],
      legal:"تُستخدم ضمن إطار قانوني واضح (تحقيقات رسمية أو تحليل أنظمة الشركة الخاصة بك) مع الحفاظ على سلسلة حفظ الأدلة (Chain of Custody)." },
    en:{ name:"Autopsy", d:"An open-source digital forensics tool used to examine disk drives and extract evidence after a security incident.",
      features:["Recovering deleted files and analyzing the filesystem","Building a timeline of system events","Inspecting activity logs, email, and images","Used officially by law enforcement and incident response teams"],
      legal:"Used within a clear legal framework (official investigations or your own organization's systems), maintaining proper chain of custody." },
    link:"https://www.autopsy.com/"
  },
  wireshark:{
    phase:{ar:"التحليل الجنائي الرقمي",en:"Digital Forensics"},
    ar:{ name:"Wireshark", d:"أشهر أداة لتحليل حزم البيانات (Packets) المارة عبر الشبكة، لحظيًا أو من ملفات مُسجّلة سابقاً.",
      features:["تحليل تفصيلي لكل طبقة من طبقات بروتوكولات الشبكة","اكتشاف نشاط مشبوه أو غير معتاد في حركة المرور","تشخيص مشاكل الشبكات بجانب استخداماتها الأمنية","أداة تعليمية أساسية لفهم كيفية عمل الإنترنت فعلياً"],
      legal:"مراقبة شبكة لا تملكها أو لا تملك إذن بمراقبتها تُعد انتهاكاً للخصوصية وغير قانونية؛ استخدمها على شبكتك الخاصة أو بيئات معملية." },
    en:{ name:"Wireshark", d:"The best-known tool for analyzing network packets, either live or from previously captured files.",
      features:["Detailed analysis of each network protocol layer","Spotting suspicious or unusual traffic patterns","Diagnosing network issues alongside security uses","A core educational tool for understanding how the internet actually works"],
      legal:"Monitoring a network you don't own or lack permission to monitor is a privacy violation and illegal; use it on your own network or lab environments." },
    link:"https://www.wireshark.org/"
  },
  zap:{
    phase:{ar:"اختبار تطبيقات الويب",en:"Web App Testing"},
    ar:{ name:"OWASP ZAP", d:"ماسح أمان مفتوح المصدر ومجاني لتطبيقات الويب، مدعوم من مؤسسة OWASP نفسها.",
      features:["فحص تلقائي لثغرات OWASP Top 10 الشائعة","واجهة سهلة للمبتدئين مقارنة بأدوات مشابهة","تكامل مع أدوات CI/CD لفحص مستمر أثناء التطوير","مجاني بالكامل، بديل ممتاز لبدء التعلم العملي"],
      legal:"مناسب للاستخدام التعليمي والفحص الذاتي لتطبيقاتك، أو ضمن نطاق مصرح به رسمياً من صاحب التطبيق." },
    en:{ name:"OWASP ZAP", d:"A free, open-source web application security scanner, maintained by the OWASP foundation itself.",
      features:["Automated scanning for common OWASP Top 10 vulnerabilities","A beginner-friendly interface compared to similar tools","CI/CD integration for continuous scanning during development","Completely free, a great starting point for hands-on learning"],
      legal:"Suitable for educational use and self-testing your own apps, or within a scope explicitly authorized by the application owner." },
    link:"https://www.zaproxy.org/"
  },
  sqlmap:{
    phase:{ar:"اختبار تطبيقات الويب",en:"Web App Testing"},
    ar:{ name:"SQLmap", d:"أداة مفتوحة المصدر تساعد في اكتشاف وفهم ثغرات حقن SQL (SQL Injection) داخل تطبيقات الويب.",
      features:["اكتشاف نقاط الدخول المحتملة لثغرات SQL Injection","فهم آلية استغلال هذا النوع من الثغرات بشكل منهجي","دعم عدة أنواع من قواعد البيانات","تُستخدم بكثرة في بيئات CTF للتعلم العملي الآمن"],
      legal:"استخدامها على أي تطبيق لا تملكه أو بدون إذن كتابي صريح هو جريمة إلكترونية؛ اقتصر استخدامها على بيئات اختبار مغلقة ومرخّصة." },
    en:{ name:"SQLmap", d:"An open-source tool that helps discover and understand SQL Injection vulnerabilities in web applications.",
      features:["Discovering potential entry points for SQL Injection","Understanding the exploitation mechanics methodically","Supporting multiple database types","Widely used in CTF environments for safe, hands-on learning"],
      legal:"Using it on any application you don't own or lack explicit written permission for is a cybercrime; restrict use to closed, licensed test environments." },
    link:"https://sqlmap.org/"
  },
  rootkitlab:{
    phase:{ar:"التحليل والدفاع (Blue Team)",en:"Defensive Analysis (Blue Team)"},
    ar:{name:"Rootkit Analysis Lab",d:"معمل تعليمي لتحليل مؤشرات Rootkits والتعرّف على أدوات الفحص الدفاعي، مع محاكاة آمنة وروابط لأدوات حقيقية.",features:["التعرّف على مؤشرات Rootkit المحتملة","فهم فحص الملفات والعمليات وسلامة الإقلاع","تقييم نتائج افتراضية وتصنيف مستوى الخطورة","التعرّف على أدوات فحص Linux وWindows"],legal:"الفحص الفعلي يجب أن يتم على جهازك أو جهاز لديك إذن بفحصه. صفحة الويب لا تستطيع فحص نظام التشغيل أو كشف Rootkit بنفسها؛ استخدم الأدوات محليًا واتبع توثيقها."},
    en:{name:"Rootkit Analysis Lab",d:"An educational lab for recognizing rootkit indicators and learning defensive scanning tools, with a safe simulation and links to real tools.",features:["Recognize possible rootkit indicators","Understand file, process, and boot-integrity checks","Classify fictional findings by severity","Explore defensive tools for Linux and Windows"],legal:"Run real scans only on devices you own or are authorized to inspect. A web page cannot inspect your operating system or detect a rootkit by itself; use trusted tools locally and follow their documentation."},
    link:"https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-offline"
  },
};


const COURSE_ORDER = ["intro","network","web","forensics","pentest","crypto"];
const COURSE_DATA = {
  intro:{
    level:{ar:"مبتدئ",en:"Beginner"},
    ar:{ name:"مقدمة في أمن المعلومات",
      d:"نقطة البداية المثالية: تفهم يعني إيه أمن معلومات، وإيه أنواع التهديدات، وإزاي المؤسسات والأفراد بيحموا بياناتهم.",
      prereq:"مفيش متطلبات سابقة، يكفي إلمام بسيط باستخدام الكمبيوتر والإنترنت.",
      audience:"الطلاب والمبتدئين، وأي حد بيفكر يدخل مجال الأمن السيبراني ومحتاج فكرة عامة قبل ما يتخصص.",
      outcomes:["شرح ثالوث الأمن CIA: السرية والسلامة والتوافر","التفرقة بين أنواع البرمجيات الخبيثة وهجمات الهندسة الاجتماعية","فهم مفهوم المخاطر والتهديدات والثغرات","معرفة أساسيات حماية الحسابات والبيانات الشخصية","التعرف على المسارات الوظيفية في المجال"],
      topics:["ما هو الأمن السيبراني وليه هو مهم","الثالوث CIA وأهدافه","التهديدات الشائعة: الفيروسات، الفدية، التصيّد (Phishing)","الهندسة الاجتماعية","إدارة المخاطر: الأصول والتهديدات والثغرات","الدفاع متعدد الطبقات (Defense in Depth)","المصادقة والتفويض والمحاسبة (AAA)","السياسات الأمنية والامتثال","المسارات الوظيفية والشهادات المبتدئة"] },
    en:{ name:"Intro to Information Security",
      d:"The ideal starting point: understand what information security means, the types of threats, and how people and organizations protect their data.",
      prereq:"None. Basic familiarity with computers and the internet is enough.",
      audience:"Students, beginners, and anyone considering a cybersecurity career who wants the big picture before specializing.",
      outcomes:["Explain the CIA triad: Confidentiality, Integrity, Availability","Tell apart malware types and social-engineering attacks","Understand risk, threats, and vulnerabilities","Know the basics of protecting accounts and personal data","Recognize the career paths in the field"],
      topics:["What cybersecurity is and why it matters","The CIA triad and its goals","Common threats: viruses, ransomware, phishing","Social engineering","Risk management: assets, threats, vulnerabilities","Defense in Depth","Authentication, Authorization, Accounting (AAA)","Security policies and compliance","Career paths and entry-level certifications"] },
    res:{ link:"https://skillsforall.com/course/introduction-to-cybersecurity",
      ar:{name:"Cisco Skills for All — Introduction to Cybersecurity", note:"كورس مجاني من Cisco Networking Academy، ذاتي السرعة (حوالي 6 ساعات)، مقسّم لـ 5 وحدات: مقدمة، الهجمات والتقنيات، حماية بياناتك وخصوصيتك، حماية المؤسسة، ومستقبلك في المجال. بيدّيك شارة رقمية بعد الإتمام. محتاج تعمل حساب مجاني."},
      en:{name:"Cisco Skills for All — Introduction to Cybersecurity", note:"A free, self-paced course from Cisco Networking Academy (about 6 hours) with 5 modules: introduction, attacks and techniques, protecting your data and privacy, protecting the organization, and careers in the field. Earns a digital badge on completion. A free account is required."},
      alt:{ link:"https://www.professormesser.com/",
        ar:{name:"Professor Messer", note:"فيديوهات مجانية بالإنجليزي لشهادة CompTIA Security+ بتغطي نفس الأساسيات بعمق أكبر."},
        en:{name:"Professor Messer", note:"Free video training for CompTIA Security+, covering the same fundamentals in more depth."} } }
  },
  network:{
    level:{ar:"متوسط",en:"Intermediate"},
    ar:{ name:"أمن الشبكات",
      d:"إزاي بتتأمّن الشبكات: من الجدران النارية والـ VPN لحد رصد حركة المرور وتحليلها.",
      prereq:"أساسيات الشبكات: TCP/IP وDNS وHTTP والفرق بين الـ Switch والـ Router.",
      audience:"اللي خلّص أساسيات الشبكات ويحب يتجه لمسار الدفاع (Blue Team) أو إدارة الأنظمة والشبكات.",
      outcomes:["شرح أنواع الجدران النارية وطريقة عملها","فهم الـ VPN وأنواعه واستخداماته","التفرقة بين IDS وIPS","فهم تقسيم الشبكة (Segmentation / DMZ)","قراءة حركة الشبكة لاكتشاف السلوك غير الطبيعي"],
      topics:["مراجعة نموذج OSI وTCP/IP من منظور أمني","الجدران النارية: Packet Filtering وStateful وNGFW","الـ VPN: Remote Access وSite-to-Site","أنظمة كشف ومنع التسلل (IDS/IPS)","تقسيم الشبكة وVLAN وDMZ","البروتوكولات الآمنة: TLS وSSH مقابل البروتوكولات غير المشفّرة","أمن الشبكات اللاسلكية: WPA2 وWPA3","تحليل الحزم باستخدام Wireshark على شبكتك الخاصة","هجمات الحرمان من الخدمة (DoS/DDoS) وطرق التخفيف"] },
    en:{ name:"Network Security",
      d:"How networks are secured: from firewalls and VPNs to monitoring and analyzing traffic.",
      prereq:"Networking basics: TCP/IP, DNS, HTTP, and the difference between a switch and a router.",
      audience:"Anyone done with networking basics who wants to move toward defensive security (Blue Team) or systems and network administration.",
      outcomes:["Explain firewall types and how they work","Understand VPNs, their types and uses","Tell IDS and IPS apart","Understand network segmentation (VLANs / DMZ)","Read network traffic to spot abnormal behavior"],
      topics:["OSI and TCP/IP models from a security viewpoint","Firewalls: packet filtering, stateful, NGFW","VPNs: remote access and site-to-site","Intrusion detection and prevention (IDS/IPS)","Segmentation, VLANs, and DMZ","Secure protocols: TLS and SSH vs. unencrypted ones","Wireless security: WPA2 and WPA3","Packet analysis with Wireshark on your own network","Denial-of-service (DoS/DDoS) attacks and mitigation"] },
    res:{ link:"https://www.cloudflare.com/learning/",
      ar:{name:"Cloudflare Learning Center", note:"مكتبة شروحات مجانية بدون تسجيل بالإنجليزي، فيها مقالات مبسطة عن الجدران النارية والـ VPN وهجمات DDoS وTLS وDNS وأمن الشبكات عموماً."},
      en:{name:"Cloudflare Learning Center", note:"A free library of plain-language explainers, no sign-up needed, covering firewalls, VPNs, DDoS attacks, TLS, DNS, and network security in general."},
      alt:{ link:"https://www.professormesser.com/",
        ar:{name:"Professor Messer", note:"كورسات فيديو مجانية لشهادتي Network+ وSecurity+ بتغطي الجدران النارية والـ VPN وأمن الشبكات."},
        en:{name:"Professor Messer", note:"Free video courses for Network+ and Security+ that cover firewalls, VPNs, and network security."} } }
  },
  web:{
    level:{ar:"متوسط",en:"Intermediate"},
    ar:{ name:"أمن تطبيقات الويب",
      d:"تفهم أشهر ثغرات تطبيقات الويب حسب قائمة OWASP Top 10، وإزاي المطوّر يبني تطبيق محمي منها.",
      prereq:"فهم بروتوكول HTTP وأساسيات HTML وقواعد البيانات، ومعرفة بسيطة بأي لغة برمجة تفيد.",
      audience:"مطوّري الويب، ومن يرغب في التخصص في أمن التطبيقات أو برامج Bug Bounty المرخّصة.",
      outcomes:["معرفة أهم فئات الثغرات في قائمة OWASP Top 10","فهم سبب حدوث كل نوع ثغرة وأثرها","تطبيق مبادئ البرمجة الآمنة للوقاية منها","فهم دور المصادقة وإدارة الجلسات في أمان التطبيق","التعرف على منهجية فحص التطبيقات المصرح بها"],
      topics:["كيف يعمل تطبيق الويب: العميل والسيرفر وHTTP","قائمة OWASP Top 10 وكيف تُحدَّث","ضعف التحكم في الصلاحيات (Broken Access Control)","هجمات الحقن (Injection) ومنها SQL Injection","ثغرات XSS وCSRF وSSRF","فشل المصادقة وإدارة الجلسات","الأخطاء في الإعدادات الأمنية (Misconfiguration)","الدفاع: التحقق من المدخلات، الاستعلامات المهيّأة، ترميز المخرجات، رؤوس الأمان مثل CSP","مقدمة في الفحص المصرح به وبرامج Bug Bounty"] },
    en:{ name:"Web Application Security",
      d:"Understand the most common web vulnerabilities per the OWASP Top 10 and how developers build applications that resist them.",
      prereq:"Understanding of HTTP, HTML basics, and databases; basic knowledge of any programming language helps.",
      audience:"Web developers, and anyone aiming to specialize in application security or authorized Bug Bounty programs.",
      outcomes:["Know the main vulnerability categories in the OWASP Top 10","Understand why each type occurs and its impact","Apply secure-coding principles to prevent them","Understand the role of authentication and session management","Get to know authorized application testing methodology"],
      topics:["How a web app works: client, server, HTTP","The OWASP Top 10 and how it is updated","Broken Access Control","Injection attacks, including SQL Injection","XSS, CSRF, and SSRF","Authentication and session management failures","Security Misconfiguration","Defense: input validation, parameterized queries, output encoding, security headers such as CSP","Intro to authorized testing and Bug Bounty programs"] },
    res:{ link:"https://portswigger.net/web-security",
      ar:{name:"PortSwigger Web Security Academy", note:"أكاديمية مجانية من الشركة اللي بتصنع Burp Suite. فيها شرح لكل نوع ثغرة مع معامل تدريب قانونية جاهزة على بيئتهم الخاصة (بتتدرب عليها من غير ما تلمس أي موقع حقيقي). محتاج حساب مجاني للمعامل."},
      en:{name:"PortSwigger Web Security Academy", note:"A free academy from the makers of Burp Suite. It explains each vulnerability class and provides legal practice labs hosted in their own environment, so you never touch a real site. A free account is needed for the labs."},
      alt:{ link:"https://owasp.org/www-project-top-ten/",
        ar:{name:"OWASP Top 10", note:"الصفحة الرسمية للقائمة من مؤسسة OWASP، مجانية وفيها شرح كل فئة وطرق الوقاية منها."},
        en:{name:"OWASP Top 10", note:"The official page for the list from the OWASP Foundation: free, with an explanation of each category and how to prevent it."} } }
  },
  forensics:{
    level:{ar:"متوسط إلى متقدم",en:"Intermediate to Advanced"},
    ar:{ name:"التحليل الجنائي الرقمي",
      d:"إزاي بتجمع وتحفظ وتحلل الأدلة الرقمية بعد حادثة أمنية بطريقة تصلح قانونياً.",
      prereq:"معرفة جيدة بأنظمة التشغيل (Windows وLinux) وأنظمة الملفات وأساسيات الشبكات.",
      audience:"مهتمي الـ Blue Team، فرق الاستجابة للحوادث (IR)، والمحققين الرقميين.",
      outcomes:["فهم مراحل التحقيق الرقمي وسلسلة حفظ الأدلة","معرفة ترتيب تقلّب البيانات (Order of Volatility)","فهم كيف تُؤخذ نسخة جنائية من القرص دون تعديل الأصل","التعرف على تحليل أنظمة الملفات والذاكرة والسجلات","كتابة تقرير تحقيق واضح"],
      topics:["مفهوم الأدلة الرقمية وسلسلة الحفظ (Chain of Custody)","مراحل الاستجابة للحوادث حسب NIST: الإعداد، الكشف والتحليل، الاحتواء والاستئصال والاسترداد، ما بعد الحادثة","ترتيب تقلّب البيانات وأولوية الجمع","أخذ صورة جنائية من القرص واستخدام Write Blocker","تحليل أنظمة الملفات واسترجاع الملفات المحذوفة","التحليل الزمني (Timeline Analysis)","تحليل الذاكرة (Memory Forensics)","تحليل السجلات وحركة الشبكة","كتابة تقرير التحقيق"] },
    en:{ name:"Digital Forensics",
      d:"How to collect, preserve, and analyze digital evidence after a security incident in a legally sound way.",
      prereq:"Good knowledge of operating systems (Windows and Linux), filesystems, and networking basics.",
      audience:"Blue Team enthusiasts, incident response (IR) teams, and digital investigators.",
      outcomes:["Understand investigation phases and chain of custody","Know the Order of Volatility","Understand how a forensic disk image is taken without altering the original","Get to know filesystem, memory, and log analysis","Write a clear investigation report"],
      topics:["Digital evidence and Chain of Custody","NIST incident response phases: preparation, detection and analysis, containment/eradication/recovery, post-incident activity","Order of Volatility and collection priority","Forensic disk imaging and write blockers","Filesystem analysis and recovering deleted files","Timeline analysis","Memory forensics","Log and network traffic analysis","Writing the investigation report"] },
    res:{ link:"https://cyberdefenders.org/",
      ar:{name:"CyberDefenders", note:"منصة تدريب للـ Blue Team فيها تحديات تحقيق رقمي وتحليل حوادث على سيناريوهات جاهزة. التسجيل مجاني، وفيه محتوى إضافي باشتراك مدفوع."},
      en:{name:"CyberDefenders", note:"A Blue Team training platform with digital forensics and incident analysis challenges built on ready-made scenarios. Registration is free, with extra content on a paid plan."},
      alt:{ link:"https://www.autopsy.com/",
        ar:{name:"Autopsy (الموقع الرسمي)", note:"الموقع الرسمي لأداة Autopsy مفتوحة المصدر، وفيه توثيق وموارد تعليمية. راجع الصفحة لمعرفة المجاني منها."},
        en:{name:"Autopsy (official site)", note:"The official site of the open-source Autopsy tool, with documentation and learning resources. Check the page to see which are free."} } }
  },
  pentest:{
    level:{ar:"متقدم",en:"Advanced"},
    ar:{ name:"اختبار الاختراق الأخلاقي",
      d:"منهجية اختبار الاختراق المنظّم والقانوني: من الاتفاق على النطاق لحد كتابة التقرير النهائي.",
      prereq:"أساسيات الشبكات وأمن الويب، وراحة في استخدام Linux وسطر الأوامر.",
      audience:"اللي بيستهدف وظيفة Penetration Tester أو Red Team، بعد ما يبني أساس قوي في الشبكات والأمن.",
      outcomes:["فهم مراحل PTES السبع بالترتيب","معرفة أهمية الإذن الكتابي ونطاق العمل (Scope) وقواعد الاشتباك","التفرقة بين تقييم الثغرات واختبار الاختراق","فهم كيف يُكتب تقرير يفيد العميل ويحدد أولويات الإصلاح","التدرّب القانوني على بيئات معزولة مخصصة للتعلم"],
      topics:["المرحلة 1: التفاعلات قبل الاتفاق (Pre-engagement): العقد والنطاق وقواعد الاشتباك","المرحلة 2: جمع المعلومات (Intelligence Gathering)","المرحلة 3: نمذجة التهديدات (Threat Modeling)","المرحلة 4: تحليل الثغرات (Vulnerability Analysis)","المرحلة 5: الاستغلال (Exploitation) داخل النطاق المصرح به","المرحلة 6: ما بعد الاستغلال (Post Exploitation)","المرحلة 7: كتابة التقرير (Reporting)","الجوانب القانونية والأخلاقية","الشهادات المرتبطة مثل OSCP وPNPT"] },
    en:{ name:"Ethical Penetration Testing",
      d:"The methodology of structured, legal penetration testing: from agreeing on scope to writing the final report.",
      prereq:"Networking and web security basics, and comfort with Linux and the command line.",
      audience:"Anyone targeting a Penetration Tester or Red Team role, after building a solid networking and security foundation.",
      outcomes:["Understand the seven PTES phases in order","Know the importance of written authorization, scope, and rules of engagement","Tell a vulnerability assessment from a penetration test","Understand how to write a report that helps the client prioritize fixes","Practice legally in isolated environments built for learning"],
      topics:["Phase 1: Pre-engagement: contract, scope, rules of engagement","Phase 2: Intelligence Gathering","Phase 3: Threat Modeling","Phase 4: Vulnerability Analysis","Phase 5: Exploitation within the authorized scope","Phase 6: Post Exploitation","Phase 7: Reporting","Legal and ethical aspects","Related certifications such as OSCP and PNPT"] },
    res:{ link:"https://tryhackme.com/",
      ar:{name:"TryHackMe", note:"منصة تعليم تفاعلية فيها غرف تدريب جاهزة في بيئة معزولة وقانونية بتناسب المبتدئين. فيه محتوى مجاني ومحتوى تاني باشتراك مدفوع، فابدأ بالغرف المجانية."},
      en:{name:"TryHackMe", note:"An interactive learning platform with ready-made training rooms in an isolated, legal environment, beginner friendly. It has free content and content on a paid plan, so start with the free rooms."},
      alt:{ link:"https://www.pentest-standard.org/",
        ar:{name:"PTES — Penetration Testing Execution Standard", note:"الموقع الرسمي للمنهجية، مجاني، وبيشرح المراحل السبع بالتفصيل."},
        en:{name:"PTES — Penetration Testing Execution Standard", note:"The methodology’s official site: free, and it explains the seven phases in detail."} } }
  },
  crypto:{
    level:{ar:"مبتدئ إلى متوسط",en:"Beginner to Intermediate"},
    ar:{ name:"التشفير والخصوصية",
      d:"تفهم إزاي التشفير بيحمي بياناتك، من الشفرات القديمة لحد HTTPS والتوقيع الرقمي.",
      prereq:"مفيش متطلبات، ومعرفة بسيطة بالرياضيات (الأعداد والباقي في القسمة) تفيد.",
      audience:"كل المهتمين بالأمن، والمطوّرين اللي محتاجين يستخدموا التشفير صح في تطبيقاتهم.",
      outcomes:["التفرقة بين التشفير المتماثل وغير المتماثل","فهم دالة التجزئة (Hash) واستخداماتها","فهم التوقيع الرقمي والشهادات الرقمية","فهم كيف يشتغل HTTPS من غير تفاصيل رياضية معقدة","معرفة الطريقة الصحيحة لتخزين كلمات المرور"],
      topics:["الشفرات الكلاسيكية ولماذا لم تعد آمنة","التشفير المتماثل: AES والمفتاح المشترك","التشفير غير المتماثل: RSA وECC والمفتاح العام والخاص","تبادل المفاتيح (Diffie-Hellman)","دوال التجزئة مثل SHA-256","التوقيع الرقمي والتحقق من السلامة","الشهادات الرقمية وبنية PKI","بروتوكول TLS وكيف يحمي HTTPS","تخزين كلمات المرور: Salt وخوارزميات مثل bcrypt وArgon2","مبدأ عدم تصميم خوارزمية تشفير خاصة بك"] },
    en:{ name:"Cryptography & Privacy",
      d:"Understand how encryption protects your data, from ancient ciphers to HTTPS and digital signatures.",
      prereq:"None. A little math (numbers and remainders) helps.",
      audience:"Anyone interested in security, and developers who need to use cryptography correctly in their apps.",
      outcomes:["Tell symmetric from asymmetric encryption","Understand hash functions and their uses","Understand digital signatures and certificates","Understand how HTTPS works without heavy math","Know the right way to store passwords"],
      topics:["Classical ciphers and why they are no longer safe","Symmetric encryption: AES and the shared key","Asymmetric encryption: RSA, ECC, public and private keys","Key exchange (Diffie-Hellman)","Hash functions such as SHA-256","Digital signatures and integrity verification","Digital certificates and PKI","TLS and how it protects HTTPS","Password storage: salting and algorithms like bcrypt and Argon2","Why you should never design your own cipher"] },
    res:{ link:"https://www.khanacademy.org/computing/computer-science/cryptography",
      ar:{name:"Khan Academy — Cryptography", note:"قسم مجاني بالكامل ضمن علوم الحاسب، بدون اشتراك، بيشرح التشفير من الأساس بأسلوب مبسّط ومترجم لعدة لغات."},
      en:{name:"Khan Academy — Cryptography", note:"A completely free section within Computer Science, no subscription, explaining cryptography from the ground up in a simple way."},
      alt:{ link:"https://www.coursera.org/learn/crypto",
        ar:{name:"Coursera — Cryptography I (جامعة Stanford)", note:"كورس أكاديمي أعمق، تقدر تحضره مجاناً بخيار المراجعة (Audit) من غير شهادة. التوفر قد يتغير."},
        en:{name:"Coursera — Cryptography I (Stanford)", note:"A deeper academic course you can view for free with the Audit option, without a certificate. Availability may change."} } }
  }
};

const T = {
  ar:{
    brand:"CyberShield",
    nav:{home:"الرئيسية",courses:"الدورات",tools:"الأدوات",about:"عن المنصة"},
    backLabel:"← رجوع للأدوات",
    backCourses:"← رجوع للدورات",
    levelLabel:"المستوى", prereqLabel:"المتطلبات السابقة", audienceLabel:"مناسبة لمن؟",
    outcomesLabel:"هتتعلم إيه", topicsLabel:"محتوى الدورة", resLabel:"موقع مجاني تتعلّم منه",
    altLabel:"مصدر بديل", openBtn:"افتح الموقع ↗",
    courseNote:"ℹ️ ملخص المحتوى مبني على المناهج المعروفة للمجال. تفاصيل الموقع الخارجي ومدى مجانيته بتتغير من وقت للتاني، فراجع صفحة الموقع قبل ما تبدأ.",
    courseWarn:"⚠️ المحتوى تعريفي ومفاهيمي فقط. التدريب العملي يكون على بيئات تعليمية قانونية أو أنظمة تملكها أو معاك إذن كتابي باختبارها.",
    phaseLabel:"المرحلة:",
    featuresLabel:"أهم استخداماتها",
    legalLabel:"الاستخدام القانوني والأخلاقي",
    linkLabel:"الموقع / التوثيق الرسمي",
    toolWarn:"⚠️ المعلومات هنا تعريفية ومفاهيمية فقط ولا تتضمن أوامر أو خطوات تشغيل فعلية. لا تستخدم أي أداة إلا على أنظمة تملكها أو حاصل على إذن كتابي صريح لاختبارها.",
    home:{
      title:"تعلّم الأمن السيبراني من الصفر",
      lead:"منصة تعليمية تشرح مفاهيم الأمن السيبراني وأدوات اختبار الاختراق بشكل أخلاقي وقانوني، مع التركيز على الفهم قبل التطبيق.",
      cta1:"تصفّح الدورات", cta2:"استكشف الأدوات",
      notice:"⚠️ المحتوى هنا تعليمي بحت. لا تستخدم أي أداة أو تقنية إلا على أنظمة تملكها أو حاصل على إذن كتابي صريح لاختبارها.",
      cards:[
        {t:"أساسيات الشبكات",d:"فهم TCP/IP, DNS, HTTP كخطوة أولى قبل أي شيء أمني."},
        {t:"الأمن الدفاعي (Blue Team)",d:"كيف تحمي الأنظمة وتكتشف الاختراقات."},
        {t:"الأمن الهجومي الأخلاقي (Red Team)",d:"منهجية اختبار الاختراق القانوني خطوة بخطوة."}
      ]
    },
    courses:{
      title:"الدورات",
      lead:"مسار تعليمي متدرّج من الأساسيات إلى التخصص. اضغط على أي دورة لعرض تفاصيلها ورابط موقع مجاني تتعلّم منه.",
      cards:[
        {t:"مقدمة في أمن المعلومات",d:"المفاهيم الأساسية: السرية، السلامة، التوافر (CIA Triad)."},
        {t:"أمن الشبكات",d:"الجدران النارية، VPN، وتحليل حركة الشبكة."},
        {t:"أمن تطبيقات الويب",d:"ثغرات OWASP Top 10 وكيفية الحماية منها."},
        {t:"التحليل الجنائي الرقمي",d:"جمع وتحليل الأدلة الرقمية بعد الحوادث الأمنية."},
        {t:"اختبار الاختراق الأخلاقي",d:"منهجية PTES والعمل ضمن نطاق قانوني محدد."},
        {t:"التشفير والخصوصية",d:"أساسيات التشفير المتماثل وغير المتماثل."}
      ]
    },
    tools:{
      title:"أدوات الأمن السيبراني",
      lead:"اضغط على أي أداة لعرض تفاصيلها. تصنيف تعريفي بدون خطوات استخدام تفصيلية.",
      categories:[
        {cat:"أدوات المسح والاستطلاع (Scanning)",ids:["nmap","shodan"]},
        {cat:"اختبار الاختراق (Pentesting)",ids:["metasploit","burp"]},
        {cat:"التحليل الجنائي الرقمي (Forensics)",ids:["autopsy","wireshark"]},
        {cat:"أمن التطبيقات (Application Security)",ids:["zap","sqlmap"]},
        {cat:"تحليل البرمجيات الخبيثة وRootkits",ids:["rootkitlab"]}
      ]
    },
    about:{
      title:"عن المنصة",
      lead:"CyberShield منصة تعليمية هدفها نشر الوعي بالأمن السيبراني بطريقة مسؤولة. كل المحتوى موجّه للاستخدام الأخلاقي والقانوني فقط، ولا نشجع أو نساعد في أي نشاط غير مصرح به.",
      cards:[
        {t:"رسالتنا",d:"تبسيط مفاهيم الأمن السيبراني لكل المهتمين بالمجال."},
        {t:"قيمنا",d:"الأخلاقيات أولاً — لا محتوى يُستخدم لإيذاء الآخرين."},
        {t:"لمن هذا المحتوى؟",d:"الطلاب، المهتمين بالتقنية، والراغبين في دخول مجال الأمن السيبراني."}
      ]
    },
    footer:"© CyberShield — محتوى تعليمي فقط."
  },
  en:{
    brand:"CyberShield",
    nav:{home:"Home",courses:"Courses",tools:"Tools",about:"About"},
    backLabel:"← Back to Tools",
    backCourses:"← Back to Courses",
    levelLabel:"Level", prereqLabel:"Prerequisites", audienceLabel:"Who is it for?",
    outcomesLabel:"What you will learn", topicsLabel:"Course Content", resLabel:"A free site to learn from",
    altLabel:"Alternative source", openBtn:"Open site ↗",
    courseNote:"ℹ️ The content summary follows the field’s well-known curricula. External site details and how free they are can change over time, so check the site’s page before you start.",
    courseWarn:"⚠️ This content is introductory and conceptual only. Hands-on practice should happen in legal learning environments or on systems you own or have written permission to test.",
    phaseLabel:"Phase:",
    featuresLabel:"Key Uses",
    legalLabel:"Legal & Ethical Use",
    linkLabel:"Official Site / Docs",
    toolWarn:"⚠️ This information is conceptual and introductory only, with no commands or actual execution steps. Only use any tool on systems you own or have explicit written permission to test.",
    home:{
      title:"Learn Cybersecurity from Scratch",
      lead:"An educational platform explaining cybersecurity concepts and penetration testing tools ethically and legally, focused on understanding before practice.",
      cta1:"Browse Courses", cta2:"Explore Tools",
      notice:"⚠️ This content is purely educational. Never use any tool or technique except on systems you own or have explicit written permission to test.",
      cards:[
        {t:"Networking Basics",d:"Understanding TCP/IP, DNS, HTTP as a first step before anything security-related."},
        {t:"Defensive Security (Blue Team)",d:"How to protect systems and detect breaches."},
        {t:"Ethical Offensive Security (Red Team)",d:"Legal penetration testing methodology step by step."}
      ]
    },
    courses:{
      title:"Courses",
      lead:"A progressive learning path from fundamentals to specialization. Click any course to see its details and a link to a free site to learn from.",
      cards:[
        {t:"Intro to Information Security",d:"Core concepts: Confidentiality, Integrity, Availability (CIA Triad)."},
        {t:"Network Security",d:"Firewalls, VPNs, and traffic analysis."},
        {t:"Web Application Security",d:"OWASP Top 10 vulnerabilities and how to defend against them."},
        {t:"Digital Forensics",d:"Collecting and analyzing digital evidence after incidents."},
        {t:"Ethical Penetration Testing",d:"PTES methodology and working within a defined legal scope."},
        {t:"Cryptography & Privacy",d:"Fundamentals of symmetric and asymmetric encryption."}
      ]
    },
    tools:{
      title:"Cybersecurity Tools",
      lead:"Click any tool to see its details. An introductory classification — no detailed usage steps.",
      categories:[
        {cat:"Scanning & Recon",ids:["nmap","shodan"]},
        {cat:"Pentesting",ids:["metasploit","burp"]},
        {cat:"Digital Forensics",ids:["autopsy","wireshark"]},
        {cat:"Application Security",ids:["zap","sqlmap"]},
        {cat:"Malware & Rootkit Analysis",ids:["rootkitlab"]}
      ]
    },
    about:{
      title:"About the Platform",
      lead:"CyberShield is an educational platform aiming to spread cybersecurity awareness responsibly. All content is intended for ethical, legal use only — we do not encourage or assist unauthorized activity.",
      cards:[
        {t:"Our Mission",d:"Simplify cybersecurity concepts for everyone interested in the field."},
        {t:"Our Values",d:"Ethics first — no content used to harm others."},
        {t:"Who is this for?",d:"Students, tech enthusiasts, and those entering the cybersecurity field."}
      ]
    },
    footer:"© CyberShield — Educational content only."
  }
};

let lang = "ar";
let currentPage = "home";
let currentTool = null;
let currentCourse = null;

function renderNav(){
  const nav = document.getElementById("nav");
  nav.innerHTML = "";
  Object.keys(T[lang].nav).forEach(key=>{
    const b = document.createElement("button");
    b.textContent = T[lang].nav[key];
    b.className = (key===currentPage || (key==="courses" && currentPage==="course") || (key==="tools" && currentPage==="tool")) ? "active":"";
    b.onclick = ()=>{ location.hash = "#"+key; };
    nav.appendChild(b);
  });
}

function cardsHTML(cards){
  return '<div class="grid">'+cards.map(c=>`<div class="card"><h3>${c.t}</h3><p>${c.d}</p></div>`).join("")+'</div>';
}

function toolCardsHTML(ids){
  return '<div class="grid">'+ids.map(id=>{
    const t = TOOL_DATA[id][lang];
    return `<div class="card clickable" data-tool="${id}"><h3>${t.name}</h3><p>${t.d}</p></div>`;
  }).join("")+'</div>';
}

function attachToolCardListeners(){
  document.querySelectorAll('[data-tool]').forEach(el=>{
    el.onclick = ()=>{ location.hash = "#tool-"+el.getAttribute('data-tool'); };
  });
}

function rootkitLabHTML(language){
  const ar=language==="ar";
  return '<h2 class="section-h">' + (ar?"محاكاة تحليل آمنة":"Safe analysis simulation") + '</h2>' +
    '<p class="lead">' + (ar?"النتائج افتراضية للتدريب فقط. هذه الصفحة لا تفحص جهازك ولا تتصل بنظامك.":"Fictional training findings only. This page does not scan your device or access your system.") + '</p>' +
    '<div class="res"><h3>' + (ar?"فحص تدريبي":"Training scan") + '</h3><p>' + (ar?"اضغط لعرض نتائج افتراضية والتدرب على تقييمها.":"Review fictional findings and practice evaluating them.") + '</p><button class="btn primary" id="rootkitRun">' + (ar?"تشغيل المحاكاة":"Run simulation") + '</button><div id="rootkitResults" aria-live="polite"></div></div>' +
    '<h2 class="section-h">' + (ar?"أدوات فحص حقيقية":"Real defensive tools") + '</h2><div class="grid">' +
    '<div class="card"><h3>Microsoft Defender Offline</h3><p>' + (ar?"فحص من بيئة استرداد Windows للمساعدة في اكتشاف البرمجيات الخبيثة المستعصية.":"Windows recovery-environment scan for persistent malware.") + '</p><a class="link-ext" href="https://learn.microsoft.com/en-us/defender-endpoint/microsoft-defender-offline" target="_blank" rel="noopener noreferrer">Official documentation ↗</a></div>' +
    '<div class="card"><h3>chkrootkit</h3><p>' + (ar?"أداة Linux معروفة لفحص مؤشرات Rootkits.":"A known Linux utility for checking rootkit indicators.") + '</p><a class="link-ext" href="https://www.chkrootkit.org/" target="_blank" rel="noopener noreferrer">Official site ↗</a></div>' +
    '<div class="card"><h3>rkhunter</h3><p>' + (ar?"أداة تدقيق لأنظمة Unix/Linux تبحث عن مؤشرات مشبوهة.":"A Unix/Linux auditing tool that checks for suspicious indicators.") + '</p><a class="link-ext" href="https://rkhunter.sourceforge.net/" target="_blank" rel="noopener noreferrer">Official site ↗</a></div>' +
    '<div class="card"><h3>Microsoft Sysinternals Autoruns</h3><p>' + (ar?"يراجع عناصر التشغيل التلقائي في Windows، لكنه ليس ماسح Rootkit شاملًا.":"Reviews Windows auto-start entries; it is not a complete rootkit scanner.") + '</p><a class="link-ext" href="https://learn.microsoft.com/en-us/sysinternals/downloads/autoruns" target="_blank" rel="noopener noreferrer">Official documentation ↗</a></div></div>' +
    '<div class="notice warn">' + (ar?"لا تحذف ملفات أو توقف خدمات اعتمادًا على اسم غير مألوف فقط. نتائج المحاكاة ليست تشخيصًا.":"Do not delete files or stop services based only on an unfamiliar name. Simulation results are not a diagnosis.") + '</div>';
}
function attachRootkitLab(){
  const button=document.getElementById("rootkitRun");
  const host=document.getElementById("rootkitResults");
  if(!button||!host)return;
  button.onclick=()=>{
    if(button.disabled)return;
    const ar=lang==="ar";
    const stages=ar
      ? ["تهيئة بيئة الفحص التجريبية...","مراجعة مؤشرات سلامة الملفات...","تحليل العمليات وعناصر بدء التشغيل...","تجميع النتائج وتقييمها..."]
      : ["Preparing the simulated scan...","Reviewing file-integrity indicators...","Analyzing processes and startup entries...","Compiling and assessing findings..."];
    const findings=ar?[
      ["ملف نظام تغيّر توقيعه الرقمي","مرتفع","تحقق من المصدر وقارن التوقيع بنسخة موثوقة."],
      ["عملية غير مألوفة تعمل من مجلد مؤقت","متوسط","الاسم وحده لا يثبت الإصابة؛ راجع المسار والناشر والسلوك."],
      ["عنصر تشغيل تلقائي غير معروف","متوسط","تحقق من الناشر والغرض قبل اتخاذ إجراء."]
    ]:[
      ["Unexpected system-file signature change","High","Verify its origin and compare it with a trusted baseline."],
      ["Unfamiliar process running from a temporary folder","Medium","A name alone proves nothing; review path, publisher, and behavior."],
      ["Unknown auto-start entry","Medium","Verify publisher and purpose before taking action."]
    ];
    button.disabled=true;
    button.textContent=ar?"الفحص جارٍ...":"Scanning...";
    host.replaceChildren();
    const status=document.createElement("p");
    status.setAttribute("role","status");
    status.textContent=stages[0];
    const track=document.createElement("div");
    track.setAttribute("role","progressbar");
    track.setAttribute("aria-valuemin","0");
    track.setAttribute("aria-valuemax","100");
    track.setAttribute("aria-valuenow","0");
    track.style.cssText="height:12px;background:var(--border,#263244);border-radius:20px;overflow:hidden;margin:14px 0";
    const fill=document.createElement("div");
    fill.style.cssText="height:100%;width:0%;background:var(--accent,#38bdf8);transition:width .35s ease;border-radius:20px";
    track.appendChild(fill);
    const percent=document.createElement("p");
    percent.textContent="0%";
    host.append(status,track,percent);
    let step=0;
    const timer=window.setInterval(()=>{
      step++;
      const value=Math.round(step/stages.length*100);
      status.textContent=stages[Math.min(step,stages.length)-1];
      fill.style.width=value+"%";
      track.setAttribute("aria-valuenow",String(value));
      percent.textContent=value+"%";
      if(step<stages.length)return;
      window.clearInterval(timer);
      const heading=document.createElement("h3");
      heading.textContent=ar?"نتائج الفحص التدريبي":"Training scan results";
      host.appendChild(heading);
      const list=document.createElement("div");
      list.className="meta";
      findings.forEach((finding,index)=>{
        const card=document.createElement("div");
        card.className="chip";
        const title=document.createElement("b");
        title.textContent=(index+1)+". "+finding[0];
        const severity=document.createElement("span");
        severity.className="badge";
        severity.textContent=finding[1];
        const detail=document.createElement("p");
        detail.textContent=finding[2];
        card.append(title,severity,detail);
        list.appendChild(card);
      });
      host.appendChild(list);
      const note=document.createElement("p");
      note.className="quiz-feedback";
      note.textContent=ar
        ?"اكتمل الفحص التجريبي. النتائج افتراضية ولا تؤكد وجود Rootkit أو إصابة فعلية."
        :"Simulation complete. These fictional findings do not confirm a rootkit or a real infection.";
      host.appendChild(note);
      button.disabled=false;
      button.textContent=ar?"إعادة تشغيل المحاكاة":"Run simulation again";
    },900);
  };
}

function renderPage(){
  const d = T[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang==="ar" ? "rtl":"ltr";
  document.getElementById("brandText").textContent = d.brand;
  document.getElementById("footerText").textContent = d.footer;
  document.getElementById("btnAr").className = lang==="ar"?"active":"";
  document.getElementById("btnEn").className = lang==="en"?"active":"";

  document.querySelectorAll("main section").forEach(s=>s.classList.remove("active"));

  if(currentPage==="course" && currentCourse && COURSE_DATA[currentCourse]){
    const sec = document.getElementById("course");
    sec.classList.add("active");
    const c = COURSE_DATA[currentCourse];
    const cd = c[lang];
    const resBox = (r, cls, label) => `<div class="res ${cls}">
        <h3>${r[lang].name}</h3><p>${r[lang].note}</p>
        <a class="btn primary" href="${r.link}" target="_blank" rel="noopener noreferrer">${d.openBtn}</a>
        <span class="url">${r.link}</span></div>`;
    sec.innerHTML = `
      <button class="back" id="courseBack">${d.backCourses}</button>
      <div class="tool-head"><h1>${cd.name}</h1><span class="level">${d.levelLabel}: ${c.level[lang]}</span></div>
      <p class="lead">${cd.d}</p>
      <div class="meta">
        <div class="chip"><b>${d.prereqLabel}</b>${cd.prereq}</div>
        <div class="chip"><b>${d.audienceLabel}</b>${cd.audience}</div>
      </div>
      <div class="notice warn">${d.courseWarn}</div>
      <h2 class="section-h">${d.outcomesLabel}</h2>
      <ul class="feat">${cd.outcomes.map(x=>`<li>${x}</li>`).join("")}</ul>
      <h2 class="section-h">${d.topicsLabel}</h2>
      <ol class="topics">${cd.topics.map(x=>`<li>${x}</li>`).join("")}</ol>
      <h2 class="section-h">${d.resLabel}</h2>
      ${resBox(c.res,"",d.resLabel)}
      ${c.res.alt ? `<h2 class="section-h">${d.altLabel}</h2>` + resBox(c.res.alt,"alt",d.altLabel) : ""}
      <div class="notice">${d.courseNote}</div>
    `;
    document.getElementById("courseBack").onclick = ()=>{ location.hash="#courses"; };
    renderNav();
    return;
  }

  if(currentPage==="tool" && currentTool && TOOL_DATA[currentTool]){
    const sec = document.getElementById("tool");
    sec.classList.add("active");
    const tool = TOOL_DATA[currentTool];
    const td = tool[lang];
    sec.innerHTML = `
      <button class="back" id="toolBack">${d.backLabel}</button>
      <div class="tool-head"><h1>${td.name}</h1><span class="phase">${d.phaseLabel} ${tool.phase[lang]}</span></div>
      <p class="lead">${td.d}</p>
      <div class="notice warn">${d.toolWarn}</div>
      <h2 class="section-h">${d.featuresLabel}</h2>
      <ul class="feat">${td.features.map(f=>`<li>${f}</li>`).join("")}</ul>
      <h2 class="section-h">${d.legalLabel}</h2>
      <p class="lead">${td.legal}</p>
      <h2 class="section-h">${d.linkLabel}</h2>
      <p><a class="link-ext" href="${tool.link}" target="_blank" rel="noopener noreferrer">${tool.link}</a></p>
      ${currentTool==="rootkitlab" ? rootkitLabHTML(lang) : ""}
    `;
    if(currentTool==="rootkitlab") attachRootkitLab();
    document.getElementById("toolBack").onclick = ()=>{ location.hash="#tools"; };
    renderNav();
    return;
  }

  const sec = document.getElementById(currentPage) || document.getElementById("home");
  sec.classList.add("active");

  if(currentPage==="home"){
    sec.innerHTML = `<h1>${d.home.title}</h1><p class="lead">${d.home.lead}</p>
    <div class="notice">${d.home.notice}</div>
    <div class="cta"><button class="btn primary" id="ctaCourses">${d.home.cta1}</button>
    <button class="btn" id="ctaTools">${d.home.cta2}</button></div>
    ${cardsHTML(d.home.cards)}`;
    document.getElementById("ctaCourses").onclick = ()=>{ location.hash = "#courses"; };
    document.getElementById("ctaTools").onclick = ()=>{ location.hash = "#tools"; };
  } else if(currentPage==="courses"){
    sec.innerHTML = `<h1>${d.courses.title}</h1><p class="lead">${d.courses.lead}</p>
    <div class="grid">${COURSE_ORDER.map(id=>{
      const c = COURSE_DATA[id];
      return `<div class="card clickable" data-course="${id}"><span class="badge">${c.level[lang]}</span><h3>${c[lang].name}</h3><p>${c[lang].d}</p></div>`;
    }).join("")}</div>`;
    document.querySelectorAll('[data-course]').forEach(el=>{
      el.onclick = ()=>{ location.hash = "#course-"+el.getAttribute('data-course'); };
    });
  } else if(currentPage==="tools"){
    let html = `<h1>${d.tools.title}</h1><p class="lead">${d.tools.lead}</p>
     <div class="search-wrap"><input class="search-input" id="toolSearch" type="search" placeholder="${lang==="ar"?"ابحث عن أداة...":"Search tools..."}" aria-label="Search tools"></div>`;
    d.tools.categories.forEach(c=>{
      html += `<div class="badge">${c.cat}</div>${toolCardsHTML(c.ids)}`;
    });
    sec.innerHTML = html;
    attachToolCardListeners();
  } else if(currentPage==="about"){
    sec.innerHTML = `<h1>${d.about.title}</h1><p class="lead">${d.about.lead}</p>${cardsHTML(d.about.cards)}`;
  }
  renderNav();
}

function routeFromHash(){
  const h = location.hash.replace("#","");
  if(h.startsWith("course-")){
    const id = h.slice(7);
    if(COURSE_DATA[id]){
      currentPage = "course"; currentCourse = id; currentTool = null; renderPage(); window.scrollTo(0,0); return;
    }
  }
  if(h.startsWith("tool-")){
    const id = h.slice(5);
    if(TOOL_DATA[id]){
      currentPage = "tool"; currentTool = id; currentCourse = null; renderPage(); window.scrollTo(0,0); return;
    }
  }
  currentPage = ["home","courses","tools","about"].includes(h) ? h : "home";
  currentTool = null; currentCourse = null;
  renderPage();
}

document.getElementById("btnAr").onclick = ()=>{ lang="ar"; renderPage(); };
document.getElementById("btnEn").onclick = ()=>{ lang="en"; renderPage(); };
document.getElementById("brandBtn").onclick = ()=>{ location.hash = "#home"; };
window.addEventListener("hashchange", routeFromHash);
routeFromHash();

// Extra interactive features: theme, searchable cards, and a short knowledge quiz.
(function(){
  const modal = document.getElementById("quizModal");
  const content = document.getElementById("quizContent");
  const themeBtn = document.getElementById("themeToggle");
  let quizIndex = 0, quizScore = 0, answered = false, selectedLevel = 1, quizAnswers = [], attemptQuestions = [];
  let participantName = "";
  try { participantName = localStorage.getItem("cybershield-participant-name") || ""; } catch(e) {}

  const levels = [{"id":1,"ar":{"name":"المستوى 1 — أساسيات الأمان","qs":[{"q":"ما أفضل طريقة لإنشاء كلمة مرور قوية وفريدة؟","o":["اسمك وتاريخ ميلادك","عبارة طويلة وفريدة أو كلمة مرور مولّدة عشوائياً","كلمة قصيرة يسهل تذكرها"],"a":1,"e":"استخدم كلمة مرور طويلة وفريدة لكل حساب، ويفضل حفظها في مدير كلمات مرور.","qe":"What is the best way to create a strong, unique password?","oe":["Nickname and birthday","A long unique passphrase or randomly generated password","A short memorable word"],"ae":1,"ee":"Use a long, unique password for each account, ideally stored in a password manager."},{"q":"لماذا يجب تثبيت تحديثات النظام؟","o":["لإضافة ألوان جديدة فقط","لإصلاح أخطاء وثغرات أمنية معروفة","لزيادة مساحة التخزين دائماً"],"a":1,"e":"التحديثات تسد ثغرات قد يستغلها مهاجمون.","qe":"Why should operating-system updates be installed?","oe":["Only to add new colors","To fix known bugs and security vulnerabilities","They always increase storage"],"ae":1,"ee":"Updates often patch vulnerabilities that attackers could exploit."},{"q":"أي خيار يقلل أثر تسريب كلمة مرور واحدة؟","o":["استخدام كلمة المرور نفسها بكل المواقع","استخدام كلمة مرور مختلفة لكل حساب","مشاركة كلمة المرور مع صديق"],"a":1,"e":"اختلاف كلمات المرور يمنع استخدام التسريب للوصول تلقائياً إلى حسابات أخرى.","qe":"Which choice limits the impact of one password leak?","oe":["Reuse one password everywhere","Use a different password for each account","Share the password with a friend"],"ae":1,"ee":"Unique passwords prevent one breach from automatically exposing other accounts."},{"q":"ما فائدة قفل الشاشة التلقائي؟","o":["منع الوصول للجهاز عند تركه دون مراقبة","زيادة سرعة المعالج","إيقاف التحديثات"],"a":0,"e":"القفل التلقائي يقلل فرصة وصول شخص غير مصرح له إلى الجهاز.","qe":"What is the benefit of automatic screen locking?","oe":["Prevent access when the device is unattended","Increase processor speed","Stop updates"],"ae":0,"ee":"Automatic locking reduces unauthorized access to an unattended device."},{"q":"إذا طلب تطبيق صلاحية لا تتناسب مع وظيفته، ماذا تفعل؟","o":["توافق دائماً","تراجع سبب الصلاحية وترفض غير الضروري","تعطل حماية الجهاز"],"a":1,"e":"راجع مبدأ أقل قدر من الصلاحيات وامنح ما يحتاجه التطبيق فقط.","qe":"If an app requests an unrelated permission, what should you do?","oe":["Always accept","Review the reason and deny unnecessary access","Disable device security"],"ae":1,"ee":"Apply least privilege and grant only what the app needs."}]},"en":{"name":"Level 1 — Security basics","qs":[{"q":"ما أفضل طريقة لإنشاء كلمة مرور قوية وفريدة؟","o":["اسمك وتاريخ ميلادك","عبارة طويلة وفريدة أو كلمة مرور مولّدة عشوائياً","كلمة قصيرة يسهل تذكرها"],"a":1,"e":"استخدم كلمة مرور طويلة وفريدة لكل حساب، ويفضل حفظها في مدير كلمات مرور.","qe":"What is the best way to create a strong, unique password?","oe":["Your name and birthday","A long unique passphrase or randomly generated password","A short memorable word"],"ae":1,"ee":"Use a long, unique password for each account, ideally stored in a password manager."},{"q":"لماذا يجب تثبيت تحديثات النظام؟","o":["لإضافة ألوان جديدة فقط","لإصلاح أخطاء وثغرات أمنية معروفة","لزيادة مساحة التخزين دائماً"],"a":1,"e":"التحديثات تسد ثغرات قد يستغلها مهاجمون.","qe":"Why should operating-system updates be installed?","oe":["Only to add new colors","To fix known bugs and security vulnerabilities","They always increase storage"],"ae":1,"ee":"Updates often patch vulnerabilities that attackers could exploit."},{"q":"أي خيار يقلل أثر تسريب كلمة مرور واحدة؟","o":["استخدام كلمة المرور نفسها بكل المواقع","استخدام كلمة مرور مختلفة لكل حساب","مشاركة كلمة المرور مع صديق"],"a":1,"e":"اختلاف كلمات المرور يمنع استخدام التسريب للوصول تلقائياً إلى حسابات أخرى.","qe":"Which choice limits the impact of one password leak?","oe":["Reuse one password everywhere","Use a different password for each account","Share the password with a friend"],"ae":1,"ee":"Unique passwords prevent one breach from automatically exposing other accounts."},{"q":"ما فائدة قفل الشاشة التلقائي؟","o":["منع الوصول للجهاز عند تركه دون مراقبة","زيادة سرعة المعالج","إيقاف التحديثات"],"a":0,"e":"القفل التلقائي يقلل فرصة وصول شخص غير مصرح له إلى الجهاز.","qe":"What is the benefit of automatic screen locking?","oe":["Prevent access when the device is unattended","Increase processor speed","Stop updates"],"ae":0,"ee":"Automatic locking reduces unauthorized access to an unattended device."},{"q":"إذا طلب تطبيق صلاحية لا تتناسب مع وظيفته، ماذا تفعل؟","o":["توافق دائماً","تراجع سبب الصلاحية وترفض غير الضروري","تعطل حماية الجهاز"],"a":1,"e":"راجع مبدأ أقل قدر من الصلاحيات وامنح ما يحتاجه التطبيق فقط.","qe":"If an app requests an unrelated permission, what should you do?","oe":["Always accept","Review the reason and deny unnecessary access","Disable device security"],"ae":1,"ee":"Apply least privilege and grant only what the app needs."}]}},{"id":2,"ar":{"name":"المستوى 2 — التصيد والهندسة الاجتماعية","qs":[{"q":"رسالة من عنوان يشبه عنوان البنك تطلب رمز التحقق لمرة واحدة. ماذا تفعل؟","o":["أرسل الرمز للتأكد","لا تشارك الرمز وتواصل مع البنك عبر قناته الرسمية","أرسل جزءاً من الرمز"],"a":1,"e":"رموز التحقق سرية، والبنك لا يحتاج أن ترسلها عبر رسالة.","qe":"A message from an address resembling your bank asks for a one-time code. What should you do?","oe":["Send it to verify","Do not share it; contact the bank through an official channel","Send part of it"],"ae":1,"ee":"One-time codes are confidential; do not send them in messages."},{"q":"أي مؤشر يجعل رابطاً في رسالة أكثر إثارة للشك؟","o":["وجود HTTPS وحده","اختلاف اسم النطاق عن النطاق الرسمي","أن الرابط قصير"],"a":1,"e":"تحقق من اسم النطاق كاملاً؛ HTTPS لا يثبت أن الموقع موثوق.","qe":"Which sign makes a message link especially suspicious?","oe":["It uses HTTPS","Its domain differs from the official domain","It is short"],"ae":1,"ee":"Check the full domain; HTTPS alone does not prove a site is trustworthy."},{"q":"وصلتك رسالة مستعجلة تطلب فتح مرفق غير متوقع. ما التصرف الأفضل؟","o":["فتح المرفق فوراً","التحقق من المرسل عبر قناة مستقلة","إعادة توجيهها للجميع"],"a":1,"e":"الاستعجال والمرفقات غير المتوقعة من مؤشرات التصيد.","qe":"You receive an urgent message with an unexpected attachment. Best action?","oe":["Open it immediately","Verify the sender through a separate channel","Forward it to everyone"],"ae":1,"ee":"Urgency and unexpected attachments are common phishing indicators."},{"q":"لماذا لا يكفي فحص اسم العرض للمرسل؟","o":["يمكن تزوير اسم العرض أو تقليده","لأنه يحدد سرعة الرسالة","لأنه يشفر المرفق"],"a":0,"e":"يجب فحص عنوان البريد والنطاق وسياق الرسالة.","qe":"Why is checking the sender display name insufficient?","oe":["Display names can be spoofed or imitated","It determines message speed","It encrypts the attachment"],"ae":0,"ee":"Check the actual address, domain, and message context."},{"q":"ما التصرف المناسب مع نافذة منبثقة تزعم أن جهازك مصاب وتطلب الاتصال برقم؟","o":["الاتصال فوراً","إغلاقها والتحقق عبر برنامج الحماية المعروف","إدخال بياناتك"],"a":1,"e":"النوافذ المخيفة قد تكون خدعة لدفعك لمشاركة معلومات أو تثبيت برامج.","qe":"What should you do with a pop-up claiming infection and urging a phone call?","oe":["Call immediately","Close it and check with trusted security software","Enter your details"],"ae":1,"ee":"Scare pop-ups may trick users into sharing data or installing software."}]},"en":{"name":"Level 2 — Phishing & social engineering","qs":[{"q":"رسالة من عنوان يشبه عنوان البنك تطلب رمز التحقق لمرة واحدة. ماذا تفعل؟","o":["أرسل الرمز للتأكد","لا تشارك الرمز وتواصل مع البنك عبر قناته الرسمية","أرسل جزءاً من الرمز"],"a":1,"e":"رموز التحقق سرية، والبنك لا يحتاج أن ترسلها عبر رسالة.","qe":"A message from an address resembling your bank asks for a one-time code. What should you do?","oe":["Send it to verify","Do not share it; contact the bank through an official channel","Send part of it"],"ae":1,"ee":"One-time codes are confidential; do not send them in messages."},{"q":"أي مؤشر يجعل رابطاً في رسالة أكثر إثارة للشك؟","o":["وجود HTTPS وحده","اختلاف اسم النطاق عن النطاق الرسمي","أن الرابط قصير"],"a":1,"e":"تحقق من اسم النطاق كاملاً؛ HTTPS لا يثبت أن الموقع موثوق.","qe":"Which sign makes a message link especially suspicious?","oe":["It uses HTTPS","Its domain differs from the official domain","It is short"],"ae":1,"ee":"Check the full domain; HTTPS alone does not prove a site is trustworthy."},{"q":"وصلتك رسالة مستعجلة تطلب فتح مرفق غير متوقع. ما التصرف الأفضل؟","o":["فتح المرفق فوراً","التحقق من المرسل عبر قناة مستقلة","إعادة توجيهها للجميع"],"a":1,"e":"الاستعجال والمرفقات غير المتوقعة من مؤشرات التصيد.","qe":"You receive an urgent message with an unexpected attachment. Best action?","oe":["Open it immediately","Verify the sender through a separate channel","Forward it to everyone"],"ae":1,"ee":"Urgency and unexpected attachments are common phishing indicators."},{"q":"لماذا لا يكفي فحص اسم العرض للمرسل؟","o":["يمكن تزوير اسم العرض أو تقليده","لأنه يحدد سرعة الرسالة","لأنه يشفر المرفق"],"a":0,"e":"يجب فحص عنوان البريد والنطاق وسياق الرسالة.","qe":"Why is checking the sender display name insufficient?","oe":["Display names can be spoofed or imitated","It determines message speed","It encrypts the attachment"],"ae":0,"ee":"Check the actual address, domain, and message context."},{"q":"ما التصرف المناسب مع نافذة منبثقة تزعم أن جهازك مصاب وتطلب الاتصال برقم؟","o":["الاتصال فوراً","إغلاقها والتحقق عبر برنامج الحماية المعروف","إدخال بياناتك"],"a":1,"e":"النوافذ المخيفة قد تكون خدعة لدفعك لمشاركة معلومات أو تثبيت برامج.","qe":"What should you do with a pop-up claiming infection and urging a phone call?","oe":["Call immediately","Close it and check with trusted security software","Enter your details"],"ae":1,"ee":"Scare pop-ups may trick users into sharing data or installing software."}]}},{"id":3,"ar":{"name":"المستوى 3 — حماية الحسابات","qs":[{"q":"ما فائدة تطبيق المصادقة أو مفتاح الأمان مقارنة بالاعتماد على كلمة المرور وحدها؟","o":["إضافة عامل تحقق مستقل","تغيير اسم المستخدم","إخفاء الحساب من البحث"],"a":0,"e":"العامل الإضافي يصعّب الاستيلاء على الحساب عند تسرب كلمة المرور.","qe":"What does an authenticator app or security key add beyond a password?","oe":["An independent verification factor","A username change","Search invisibility"],"ae":0,"ee":"An additional factor makes account takeover harder if a password leaks."},{"q":"وجدت جلسة دخول لا تعرفها. ما التصرف الأنسب؟","o":["تجاهلها","إنهاء الجلسة وتغيير كلمة المرور ومراجعة وسائل الاسترداد","حذف التطبيق فقط"],"a":1,"e":"راجع الجلسات والأجهزة وفعّل المصادقة متعددة العوامل.","qe":"You find a login session you do not recognize. What is best?","oe":["Ignore it","End the session, change the password, and review recovery methods","Only delete the app"],"ae":1,"ee":"Review sessions and devices, and enable multi-factor authentication."},{"q":"ما المقصود بالمصادقة متعددة العوامل؟","o":["استخدام أكثر من نوع مستقل لإثبات الهوية","استخدام اسمين للمستخدم","تغيير كلمة المرور يومياً"],"a":0,"e":"تجمع بين عوامل مثل شيء تعرفه وشيء تملكه أو سمة حيوية.","qe":"What is multi-factor authentication?","oe":["Using more than one independent type of identity proof","Using two usernames","Changing a password daily"],"ae":0,"ee":"It combines factors such as something you know and something you have."},{"q":"لماذا يجب مراجعة وسائل استرداد الحساب؟","o":["للتأكد أنها محدثة وتخصك","لزيادة عدد الإعلانات","لإلغاء التشفير"],"a":0,"e":"وسائل الاسترداد القديمة قد تسمح باستعادة الحساب لشخص آخر.","qe":"Why review account recovery methods?","oe":["Ensure they are current and belong to you","Increase advertisements","Disable encryption"],"ae":0,"ee":"Outdated recovery methods may let someone else regain the account."},{"q":"ما الخطر من الموافقة العمياء على إشعارات تسجيل الدخول؟","o":["قد تسمح بدخول لم تطلبه","تحسن دقة الشاشة","تقلل استهلاك البيانات"],"a":0,"e":"لا توافق إلا على طلب تحقق بدأته بنفسك.","qe":"What is the risk of blindly approving login prompts?","oe":["You may approve a login you did not initiate","It improves screen resolution","It reduces data usage"],"ae":0,"ee":"Approve only authentication requests you initiated."}]},"en":{"name":"Level 3 — Account protection","qs":[{"q":"ما فائدة تطبيق المصادقة أو مفتاح الأمان مقارنة بالاعتماد على كلمة المرور وحدها؟","o":["إضافة عامل تحقق مستقل","تغيير اسم المستخدم","إخفاء الحساب من البحث"],"a":0,"e":"العامل الإضافي يصعّب الاستيلاء على الحساب عند تسرب كلمة المرور.","qe":"What does an authenticator app or security key add beyond a password?","oe":["An independent verification factor","A username change","Search invisibility"],"ae":0,"ee":"An additional factor makes account takeover harder if a password leaks."},{"q":"وجدت جلسة دخول لا تعرفها. ما التصرف الأنسب؟","o":["تجاهلها","إنهاء الجلسة وتغيير كلمة المرور ومراجعة وسائل الاسترداد","حذف التطبيق فقط"],"a":1,"e":"راجع الجلسات والأجهزة وفعّل المصادقة متعددة العوامل.","qe":"You find a login session you do not recognize. What is best?","oe":["Ignore it","End the session, change the password, and review recovery methods","Only delete the app"],"ae":1,"ee":"Review sessions and devices, and enable multi-factor authentication."},{"q":"ما المقصود بالمصادقة متعددة العوامل؟","o":["استخدام أكثر من نوع مستقل لإثبات الهوية","استخدام اسمين للمستخدم","تغيير كلمة المرور يومياً"],"a":0,"e":"تجمع بين عوامل مثل شيء تعرفه وشيء تملكه أو سمة حيوية.","qe":"What is multi-factor authentication?","oe":["Using more than one independent type of identity proof","Using two usernames","Changing a password daily"],"ae":0,"ee":"It combines factors such as something you know and something you have."},{"q":"لماذا يجب مراجعة وسائل استرداد الحساب؟","o":["للتأكد أنها محدثة وتخصك","لزيادة عدد الإعلانات","لإلغاء التشفير"],"a":0,"e":"وسائل الاسترداد القديمة قد تسمح باستعادة الحساب لشخص آخر.","qe":"Why review account recovery methods?","oe":["Ensure they are current and belong to you","Increase advertisements","Disable encryption"],"ae":0,"ee":"Outdated recovery methods may let someone else regain the account."},{"q":"ما الخطر من الموافقة العمياء على إشعارات تسجيل الدخول؟","o":["قد تسمح بدخول لم تطلبه","تحسن دقة الشاشة","تقلل استهلاك البيانات"],"a":0,"e":"لا توافق إلا على طلب تحقق بدأته بنفسك.","qe":"What is the risk of blindly approving login prompts?","oe":["You may approve a login you did not initiate","It improves screen resolution","It reduces data usage"],"ae":0,"ee":"Approve only authentication requests you initiated."}]}},{"id":4,"ar":{"name":"المستوى 4 — الشبكات الآمنة","qs":[{"q":"لماذا يُفضّل استخدام WPA3 أو WPA2-AES على شبكة Wi-Fi؟","o":["لأنهما يوفران حماية تشفيرية أقوى من الشبكات المفتوحة أو البروتوكولات القديمة","لزيادة سرعة الإنترنت حتماً","لإخفاء اسم الشبكة فقط"],"a":0,"e":"التشفير الحديث يحمي الاتصال اللاسلكي من التنصت غير المصرح به.","qe":"Why prefer WPA3 or WPA2-AES for Wi-Fi?","oe":["They provide stronger encryption than open or obsolete networks","They guarantee faster internet","They only hide the network name"],"ae":0,"ee":"Modern encryption helps protect wireless traffic from unauthorized interception."},{"q":"ما الخطر الأساسي عند استخدام شبكة Wi-Fi عامة غير موثوقة؟","o":["انخفاض سطوع الشاشة","احتمال التنصت أو نقاط الوصول المزيفة","تلف البطارية"],"a":1,"e":"استخدم مواقع موثوقة واتصالاً مشفراً وتجنب العمليات الحساسة على الشبكات المشبوهة.","qe":"What is a key risk of an untrusted public Wi-Fi network?","oe":["Lower screen brightness","Eavesdropping or rogue access points","Battery damage"],"ae":1,"ee":"Use trusted encrypted services and avoid sensitive activity on suspicious networks."},{"q":"ما وظيفة DNS بصورة أساسية؟","o":["ترجمة أسماء النطاقات إلى عناوين IP","تشفير الملفات محلياً","إدارة كلمات المرور"],"a":0,"e":"DNS يساعد الأجهزة في العثور على عنوان الخدمة المرتبط باسم النطاق.","qe":"What is the primary function of DNS?","oe":["Translate domain names into IP addresses","Encrypt local files","Manage passwords"],"ae":0,"ee":"DNS helps devices locate the address associated with a domain name."},{"q":"ما الذي يميز شبكة الضيوف عن الشبكة الداخلية؟","o":["عزل أجهزة الضيوف عن الموارد الحساسة","منح كل الضيوف صلاحية المدير","تعطيل كلمة المرور"],"a":0,"e":"العزل يقلل وصول الأجهزة غير الموثوقة إلى الأنظمة الداخلية.","qe":"What should distinguish a guest network from an internal network?","oe":["Isolation from sensitive resources","Administrator access for every guest","No password"],"ae":0,"ee":"Segmentation limits untrusted devices from reaching internal systems."},{"q":"ما المقصود بتقسيم الشبكة؟","o":["تقسيمها إلى أجزاء لتقليل الحركة والوصول غير الضروري","زيادة عدد كلمات المرور فقط","إلغاء الجدار الناري"],"a":0,"e":"التقسيم يحد من الحركة الجانبية ويحصر نطاق الحوادث.","qe":"What is network segmentation?","oe":["Dividing it into zones to limit unnecessary traffic and access","Only increasing password count","Removing the firewall"],"ae":0,"ee":"Segmentation restricts lateral movement and limits incident scope."}]},"en":{"name":"Level 4 — Network security","qs":[{"q":"لماذا يُفضّل استخدام WPA3 أو WPA2-AES على شبكة Wi-Fi؟","o":["لأنهما يوفران حماية تشفيرية أقوى من الشبكات المفتوحة أو البروتوكولات القديمة","لزيادة سرعة الإنترنت حتماً","لإخفاء اسم الشبكة فقط"],"a":0,"e":"التشفير الحديث يحمي الاتصال اللاسلكي من التنصت غير المصرح به.","qe":"Why prefer WPA3 or WPA2-AES for Wi-Fi?","oe":["They provide stronger encryption than open or obsolete networks","They guarantee faster internet","They only hide the network name"],"ae":0,"ee":"Modern encryption helps protect wireless traffic from unauthorized interception."},{"q":"ما الخطر الأساسي عند استخدام شبكة Wi-Fi عامة غير موثوقة؟","o":["انخفاض سطوع الشاشة","احتمال التنصت أو نقاط الوصول المزيفة","تلف البطارية"],"a":1,"e":"استخدم مواقع موثوقة واتصالاً مشفراً وتجنب العمليات الحساسة على الشبكات المشبوهة.","qe":"What is a key risk of an untrusted public Wi-Fi network?","oe":["Lower screen brightness","Eavesdropping or rogue access points","Battery damage"],"ae":1,"ee":"Use trusted encrypted services and avoid sensitive activity on suspicious networks."},{"q":"ما وظيفة DNS بصورة أساسية؟","o":["ترجمة أسماء النطاقات إلى عناوين IP","تشفير الملفات محلياً","إدارة كلمات المرور"],"a":0,"e":"DNS يساعد الأجهزة في العثور على عنوان الخدمة المرتبط باسم النطاق.","qe":"What is the primary function of DNS?","oe":["Translate domain names into IP addresses","Encrypt local files","Manage passwords"],"ae":0,"ee":"DNS helps devices locate the address associated with a domain name."},{"q":"ما الذي يميز شبكة الضيوف عن الشبكة الداخلية؟","o":["عزل أجهزة الضيوف عن الموارد الحساسة","منح كل الضيوف صلاحية المدير","تعطيل كلمة المرور"],"a":0,"e":"العزل يقلل وصول الأجهزة غير الموثوقة إلى الأنظمة الداخلية.","qe":"What should distinguish a guest network from an internal network?","oe":["Isolation from sensitive resources","Administrator access for every guest","No password"],"ae":0,"ee":"Segmentation limits untrusted devices from reaching internal systems."},{"q":"ما المقصود بتقسيم الشبكة؟","o":["تقسيمها إلى أجزاء لتقليل الحركة والوصول غير الضروري","زيادة عدد كلمات المرور فقط","إلغاء الجدار الناري"],"a":0,"e":"التقسيم يحد من الحركة الجانبية ويحصر نطاق الحوادث.","qe":"What is network segmentation?","oe":["Dividing it into zones to limit unnecessary traffic and access","Only increasing password count","Removing the firewall"],"ae":0,"ee":"Segmentation restricts lateral movement and limits incident scope."}]}},{"id":5,"ar":{"name":"المستوى 5 — التشفير والتجزئة","qs":[{"q":"ما الفرق الأساسي بين التشفير والتجزئة؟","o":["التشفير قابل للعكس بمفتاح، والتجزئة مصممة لتكون أحادية الاتجاه","لا يوجد فرق","التجزئة تحتاج دائماً مفتاح فك"],"a":0,"e":"التشفير يتيح استعادة البيانات بالمفتاح؛ التجزئة تنتج بصمة للتحقق.","qe":"What is the key difference between encryption and hashing?","oe":["Encryption is reversible with a key; hashing is designed to be one-way","There is no difference","Hashing always needs a decryption key"],"ae":0,"ee":"Encryption allows recovery with a key; hashing creates a digest for verification."},{"q":"لماذا نضيف Salt فريداً لكل كلمة مرور قبل تخزين التجزئة؟","o":["لجعل كل التجزئات مختلفة حتى عند تساوي كلمات المرور وتقليل فاعلية الجداول المسبقة","لإخفاء اسم المستخدم","لزيادة طول كلمة المرور الأصلية"],"a":0,"e":"Salt فريد يمنع تطابق التجزئات الناتجة عن كلمات مرور متطابقة ويعقّد التخمين المسبق.","qe":"Why add a unique salt before hashing each password?","oe":["To make hashes unique even for matching passwords and reduce precomputed-table effectiveness","To hide the username","To lengthen the original password"],"ae":0,"ee":"A unique salt prevents identical passwords from producing identical stored hashes."},{"q":"ما الفرق الأساسي بين التشفير والتجزئة؟","o":["التشفير قابل للعكس بمفتاح، والتجزئة مصممة لتكون أحادية الاتجاه","كلاهما ضغط للملفات","التجزئة تحتاج دائماً مفتاح فك"],"a":0,"e":"التجزئة لا تهدف إلى استرجاع النص الأصلي، بخلاف التشفير.","qe":"What is the key difference between encryption and hashing?","oe":["Encryption is reversible with a key; hashing is designed to be one-way","Both are file compression","Hashing always needs a decryption key"],"ae":0,"ee":"Hashing is not meant to recover the original text, unlike encryption."},{"q":"لماذا تُستخدم قيمة Salt مع تجزئة كلمات المرور؟","o":["لجعل التجزئات المتطابقة لكلمات المرور المتشابهة مختلفة","لتقصير كلمة المرور","لإظهار كلمة المرور للمسؤول"],"a":0,"e":"القيمة العشوائية الفريدة تصعّب الاستفادة من جداول التجزئة المسبقة.","qe":"Why use a salt when hashing passwords?","oe":["Make hashes differ even for identical passwords","Shorten the password","Reveal the password to an administrator"],"ae":0,"ee":"A unique random salt makes precomputed hash tables less useful."},{"q":"أي خوارزمية مناسبة لتجزئة كلمات المرور؟","o":["خوارزمية مخصصة بطيئة مثل Argon2id","MD5 سريع دون إعدادات","Base64"],"a":0,"e":"خوارزميات كلمات المرور المخصصة تبطئ التخمين وتدعم إعدادات ذاكرة.","qe":"Which is suitable for password hashing?","oe":["A dedicated slow algorithm such as Argon2id","Fast MD5 without settings","Base64"],"ae":0,"ee":"Password hashing algorithms slow guessing and can use memory-hard settings."}]},"en":{"name":"Level 5 — Encryption & hashing","qs":[{"q":"ما الفرق الأساسي بين التشفير والتجزئة؟","o":["التشفير قابل للعكس بمفتاح، والتجزئة مصممة لتكون أحادية الاتجاه","لا يوجد فرق","التجزئة تحتاج دائماً مفتاح فك"],"a":0,"e":"التشفير يتيح استعادة البيانات بالمفتاح؛ التجزئة تنتج بصمة للتحقق.","qe":"What is the key difference between encryption and hashing?","oe":["Encryption is reversible with a key; hashing is designed to be one-way","There is no difference","Hashing always needs a decryption key"],"ae":0,"ee":"Encryption allows recovery with a key; hashing creates a digest for verification."},{"q":"لماذا نضيف Salt فريداً لكل كلمة مرور قبل تخزين التجزئة؟","o":["لجعل كل التجزئات مختلفة حتى عند تساوي كلمات المرور وتقليل فاعلية الجداول المسبقة","لإخفاء اسم المستخدم","لزيادة طول كلمة المرور الأصلية"],"a":0,"e":"Salt فريد يمنع تطابق التجزئات الناتجة عن كلمات مرور متطابقة ويعقّد التخمين المسبق.","qe":"Why add a unique salt before hashing each password?","oe":["To make hashes unique even for matching passwords and reduce precomputed-table effectiveness","To hide the username","To lengthen the original password"],"ae":0,"ee":"A unique salt prevents identical passwords from producing identical stored hashes."},{"q":"ما الفرق الأساسي بين التشفير والتجزئة؟","o":["التشفير قابل للعكس بمفتاح، والتجزئة مصممة لتكون أحادية الاتجاه","كلاهما ضغط للملفات","التجزئة تحتاج دائماً مفتاح فك"],"a":0,"e":"التجزئة لا تهدف إلى استرجاع النص الأصلي، بخلاف التشفير.","qe":"What is the key difference between encryption and hashing?","oe":["Encryption is reversible with a key; hashing is designed to be one-way","Both are file compression","Hashing always needs a decryption key"],"ae":0,"ee":"Hashing is not meant to recover the original text, unlike encryption."},{"q":"لماذا تُستخدم قيمة Salt مع تجزئة كلمات المرور؟","o":["لجعل التجزئات المتطابقة لكلمات المرور المتشابهة مختلفة","لتقصير كلمة المرور","لإظهار كلمة المرور للمسؤول"],"a":0,"e":"القيمة العشوائية الفريدة تصعّب الاستفادة من جداول التجزئة المسبقة.","qe":"Why use a salt when hashing passwords?","oe":["Make hashes differ even for identical passwords","Shorten the password","Reveal the password to an administrator"],"ae":0,"ee":"A unique random salt makes precomputed hash tables less useful."},{"q":"أي خوارزمية مناسبة لتجزئة كلمات المرور؟","o":["خوارزمية مخصصة بطيئة مثل Argon2id","MD5 سريع دون إعدادات","Base64"],"a":0,"e":"خوارزميات كلمات المرور المخصصة تبطئ التخمين وتدعم إعدادات ذاكرة.","qe":"Which is suitable for password hashing?","oe":["A dedicated slow algorithm such as Argon2id","Fast MD5 without settings","Base64"],"ae":0,"ee":"Password hashing algorithms slow guessing and can use memory-hard settings."}]}},{"id":6,"ar":{"name":"المستوى 6 — التحكم في الوصول","qs":[{"q":"ما المبدأ الذي يمنح المستخدم أقل صلاحيات لازمة لأداء عمله؟","o":["أقل صلاحية","الثقة الدائمة","المشاركة العامة"],"a":0,"e":"مبدأ أقل صلاحية يقلل أثر إساءة الاستخدام أو اختراق الحساب.","qe":"Which principle grants users only the permissions needed for their tasks?","oe":["Least privilege","Permanent trust","Public sharing"],"ae":0,"ee":"Least privilege limits the impact of misuse or account compromise."},{"q":"موظف يستطيع قراءة ملفات قسم آخر دون حاجة وظيفية. ما نوع المشكلة؟","o":["خلل تفويض أو صلاحيات","مشكلة في دقة الشاشة","مشكلة ضغط ملفات"],"a":0,"e":"يجب مراجعة سياسات الوصول وربط الصلاحيات بالدور والحاجة.","qe":"An employee can read another department's files without a work need. What is this?","oe":["Authorization or permissions flaw","Display-resolution issue","File-compression issue"],"ae":0,"ee":"Review access policies and align permissions with roles and business need."},{"q":"ما مبدأ أقل صلاحية؟","o":["منح المستخدم الحد الأدنى اللازم لأداء عمله","منح الجميع صلاحيات المدير","منع كل المستخدمين من العمل"],"a":0,"e":"تقليل الصلاحيات يحد من أثر الخطأ أو اختراق الحساب.","qe":"What is the principle of least privilege?","oe":["Grant only the minimum access needed for a task","Give everyone administrator rights","Prevent all users from working"],"ae":0,"ee":"Limited permissions reduce the impact of mistakes or compromised accounts."},{"q":"لماذا تفصل حسابات الإدارة عن الحسابات اليومية؟","o":["لتقليل تعرض الصلاحيات العالية للمخاطر اليومية","لتكرار الملفات","لإلغاء سجلات الدخول"],"a":0,"e":"استخدام حساب إداري عند الحاجة فقط يقلل سطح التعرض.","qe":"Why separate admin accounts from daily-use accounts?","oe":["Reduce exposure of privileged access during routine work","Duplicate files","Remove login logs"],"ae":0,"ee":"Using privileged accounts only when needed reduces exposure."},{"q":"ما فائدة المراجعة الدورية للصلاحيات؟","o":["إزالة الصلاحيات التي لم تعد مطلوبة","زيادة عدد الحسابات","تجاهل تغيّر الأدوار"],"a":0,"e":"المراجعة تضمن استمرار توافق الوصول مع مسؤوليات المستخدم.","qe":"What is the benefit of periodic access reviews?","oe":["Remove permissions that are no longer needed","Increase account count","Ignore role changes"],"ae":0,"ee":"Reviews keep access aligned with current responsibilities."}]},"en":{"name":"Level 6 — Access control","qs":[{"q":"ما المبدأ الذي يمنح المستخدم أقل صلاحيات لازمة لأداء عمله؟","o":["أقل صلاحية","الثقة الدائمة","المشاركة العامة"],"a":0,"e":"مبدأ أقل صلاحية يقلل أثر إساءة الاستخدام أو اختراق الحساب.","qe":"Which principle grants users only the permissions needed for their tasks?","oe":["Least privilege","Permanent trust","Public sharing"],"ae":0,"ee":"Least privilege limits the impact of misuse or account compromise."},{"q":"موظف يستطيع قراءة ملفات قسم آخر دون حاجة وظيفية. ما نوع المشكلة؟","o":["خلل تفويض أو صلاحيات","مشكلة في دقة الشاشة","مشكلة ضغط ملفات"],"a":0,"e":"يجب مراجعة سياسات الوصول وربط الصلاحيات بالدور والحاجة.","qe":"An employee can read another department's files without a work need. What is this?","oe":["Authorization or permissions flaw","Display-resolution issue","File-compression issue"],"ae":0,"ee":"Review access policies and align permissions with roles and business need."},{"q":"ما مبدأ أقل صلاحية؟","o":["منح المستخدم الحد الأدنى اللازم لأداء عمله","منح الجميع صلاحيات المدير","منع كل المستخدمين من العمل"],"a":0,"e":"تقليل الصلاحيات يحد من أثر الخطأ أو اختراق الحساب.","qe":"What is the principle of least privilege?","oe":["Grant only the minimum access needed for a task","Give everyone administrator rights","Prevent all users from working"],"ae":0,"ee":"Limited permissions reduce the impact of mistakes or compromised accounts."},{"q":"لماذا تفصل حسابات الإدارة عن الحسابات اليومية؟","o":["لتقليل تعرض الصلاحيات العالية للمخاطر اليومية","لتكرار الملفات","لإلغاء سجلات الدخول"],"a":0,"e":"استخدام حساب إداري عند الحاجة فقط يقلل سطح التعرض.","qe":"Why separate admin accounts from daily-use accounts?","oe":["Reduce exposure of privileged access during routine work","Duplicate files","Remove login logs"],"ae":0,"ee":"Using privileged accounts only when needed reduces exposure."},{"q":"ما فائدة المراجعة الدورية للصلاحيات؟","o":["إزالة الصلاحيات التي لم تعد مطلوبة","زيادة عدد الحسابات","تجاهل تغيّر الأدوار"],"a":0,"e":"المراجعة تضمن استمرار توافق الوصول مع مسؤوليات المستخدم.","qe":"What is the benefit of periodic access reviews?","oe":["Remove permissions that are no longer needed","Increase account count","Ignore role changes"],"ae":0,"ee":"Reviews keep access aligned with current responsibilities."}]}},{"id":7,"ar":{"name":"المستوى 7 — أمن تطبيقات الويب","qs":[{"q":"ما أفضل دفاع أساسي ضد SQL Injection في الاستعلامات؟","o":["الاستعلامات المعلّمة/المعلمات (Parameterized Queries)","إخفاء زر تسجيل الدخول","زيادة حجم قاعدة البيانات"],"a":0,"e":"المعلمات تفصل البيانات عن بنية الاستعلام.","qe":"What is a primary defense against SQL injection?","oe":["Parameterized queries","Hiding the login button","Increasing database size"],"ae":0,"ee":"Parameters separate user data from query structure."},{"q":"ما الغرض من ترميز المخرجات بحسب سياق HTML عند عرض مدخلات المستخدم؟","o":["تقليل خطر تنفيذ مدخلات كتعليمات في المتصفح","تسريع المعالج","منع كل أنواع الأعطال"],"a":0,"e":"ترميز المخرجات يساعد في منع XSS عند استخدامه بشكل صحيح وفي السياق المناسب.","qe":"Why encode output according to HTML context when displaying user input?","oe":["To reduce the risk of input being executed as browser instructions","To speed up the CPU","To prevent every kind of failure"],"ae":0,"ee":"Context-aware output encoding helps prevent XSS when correctly applied."},{"q":"ما المقصود بالتحقق من المدخلات في تطبيق ويب؟","o":["التأكد من أن البيانات مطابقة للنوع والقواعد المتوقعة","تغيير لون الصفحة","إخفاء عنوان الموقع"],"a":0,"e":"التحقق يقلل أخطاء المعالجة ومخاطر إدخال بيانات غير متوقعة.","qe":"What is input validation in a web application?","oe":["Ensure data matches expected types and rules","Change page color","Hide the website address"],"ae":0,"ee":"Validation reduces processing errors and risks from unexpected input."},{"q":"لماذا تُستخدم رموز CSRF؟","o":["لربط الطلب بجلسة وتأكيد أن الإجراء مقصود","لتسريع الصور","لتخزين كلمات المرور كنص واضح"],"a":0,"e":"رمز CSRF يساعد على منع طلبات مزورة تستغل جلسة المستخدم.","qe":"Why use CSRF tokens?","oe":["Bind a request to a session and verify intentional actions","Speed up images","Store passwords in plaintext"],"ae":0,"ee":"CSRF tokens help prevent forged requests abusing a user session."},{"q":"ما فائدة ترميز المخرجات؟","o":["منع تفسير مدخلات المستخدم كتعليمات أو شيفرة في السياق المعروض","إخفاء سجل الخادم","زيادة حجم قاعدة البيانات"],"a":0,"e":"ترميز المخرجات المناسب للسياق يقلل مخاطر XSS.","qe":"What is the purpose of output encoding?","oe":["Prevent user input from being interpreted as code in its display context","Hide server logs","Increase database size"],"ae":0,"ee":"Context-appropriate output encoding helps reduce XSS risks."}]},"en":{"name":"Level 7 — Web application security","qs":[{"q":"ما أفضل دفاع أساسي ضد SQL Injection في الاستعلامات؟","o":["الاستعلامات المعلّمة/المعلمات (Parameterized Queries)","إخفاء زر تسجيل الدخول","زيادة حجم قاعدة البيانات"],"a":0,"e":"المعلمات تفصل البيانات عن بنية الاستعلام.","qe":"What is a primary defense against SQL injection?","oe":["Parameterized queries","Hiding the login button","Increasing database size"],"ae":0,"ee":"Parameters separate user data from query structure."},{"q":"ما الغرض من ترميز المخرجات بحسب سياق HTML عند عرض مدخلات المستخدم؟","o":["تقليل خطر تنفيذ مدخلات كتعليمات في المتصفح","تسريع المعالج","منع كل أنواع الأعطال"],"a":0,"e":"ترميز المخرجات يساعد في منع XSS عند استخدامه بشكل صحيح وفي السياق المناسب.","qe":"Why encode output according to HTML context when displaying user input?","oe":["To reduce the risk of input being executed as browser instructions","To speed up the CPU","To prevent every kind of failure"],"ae":0,"ee":"Context-aware output encoding helps prevent XSS when correctly applied."},{"q":"ما المقصود بالتحقق من المدخلات في تطبيق ويب؟","o":["التأكد من أن البيانات مطابقة للنوع والقواعد المتوقعة","تغيير لون الصفحة","إخفاء عنوان الموقع"],"a":0,"e":"التحقق يقلل أخطاء المعالجة ومخاطر إدخال بيانات غير متوقعة.","qe":"What is input validation in a web application?","oe":["Ensure data matches expected types and rules","Change page color","Hide the website address"],"ae":0,"ee":"Validation reduces processing errors and risks from unexpected input."},{"q":"لماذا تُستخدم رموز CSRF؟","o":["لربط الطلب بجلسة وتأكيد أن الإجراء مقصود","لتسريع الصور","لتخزين كلمات المرور كنص واضح"],"a":0,"e":"رمز CSRF يساعد على منع طلبات مزورة تستغل جلسة المستخدم.","qe":"Why use CSRF tokens?","oe":["Bind a request to a session and verify intentional actions","Speed up images","Store passwords in plaintext"],"ae":0,"ee":"CSRF tokens help prevent forged requests abusing a user session."},{"q":"ما فائدة ترميز المخرجات؟","o":["منع تفسير مدخلات المستخدم كتعليمات أو شيفرة في السياق المعروض","إخفاء سجل الخادم","زيادة حجم قاعدة البيانات"],"a":0,"e":"ترميز المخرجات المناسب للسياق يقلل مخاطر XSS.","qe":"What is the purpose of output encoding?","oe":["Prevent user input from being interpreted as code in its display context","Hide server logs","Increase database size"],"ae":0,"ee":"Context-appropriate output encoding helps reduce XSS risks."}]}},{"id":8,"ar":{"name":"المستوى 8 — إدارة الثغرات","qs":[{"q":"ظهر تحديث أمني لثغرة مستغلة فعلياً على الإنترنت. ما الأولوية المنطقية؟","o":["تقييم التعرض وتطبيق التحديث أو إجراء تخفيف معتمد بسرعة","انتظار التحديث السنوي","تعطيل التسجيل"],"a":0,"e":"الأولوية تعتمد على قابلية التعرض وشدة الأثر ووجود استغلال نشط.","qe":"A security patch addresses a vulnerability actively exploited online. What is sensible?","oe":["Assess exposure and rapidly patch or apply an approved mitigation","Wait for the annual update","Disable logging"],"ae":0,"ee":"Prioritize based on exposure, impact, and active exploitation."},{"q":"لماذا لا يكفي فحص الثغرات مرة واحدة فقط؟","o":["لأن الأصول والإعدادات والثغرات تتغير باستمرار","لأن الفحص يبطئ الإنترنت","لأن النتائج لا تحتوي أسماء"],"a":0,"e":"إدارة الثغرات عملية مستمرة تشمل الاكتشاف والتحقق والمعالجة وإعادة الاختبار.","qe":"Why is a single vulnerability scan insufficient?","oe":["Assets, configurations, and vulnerabilities continuously change","Scans slow the internet","Results contain no names"],"ae":0,"ee":"Vulnerability management is continuous: discover, validate, remediate, and retest."},{"q":"كيف ترتب معالجة الثغرات المكتشفة؟","o":["حسب الخطورة وقابلية الاستغلال وأثر الأصل","حسب اسم مكتشفها","حسب تاريخ إنشاء الجهاز فقط"],"a":0,"e":"الأولوية تجمع بين شدة الثغرة وسياق الأصل واحتمال الاستغلال.","qe":"How should discovered vulnerabilities be prioritized?","oe":["By severity, exploitability, and asset impact","By the finder’s name","Only by device creation date"],"ae":0,"ee":"Prioritization combines severity with asset context and likelihood of exploitation."},{"q":"ما فائدة اختبار التصحيح قبل تعميمه؟","o":["التأكد من أنه يعالج المشكلة ولا يعطل وظائف أخرى","زيادة عدد الثغرات","إيقاف النسخ الاحتياطي"],"a":0,"e":"الاختبار يقلل مخاطر الأعطال الناتجة عن التحديثات.","qe":"Why test a patch before broad deployment?","oe":["Ensure it fixes the issue without breaking other functions","Increase vulnerabilities","Stop backups"],"ae":0,"ee":"Testing reduces the risk of outages caused by updates."},{"q":"ما المقصود بالثغرة صفرية اليوم؟","o":["ثغرة لا يتوفر لها إصلاح معروف وقت اكتشافها أو استغلالها","ثغرة عمرها صفر سنوات","خطأ في الساعة"],"a":0,"e":"قد لا يكون التصحيح متاحاً بعد، لذلك يلزم تقييم المخاطر وتدابير مؤقتة.","qe":"What is a zero-day vulnerability?","oe":["A flaw with no known available fix when discovered or exploited","A flaw that is zero years old","A clock error"],"ae":0,"ee":"A patch may not yet exist, requiring risk assessment and temporary mitigations."}]},"en":{"name":"Level 8 — Vulnerability management","qs":[{"q":"ظهر تحديث أمني لثغرة مستغلة فعلياً على الإنترنت. ما الأولوية المنطقية؟","o":["تقييم التعرض وتطبيق التحديث أو إجراء تخفيف معتمد بسرعة","انتظار التحديث السنوي","تعطيل التسجيل"],"a":0,"e":"الأولوية تعتمد على قابلية التعرض وشدة الأثر ووجود استغلال نشط.","qe":"A security patch addresses a vulnerability actively exploited online. What is sensible?","oe":["Assess exposure and rapidly patch or apply an approved mitigation","Wait for the annual update","Disable logging"],"ae":0,"ee":"Prioritize based on exposure, impact, and active exploitation."},{"q":"لماذا لا يكفي فحص الثغرات مرة واحدة فقط؟","o":["لأن الأصول والإعدادات والثغرات تتغير باستمرار","لأن الفحص يبطئ الإنترنت","لأن النتائج لا تحتوي أسماء"],"a":0,"e":"إدارة الثغرات عملية مستمرة تشمل الاكتشاف والتحقق والمعالجة وإعادة الاختبار.","qe":"Why is a single vulnerability scan insufficient?","oe":["Assets, configurations, and vulnerabilities continuously change","Scans slow the internet","Results contain no names"],"ae":0,"ee":"Vulnerability management is continuous: discover, validate, remediate, and retest."},{"q":"كيف ترتب معالجة الثغرات المكتشفة؟","o":["حسب الخطورة وقابلية الاستغلال وأثر الأصل","حسب اسم مكتشفها","حسب تاريخ إنشاء الجهاز فقط"],"a":0,"e":"الأولوية تجمع بين شدة الثغرة وسياق الأصل واحتمال الاستغلال.","qe":"How should discovered vulnerabilities be prioritized?","oe":["By severity, exploitability, and asset impact","By the finder’s name","Only by device creation date"],"ae":0,"ee":"Prioritization combines severity with asset context and likelihood of exploitation."},{"q":"ما فائدة اختبار التصحيح قبل تعميمه؟","o":["التأكد من أنه يعالج المشكلة ولا يعطل وظائف أخرى","زيادة عدد الثغرات","إيقاف النسخ الاحتياطي"],"a":0,"e":"الاختبار يقلل مخاطر الأعطال الناتجة عن التحديثات.","qe":"Why test a patch before broad deployment?","oe":["Ensure it fixes the issue without breaking other functions","Increase vulnerabilities","Stop backups"],"ae":0,"ee":"Testing reduces the risk of outages caused by updates."},{"q":"ما المقصود بالثغرة صفرية اليوم؟","o":["ثغرة لا يتوفر لها إصلاح معروف وقت اكتشافها أو استغلالها","ثغرة عمرها صفر سنوات","خطأ في الساعة"],"a":0,"e":"قد لا يكون التصحيح متاحاً بعد، لذلك يلزم تقييم المخاطر وتدابير مؤقتة.","qe":"What is a zero-day vulnerability?","oe":["A flaw with no known available fix when discovered or exploited","A flaw that is zero years old","A clock error"],"ae":0,"ee":"A patch may not yet exist, requiring risk assessment and temporary mitigations."}]}},{"id":9,"ar":{"name":"المستوى 9 — السجلات والمراقبة","qs":[{"q":"ما الذي يجعل السجل مفيداً للتحقيق؟","o":["طابع زمني موحد وهوية مصدر وسياق الحدث","حذف الأحداث القديمة فوراً","تسجيل كلمات المرور نصاً واضحاً"],"a":0,"e":"السجلات الدقيقة والمتزامنة والقابلة للحماية تدعم إعادة بناء التسلسل الزمني.","qe":"What makes a log useful for investigation?","oe":["Consistent timestamps, source identity, and event context","Immediate deletion of old events","Logging plaintext passwords"],"ae":0,"ee":"Accurate, synchronized, protected logs help reconstruct a timeline."},{"q":"لماذا يجب حماية صلاحيات الوصول إلى منصة السجلات؟","o":["لمنع العبث بالأدلة أو الاطلاع غير المصرح به","لزيادة عدد التنبيهات","لإخفاء السجلات عن المحللين"],"a":0,"e":"سلامة السجلات وسريتها مهمتان للاستجابة للحوادث والامتثال.","qe":"Why restrict access to a logging platform?","oe":["To prevent evidence tampering and unauthorized viewing","To increase alert counts","To hide logs from analysts"],"ae":0,"ee":"Log integrity and confidentiality matter for incident response and compliance."},{"q":"لماذا توحّد الأنظمة الوقت باستخدام مصدر موثوق؟","o":["لربط الأحداث زمنياً بدقة أثناء التحقيق","لتقليل حجم الشاشة","لتشفير قواعد البيانات"],"a":0,"e":"تزامن الوقت يجعل ترتيب الأحداث ومقارنتها أكثر موثوقية.","qe":"Why synchronize systems to a trusted time source?","oe":["Correlate events accurately during investigations","Reduce screen size","Encrypt databases"],"ae":0,"ee":"Time synchronization makes event ordering and correlation more reliable."},{"q":"ما المقصود بمعدل الإيجابيات الكاذبة في التنبيهات؟","o":["تنبيهات تصنف نشاطاً سليماً على أنه مشبوه","تنبيهات تفوت كل الهجمات","تنبيهات بلا وقت"],"a":0,"e":"الإيجابيات الكاذبة تستهلك وقت المحللين وقد تسبب إرهاق التنبيهات.","qe":"What is a false positive in security alerts?","oe":["Benign activity classified as suspicious","Alerts that miss every attack","Alerts without timestamps"],"ae":0,"ee":"False positives consume analyst time and can cause alert fatigue."},{"q":"ما الذي يجعل السجل مفيداً للتحقيق؟","o":["طابع زمني وهوية مصدر وسياق الحدث مع سلامة السجل","عنوان ملون فقط","حذف الأحداث القديمة فوراً"],"a":0,"e":"السجلات المنظمة والمحميّة من العبث تساعد في إعادة بناء التسلسل.","qe":"What makes a log useful for investigation?","oe":["Timestamp, source identity, event context, and integrity","A colored title only","Immediate deletion of old events"],"ae":0,"ee":"Structured tamper-resistant logs help reconstruct event timelines."}]},"en":{"name":"Level 9 — Logging & monitoring","qs":[{"q":"ما الذي يجعل السجل مفيداً للتحقيق؟","o":["طابع زمني موحد وهوية مصدر وسياق الحدث","حذف الأحداث القديمة فوراً","تسجيل كلمات المرور نصاً واضحاً"],"a":0,"e":"السجلات الدقيقة والمتزامنة والقابلة للحماية تدعم إعادة بناء التسلسل الزمني.","qe":"What makes a log useful for investigation?","oe":["Consistent timestamps, source identity, and event context","Immediate deletion of old events","Logging plaintext passwords"],"ae":0,"ee":"Accurate, synchronized, protected logs help reconstruct a timeline."},{"q":"لماذا يجب حماية صلاحيات الوصول إلى منصة السجلات؟","o":["لمنع العبث بالأدلة أو الاطلاع غير المصرح به","لزيادة عدد التنبيهات","لإخفاء السجلات عن المحللين"],"a":0,"e":"سلامة السجلات وسريتها مهمتان للاستجابة للحوادث والامتثال.","qe":"Why restrict access to a logging platform?","oe":["To prevent evidence tampering and unauthorized viewing","To increase alert counts","To hide logs from analysts"],"ae":0,"ee":"Log integrity and confidentiality matter for incident response and compliance."},{"q":"لماذا توحّد الأنظمة الوقت باستخدام مصدر موثوق؟","o":["لربط الأحداث زمنياً بدقة أثناء التحقيق","لتقليل حجم الشاشة","لتشفير قواعد البيانات"],"a":0,"e":"تزامن الوقت يجعل ترتيب الأحداث ومقارنتها أكثر موثوقية.","qe":"Why synchronize systems to a trusted time source?","oe":["Correlate events accurately during investigations","Reduce screen size","Encrypt databases"],"ae":0,"ee":"Time synchronization makes event ordering and correlation more reliable."},{"q":"ما المقصود بمعدل الإيجابيات الكاذبة في التنبيهات؟","o":["تنبيهات تصنف نشاطاً سليماً على أنه مشبوه","تنبيهات تفوت كل الهجمات","تنبيهات بلا وقت"],"a":0,"e":"الإيجابيات الكاذبة تستهلك وقت المحللين وقد تسبب إرهاق التنبيهات.","qe":"What is a false positive in security alerts?","oe":["Benign activity classified as suspicious","Alerts that miss every attack","Alerts without timestamps"],"ae":0,"ee":"False positives consume analyst time and can cause alert fatigue."},{"q":"ما الذي يجعل السجل مفيداً للتحقيق؟","o":["طابع زمني وهوية مصدر وسياق الحدث مع سلامة السجل","عنوان ملون فقط","حذف الأحداث القديمة فوراً"],"a":0,"e":"السجلات المنظمة والمحميّة من العبث تساعد في إعادة بناء التسلسل.","qe":"What makes a log useful for investigation?","oe":["Timestamp, source identity, event context, and integrity","A colored title only","Immediate deletion of old events"],"ae":0,"ee":"Structured tamper-resistant logs help reconstruct event timelines."}]}},{"id":10,"ar":{"name":"المستوى 10 — الاستجابة للحوادث","qs":[{"q":"ما الخطوة الأولى المناسبة عند الاشتباه بحادث أمني؟","o":["اتباع خطة الاستجابة وتقييم التنبيه وحفظ الأدلة","إعادة تهيئة كل الأجهزة فوراً","نشر تفاصيل الحادث علناً"],"a":0,"e":"ابدأ بالتحقق والتصعيد وفق الخطة، مع تجنب إتلاف الأدلة.","qe":"What is an appropriate first step when a security incident is suspected?","oe":["Follow the response plan, validate the alert, and preserve evidence","Reimage every device immediately","Publish incident details publicly"],"ae":0,"ee":"Validate and escalate according to the plan while preserving evidence."},{"q":"لماذا يجب توثيق القرارات والإجراءات أثناء الاستجابة؟","o":["للحفاظ على تسلسل واضح قابل للمراجعة وتحسين ما بعد الحادث","لزيادة حجم الملفات","لاستبدال التحقيق"],"a":0,"e":"التوثيق يدعم المساءلة والتحليل اللاحق والتعلم المؤسسي.","qe":"Why document decisions and actions during response?","oe":["To maintain an auditable timeline and support post-incident improvement","To increase file size","To replace investigation"],"ae":0,"ee":"Documentation supports accountability, review, and organizational learning."},{"q":"ما أول خطوة تنظيمية عند تأكيد حادث أمني؟","o":["تفعيل خطة الاستجابة وتحديد المسؤوليات","حذف كل الأدلة","إيقاف التواصل الداخلي"],"a":0,"e":"الخطة تحدد من يقود الحادث وكيف يتم التصعيد والتواصل.","qe":"What is an appropriate organizational first step after confirming an incident?","oe":["Activate the response plan and assign responsibilities","Delete all evidence","Stop internal communication"],"ae":0,"ee":"The plan defines incident leadership, escalation, and communication."},{"q":"لماذا يجب توثيق القرارات أثناء الحادث؟","o":["لإنشاء سجل قابل للمراجعة يوضح الأسباب والتوقيت","لزيادة عدد الاجتماعات","لإخفاء المسؤوليات"],"a":0,"e":"التوثيق يدعم المراجعة اللاحقة والتحسين والمساءلة.","qe":"Why document decisions during an incident?","oe":["Create an auditable record of rationale and timing","Increase meetings","Hide responsibilities"],"ae":0,"ee":"Documentation supports review, improvement, and accountability."},{"q":"متى ينبغي إعلان انتهاء الحادث؟","o":["بعد التحقق من الاحتواء والمعالجة ومراقبة عدم تكراره وفق المعايير","عند أول إعادة تشغيل","بعد حذف التنبيهات"],"a":0,"e":"إنهاء الحادث يحتاج تحققاً ومعايير واضحة وليس مجرد اختفاء التنبيه.","qe":"When should an incident be declared closed?","oe":["After verifying containment, remediation, and monitoring against criteria","At the first reboot","After deleting alerts"],"ae":0,"ee":"Closure requires verification and criteria, not merely a vanished alert."}]},"en":{"name":"Level 10 — Incident response","qs":[{"q":"ما الخطوة الأولى المناسبة عند الاشتباه بحادث أمني؟","o":["اتباع خطة الاستجابة وتقييم التنبيه وحفظ الأدلة","إعادة تهيئة كل الأجهزة فوراً","نشر تفاصيل الحادث علناً"],"a":0,"e":"ابدأ بالتحقق والتصعيد وفق الخطة، مع تجنب إتلاف الأدلة.","qe":"What is an appropriate first step when a security incident is suspected?","oe":["Follow the response plan, validate the alert, and preserve evidence","Reimage every device immediately","Publish incident details publicly"],"ae":0,"ee":"Validate and escalate according to the plan while preserving evidence."},{"q":"لماذا يجب توثيق القرارات والإجراءات أثناء الاستجابة؟","o":["للحفاظ على تسلسل واضح قابل للمراجعة وتحسين ما بعد الحادث","لزيادة حجم الملفات","لاستبدال التحقيق"],"a":0,"e":"التوثيق يدعم المساءلة والتحليل اللاحق والتعلم المؤسسي.","qe":"Why document decisions and actions during response?","oe":["To maintain an auditable timeline and support post-incident improvement","To increase file size","To replace investigation"],"ae":0,"ee":"Documentation supports accountability, review, and organizational learning."},{"q":"ما أول خطوة تنظيمية عند تأكيد حادث أمني؟","o":["تفعيل خطة الاستجابة وتحديد المسؤوليات","حذف كل الأدلة","إيقاف التواصل الداخلي"],"a":0,"e":"الخطة تحدد من يقود الحادث وكيف يتم التصعيد والتواصل.","qe":"What is an appropriate organizational first step after confirming an incident?","oe":["Activate the response plan and assign responsibilities","Delete all evidence","Stop internal communication"],"ae":0,"ee":"The plan defines incident leadership, escalation, and communication."},{"q":"لماذا يجب توثيق القرارات أثناء الحادث؟","o":["لإنشاء سجل قابل للمراجعة يوضح الأسباب والتوقيت","لزيادة عدد الاجتماعات","لإخفاء المسؤوليات"],"a":0,"e":"التوثيق يدعم المراجعة اللاحقة والتحسين والمساءلة.","qe":"Why document decisions during an incident?","oe":["Create an auditable record of rationale and timing","Increase meetings","Hide responsibilities"],"ae":0,"ee":"Documentation supports review, improvement, and accountability."},{"q":"متى ينبغي إعلان انتهاء الحادث؟","o":["بعد التحقق من الاحتواء والمعالجة ومراقبة عدم تكراره وفق المعايير","عند أول إعادة تشغيل","بعد حذف التنبيهات"],"a":0,"e":"إنهاء الحادث يحتاج تحققاً ومعايير واضحة وليس مجرد اختفاء التنبيه.","qe":"When should an incident be declared closed?","oe":["After verifying containment, remediation, and monitoring against criteria","At the first reboot","After deleting alerts"],"ae":0,"ee":"Closure requires verification and criteria, not merely a vanished alert."}]}},{"id":11,"ar":{"name":"المستوى 11 — النسخ الاحتياطي والتعافي","qs":[{"q":"ما معنى قاعدة 3-2-1 للنسخ الاحتياطي؟","o":["3 نسخ، على وسيطين، ونسخة خارج الموقع","3 كلمات مرور و2 حساب و1 جهاز","3 خوادم في غرفة واحدة"],"a":0,"e":"التنوع ووجود نسخة منفصلة يساعدان عند الأعطال أو هجمات الفدية.","qe":"What does the 3-2-1 backup rule mean?","oe":["3 copies, on 2 media types, with 1 offsite","3 passwords, 2 accounts, 1 device","3 servers in one room"],"ae":0,"ee":"Diversity and an offsite copy help during failures or ransomware incidents."},{"q":"ما الفرق بين RPO وRTO؟","o":["RPO يحدد مقدار فقد البيانات المقبول، وRTO زمن الاستعادة المستهدف","كلاهما يقيس سرعة الإنترنت","RTO يحدد كلمة المرور"],"a":0,"e":"RPO يتعلق بنقطة البيانات المستعادة؛ RTO يتعلق بزمن عودة الخدمة.","qe":"What is the difference between RPO and RTO?","oe":["RPO defines acceptable data loss; RTO is the target recovery time","Both measure internet speed","RTO defines a password"],"ae":0,"ee":"RPO concerns the recovery point; RTO concerns service-restoration time."},{"q":"ما الفرق بين RPO وRTO؟","o":["RPO يحدد مقدار فقد البيانات المقبول وRTO زمن استعادة الخدمة","كلاهما يقيس سرعة الإنترنت","RTO يحدد كلمة المرور"],"a":0,"e":"RPO متعلق بنقطة الاستعادة، وRTO بالمدة المستهدفة للاستعادة.","qe":"What is the difference between RPO and RTO?","oe":["RPO defines acceptable data loss; RTO defines target recovery time","Both measure internet speed","RTO defines a password"],"ae":0,"ee":"RPO concerns the recovery point; RTO concerns recovery duration."},{"q":"لماذا يجب اختبار استعادة النسخ الاحتياطية؟","o":["للتأكد من سلامتها وإمكانية استخدامها فعلياً","لزيادة حجمها فقط","لإثبات وجود ملفات دون فتحها"],"a":0,"e":"وجود نسخة احتياطية لا يضمن أنها قابلة للاستعادة.","qe":"Why test backup restoration?","oe":["Verify integrity and practical recoverability","Only increase its size","Prove files exist without opening them"],"ae":0,"ee":"Having a backup does not guarantee it can be restored."},{"q":"ما ميزة النسخ الاحتياطية غير المتصلة أو غير القابلة للتعديل؟","o":["تقليل تأثرها بحوادث تصيب الأنظمة المتصلة","جعلها أسرع دائماً","إلغاء الحاجة لاختبارها"],"a":0,"e":"العزل أو عدم قابلية التعديل يحمي النسخ من بعض أنواع العبث والبرمجيات الضارة.","qe":"What is an advantage of offline or immutable backups?","oe":["Reduce exposure to incidents affecting connected systems","Always make them faster","Remove the need to test them"],"ae":0,"ee":"Isolation or immutability protects backups from some tampering and malware."}]},"en":{"name":"Level 11 — Backup & recovery","qs":[{"q":"ما معنى قاعدة 3-2-1 للنسخ الاحتياطي؟","o":["3 نسخ، على وسيطين، ونسخة خارج الموقع","3 كلمات مرور و2 حساب و1 جهاز","3 خوادم في غرفة واحدة"],"a":0,"e":"التنوع ووجود نسخة منفصلة يساعدان عند الأعطال أو هجمات الفدية.","qe":"What does the 3-2-1 backup rule mean?","oe":["3 copies, on 2 media types, with 1 offsite","3 passwords, 2 accounts, 1 device","3 servers in one room"],"ae":0,"ee":"Diversity and an offsite copy help during failures or ransomware incidents."},{"q":"ما الفرق بين RPO وRTO؟","o":["RPO يحدد مقدار فقد البيانات المقبول، وRTO زمن الاستعادة المستهدف","كلاهما يقيس سرعة الإنترنت","RTO يحدد كلمة المرور"],"a":0,"e":"RPO يتعلق بنقطة البيانات المستعادة؛ RTO يتعلق بزمن عودة الخدمة.","qe":"What is the difference between RPO and RTO?","oe":["RPO defines acceptable data loss; RTO is the target recovery time","Both measure internet speed","RTO defines a password"],"ae":0,"ee":"RPO concerns the recovery point; RTO concerns service-restoration time."},{"q":"ما الفرق بين RPO وRTO؟","o":["RPO يحدد مقدار فقد البيانات المقبول وRTO زمن استعادة الخدمة","كلاهما يقيس سرعة الإنترنت","RTO يحدد كلمة المرور"],"a":0,"e":"RPO متعلق بنقطة الاستعادة، وRTO بالمدة المستهدفة للاستعادة.","qe":"What is the difference between RPO and RTO?","oe":["RPO defines acceptable data loss; RTO defines target recovery time","Both measure internet speed","RTO defines a password"],"ae":0,"ee":"RPO concerns the recovery point; RTO concerns recovery duration."},{"q":"لماذا يجب اختبار استعادة النسخ الاحتياطية؟","o":["للتأكد من سلامتها وإمكانية استخدامها فعلياً","لزيادة حجمها فقط","لإثبات وجود ملفات دون فتحها"],"a":0,"e":"وجود نسخة احتياطية لا يضمن أنها قابلة للاستعادة.","qe":"Why test backup restoration?","oe":["Verify integrity and practical recoverability","Only increase its size","Prove files exist without opening them"],"ae":0,"ee":"Having a backup does not guarantee it can be restored."},{"q":"ما ميزة النسخ الاحتياطية غير المتصلة أو غير القابلة للتعديل؟","o":["تقليل تأثرها بحوادث تصيب الأنظمة المتصلة","جعلها أسرع دائماً","إلغاء الحاجة لاختبارها"],"a":0,"e":"العزل أو عدم قابلية التعديل يحمي النسخ من بعض أنواع العبث والبرمجيات الضارة.","qe":"What is an advantage of offline or immutable backups?","oe":["Reduce exposure to incidents affecting connected systems","Always make them faster","Remove the need to test them"],"ae":0,"ee":"Isolation or immutability protects backups from some tampering and malware."}]}},{"id":12,"ar":{"name":"المستوى 12 — أمن السحابة","qs":[{"q":"ما مسؤولية العميل غالباً في نموذج السحابة المشتركة؟","o":["إدارة هويات المستخدمين والبيانات والإعدادات الواقعة ضمن مسؤوليته","أمن مباني مزود الخدمة دائماً","تصنيع الخوادم"],"a":0,"e":"المسؤوليات تختلف حسب IaaS/PaaS/SaaS ويجب فهم نموذج المسؤولية المشتركة.","qe":"What is commonly the customer's responsibility in shared cloud security?","oe":["Managing identities, data, and configurations within their scope","Always securing the provider's buildings","Manufacturing servers"],"ae":0,"ee":"Responsibilities vary across IaaS/PaaS/SaaS; understand the shared-responsibility model."},{"q":"ما الخطر الشائع في حاوية تخزين سحابية مضبوطة على الوصول العام دون قصد؟","o":["كشف بيانات خاصة للعامة","تحسين التشفير","إيقاف النسخ الاحتياطي تلقائياً"],"a":0,"e":"يجب مراجعة سياسات الوصول العامة واستخدام إعدادات افتراضية مقيدة.","qe":"What is a common risk of an accidentally public cloud storage bucket?","oe":["Private data exposure","Improved encryption","Automatic backup shutdown"],"ae":0,"ee":"Review public-access policies and use restrictive defaults."},{"q":"ما مسؤولية مشتركة في نموذج أمن السحابة؟","o":["تتوزع المسؤوليات بين مزود الخدمة والعميل حسب نوع الخدمة","المزود مسؤول عن كل إعدادات العميل دائماً","العميل لا مسؤولية عليه"],"a":0,"e":"تختلف حدود المسؤولية بين IaaS وPaaS وSaaS.","qe":"What is a shared-responsibility model in cloud security?","oe":["Responsibilities are divided between provider and customer by service type","The provider always owns every customer setting","The customer has no responsibilities"],"ae":0,"ee":"Responsibility boundaries differ across IaaS, PaaS, and SaaS."},{"q":"ما خطر تخزين مفاتيح الوصول السحابية داخل مستودع شيفرة عام؟","o":["قد يتمكن الآخرون من استخدامها للوصول إلى الموارد","تحسن سرعة البناء","تقلل تكلفة التخزين"],"a":0,"e":"يجب حماية الأسرار واستخدام مخزن مخصص وتدوير المفاتيح عند الاشتباه.","qe":"What is the risk of storing cloud access keys in a public code repository?","oe":["Others may use them to access resources","It improves build speed","It reduces storage cost"],"ae":0,"ee":"Protect secrets in dedicated stores and rotate keys if exposure is suspected."},{"q":"لماذا تُراجع سياسات التخزين السحابي العام؟","o":["لمنع كشف بيانات لا ينبغي أن تكون متاحة للعامة","لزيادة مساحة الملفات","لتعطيل التشفير"],"a":0,"e":"الإعدادات الخاطئة قد تجعل بيانات حساسة متاحة دون قصد.","qe":"Why review public cloud storage policies?","oe":["Prevent exposure of data not intended for public access","Increase file capacity","Disable encryption"],"ae":0,"ee":"Misconfiguration can unintentionally expose sensitive data."}]},"en":{"name":"Level 12 — Cloud security","qs":[{"q":"ما مسؤولية العميل غالباً في نموذج السحابة المشتركة؟","o":["إدارة هويات المستخدمين والبيانات والإعدادات الواقعة ضمن مسؤوليته","أمن مباني مزود الخدمة دائماً","تصنيع الخوادم"],"a":0,"e":"المسؤوليات تختلف حسب IaaS/PaaS/SaaS ويجب فهم نموذج المسؤولية المشتركة.","qe":"What is commonly the customer's responsibility in shared cloud security?","oe":["Managing identities, data, and configurations within their scope","Always securing the provider's buildings","Manufacturing servers"],"ae":0,"ee":"Responsibilities vary across IaaS/PaaS/SaaS; understand the shared-responsibility model."},{"q":"ما الخطر الشائع في حاوية تخزين سحابية مضبوطة على الوصول العام دون قصد؟","o":["كشف بيانات خاصة للعامة","تحسين التشفير","إيقاف النسخ الاحتياطي تلقائياً"],"a":0,"e":"يجب مراجعة سياسات الوصول العامة واستخدام إعدادات افتراضية مقيدة.","qe":"What is a common risk of an accidentally public cloud storage bucket?","oe":["Private data exposure","Improved encryption","Automatic backup shutdown"],"ae":0,"ee":"Review public-access policies and use restrictive defaults."},{"q":"ما مسؤولية مشتركة في نموذج أمن السحابة؟","o":["تتوزع المسؤوليات بين مزود الخدمة والعميل حسب نوع الخدمة","المزود مسؤول عن كل إعدادات العميل دائماً","العميل لا مسؤولية عليه"],"a":0,"e":"تختلف حدود المسؤولية بين IaaS وPaaS وSaaS.","qe":"What is a shared-responsibility model in cloud security?","oe":["Responsibilities are divided between provider and customer by service type","The provider always owns every customer setting","The customer has no responsibilities"],"ae":0,"ee":"Responsibility boundaries differ across IaaS, PaaS, and SaaS."},{"q":"ما خطر تخزين مفاتيح الوصول السحابية داخل مستودع شيفرة عام؟","o":["قد يتمكن الآخرون من استخدامها للوصول إلى الموارد","تحسن سرعة البناء","تقلل تكلفة التخزين"],"a":0,"e":"يجب حماية الأسرار واستخدام مخزن مخصص وتدوير المفاتيح عند الاشتباه.","qe":"What is the risk of storing cloud access keys in a public code repository?","oe":["Others may use them to access resources","It improves build speed","It reduces storage cost"],"ae":0,"ee":"Protect secrets in dedicated stores and rotate keys if exposure is suspected."},{"q":"لماذا تُراجع سياسات التخزين السحابي العام؟","o":["لمنع كشف بيانات لا ينبغي أن تكون متاحة للعامة","لزيادة مساحة الملفات","لتعطيل التشفير"],"a":0,"e":"الإعدادات الخاطئة قد تجعل بيانات حساسة متاحة دون قصد.","qe":"Why review public cloud storage policies?","oe":["Prevent exposure of data not intended for public access","Increase file capacity","Disable encryption"],"ae":0,"ee":"Misconfiguration can unintentionally expose sensitive data."}]}},{"id":13,"ar":{"name":"المستوى 13 — الهوية والثقة الصفرية","qs":[{"q":"ما الفكرة الأساسية في Zero Trust؟","o":["عدم منح الثقة تلقائياً والتحقق من كل طلب وفق الهوية والسياق والسياسة","الثقة بكل جهاز داخل المكتب","إلغاء المصادقة"],"a":0,"e":"الموقع داخل الشبكة لا يكفي وحده لمنح الثقة.","qe":"What is the core idea of Zero Trust?","oe":["Do not trust by default; evaluate each request using identity, context, and policy","Trust every office device","Remove authentication"],"ae":0,"ee":"Being inside a network is not sufficient reason to trust a request."},{"q":"لماذا تُعد مراجعة صلاحيات الحسابات الخدمية مهمة؟","o":["لأن الصلاحيات الزائدة قد توسع أثر اختراق الحساب","لأنها تغير سرعة المعالج","لأنها تمنع تحديث النظام"],"a":0,"e":"الحسابات غير البشرية تحتاج مالكاً واضحاً وصلاحيات محدودة ومراجعة دورية.","qe":"Why review service-account permissions?","oe":["Excessive privileges can amplify the impact of compromise","They change CPU speed","They prevent system updates"],"ae":0,"ee":"Non-human accounts need clear ownership, limited permissions, and periodic review."},{"q":"ما جوهر نموذج Zero Trust؟","o":["التحقق المستمر وعدم منح الثقة تلقائياً بسبب موقع الاتصال","الثقة بكل جهاز داخل الشبكة","منع المصادقة متعددة العوامل"],"a":0,"e":"يتم تقييم الهوية والجهاز والسياق والصلاحية لكل طلب.","qe":"What is the core of Zero Trust?","oe":["Continuously verify; do not trust automatically based on network location","Trust every device inside the network","Prevent multi-factor authentication"],"ae":0,"ee":"Identity, device, context, and authorization are evaluated for each request."},{"q":"ما فائدة إدارة دورة حياة الهوية؟","o":["إنشاء وتعديل وإلغاء الوصول عند تغير حالة المستخدم","تغيير ألوان الحسابات","زيادة الحسابات المشتركة"],"a":0,"e":"يجب إلغاء الوصول عند مغادرة المستخدم أو تغير دوره.","qe":"What is the benefit of identity lifecycle management?","oe":["Provision, modify, and revoke access as a user’s status changes","Change account colors","Increase shared accounts"],"ae":0,"ee":"Access should be revoked when users leave or change roles."},{"q":"ما المقصود بالوصول المشروط؟","o":["اتخاذ قرار الوصول بناءً على عوامل مثل الجهاز والموقع والمخاطر","السماح للجميع دائماً","استخدام كلمة مرور واحدة"],"a":0,"e":"السياسات الشرطية تضيف سياقاً لتقييم طلبات الدخول.","qe":"What is conditional access?","oe":["Make access decisions using factors such as device, location, and risk","Always allow everyone","Use one password"],"ae":0,"ee":"Conditional policies add context to access decisions."}]},"en":{"name":"Level 13 — Identity & Zero Trust","qs":[{"q":"ما الفكرة الأساسية في Zero Trust؟","o":["عدم منح الثقة تلقائياً والتحقق من كل طلب وفق الهوية والسياق والسياسة","الثقة بكل جهاز داخل المكتب","إلغاء المصادقة"],"a":0,"e":"الموقع داخل الشبكة لا يكفي وحده لمنح الثقة.","qe":"What is the core idea of Zero Trust?","oe":["Do not trust by default; evaluate each request using identity, context, and policy","Trust every office device","Remove authentication"],"ae":0,"ee":"Being inside a network is not sufficient reason to trust a request."},{"q":"لماذا تُعد مراجعة صلاحيات الحسابات الخدمية مهمة؟","o":["لأن الصلاحيات الزائدة قد توسع أثر اختراق الحساب","لأنها تغير سرعة المعالج","لأنها تمنع تحديث النظام"],"a":0,"e":"الحسابات غير البشرية تحتاج مالكاً واضحاً وصلاحيات محدودة ومراجعة دورية.","qe":"Why review service-account permissions?","oe":["Excessive privileges can amplify the impact of compromise","They change CPU speed","They prevent system updates"],"ae":0,"ee":"Non-human accounts need clear ownership, limited permissions, and periodic review."},{"q":"ما جوهر نموذج Zero Trust؟","o":["التحقق المستمر وعدم منح الثقة تلقائياً بسبب موقع الاتصال","الثقة بكل جهاز داخل الشبكة","منع المصادقة متعددة العوامل"],"a":0,"e":"يتم تقييم الهوية والجهاز والسياق والصلاحية لكل طلب.","qe":"What is the core of Zero Trust?","oe":["Continuously verify; do not trust automatically based on network location","Trust every device inside the network","Prevent multi-factor authentication"],"ae":0,"ee":"Identity, device, context, and authorization are evaluated for each request."},{"q":"ما فائدة إدارة دورة حياة الهوية؟","o":["إنشاء وتعديل وإلغاء الوصول عند تغير حالة المستخدم","تغيير ألوان الحسابات","زيادة الحسابات المشتركة"],"a":0,"e":"يجب إلغاء الوصول عند مغادرة المستخدم أو تغير دوره.","qe":"What is the benefit of identity lifecycle management?","oe":["Provision, modify, and revoke access as a user’s status changes","Change account colors","Increase shared accounts"],"ae":0,"ee":"Access should be revoked when users leave or change roles."},{"q":"ما المقصود بالوصول المشروط؟","o":["اتخاذ قرار الوصول بناءً على عوامل مثل الجهاز والموقع والمخاطر","السماح للجميع دائماً","استخدام كلمة مرور واحدة"],"a":0,"e":"السياسات الشرطية تضيف سياقاً لتقييم طلبات الدخول.","qe":"What is conditional access?","oe":["Make access decisions using factors such as device, location, and risk","Always allow everyone","Use one password"],"ae":0,"ee":"Conditional policies add context to access decisions."}]}},{"id":14,"ar":{"name":"المستوى 14 — تحليل البرمجيات والملفات","qs":[{"q":"وصلتك عينة مشبوهة للتحليل. ما البيئة الأنسب؟","o":["مختبر معزول ومصرح به مع ضوابط تمنع الاتصال غير المقصود","حاسوب العمل الشخصي المتصل بكل الأنظمة","جهاز أحد أفراد الأسرة"],"a":0,"e":"العزل والتصريح يقللان خطر انتقال العينة خارج بيئة التحليل.","qe":"You receive a suspicious sample for analysis. What environment is appropriate?","oe":["An authorized isolated lab with controls against unintended connectivity","A personal work computer connected to everything","A family member's device"],"ae":0,"ee":"Isolation and authorization reduce the risk of sample escape."},{"q":"هل تطابق بصمة ملف مع برمجية خبيثة يثبت وحده حدوث اختراق؟","o":["نعم دائماً","لا، يجب فحص السياق والمصدر ومكان الملف والأدلة الأخرى","فقط إذا كان اسم الملف غريباً"],"a":1,"e":"المؤشر الواحد لا يكفي؛ قد تكون العينة في مختبر أو ضمن حزمة اختبار مقصودة.","qe":"Does a file hash matching malware prove a compromise by itself?","oe":["Yes, always","No; examine context, provenance, location, and other evidence","Only if the filename is strange"],"ae":1,"ee":"One indicator is insufficient; the sample may be in a lab or authorized test set."},{"q":"لماذا لا ينبغي تشغيل ملف مجهول لمجرد أن اسمه يبدو مألوفاً؟","o":["قد يخفي الاسم امتداداً أو محتوى غير موثوق","الاسم يضمن سلامته","الملفات لا يمكن أن تكون ضارة"],"a":0,"e":"تحقق من المصدر والنوع والتوقيع باستخدام أدوات موثوقة دون تشغيله.","qe":"Why not run an unknown file just because its name looks familiar?","oe":["The name can disguise an untrusted extension or content","The name guarantees safety","Files cannot be malicious"],"ae":0,"ee":"Verify source, type, and signature with trusted tools without executing it."},{"q":"ما فائدة البيئة المعزولة للتحليل؟","o":["تقليل أثر الملف أو السلوك على الأنظمة الأخرى","منح الملف صلاحيات كاملة","تعطيل التسجيل"],"a":0,"e":"العزل يحد من التفاعل مع الأنظمة والبيانات الحقيقية.","qe":"What is the benefit of an isolated analysis environment?","oe":["Limit the file or behavior’s impact on other systems","Give the file full privileges","Disable logging"],"ae":0,"ee":"Isolation limits interaction with real systems and data."},{"q":"ما الذي يثبته التوقيع الرقمي للملف عند التحقق منه بشكل صحيح؟","o":["سلامة الملف ونسبته إلى جهة تملك مفتاح التوقيع","أن الملف خالٍ تماماً من الأخطاء","أن الملف حديث دائماً"],"a":0,"e":"التوقيع يساعد في التحقق من المصدر والسلامة لكنه لا يضمن خلو المحتوى من المخاطر.","qe":"What can a properly verified digital signature establish?","oe":["File integrity and association with the signing key owner","That the file has no bugs","That the file is always recent"],"ae":0,"ee":"A signature helps verify origin and integrity but does not guarantee harmless content."}]},"en":{"name":"Level 14 — File & malware analysis","qs":[{"q":"وصلتك عينة مشبوهة للتحليل. ما البيئة الأنسب؟","o":["مختبر معزول ومصرح به مع ضوابط تمنع الاتصال غير المقصود","حاسوب العمل الشخصي المتصل بكل الأنظمة","جهاز أحد أفراد الأسرة"],"a":0,"e":"العزل والتصريح يقللان خطر انتقال العينة خارج بيئة التحليل.","qe":"You receive a suspicious sample for analysis. What environment is appropriate?","oe":["An authorized isolated lab with controls against unintended connectivity","A personal work computer connected to everything","A family member's device"],"ae":0,"ee":"Isolation and authorization reduce the risk of sample escape."},{"q":"هل تطابق بصمة ملف مع برمجية خبيثة يثبت وحده حدوث اختراق؟","o":["نعم دائماً","لا، يجب فحص السياق والمصدر ومكان الملف والأدلة الأخرى","فقط إذا كان اسم الملف غريباً"],"a":1,"e":"المؤشر الواحد لا يكفي؛ قد تكون العينة في مختبر أو ضمن حزمة اختبار مقصودة.","qe":"Does a file hash matching malware prove a compromise by itself?","oe":["Yes, always","No; examine context, provenance, location, and other evidence","Only if the filename is strange"],"ae":1,"ee":"One indicator is insufficient; the sample may be in a lab or authorized test set."},{"q":"لماذا لا ينبغي تشغيل ملف مجهول لمجرد أن اسمه يبدو مألوفاً؟","o":["قد يخفي الاسم امتداداً أو محتوى غير موثوق","الاسم يضمن سلامته","الملفات لا يمكن أن تكون ضارة"],"a":0,"e":"تحقق من المصدر والنوع والتوقيع باستخدام أدوات موثوقة دون تشغيله.","qe":"Why not run an unknown file just because its name looks familiar?","oe":["The name can disguise an untrusted extension or content","The name guarantees safety","Files cannot be malicious"],"ae":0,"ee":"Verify source, type, and signature with trusted tools without executing it."},{"q":"ما فائدة البيئة المعزولة للتحليل؟","o":["تقليل أثر الملف أو السلوك على الأنظمة الأخرى","منح الملف صلاحيات كاملة","تعطيل التسجيل"],"a":0,"e":"العزل يحد من التفاعل مع الأنظمة والبيانات الحقيقية.","qe":"What is the benefit of an isolated analysis environment?","oe":["Limit the file or behavior’s impact on other systems","Give the file full privileges","Disable logging"],"ae":0,"ee":"Isolation limits interaction with real systems and data."},{"q":"ما الذي يثبته التوقيع الرقمي للملف عند التحقق منه بشكل صحيح؟","o":["سلامة الملف ونسبته إلى جهة تملك مفتاح التوقيع","أن الملف خالٍ تماماً من الأخطاء","أن الملف حديث دائماً"],"a":0,"e":"التوقيع يساعد في التحقق من المصدر والسلامة لكنه لا يضمن خلو المحتوى من المخاطر.","qe":"What can a properly verified digital signature establish?","oe":["File integrity and association with the signing key owner","That the file has no bugs","That the file is always recent"],"ae":0,"ee":"A signature helps verify origin and integrity but does not guarantee harmless content."}]}},{"id":15,"ar":{"name":"المستوى 15 — هندسة الأمن والتصميم","qs":[{"q":"ما فائدة Threat Modeling قبل إطلاق نظام جديد؟","o":["تحديد الأصول والتهديدات ومسارات الهجوم والضوابط مبكراً","استبدال الاختبارات بالكامل","ضمان عدم وجود أي ثغرة"],"a":0,"e":"نمذجة التهديدات تساعد على ترتيب المخاطر واختيار ضوابط مناسبة أثناء التصميم.","qe":"What is the value of threat modeling before a system launch?","oe":["Identify assets, threats, attack paths, and controls early","Replace all testing","Guarantee zero vulnerabilities"],"ae":0,"ee":"Threat modeling helps prioritize risk and select controls during design."},{"q":"أي تصميم يقلل أثر اختراق خدمة واحدة في بنية متعددة الخدمات؟","o":["تقسيم الصلاحيات والشبكات والتحقق بين الخدمات","مشاركة حساب مدير واحد","تعطيل مراقبة الاتصالات"],"a":0,"e":"حدود الثقة والهوية المستقلة تقلل الحركة الجانبية.","qe":"Which design limits the impact of compromising one service in a multi-service system?","oe":["Segment permissions and networks and authenticate service-to-service requests","Share one administrator account","Disable traffic monitoring"],"ae":0,"ee":"Trust boundaries and independent identities reduce lateral movement."},{"q":"ما فائدة نمذجة التهديدات في مرحلة التصميم؟","o":["تحديد الأصول والتهديدات والضوابط مبكراً","تأجيل الأمن إلى ما بعد الإطلاق","إلغاء الاختبارات"],"a":0,"e":"النظر المبكر في التهديدات يقلل تكلفة معالجة المشكلات لاحقاً.","qe":"Why perform threat modeling during design?","oe":["Identify assets, threats, and controls early","Delay security until launch","Eliminate testing"],"ae":0,"ee":"Early threat analysis reduces the later cost of fixing issues."},{"q":"ما المقصود بمبدأ الدفاع متعدد الطبقات؟","o":["استخدام ضوابط متكاملة بحيث لا يعتمد الأمن على حاجز واحد","تكرار كلمة المرور نفسها","تعطيل التنبيهات"],"a":0,"e":"الطبقات المتعددة تقلل احتمال فشل الحماية بالكامل عند تعطل ضابط واحد.","qe":"What is defense in depth?","oe":["Use complementary controls rather than relying on one barrier","Reuse the same password","Disable alerts"],"ae":0,"ee":"Multiple layers reduce the chance that one failed control defeats all security."},{"q":"لماذا تُراجع التبعيات البرمجية في التصميم؟","o":["لأن مكوناً خارجياً قد يحمل ثغرة أو يتوقف دعمه","لأنها لا تؤثر على الأمن","لزيادة عدد المكتبات"],"a":0,"e":"سلسلة توريد البرمجيات جزء من سطح المخاطر.","qe":"Why review software dependencies during design?","oe":["A third-party component may contain flaws or lose support","They never affect security","To increase library count"],"ae":0,"ee":"The software supply chain is part of the risk surface."}]},"en":{"name":"Level 15 — Security architecture","qs":[{"q":"ما فائدة Threat Modeling قبل إطلاق نظام جديد؟","o":["تحديد الأصول والتهديدات ومسارات الهجوم والضوابط مبكراً","استبدال الاختبارات بالكامل","ضمان عدم وجود أي ثغرة"],"a":0,"e":"نمذجة التهديدات تساعد على ترتيب المخاطر واختيار ضوابط مناسبة أثناء التصميم.","qe":"What is the value of threat modeling before a system launch?","oe":["Identify assets, threats, attack paths, and controls early","Replace all testing","Guarantee zero vulnerabilities"],"ae":0,"ee":"Threat modeling helps prioritize risk and select controls during design."},{"q":"أي تصميم يقلل أثر اختراق خدمة واحدة في بنية متعددة الخدمات؟","o":["تقسيم الصلاحيات والشبكات والتحقق بين الخدمات","مشاركة حساب مدير واحد","تعطيل مراقبة الاتصالات"],"a":0,"e":"حدود الثقة والهوية المستقلة تقلل الحركة الجانبية.","qe":"Which design limits the impact of compromising one service in a multi-service system?","oe":["Segment permissions and networks and authenticate service-to-service requests","Share one administrator account","Disable traffic monitoring"],"ae":0,"ee":"Trust boundaries and independent identities reduce lateral movement."},{"q":"ما فائدة نمذجة التهديدات في مرحلة التصميم؟","o":["تحديد الأصول والتهديدات والضوابط مبكراً","تأجيل الأمن إلى ما بعد الإطلاق","إلغاء الاختبارات"],"a":0,"e":"النظر المبكر في التهديدات يقلل تكلفة معالجة المشكلات لاحقاً.","qe":"Why perform threat modeling during design?","oe":["Identify assets, threats, and controls early","Delay security until launch","Eliminate testing"],"ae":0,"ee":"Early threat analysis reduces the later cost of fixing issues."},{"q":"ما المقصود بمبدأ الدفاع متعدد الطبقات؟","o":["استخدام ضوابط متكاملة بحيث لا يعتمد الأمن على حاجز واحد","تكرار كلمة المرور نفسها","تعطيل التنبيهات"],"a":0,"e":"الطبقات المتعددة تقلل احتمال فشل الحماية بالكامل عند تعطل ضابط واحد.","qe":"What is defense in depth?","oe":["Use complementary controls rather than relying on one barrier","Reuse the same password","Disable alerts"],"ae":0,"ee":"Multiple layers reduce the chance that one failed control defeats all security."},{"q":"لماذا تُراجع التبعيات البرمجية في التصميم؟","o":["لأن مكوناً خارجياً قد يحمل ثغرة أو يتوقف دعمه","لأنها لا تؤثر على الأمن","لزيادة عدد المكتبات"],"a":0,"e":"سلسلة توريد البرمجيات جزء من سطح المخاطر.","qe":"Why review software dependencies during design?","oe":["A third-party component may contain flaws or lose support","They never affect security","To increase library count"],"ae":0,"ee":"The software supply chain is part of the risk surface."}]}},{"id":16,"ar":{"name":"المستوى 16 — التشفير المتقدم وإدارة المفاتيح","qs":[{"q":"ما الممارسة الأفضل لإدارة مفاتيح التشفير؟","o":["تخزينها منفصلة عن البيانات مع تقييد الوصول والتدوير وفق السياسة","إرسالها بالبريد مع الملفات","استخدام مفتاح واحد مكشوف لكل الأنظمة"],"a":0,"e":"حماية المفاتيح لا تقل أهمية عن اختيار خوارزمية قوية.","qe":"What is a sound encryption-key management practice?","oe":["Store keys separately from data, restrict access, and rotate per policy","Email keys with the files","Use one exposed key for every system"],"ae":0,"ee":"Protecting keys is as important as choosing a strong algorithm."},{"q":"لماذا لا يُنصح بابتكار خوارزمية تشفير خاصة بالمؤسسة؟","o":["لأن الخوارزميات المعروفة خضعت لتحليل علني واسع ويمكن تدقيق تطبيقها","لأن التشفير لا يفيد","لأن المفاتيح لا تلزم"],"a":0,"e":"استخدم خوارزميات ومعايير موثوقة ومكتبات مدققة بدلاً من التشفير المنزلي.","qe":"Why avoid inventing a proprietary encryption algorithm?","oe":["Established algorithms have undergone broad public analysis and implementations can be audited","Encryption is useless","Keys are unnecessary"],"ae":0,"ee":"Use trusted standards and reviewed libraries rather than homemade cryptography."},{"q":"لماذا يجب تدوير المفاتيح عند الاشتباه في انكشافها؟","o":["لمنع استمرار استخدام مفتاح قد أصبح مكشوفاً","لزيادة طول البيانات","لتقليل قوة التشفير"],"a":0,"e":"التدوير يبطل الاعتماد على المفتاح المتأثر ويحد من استمرار الخطر.","qe":"Why rotate keys when exposure is suspected?","oe":["Prevent continued use of a potentially exposed key","Increase data length","Weaken encryption"],"ae":0,"ee":"Rotation removes reliance on the affected key and limits ongoing risk."},{"q":"ما المقصود بفصل المهام في إدارة المفاتيح؟","o":["توزيع المسؤوليات الحساسة لتقليل إساءة الاستخدام أو الخطأ","إعطاء شخص واحد كل الصلاحيات","مشاركة المفاتيح في الرسائل"],"a":0,"e":"الفصل يضيف رقابة متبادلة على العمليات الحساسة.","qe":"What is separation of duties in key management?","oe":["Distribute sensitive responsibilities to reduce misuse or error","Give one person every privilege","Share keys in messages"],"ae":0,"ee":"Separation adds checks and balances to sensitive operations."},{"q":"لماذا تُحمى مفاتيح التشفير بشكل أشد من البيانات المشفرة؟","o":["لأن انكشاف المفتاح قد يتيح فك حماية بيانات كثيرة","لأن المفتاح ملف صورة","لأن البيانات المشفرة لا قيمة لها"],"a":0,"e":"المفتاح أصل بالغ الحساسية ويجب تقييد الوصول إليه ومراقبته.","qe":"Why protect encryption keys more strongly than encrypted data?","oe":["A compromised key may expose large amounts of data","A key is an image file","Encrypted data has no value"],"ae":0,"ee":"Keys are highly sensitive assets requiring restricted, monitored access."}]},"en":{"name":"Level 16 — Advanced crypto & key management","qs":[{"q":"ما الممارسة الأفضل لإدارة مفاتيح التشفير؟","o":["تخزينها منفصلة عن البيانات مع تقييد الوصول والتدوير وفق السياسة","إرسالها بالبريد مع الملفات","استخدام مفتاح واحد مكشوف لكل الأنظمة"],"a":0,"e":"حماية المفاتيح لا تقل أهمية عن اختيار خوارزمية قوية.","qe":"What is a sound encryption-key management practice?","oe":["Store keys separately from data, restrict access, and rotate per policy","Email keys with the files","Use one exposed key for every system"],"ae":0,"ee":"Protecting keys is as important as choosing a strong algorithm."},{"q":"لماذا لا يُنصح بابتكار خوارزمية تشفير خاصة بالمؤسسة؟","o":["لأن الخوارزميات المعروفة خضعت لتحليل علني واسع ويمكن تدقيق تطبيقها","لأن التشفير لا يفيد","لأن المفاتيح لا تلزم"],"a":0,"e":"استخدم خوارزميات ومعايير موثوقة ومكتبات مدققة بدلاً من التشفير المنزلي.","qe":"Why avoid inventing a proprietary encryption algorithm?","oe":["Established algorithms have undergone broad public analysis and implementations can be audited","Encryption is useless","Keys are unnecessary"],"ae":0,"ee":"Use trusted standards and reviewed libraries rather than homemade cryptography."},{"q":"لماذا يجب تدوير المفاتيح عند الاشتباه في انكشافها؟","o":["لمنع استمرار استخدام مفتاح قد أصبح مكشوفاً","لزيادة طول البيانات","لتقليل قوة التشفير"],"a":0,"e":"التدوير يبطل الاعتماد على المفتاح المتأثر ويحد من استمرار الخطر.","qe":"Why rotate keys when exposure is suspected?","oe":["Prevent continued use of a potentially exposed key","Increase data length","Weaken encryption"],"ae":0,"ee":"Rotation removes reliance on the affected key and limits ongoing risk."},{"q":"ما المقصود بفصل المهام في إدارة المفاتيح؟","o":["توزيع المسؤوليات الحساسة لتقليل إساءة الاستخدام أو الخطأ","إعطاء شخص واحد كل الصلاحيات","مشاركة المفاتيح في الرسائل"],"a":0,"e":"الفصل يضيف رقابة متبادلة على العمليات الحساسة.","qe":"What is separation of duties in key management?","oe":["Distribute sensitive responsibilities to reduce misuse or error","Give one person every privilege","Share keys in messages"],"ae":0,"ee":"Separation adds checks and balances to sensitive operations."},{"q":"لماذا تُحمى مفاتيح التشفير بشكل أشد من البيانات المشفرة؟","o":["لأن انكشاف المفتاح قد يتيح فك حماية بيانات كثيرة","لأن المفتاح ملف صورة","لأن البيانات المشفرة لا قيمة لها"],"a":0,"e":"المفتاح أصل بالغ الحساسية ويجب تقييد الوصول إليه ومراقبته.","qe":"Why protect encryption keys more strongly than encrypted data?","oe":["A compromised key may expose large amounts of data","A key is an image file","Encrypted data has no value"],"ae":0,"ee":"Keys are highly sensitive assets requiring restricted, monitored access."}]}},{"id":17,"ar":{"name":"المستوى 17 — الحوكمة والمخاطر والامتثال","qs":[{"q":"كيف تُرتب المخاطر الأمنية عادةً؟","o":["بحسب الاحتمالية والأثر والسياق وقابلية الاستغلال","بحسب اسم النظام فقط","بحسب عدد الموظفين فقط"],"a":0,"e":"تقييم المخاطر يجمع احتمال الحدوث وتأثيره والضوابط الحالية.","qe":"How are security risks commonly prioritized?","oe":["By likelihood, impact, context, and exploitability","By system name only","By employee count only"],"ae":0,"ee":"Risk assessment considers likelihood, impact, and existing controls."},{"q":"ما الفرق بين السياسة والإجراء؟","o":["السياسة تحدد التوجيه العام، والإجراء يشرح خطوات التنفيذ","هما الشيء نفسه دائماً","الإجراء أعلى من القانون"],"a":0,"e":"السياسة تحدد ما يجب تحقيقه؛ الإجراء يوضح كيف ينفذ العمل.","qe":"What is the difference between a policy and a procedure?","oe":["A policy sets direction; a procedure describes implementation steps","They are always identical","A procedure outranks law"],"ae":0,"ee":"A policy states what is required; a procedure explains how work is done."},{"q":"ما الفرق بين الخطر والمشكلة الأمنية؟","o":["الخطر احتمال وتأثير مستقبلي، والمشكلة حدث أو حالة قائمة","لا فرق بينهما","الخطر هو كلمة مرور فقط"],"a":0,"e":"إدارة المخاطر تقيم الاحتمال والأثر قبل تحقق الحدث.","qe":"What is the difference between a risk and an issue?","oe":["Risk is a potential future likelihood and impact; an issue is current","There is no difference","Risk is only a password"],"ae":0,"ee":"Risk management evaluates likelihood and impact before an event occurs."},{"q":"لماذا يُوثق قبول المخاطر؟","o":["لتسجيل القرار والمالك والمبررات ومدة المراجعة","لإخفاء المخاطر","لإلغاء المسؤولية"],"a":0,"e":"القبول قرار إداري واعٍ يجب أن يكون محدداً وقابلاً للمراجعة.","qe":"Why document risk acceptance?","oe":["Record the decision, owner, rationale, and review period","Hide risks","Remove accountability"],"ae":0,"ee":"Acceptance is a deliberate management decision that should be reviewable."},{"q":"ما فائدة تصنيف البيانات؟","o":["تحديد مستوى الحماية المناسب حسب حساسيتها","جعل كل البيانات عامة","حذف البيانات القديمة"],"a":0,"e":"التصنيف يساعد في اختيار ضوابط الوصول والتخزين والمشاركة.","qe":"What is the benefit of data classification?","oe":["Choose protection based on sensitivity","Make all data public","Delete old data"],"ae":0,"ee":"Classification guides access, storage, and sharing controls."}]},"en":{"name":"Level 17 — Governance, risk & compliance","qs":[{"q":"كيف تُرتب المخاطر الأمنية عادةً؟","o":["بحسب الاحتمالية والأثر والسياق وقابلية الاستغلال","بحسب اسم النظام فقط","بحسب عدد الموظفين فقط"],"a":0,"e":"تقييم المخاطر يجمع احتمال الحدوث وتأثيره والضوابط الحالية.","qe":"How are security risks commonly prioritized?","oe":["By likelihood, impact, context, and exploitability","By system name only","By employee count only"],"ae":0,"ee":"Risk assessment considers likelihood, impact, and existing controls."},{"q":"ما الفرق بين السياسة والإجراء؟","o":["السياسة تحدد التوجيه العام، والإجراء يشرح خطوات التنفيذ","هما الشيء نفسه دائماً","الإجراء أعلى من القانون"],"a":0,"e":"السياسة تحدد ما يجب تحقيقه؛ الإجراء يوضح كيف ينفذ العمل.","qe":"What is the difference between a policy and a procedure?","oe":["A policy sets direction; a procedure describes implementation steps","They are always identical","A procedure outranks law"],"ae":0,"ee":"A policy states what is required; a procedure explains how work is done."},{"q":"ما الفرق بين الخطر والمشكلة الأمنية؟","o":["الخطر احتمال وتأثير مستقبلي، والمشكلة حدث أو حالة قائمة","لا فرق بينهما","الخطر هو كلمة مرور فقط"],"a":0,"e":"إدارة المخاطر تقيم الاحتمال والأثر قبل تحقق الحدث.","qe":"What is the difference between a risk and an issue?","oe":["Risk is a potential future likelihood and impact; an issue is current","There is no difference","Risk is only a password"],"ae":0,"ee":"Risk management evaluates likelihood and impact before an event occurs."},{"q":"لماذا يُوثق قبول المخاطر؟","o":["لتسجيل القرار والمالك والمبررات ومدة المراجعة","لإخفاء المخاطر","لإلغاء المسؤولية"],"a":0,"e":"القبول قرار إداري واعٍ يجب أن يكون محدداً وقابلاً للمراجعة.","qe":"Why document risk acceptance?","oe":["Record the decision, owner, rationale, and review period","Hide risks","Remove accountability"],"ae":0,"ee":"Acceptance is a deliberate management decision that should be reviewable."},{"q":"ما فائدة تصنيف البيانات؟","o":["تحديد مستوى الحماية المناسب حسب حساسيتها","جعل كل البيانات عامة","حذف البيانات القديمة"],"a":0,"e":"التصنيف يساعد في اختيار ضوابط الوصول والتخزين والمشاركة.","qe":"What is the benefit of data classification?","oe":["Choose protection based on sensitivity","Make all data public","Delete old data"],"ae":0,"ee":"Classification guides access, storage, and sharing controls."}]}},{"id":18,"ar":{"name":"المستوى 18 — التحقيق الجنائي الرقمي","qs":[{"q":"ما الغرض من سلسلة حيازة الأدلة (Chain of Custody)؟","o":["توثيق من تعامل مع الدليل ومتى وكيف لضمان إمكانية الاعتماد عليه","تسريع الإنترنت","تغيير محتوى الدليل"],"a":0,"e":"التوثيق المستمر يساعد على إثبات سلامة الدليل ومصداقية التعامل معه.","qe":"What is the purpose of a chain of custody?","oe":["Record who handled evidence, when, and how to support its integrity","Speed up the internet","Modify evidence contents"],"ae":0,"ee":"Continuous documentation supports evidence integrity and credibility."},{"q":"لماذا يُفضّل إنشاء نسخة جنائية والتحقق من بصمتها بدلاً من العمل على الأصل؟","o":["لحماية الأصل من التغيير وإثبات تطابق النسخة","لتقليل عدد الملفات فقط","لإخفاء مصدر الدليل"],"a":0,"e":"الحفاظ على الأصل وسلامة النسخة أساسان في التحليل الجنائي.","qe":"Why create a forensic copy and verify its hash instead of working on the original?","oe":["To protect the original from changes and verify the copy","Only to reduce file count","To hide evidence provenance"],"ae":0,"ee":"Preserving the original and validating the copy are core forensic practices."},{"q":"لماذا تُحسب بصمة رقمية للأدلة؟","o":["للمساعدة في التحقق من عدم تغيرها","لتغيير محتواها","لتسريع الإنترنت"],"a":0,"e":"مقارنة البصمات تساعد على إثبات سلامة نسخة الدليل.","qe":"Why calculate a digital hash of evidence?","oe":["Help verify it has not changed","Modify its content","Speed up the internet"],"ae":0,"ee":"Comparing hashes helps establish the integrity of an evidence copy."},{"q":"ما أهمية توثيق سلسلة حيازة الدليل؟","o":["تسجيل من تعامل معه ومتى وكيف","معرفة لون الجهاز","حذف الملفات المؤقتة"],"a":0,"e":"السلسلة تدعم موثوقية الدليل وقابليته للمراجعة.","qe":"Why document chain of custody?","oe":["Record who handled evidence, when, and how","Identify device color","Delete temporary files"],"ae":0,"ee":"Chain of custody supports evidence reliability and auditability."},{"q":"لماذا يُفضّل تحليل نسخة جنائية بدلاً من الأصل؟","o":["للحفاظ على الأصل وتقليل تغييره أثناء الفحص","لأن النسخ دائماً أسرع","لإخفاء مصدر الدليل"],"a":0,"e":"العمل على نسخة موثقة يحافظ على الأصل ويجعل التحليل قابلاً للتكرار.","qe":"Why analyze a forensic copy instead of the original?","oe":["Preserve the original and reduce alteration during examination","Copies are always faster","Hide evidence origin"],"ae":0,"ee":"A documented copy preserves the original and supports repeatable analysis."}]},"en":{"name":"Level 18 — Digital forensics","qs":[{"q":"ما الغرض من سلسلة حيازة الأدلة (Chain of Custody)؟","o":["توثيق من تعامل مع الدليل ومتى وكيف لضمان إمكانية الاعتماد عليه","تسريع الإنترنت","تغيير محتوى الدليل"],"a":0,"e":"التوثيق المستمر يساعد على إثبات سلامة الدليل ومصداقية التعامل معه.","qe":"What is the purpose of a chain of custody?","oe":["Record who handled evidence, when, and how to support its integrity","Speed up the internet","Modify evidence contents"],"ae":0,"ee":"Continuous documentation supports evidence integrity and credibility."},{"q":"لماذا يُفضّل إنشاء نسخة جنائية والتحقق من بصمتها بدلاً من العمل على الأصل؟","o":["لحماية الأصل من التغيير وإثبات تطابق النسخة","لتقليل عدد الملفات فقط","لإخفاء مصدر الدليل"],"a":0,"e":"الحفاظ على الأصل وسلامة النسخة أساسان في التحليل الجنائي.","qe":"Why create a forensic copy and verify its hash instead of working on the original?","oe":["To protect the original from changes and verify the copy","Only to reduce file count","To hide evidence provenance"],"ae":0,"ee":"Preserving the original and validating the copy are core forensic practices."},{"q":"لماذا تُحسب بصمة رقمية للأدلة؟","o":["للمساعدة في التحقق من عدم تغيرها","لتغيير محتواها","لتسريع الإنترنت"],"a":0,"e":"مقارنة البصمات تساعد على إثبات سلامة نسخة الدليل.","qe":"Why calculate a digital hash of evidence?","oe":["Help verify it has not changed","Modify its content","Speed up the internet"],"ae":0,"ee":"Comparing hashes helps establish the integrity of an evidence copy."},{"q":"ما أهمية توثيق سلسلة حيازة الدليل؟","o":["تسجيل من تعامل معه ومتى وكيف","معرفة لون الجهاز","حذف الملفات المؤقتة"],"a":0,"e":"السلسلة تدعم موثوقية الدليل وقابليته للمراجعة.","qe":"Why document chain of custody?","oe":["Record who handled evidence, when, and how","Identify device color","Delete temporary files"],"ae":0,"ee":"Chain of custody supports evidence reliability and auditability."},{"q":"لماذا يُفضّل تحليل نسخة جنائية بدلاً من الأصل؟","o":["للحفاظ على الأصل وتقليل تغييره أثناء الفحص","لأن النسخ دائماً أسرع","لإخفاء مصدر الدليل"],"a":0,"e":"العمل على نسخة موثقة يحافظ على الأصل ويجعل التحليل قابلاً للتكرار.","qe":"Why analyze a forensic copy instead of the original?","oe":["Preserve the original and reduce alteration during examination","Copies are always faster","Hide evidence origin"],"ae":0,"ee":"A documented copy preserves the original and supports repeatable analysis."}]}},{"id":19,"ar":{"name":"المستوى 19 — اختبار الأمن الأخلاقي","qs":[{"q":"ما الشرط الأساسي قبل إجراء اختبار اختراق على نظام جهة أخرى؟","o":["تفويض مكتوب يحدد النطاق والقواعد","امتلاك اتصال إنترنت سريع","إبلاغ الأصدقاء"],"a":0,"e":"لا تختبر أنظمة دون تصريح صريح ونطاق متفق عليه.","qe":"What is essential before penetration testing another organization's system?","oe":["Written authorization defining scope and rules","A fast internet connection","Telling friends"],"ae":0,"ee":"Never test systems without explicit permission and an agreed scope."},{"q":"اكتشفت ثغرة خارج نطاق التكليف أثناء اختبار مصرح. ما التصرف الصحيح؟","o":["التوقف عن اختبارها وإبلاغ الجهة وفق آلية الإفصاح المتفق عليها","استغلالها لإثبات خطورتها","نشر بيانات متأثرة"],"a":0,"e":"التزم بالنطاق والتصعيد المسؤول ولا توسع الاختبار دون موافقة.","qe":"You find a vulnerability outside the authorized scope. What should you do?","oe":["Stop testing it and report through the agreed disclosure process","Exploit it to prove impact","Publish affected data"],"ae":0,"ee":"Stay within scope and report responsibly; do not expand testing without approval."},{"q":"ما الذي يجب أن يحدده نطاق اختبار أمني مصرح؟","o":["الأنظمة المسموح اختبارها والوقت والأنشطة المستثناة","اسم المختبر فقط","سرعة الإنترنت"],"a":0,"e":"النطاق الواضح يمنع التأثير على أنظمة غير مشمولة بالتفويض.","qe":"What should an authorized security test scope define?","oe":["Allowed systems, timing, and excluded activities","Only the tester’s name","Internet speed"],"ae":0,"ee":"A clear scope prevents affecting systems outside authorization."},{"q":"ما التصرف الصحيح إذا تسبب الاختبار في أثر غير متوقع؟","o":["إيقاف النشاط المتأثر وإبلاغ جهة الاتصال وفق الخطة","الاستمرار لإكمال كل الاختبارات","إخفاء ما حدث"],"a":0,"e":"السلامة والتواصل الفوري جزء من قواعد الاشتباك.","qe":"What should you do if a test causes an unexpected impact?","oe":["Stop the affected activity and notify the contact per plan","Continue all tests","Hide what happened"],"ae":0,"ee":"Safety and prompt communication are part of rules of engagement."},{"q":"لماذا يجب أن يكون تقرير الاختبار قابلاً لإعادة التحقق؟","o":["ليتمكن الفريق من فهم النتائج والتحقق منها ومعالجتها","لزيادة عدد الصفحات فقط","لإخفاء القيود"],"a":0,"e":"التقرير الجيد يوضح المنهجية والأثر والأدلة والتوصيات والقيود.","qe":"Why should a security test report be reproducible?","oe":["Let teams understand, verify, and remediate findings","Only increase page count","Hide limitations"],"ae":0,"ee":"A good report explains method, impact, evidence, recommendations, and limits."}]},"en":{"name":"Level 19 — Ethical security testing","qs":[{"q":"ما الشرط الأساسي قبل إجراء اختبار اختراق على نظام جهة أخرى؟","o":["تفويض مكتوب يحدد النطاق والقواعد","امتلاك اتصال إنترنت سريع","إبلاغ الأصدقاء"],"a":0,"e":"لا تختبر أنظمة دون تصريح صريح ونطاق متفق عليه.","qe":"What is essential before penetration testing another organization's system?","oe":["Written authorization defining scope and rules","A fast internet connection","Telling friends"],"ae":0,"ee":"Never test systems without explicit permission and an agreed scope."},{"q":"اكتشفت ثغرة خارج نطاق التكليف أثناء اختبار مصرح. ما التصرف الصحيح؟","o":["التوقف عن اختبارها وإبلاغ الجهة وفق آلية الإفصاح المتفق عليها","استغلالها لإثبات خطورتها","نشر بيانات متأثرة"],"a":0,"e":"التزم بالنطاق والتصعيد المسؤول ولا توسع الاختبار دون موافقة.","qe":"You find a vulnerability outside the authorized scope. What should you do?","oe":["Stop testing it and report through the agreed disclosure process","Exploit it to prove impact","Publish affected data"],"ae":0,"ee":"Stay within scope and report responsibly; do not expand testing without approval."},{"q":"ما الذي يجب أن يحدده نطاق اختبار أمني مصرح؟","o":["الأنظمة المسموح اختبارها والوقت والأنشطة المستثناة","اسم المختبر فقط","سرعة الإنترنت"],"a":0,"e":"النطاق الواضح يمنع التأثير على أنظمة غير مشمولة بالتفويض.","qe":"What should an authorized security test scope define?","oe":["Allowed systems, timing, and excluded activities","Only the tester’s name","Internet speed"],"ae":0,"ee":"A clear scope prevents affecting systems outside authorization."},{"q":"ما التصرف الصحيح إذا تسبب الاختبار في أثر غير متوقع؟","o":["إيقاف النشاط المتأثر وإبلاغ جهة الاتصال وفق الخطة","الاستمرار لإكمال كل الاختبارات","إخفاء ما حدث"],"a":0,"e":"السلامة والتواصل الفوري جزء من قواعد الاشتباك.","qe":"What should you do if a test causes an unexpected impact?","oe":["Stop the affected activity and notify the contact per plan","Continue all tests","Hide what happened"],"ae":0,"ee":"Safety and prompt communication are part of rules of engagement."},{"q":"لماذا يجب أن يكون تقرير الاختبار قابلاً لإعادة التحقق؟","o":["ليتمكن الفريق من فهم النتائج والتحقق منها ومعالجتها","لزيادة عدد الصفحات فقط","لإخفاء القيود"],"a":0,"e":"التقرير الجيد يوضح المنهجية والأثر والأدلة والتوصيات والقيود.","qe":"Why should a security test report be reproducible?","oe":["Let teams understand, verify, and remediate findings","Only increase page count","Hide limitations"],"ae":0,"ee":"A good report explains method, impact, evidence, recommendations, and limits."}]}},{"id":20,"ar":{"name":"المستوى 20 — الاستجابة المتقدمة والمرونة","qs":[{"q":"ما المقصود بالاحتواء في الاستجابة للحوادث؟","o":["الحد من انتشار الحادث وأثره مع الحفاظ على الأدلة","حذف كل السجلات","إعلان انتهاء الحادث"],"a":0,"e":"الاحتواء يحد من الضرر، لكنه لا يعني أن السبب الجذري عولج.","qe":"What does containment mean in incident response?","oe":["Limit incident spread and impact while preserving evidence","Delete all logs","Declare the incident over"],"ae":0,"ee":"Containment limits damage but does not mean the root cause is fixed."},{"q":"لماذا تُجرى تمارين محاكاة للحوادث؟","o":["لاختبار الأدوار والاتصالات والقرارات وتحسين الخطة","لإثبات أن الحوادث لن تقع","لإلغاء الحاجة إلى نسخ احتياطية"],"a":0,"e":"التمارين تكشف فجوات التنسيق والجاهزية قبل وقوع حادث حقيقي.","qe":"Why conduct incident-response tabletop exercises?","oe":["Test roles, communications, decisions, and improve the plan","Prove incidents will never happen","Remove the need for backups"],"ae":0,"ee":"Exercises expose coordination and readiness gaps before a real incident."},{"q":"ما الهدف من تحليل السبب الجذري بعد الحادث؟","o":["معرفة السبب الأساسي ومنع تكرار المشكلة","تحديد شخص لإلقاء اللوم عليه فقط","حذف السجلات"],"a":0,"e":"التحليل يركز على العوامل النظامية والإصلاحات المستدامة.","qe":"What is the goal of root-cause analysis after an incident?","oe":["Identify underlying causes and prevent recurrence","Only find someone to blame","Delete logs"],"ae":0,"ee":"Analysis focuses on systemic factors and lasting improvements."},{"q":"لماذا يجب الحفاظ على الأدلة أثناء الاحتواء؟","o":["لدعم التحقيق وفهم نطاق الحادث","لإبطاء الاستجابة دون فائدة","لإخفاء التوقيت"],"a":0,"e":"الاحتواء يجب أن يقلل الضرر دون إتلاف معلومات مهمة للتحقيق.","qe":"Why preserve evidence during containment?","oe":["Support investigation and understand incident scope","Needlessly slow response","Hide timing"],"ae":0,"ee":"Containment should reduce harm without destroying investigative information."},{"q":"ما مقياس مناسب لتقييم جاهزية الاستجابة؟","o":["نتائج تمارين المحاكاة وزمن الاكتشاف والاستعادة","عدد خلفيات أجهزة الموظفين","عدد رسائل البريد"],"a":0,"e":"المقاييس العملية تكشف فجوات قابلة للتحسين.","qe":"What is a useful measure of response readiness?","oe":["Exercise results and detection and recovery times","Number of employee wallpapers","Number of emails"],"ae":0,"ee":"Operational measures reveal gaps that can be improved."}]},"en":{"name":"Level 20 — Advanced response & resilience","qs":[{"q":"ما المقصود بالاحتواء في الاستجابة للحوادث؟","o":["الحد من انتشار الحادث وأثره مع الحفاظ على الأدلة","حذف كل السجلات","إعلان انتهاء الحادث"],"a":0,"e":"الاحتواء يحد من الضرر، لكنه لا يعني أن السبب الجذري عولج.","qe":"What does containment mean in incident response?","oe":["Limit incident spread and impact while preserving evidence","Delete all logs","Declare the incident over"],"ae":0,"ee":"Containment limits damage but does not mean the root cause is fixed."},{"q":"لماذا تُجرى تمارين محاكاة للحوادث؟","o":["لاختبار الأدوار والاتصالات والقرارات وتحسين الخطة","لإثبات أن الحوادث لن تقع","لإلغاء الحاجة إلى نسخ احتياطية"],"a":0,"e":"التمارين تكشف فجوات التنسيق والجاهزية قبل وقوع حادث حقيقي.","qe":"Why conduct incident-response tabletop exercises?","oe":["Test roles, communications, decisions, and improve the plan","Prove incidents will never happen","Remove the need for backups"],"ae":0,"ee":"Exercises expose coordination and readiness gaps before a real incident."},{"q":"ما الهدف من تحليل السبب الجذري بعد الحادث؟","o":["معرفة السبب الأساسي ومنع تكرار المشكلة","تحديد شخص لإلقاء اللوم عليه فقط","حذف السجلات"],"a":0,"e":"التحليل يركز على العوامل النظامية والإصلاحات المستدامة.","qe":"What is the goal of root-cause analysis after an incident?","oe":["Identify underlying causes and prevent recurrence","Only find someone to blame","Delete logs"],"ae":0,"ee":"Analysis focuses on systemic factors and lasting improvements."},{"q":"لماذا يجب الحفاظ على الأدلة أثناء الاحتواء؟","o":["لدعم التحقيق وفهم نطاق الحادث","لإبطاء الاستجابة دون فائدة","لإخفاء التوقيت"],"a":0,"e":"الاحتواء يجب أن يقلل الضرر دون إتلاف معلومات مهمة للتحقيق.","qe":"Why preserve evidence during containment?","oe":["Support investigation and understand incident scope","Needlessly slow response","Hide timing"],"ae":0,"ee":"Containment should reduce harm without destroying investigative information."},{"q":"ما مقياس مناسب لتقييم جاهزية الاستجابة؟","o":["نتائج تمارين المحاكاة وزمن الاكتشاف والاستعادة","عدد خلفيات أجهزة الموظفين","عدد رسائل البريد"],"a":0,"e":"المقاييس العملية تكشف فجوات قابلة للتحسين.","qe":"What is a useful measure of response readiness?","oe":["Exercise results and detection and recovery times","Number of employee wallpapers","Number of emails"],"ae":0,"ee":"Operational measures reveal gaps that can be improved."}]}}];
  const levelProgressKey = "cybershield-level-progress-v2";
  const attemptProgressKey = "cybershield-attempt-progress-v1";
  let unlockedLevel = 1, savedAttempt = null;
  try {
    unlockedLevel = Math.max(1, Math.min(20, Number(localStorage.getItem(levelProgressKey) || 1)));
    savedAttempt = JSON.parse(localStorage.getItem(attemptProgressKey) || "null");
    if (!savedAttempt || !Array.isArray(savedAttempt.attemptQuestions) || !savedAttempt.attemptQuestions.length) savedAttempt = null;
  } catch(e) { savedAttempt = null; }
  function saveUnlockedLevel(){
    try { localStorage.setItem(levelProgressKey, String(unlockedLevel)); } catch(e) {}
  }
  function saveAttemptProgress(){
    if (!participantName || !attemptQuestions.length) return;
    savedAttempt = { selectedLevel, quizIndex, quizScore, quizAnswers, answered, attemptQuestions };
    try { localStorage.setItem(attemptProgressKey, JSON.stringify(savedAttempt)); } catch(e) {}
  }
  function clearAttemptProgress(){
    savedAttempt = null;
    try { localStorage.removeItem(attemptProgressKey); } catch(e) {}
  }
  function isArabic(){ return lang === "ar"; }
  function escapeQuizText(value){ return String(value).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;", "'":"&#39;"}[ch])); }
  function shuffleArray(items){
    const copy = items.slice();
    for(let i = copy.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
  function startLevelAttempt(){
    const sourceQuestions = levels[selectedLevel-1][lang].qs;
    attemptQuestions = shuffleArray(sourceQuestions.map(q => ({
      question: q,
      optionOrder: shuffleArray(q.o.map((_, i) => i))
    })));
    quizIndex = 0; quizScore = 0; answered = false; quizAnswers = [];
    clearAttemptProgress();
    renderQuestion();
  }
  function openQuiz(level){
    if(level) selectedLevel = Number(level);
    modal.classList.add("open");
    if(!level) { renderRegistration(); return; }
    if(!participantName) { renderRegistration(); return; }
    startLevelAttempt();
  }
  function closeQuiz(){ modal.classList.remove("open"); }
  function renderRegistration(){
    const title = isArabic() ? "تسجيل الدخول للاختبار" : "Quiz registration";
    const label = isArabic() ? "اكتب اسمًا مستعارًا قبل بدء الاختبار" : "Enter a nickname before starting";
    const placeholder = isArabic() ? "اسم مستعار" : "Your name";
    const start = isArabic() ? "حفظ ومتابعة" : "Save and continue";
    content.innerHTML = `<div class="quiz-result"><h3>${title}</h3><p class="quiz-question">${label}</p><p class="quiz-feedback">${isArabic() ? "يُحفظ الاسم المستعار على جهازك فقط ولا يُرسل إلى الموقع." : "Your nickname is stored only in this browser and is not sent to the site."}</p><input id="quizParticipantName" type="text" maxlength="40" autocomplete="nickname" value="${escapeQuizText(participantName)}" placeholder="${placeholder}" style="width:100%;box-sizing:border-box;padding:13px;border:1px solid var(--border);border-radius:10px;background:var(--surface2);color:var(--text);font:inherit;text-align:start"><p class="quiz-feedback" id="nameError"></p><button class="btn primary" id="saveParticipantName">${start}</button></div>`;
    const input = document.getElementById("quizParticipantName");
    input.focus();
    document.getElementById("saveParticipantName").onclick = ()=>{
      const value = input.value.trim();
      if(value.length < 2){ document.getElementById("nameError").textContent = isArabic() ? "اكتب اسمك (حرفين على الأقل)." : "Please enter at least 2 characters."; return; }
      participantName = value;
      try { localStorage.setItem("cybershield-participant-name", participantName); } catch(e){}
      renderLevelPicker();
    };
    input.addEventListener("keydown", e=>{ if(e.key === "Enter") document.getElementById("saveParticipantName").click(); });
  }
  function renderLevelPicker(){
    const title = isArabic() ? `أهلاً ${escapeQuizText(participantName)} — رحلة الـ 20 مستوى` : `Welcome ${escapeQuizText(participantName)} — 20-Level Challenge`;
    const desc = isArabic()
      ? `ابدأ من المستوى الأول وافتح المستويات التالية بالنجاح. المستويات المفتوحة: ${unlockedLevel} من 20.`
      : `Start at Level 1 and unlock the next levels by passing. Unlocked: ${unlockedLevel} of 20.`;
    const resumeLabel = isArabic() ? "استكمال آخر اختبار محفوظ" : "Resume saved attempt";
    const resumeButton = savedAttempt ? `<button class="btn primary" id="quizResume">${resumeLabel}</button>` : "";
    content.innerHTML = `<h3>${title}</h3><p class="quiz-question">${desc}</p>${resumeButton}<div class="quiz-options">${levels.map((level,i)=>{
      const n = i+1, locked = n > unlockedLevel;
      const label = isArabic() ? `المستوى ${n}` : `Level ${n}`;
      return `<button class="quiz-option" data-level="${n}" ${locked?"disabled":""}>${locked?"🔒":"🔓"} ${label}　›</button>`;
    }).join("")}</div>`;
    content.querySelectorAll("[data-level]").forEach(b=>b.onclick=()=>openQuiz(b.dataset.level));
    const resumeBtn = document.getElementById("quizResume");
    if(resumeBtn) resumeBtn.onclick = ()=>{
      selectedLevel = savedAttempt.selectedLevel;
      quizIndex = savedAttempt.quizIndex;
      quizScore = savedAttempt.quizScore;
      quizAnswers = savedAttempt.quizAnswers || [];
      answered = Boolean(savedAttempt.answered);
      attemptQuestions = savedAttempt.attemptQuestions;
      renderQuestion();
    };
  }
  function renderQuestion(){
    const level = levels[selectedLevel-1];
    const qs = attemptQuestions;
    if(quizIndex >= qs.length){
      const requiredScore = Math.ceil(qs.length * 0.85);
      const passed = (quizScore / qs.length) * 100 >= 85;
      if(passed && selectedLevel < 20 && unlockedLevel < selectedLevel+1){
        unlockedLevel = selectedLevel+1;
        saveUnlockedLevel();
      }
      clearAttemptProgress();
      const title = isArabic() ? (passed ? "أحسنت! اجتزت المستوى 🎉" : "حاول مرة أخرى 💪") : (passed ? "Level passed! 🎉" : "Try again 💪");
      const scoreLabel = isArabic() ? `نتيجتك — النجاح من 85% (تحتاج ${requiredScore} من ${qs.length} إجابات صحيحة)` : `Your score — pass mark is 85% (${requiredScore} of ${qs.length} correct answers needed)`;
      const retry = isArabic() ? "إعادة المستوى" : "Retry level";
      const next = isArabic() ? "المستوى التالي" : "Next level";
      const levelsLabel = isArabic() ? "قائمة المستويات" : "Level list";
      const close = isArabic() ? "إغلاق" : "Close";
      const nextButton = passed && selectedLevel < 20 ? `<button class="btn primary" id="quizNextLevel">${next}　›</button>` : "";
      const finalNote = passed && selectedLevel === 20 ? `<p>${isArabic()?"🏆 أكملت جميع المستويات العشرين!":"🏆 You completed all 20 levels!"}</p>` : "";
      const reviewTitle = isArabic() ? "مراجعة الأسئلة والإجابات الصحيحة" : "Question review & correct answers";
      const reviewHTML = qs.map((item,i)=>{
        const q = item.question;
        const questionText = isArabic() ? q.q : q.qe;
        const sourceOptions = isArabic() ? q.o : q.oe;
        const opts = item.optionOrder.map(index => sourceOptions[index]);
        const sourceCorrect = isArabic() ? q.a : q.ae;
        const correctIndex = item.optionOrder.indexOf(sourceCorrect);
        const explanationText = isArabic() ? q.e : q.ee;
        const chosen = quizAnswers[i];
        const chosenText = (chosen === undefined) ? (isArabic()?"لم تتم الإجابة":"Not answered") : opts[chosen];
        const correctText = opts[correctIndex];
        const ok = chosen === correctIndex;
        return `<div class="quiz-review-item" style="text-align:start;border:1px solid var(--border);border-radius:10px;padding:13px;margin:10px 0;background:var(--surface2)"><b>${i+1}. ${questionText}</b><p style="margin:8px 0;color:${ok?'var(--accent)':'var(--warn)'}">${isArabic()?"إجابتك":"Your answer"}: ${chosenText} ${ok?'✓':'✗'}</p><p style="margin:8px 0;color:var(--accent)"><b>${isArabic()?"الإجابة الصحيحة":"Correct answer"}:</b> ${correctText}</p><p style="margin:8px 0;color:var(--muted)">${explanationText}</p></div>`;
      }).join("");
      content.innerHTML = `<div class="quiz-result"><h3>${title}</h3><p>${isArabic()?"اسم المتقدم":"Participant"}: <b>${escapeQuizText(participantName)}</b></p><strong>${quizScore} / ${qs.length}</strong><p>${scoreLabel}</p>${finalNote}<div style="text-align:start;margin-top:20px"><h3>${reviewTitle}</h3>${reviewHTML}</div><button class="btn primary" id="quizRetry">${retry}</button> ${nextButton}<button class="btn" id="quizLevels">${levelsLabel}</button> <button class="btn" id="quizDone">${close}</button></div>`;
      document.getElementById("quizRetry").onclick = ()=>openQuiz(selectedLevel);
      const nextBtn = document.getElementById("quizNextLevel");
      if(nextBtn) nextBtn.onclick = ()=>openQuiz(selectedLevel+1);
      document.getElementById("quizLevels").onclick = renderLevelPicker;
      document.getElementById("quizDone").onclick = closeQuiz;
      return;
    }
    const attemptItem = qs[quizIndex];
    const q = attemptItem.question;
    const qText = isArabic() ? q.q : q.qe;
    const sourceOptions = isArabic() ? q.o : q.oe;
    const options = attemptItem.optionOrder.map(index => sourceOptions[index]);
    const sourceCorrect = isArabic() ? q.a : q.ae;
    const correct = attemptItem.optionOrder.indexOf(sourceCorrect);
    const progress = Math.round((quizIndex / qs.length) * 100);
    const levelName = level[lang].name;
    content.innerHTML = `<div class="badge">${levelName}</div><div class="quiz-progress"><span style="width:${progress}%"></span></div>
      <div class="badge">${isArabic()?"السؤال":"Question"} ${quizIndex+1} / ${qs.length}</div>
      <div class="quiz-question">${qText}</div>
      <div class="quiz-options">${options.map((v,i)=>`<button class="quiz-option" data-answer="${i}">${v}</button>`).join("")}</div>
      <div class="quiz-feedback" id="quizFeedback"></div>
      <div class="cta"><button class="btn primary" id="quizNext" disabled>${isArabic()?"التالي":"Next"}</button></div>`;
    if(answered && quizAnswers[quizIndex] !== undefined){
      content.querySelectorAll("[data-answer]").forEach((b,i)=>{
        b.disabled = true;
        if(i === quizAnswers[quizIndex]) { b.style.borderColor = "var(--accent2)"; b.style.background = "color-mix(in srgb,var(--accent2) 14%,var(--surface2))"; }
      });
      document.getElementById("quizNext").disabled = false;
    }
    content.querySelectorAll("[data-answer]").forEach(btn=>{
      btn.onclick = ()=>{
        if(answered) return;
        answered = true;
        const choice = Number(btn.dataset.answer);
        quizAnswers[quizIndex] = choice;
        if(choice === correct) quizScore++;
        saveAttemptProgress();
        content.querySelectorAll("[data-answer]").forEach((b,i)=>{
          b.disabled = true;
          if(i === choice) b.style.borderColor = "var(--accent2)";
          if(i === choice) b.style.background = "color-mix(in srgb,var(--accent2) 14%,var(--surface2))";
        });
        document.getElementById("quizFeedback").textContent = "";
        document.getElementById("quizNext").disabled = false;
      };
    });
    document.getElementById("quizNext").onclick = ()=>{ quizIndex++; answered = false; saveAttemptProgress(); renderQuestion(); };
  }

  document.getElementById("quizOpen").addEventListener("click", () => openQuiz());
  document.getElementById("quizClose").addEventListener("click", closeQuiz);
  modal.addEventListener("click", e=>{ if(e.target === modal) closeQuiz(); });
  document.addEventListener("keydown", e=>{ if(e.key === "Escape") closeQuiz(); });

  function setTheme(theme){
    const nextTheme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
    try { localStorage.setItem("cybershield-theme", nextTheme); } catch(e){}
    if (themeBtn) {
      themeBtn.textContent = nextTheme === "dark" ? "☀️" : "🌙";
      themeBtn.setAttribute("aria-label", nextTheme === "dark" ? "Switch to light mode" : "Switch to dark mode");
      themeBtn.title = nextTheme === "dark" ? (isArabic() ? "التبديل للوضع الفاتح" : "Switch to light mode") : (isArabic() ? "التبديل للوضع الداكن" : "Switch to dark mode");
    }
  }
  let savedTheme = "dark";
  try { savedTheme = localStorage.getItem("cybershield-theme") || "dark"; } catch(e){}
  setTheme(savedTheme);
  if (themeBtn) {
    themeBtn.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const currentTheme = document.documentElement.getAttribute("data-theme");
      setTheme(currentTheme === "dark" ? "light" : "dark");
    };
  }

  // Event delegation keeps search working after the page re-renders.
  document.addEventListener("input", e=>{
    if(e.target.id === "courseSearch"){
      const term = e.target.value.trim().toLocaleLowerCase();
      document.querySelectorAll("[data-course]").forEach(card=>{
        card.style.display = card.textContent.toLocaleLowerCase().includes(term) ? "" : "none";
      });
    }
    if(e.target.id === "toolSearch"){
      const term = e.target.value.trim().toLocaleLowerCase();
      document.querySelectorAll("[data-tool]").forEach(card=>{
        card.style.display = card.textContent.toLocaleLowerCase().includes(term) ? "" : "none";
      });
    }
  });
})();
