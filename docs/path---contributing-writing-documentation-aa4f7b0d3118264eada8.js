webpackJsonp([0xaf3a09b42763],{518:function(n,t){n.exports={pathContext:{frontmatter:{path:"contributing/writing-documentation",title:"Writing Documentation",hasPlayground:!1,initialPlayground:null,redirect:null},html:'<h2>Writing Documentation</h2>\n<p>Documentation pages are generated from Markdown files in <code>contents/</code>.\nThe files are organized in 4 sections/folders (getting-started, properties,\nexamples, contributing) which are dynamically listed on the docs overview page.\nThe Markdown files should contain a header with metadata.</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code><span class="token hr punctuation">---</span>\npath: "docs/flexDirection"\ntitle: "Flex Direction"\nhasPlayground: true\n<span class="token title important">initialPlayground: eyJ3aWR0aCI6IjYwMCIsImhlaWdodCI6NTAwLCJjaGlsZHJlbiI6W3t9LHt9LHt9XX0=\n<span class="token punctuation">---</span></span>\n</code></pre>\n      </div>\n<ul>\n<li>The <code>path</code> indicates the URL path this page will be available at.</li>\n<li>The <code>title</code> is used as the page\'s HTML-title and when referencing\nthe file from the documentation overview.</li>\n<li>The <code>hasPlayground</code> property indicates whether this documentation\nhas an associated playground to test out the documented feature.</li>\n<li>The <code>initialPlayground</code> property is only relevant for documentation\npages with playgrounds and contains the initial playground state.\nThis base64 string is a reference to the hash (content after #)\nof a <a href="/playground">playground</a> url.</li>\n<li>The <code>redirect</code> property allows to redirect to the other page, the path of which is mentioned in the property <code>path</code>.</li>\n</ul>\n<p>Within the markdown of a documentation page which has an associated\nplayground you can add controls to let the user play around with the feature\ndirectly from the documenation page.</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>controls</span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>alignContent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>controls</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>If you would like to redirect to another page (potentially an external link) the header would look something like this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code><span class="token hr punctuation">---</span>\npath: "/playground#eyJ3aWR0aCI6IjYwMCIsImhlaWdodCI6NTAwLCJjaGlsZHJlbiI6W3t9LHt9LHt9XX0="\ntitle: "Flex Direction"\n<span class="token title important">redirect: true\n<span class="token punctuation">---</span></span>\n</code></pre>\n      </div>'}}}});
//# sourceMappingURL=path---contributing-writing-documentation-aa4f7b0d3118264eada8.js.map