// OUTDATED
// taken from https://github.com/shikijs/shiki/blob/main/packages/shiki/languages/markdown.tmLanguage.json
export default {
	name: 'custom_markdown',
	scopeName: 'text.html.custom_markdown',
	patterns: [
		{
			include: '#frontMatter',
		},
		{
			include: '#block',
		},
	],
	repository: {
		block: {
			patterns: [
				{
					include: '#separator',
				},
				{
					include: '#heading',
				},
				{
					include: '#blockquote',
				},
				{
					include: '#lists',
				},
				{
					include: '#fenced_code_block',
				},
				{
					include: '#raw_block',
				},
				{
					include: '#link-def',
				},
				{
					include: '#html',
				},
				{
					include: '#table',
				},
				{
					include: '#paragraph',
				},
			],
		},
		blockquote: {
			begin: '(^|\\G)[ ]{0,3}(>) ?',
			captures: {
				2: {
					name: 'punctuation.definition.quote.begin.markdown',
				},
			},
			name: 'markup.quote.markdown',
			patterns: [
				{
					include: '#block',
				},
			],
			while: '(^|\\G)\\s*(>) ?',
		},
		fenced_code_block_meta_bind: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(meta-bind)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.meta-bind',
					patterns: [
						{
							include: 'source.meta-bind',
						},
					],
				},
			],
		},
		fenced_code_block_meta_bind_button: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(meta-bind-button)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.yaml',
					patterns: [
						{
							include: 'source.yaml',
						},
					],
				},
			],
		},
		fenced_code_block_css: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(css|css.erb)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.css',
					patterns: [
						{
							include: 'source.css',
						},
					],
				},
			],
		},
		fenced_code_block_basic: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(html|htm|shtml|xhtml|inc|tmpl|tpl)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.html',
					patterns: [
						{
							include: 'text.html.basic',
						},
					],
				},
			],
		},
		fenced_code_block_ini: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(ini|conf)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.ini',
					patterns: [
						{
							include: 'source.ini',
						},
					],
				},
			],
		},
		fenced_code_block_java: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(java|bsh)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.java',
					patterns: [
						{
							include: 'source.java',
						},
					],
				},
			],
		},
		fenced_code_block_lua: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(lua)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.lua',
					patterns: [
						{
							include: 'source.lua',
						},
					],
				},
			],
		},
		fenced_code_block_makefile: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(Makefile|makefile|GNUmakefile|OCamlMakefile)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.makefile',
					patterns: [
						{
							include: 'source.makefile',
						},
					],
				},
			],
		},
		fenced_code_block_perl: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(perl|pl|pm|pod|t|PL|psgi|vcl)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.perl',
					patterns: [
						{
							include: 'source.perl',
						},
					],
				},
			],
		},
		fenced_code_block_r: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(R|r|s|S|Rprofile|\\{\\.r.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.r',
					patterns: [
						{
							include: 'source.r',
						},
					],
				},
			],
		},
		fenced_code_block_ruby: {
			begin:
				'(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(ruby|rb|rbx|rjs|Rakefile|rake|cgi|fcgi|gemspec|irbrc|Capfile|ru|prawn|Cheffile|Gemfile|Guardfile|Hobofile|Vagrantfile|Appraisals|Rantfile|Berksfile|Berksfile.lock|Thorfile|Puppetfile)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.ruby',
					patterns: [
						{
							include: 'source.ruby',
						},
					],
				},
			],
		},
		fenced_code_block_php: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(php|php3|php4|php5|phpt|phtml|aw|ctp)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.php',
					patterns: [
						{
							include: 'text.html.basic',
						},
						{
							include: 'source.php',
						},
					],
				},
			],
		},
		fenced_code_block_sql: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(sql|ddl|dml)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.sql',
					patterns: [
						{
							include: 'source.sql',
						},
					],
				},
			],
		},
		fenced_code_block_vs_net: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(vb)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.vs_net',
					patterns: [
						{
							include: 'source.asp.vb.net',
						},
					],
				},
			],
		},
		fenced_code_block_xml: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(xml|xsd|tld|jsp|pt|cpt|dtml|rss|opml)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.xml',
					patterns: [
						{
							include: 'text.xml',
						},
					],
				},
			],
		},
		fenced_code_block_xsl: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(xsl|xslt)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.xsl',
					patterns: [
						{
							include: 'text.xml.xsl',
						},
					],
				},
			],
		},
		fenced_code_block_yaml: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(yaml|yml)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.yaml',
					patterns: [
						{
							include: 'source.yaml',
						},
					],
				},
			],
		},
		fenced_code_block_dosbatch: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(bat|batch)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.dosbatch',
					patterns: [
						{
							include: 'source.batchfile',
						},
					],
				},
			],
		},
		fenced_code_block_clojure: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(clj|cljs|clojure)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.clojure',
					patterns: [
						{
							include: 'source.clojure',
						},
					],
				},
			],
		},
		fenced_code_block_coffee: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(coffee|Cakefile|coffee.erb)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.coffee',
					patterns: [
						{
							include: 'source.coffee',
						},
					],
				},
			],
		},
		fenced_code_block_c: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(c|h)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.c',
					patterns: [
						{
							include: 'source.c',
						},
					],
				},
			],
		},
		fenced_code_block_cpp: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(cpp|c\\+\\+|cxx)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.cpp source.cpp',
					patterns: [
						{
							include: 'source.cpp',
						},
					],
				},
			],
		},
		fenced_code_block_diff: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(patch|diff|rej)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.diff',
					patterns: [
						{
							include: 'source.diff',
						},
					],
				},
			],
		},
		fenced_code_block_dockerfile: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(dockerfile|Dockerfile)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.dockerfile',
					patterns: [
						{
							include: 'source.dockerfile',
						},
					],
				},
			],
		},
		fenced_code_block_git_commit: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(COMMIT_EDITMSG|MERGE_MSG)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.git_commit',
					patterns: [
						{
							include: 'text.git-commit',
						},
					],
				},
			],
		},
		fenced_code_block_git_rebase: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(git-rebase-todo)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.git_rebase',
					patterns: [
						{
							include: 'text.git-rebase',
						},
					],
				},
			],
		},
		fenced_code_block_go: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(go|golang)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.go',
					patterns: [
						{
							include: 'source.go',
						},
					],
				},
			],
		},
		fenced_code_block_groovy: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(groovy|gvy)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.groovy',
					patterns: [
						{
							include: 'source.groovy',
						},
					],
				},
			],
		},
		fenced_code_block_pug: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(jade|pug)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.pug',
					patterns: [
						{
							include: 'text.pug',
						},
					],
				},
			],
		},
		fenced_code_block_js: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(js|jsx|javascript|es6|mjs|cjs|dataviewjs|\\{\\.js.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.javascript',
					patterns: [
						{
							include: 'source.js',
						},
					],
				},
			],
		},
		fenced_code_block_js_regexp: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(regexp)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.js_regexp',
					patterns: [
						{
							include: 'source.js.regexp',
						},
					],
				},
			],
		},
		fenced_code_block_json: {
			begin:
				'(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(json|json5|sublime-settings|sublime-menu|sublime-keymap|sublime-mousemap|sublime-theme|sublime-build|sublime-project|sublime-completions)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.json',
					patterns: [
						{
							include: 'source.json',
						},
					],
				},
			],
		},
		fenced_code_block_jsonc: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(jsonc)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.jsonc',
					patterns: [
						{
							include: 'source.json.comments',
						},
					],
				},
			],
		},
		fenced_code_block_less: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(less)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.less',
					patterns: [
						{
							include: 'source.css.less',
						},
					],
				},
			],
		},
		fenced_code_block_objc: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(objectivec|objective-c|mm|objc|obj-c|m|h)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.objc',
					patterns: [
						{
							include: 'source.objc',
						},
					],
				},
			],
		},
		fenced_code_block_swift: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(swift)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.swift',
					patterns: [
						{
							include: 'source.swift',
						},
					],
				},
			],
		},
		fenced_code_block_scss: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(scss)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.scss',
					patterns: [
						{
							include: 'source.css.scss',
						},
					],
				},
			],
		},
		fenced_code_block_perl6: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(perl6|p6|pl6|pm6|nqp)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.perl6',
					patterns: [
						{
							include: 'source.perl.6',
						},
					],
				},
			],
		},
		fenced_code_block_powershell: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(powershell|ps1|psm1|psd1)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.powershell',
					patterns: [
						{
							include: 'source.powershell',
						},
					],
				},
			],
		},
		fenced_code_block_python: {
			begin:
				'(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(python|py|py3|rpy|pyw|cpy|SConstruct|Sconstruct|sconstruct|SConscript|gyp|gypi|\\{\\.python.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.python',
					patterns: [
						{
							include: 'source.python',
						},
					],
				},
			],
		},
		fenced_code_block_julia: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(julia|\\{\\.julia.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.julia',
					patterns: [
						{
							include: 'source.julia',
						},
					],
				},
			],
		},
		fenced_code_block_regexp_python: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(re)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.regexp_python',
					patterns: [
						{
							include: 'source.regexp.python',
						},
					],
				},
			],
		},
		fenced_code_block_rust: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(rust|rs|\\{\\.rust.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.rust',
					patterns: [
						{
							include: 'source.rust',
						},
					],
				},
			],
		},
		fenced_code_block_scala: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(scala|sbt)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.scala',
					patterns: [
						{
							include: 'source.scala',
						},
					],
				},
			],
		},
		fenced_code_block_shell: {
			begin:
				'(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(shell|sh|bash|zsh|bashrc|bash_profile|bash_login|profile|bash_logout|.textmate_init|\\{\\.bash.+?\\})((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.shellscript',
					patterns: [
						{
							include: 'source.shell',
						},
					],
				},
			],
		},
		fenced_code_block_ts: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(typescript|ts)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.typescript',
					patterns: [
						{
							include: 'source.ts',
						},
					],
				},
			],
		},
		fenced_code_block_tsx: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(tsx)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.typescriptreact',
					patterns: [
						{
							include: 'source.tsx',
						},
					],
				},
			],
		},
		fenced_code_block_csharp: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(cs|csharp|c#)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.csharp',
					patterns: [
						{
							include: 'source.cs',
						},
					],
				},
			],
		},
		fenced_code_block_fsharp: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(fs|fsharp|f#)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.fsharp',
					patterns: [
						{
							include: 'source.fsharp',
						},
					],
				},
			],
		},
		fenced_code_block_dart: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(dart)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.dart',
					patterns: [
						{
							include: 'source.dart',
						},
					],
				},
			],
		},
		fenced_code_block_handlebars: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(handlebars|hbs)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.handlebars',
					patterns: [
						{
							include: 'text.html.handlebars',
						},
					],
				},
			],
		},
		fenced_code_block_markdown: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(markdown|md)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.markdown',
					patterns: [
						{
							include: 'text.html.markdown',
						},
					],
				},
			],
		},
		fenced_code_block_log: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(log)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.log',
					patterns: [
						{
							include: 'text.log',
						},
					],
				},
			],
		},
		fenced_code_block_erlang: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(erlang)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.erlang',
					patterns: [
						{
							include: 'source.erlang',
						},
					],
				},
			],
		},
		fenced_code_block_elixir: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(elixir)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.elixir',
					patterns: [
						{
							include: 'source.elixir',
						},
					],
				},
			],
		},
		fenced_code_block_latex: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(latex|tex)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.latex',
					patterns: [
						{
							include: 'text.tex.latex',
						},
					],
				},
			],
		},
		fenced_code_block_bibtex: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(bibtex)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.bibtex',
					patterns: [
						{
							include: 'text.bibtex',
						},
					],
				},
			],
		},
		fenced_code_block_twig: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?i:(twig)((\\s+|:|,|\\{|\\?)[^`]*)?$)',
			name: 'markup.fenced_code.block.markdown',
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language.markdown',
				},
				5: {
					name: 'fenced_code.block.language.attributes.markdown',
				},
			},
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			patterns: [
				{
					begin: '(^|\\G)(\\s*)(.*)',
					while: '(^|\\G)(?!\\s*([`~]{3,})\\s*$)',
					contentName: 'meta.embedded.block.twig',
					patterns: [
						{
							include: 'source.twig',
						},
					],
				},
			],
		},
		fenced_code_block: {
			patterns: [
				{
					include: '#fenced_code_block_meta_bind',
				},
				{
					include: '#fenced_code_block_meta_bind_button',
				},
				{
					include: '#fenced_code_block_css',
				},
				{
					include: '#fenced_code_block_basic',
				},
				{
					include: '#fenced_code_block_ini',
				},
				{
					include: '#fenced_code_block_java',
				},
				{
					include: '#fenced_code_block_lua',
				},
				{
					include: '#fenced_code_block_makefile',
				},
				{
					include: '#fenced_code_block_perl',
				},
				{
					include: '#fenced_code_block_r',
				},
				{
					include: '#fenced_code_block_ruby',
				},
				{
					include: '#fenced_code_block_php',
				},
				{
					include: '#fenced_code_block_sql',
				},
				{
					include: '#fenced_code_block_vs_net',
				},
				{
					include: '#fenced_code_block_xml',
				},
				{
					include: '#fenced_code_block_xsl',
				},
				{
					include: '#fenced_code_block_yaml',
				},
				{
					include: '#fenced_code_block_dosbatch',
				},
				{
					include: '#fenced_code_block_clojure',
				},
				{
					include: '#fenced_code_block_coffee',
				},
				{
					include: '#fenced_code_block_c',
				},
				{
					include: '#fenced_code_block_cpp',
				},
				{
					include: '#fenced_code_block_diff',
				},
				{
					include: '#fenced_code_block_dockerfile',
				},
				{
					include: '#fenced_code_block_git_commit',
				},
				{
					include: '#fenced_code_block_git_rebase',
				},
				{
					include: '#fenced_code_block_go',
				},
				{
					include: '#fenced_code_block_groovy',
				},
				{
					include: '#fenced_code_block_pug',
				},
				{
					include: '#fenced_code_block_js',
				},
				{
					include: '#fenced_code_block_js_regexp',
				},
				{
					include: '#fenced_code_block_json',
				},
				{
					include: '#fenced_code_block_jsonc',
				},
				{
					include: '#fenced_code_block_less',
				},
				{
					include: '#fenced_code_block_objc',
				},
				{
					include: '#fenced_code_block_swift',
				},
				{
					include: '#fenced_code_block_scss',
				},
				{
					include: '#fenced_code_block_perl6',
				},
				{
					include: '#fenced_code_block_powershell',
				},
				{
					include: '#fenced_code_block_python',
				},
				{
					include: '#fenced_code_block_julia',
				},
				{
					include: '#fenced_code_block_regexp_python',
				},
				{
					include: '#fenced_code_block_rust',
				},
				{
					include: '#fenced_code_block_scala',
				},
				{
					include: '#fenced_code_block_shell',
				},
				{
					include: '#fenced_code_block_ts',
				},
				{
					include: '#fenced_code_block_tsx',
				},
				{
					include: '#fenced_code_block_csharp',
				},
				{
					include: '#fenced_code_block_fsharp',
				},
				{
					include: '#fenced_code_block_dart',
				},
				{
					include: '#fenced_code_block_handlebars',
				},
				{
					include: '#fenced_code_block_markdown',
				},
				{
					include: '#fenced_code_block_log',
				},
				{
					include: '#fenced_code_block_erlang',
				},
				{
					include: '#fenced_code_block_elixir',
				},
				{
					include: '#fenced_code_block_latex',
				},
				{
					include: '#fenced_code_block_bibtex',
				},
				{
					include: '#fenced_code_block_twig',
				},
				{
					include: '#fenced_code_block_unknown',
				},
			],
		},
		fenced_code_block_unknown: {
			begin: '(^|\\G)(\\s*)(`{3,}|~{3,})\\s*(?=([^`]*)?$)',
			beginCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
				4: {
					name: 'fenced_code.block.language',
				},
			},
			end: '(^|\\G)(\\2|\\s{0,3})(\\3)\\s*$',
			endCaptures: {
				3: {
					name: 'punctuation.definition.markdown',
				},
			},
			name: 'markup.fenced_code.block.markdown',
		},
		heading: {
			match: '(?:^|\\G)[ ]{0,3}(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$',
			captures: {
				1: {
					patterns: [
						{
							match: '(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$',
							name: 'heading.6.markdown',
							captures: {
								1: {
									name: 'punctuation.definition.heading.markdown',
								},
								2: {
									name: 'entity.name.section.markdown',
									patterns: [
										{
											include: '#inline',
										},
										{
											include: 'text.html.derivative',
										},
									],
								},
								3: {
									name: 'punctuation.definition.heading.markdown',
								},
							},
						},
						{
							match: '(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$',
							name: 'heading.5.markdown',
							captures: {
								1: {
									name: 'punctuation.definition.heading.markdown',
								},
								2: {
									name: 'entity.name.section.markdown',
									patterns: [
										{
											include: '#inline',
										},
										{
											include: 'text.html.derivative',
										},
									],
								},
								3: {
									name: 'punctuation.definition.heading.markdown',
								},
							},
						},
						{
							match: '(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$',
							name: 'heading.4.markdown',
							captures: {
								1: {
									name: 'punctuation.definition.heading.markdown',
								},
								2: {
									name: 'entity.name.section.markdown',
									patterns: [
										{
											include: '#inline',
										},
										{
											include: 'text.html.derivative',
										},
									],
								},
								3: {
									name: 'punctuation.definition.heading.markdown',
								},
							},
						},
						{
							match: '(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$',
							name: 'heading.3.markdown',
							captures: {
								1: {
									name: 'punctuation.definition.heading.markdown',
								},
								2: {
									name: 'entity.name.section.markdown',
									patterns: [
										{
											include: '#inline',
										},
										{
											include: 'text.html.derivative',
										},
									],
								},
								3: {
									name: 'punctuation.definition.heading.markdown',
								},
							},
						},
						{
							match: '(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$',
							name: 'heading.2.markdown',
							captures: {
								1: {
									name: 'punctuation.definition.heading.markdown',
								},
								2: {
									name: 'entity.name.section.markdown',
									patterns: [
										{
											include: '#inline',
										},
										{
											include: 'text.html.derivative',
										},
									],
								},
								3: {
									name: 'punctuation.definition.heading.markdown',
								},
							},
						},
						{
							match: '(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$',
							name: 'heading.1.markdown',
							captures: {
								1: {
									name: 'punctuation.definition.heading.markdown',
								},
								2: {
									name: 'entity.name.section.markdown',
									patterns: [
										{
											include: '#inline',
										},
										{
											include: 'text.html.derivative',
										},
									],
								},
								3: {
									name: 'punctuation.definition.heading.markdown',
								},
							},
						},
					],
				},
			},
			name: 'markup.heading.markdown',
		},
		'heading-setext': {
			patterns: [
				{
					match: '^(={3,})(?=[ \\t]*$\\n?)',
					name: 'markup.heading.setext.1.markdown',
				},
				{
					match: '^(-{3,})(?=[ \\t]*$\\n?)',
					name: 'markup.heading.setext.2.markdown',
				},
			],
		},
		html: {
			patterns: [
				{
					begin: '(^|\\G)\\s*(<!--)',
					captures: {
						1: {
							name: 'punctuation.definition.comment.html',
						},
						2: {
							name: 'punctuation.definition.comment.html',
						},
					},
					end: '(-->)',
					name: 'comment.block.html',
				},
				{
					begin: '(?i)(^|\\G)\\s*(?=<(script|style|pre)(\\s|$|>)(?!.*?</(script|style|pre)>))',
					end: '(?i)(.*)((</)(script|style|pre)(>))',
					endCaptures: {
						1: {
							patterns: [
								{
									include: 'text.html.derivative',
								},
							],
						},
						2: {
							name: 'meta.tag.structure.$4.end.html',
						},
						3: {
							name: 'punctuation.definition.tag.begin.html',
						},
						4: {
							name: 'entity.name.tag.html',
						},
						5: {
							name: 'punctuation.definition.tag.end.html',
						},
					},
					patterns: [
						{
							begin: '(\\s*|$)',
							patterns: [
								{
									include: 'text.html.derivative',
								},
							],
							while: '(?i)^(?!.*</(script|style|pre)>)',
						},
					],
				},
				{
					begin: '(?i)(^|\\G)\\s*(?=</?[a-zA-Z]+[^\\s/&gt;]*(\\s|$|/?>))',
					patterns: [
						{
							include: 'text.html.derivative',
						},
					],
					while: '^(?!\\s*$)',
				},
				{
					begin: '(^|\\G)\\s*(?=(<[a-zA-Z0-9\\-](/?>|\\s.*?>)|</[a-zA-Z0-9\\-]>)\\s*$)',
					patterns: [
						{
							include: 'text.html.derivative',
						},
					],
					while: '^(?!\\s*$)',
				},
			],
		},
		'link-def': {
			captures: {
				1: {
					name: 'punctuation.definition.constant.markdown',
				},
				2: {
					name: 'constant.other.reference.link.markdown',
				},
				3: {
					name: 'punctuation.definition.constant.markdown',
				},
				4: {
					name: 'punctuation.separator.key-value.markdown',
				},
				5: {
					name: 'punctuation.definition.link.markdown',
				},
				6: {
					name: 'markup.underline.link.markdown',
				},
				7: {
					name: 'punctuation.definition.link.markdown',
				},
				8: {
					name: 'markup.underline.link.markdown',
				},
				9: {
					name: 'string.other.link.description.title.markdown',
				},
				10: {
					name: 'punctuation.definition.string.begin.markdown',
				},
				11: {
					name: 'punctuation.definition.string.end.markdown',
				},
				12: {
					name: 'string.other.link.description.title.markdown',
				},
				13: {
					name: 'punctuation.definition.string.begin.markdown',
				},
				14: {
					name: 'punctuation.definition.string.end.markdown',
				},
				15: {
					name: 'string.other.link.description.title.markdown',
				},
				16: {
					name: 'punctuation.definition.string.begin.markdown',
				},
				17: {
					name: 'punctuation.definition.string.end.markdown',
				},
			},
			match:
				'(?x)\n  \\s*            # Leading whitespace\n  (\\[)([^]]+?)(\\])(:)    # Reference name\n  [ \\t]*          # Optional whitespace\n  (?:(<)((?:\\\\[<>]|[^<>\\n])*)(>)|(\\S+?))      # The url\n  [ \\t]*          # Optional whitespace\n  (?:\n      ((\\().+?(\\)))    # Match title in parens…\n    | ((").+?("))    # or in double quotes…\n    | ((\').+?(\'))    # or in single quotes.\n  )?            # Title is optional\n  \\s*            # Optional whitespace\n  $\n',
			name: 'meta.link.reference.def.markdown',
		},
		list_paragraph: {
			begin: '(^|\\G)(?=\\S)(?![*+->]\\s|[0-9]+\\.\\s)',
			name: 'meta.paragraph.markdown',
			patterns: [
				{
					include: '#inline',
				},
				{
					include: 'text.html.derivative',
				},
				{
					include: '#heading-setext',
				},
			],
			while: '(^|\\G)(?!\\s*$|#|[ ]{0,3}([-*_>][ ]{2,}){3,}[ \\t]*$\\n?|[ ]{0,3}[*+->]|[ ]{0,3}[0-9]+\\.)',
		},
		lists: {
			patterns: [
				{
					begin: '(^|\\G)([ ]{0,3})([*+-])([ \\t])',
					beginCaptures: {
						3: {
							name: 'punctuation.definition.list.begin.markdown',
						},
					},
					comment: 'Currently does not support un-indented second lines.',
					name: 'markup.list.unnumbered.markdown',
					patterns: [
						{
							include: '#block',
						},
						{
							include: '#list_paragraph',
						},
					],
					while: '((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)',
				},
				{
					begin: '(^|\\G)([ ]{0,3})([0-9]+[\\.\\)])([ \\t])',
					beginCaptures: {
						3: {
							name: 'punctuation.definition.list.begin.markdown',
						},
					},
					name: 'markup.list.numbered.markdown',
					patterns: [
						{
							include: '#block',
						},
						{
							include: '#list_paragraph',
						},
					],
					while: '((^|\\G)([ ]{2,4}|\\t))|(^[ \\t]*$)',
				},
			],
		},
		paragraph: {
			begin: '(^|\\G)[ ]{0,3}(?=[^ \\t\\n])',
			name: 'meta.paragraph.markdown',
			patterns: [
				{
					include: '#inline',
				},
				{
					include: 'text.html.derivative',
				},
				{
					include: '#heading-setext',
				},
			],
			while: '(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=[^ \\t\\n]))',
		},
		raw_block: {
			begin: '(^|\\G)([ ]{4}|\\t)',
			name: 'markup.raw.block.markdown',
			while: '(^|\\G)([ ]{4}|\\t)',
		},
		separator: {
			match: '(^|\\G)[ ]{0,3}([\\*\\-\\_])([ ]{0,2}\\2){2,}[ \\t]*$\\n?',
			name: 'meta.separator.markdown',
		},
		frontMatter: {
			begin: '\\A-{3}\\s*$',
			contentName: 'meta.embedded.block.frontmatter',
			patterns: [
				{
					include: 'source.yaml',
				},
			],
			end: '(^|\\G)-{3}|\\.{3}\\s*$',
		},
		table: {
			name: 'markup.table.markdown',
			begin: '(^|\\G)(\\|)(?=[^|].+\\|\\s*$)',
			beginCaptures: {
				2: {
					name: 'punctuation.definition.table.markdown',
				},
			},
			while: '(^|\\G)(?=\\|)',
			patterns: [
				{
					match: '\\|',
					name: 'punctuation.definition.table.markdown',
				},
				{
					match: '(?<=\\|)\\s*(:?-+:?)\\s*(?=\\|)',
					captures: {
						1: {
							name: 'punctuation.separator.table.markdown',
						},
					},
				},
				{
					match: '(?<=\\|)\\s*(?=\\S)((\\\\\\||[^|])+)(?<=\\S)\\s*(?=\\|)',
					captures: {
						1: {
							patterns: [
								{
									include: '#inline',
								},
							],
						},
					},
				},
			],
		},
		inline: {
			patterns: [
				{
					include: '#ampersand',
				},
				{
					include: '#bracket',
				},
				{
					include: '#bold',
				},
				{
					include: '#italic',
				},
				{
					include: '#raw',
				},
				{
					include: '#strikethrough',
				},
				{
					include: '#escape',
				},
				{
					include: '#image-inline',
				},
				{
					include: '#image-ref',
				},
				{
					include: '#link-email',
				},
				{
					include: '#link-inet',
				},
				{
					include: '#link-inline',
				},
				{
					include: '#link-ref',
				},
				{
					include: '#link-ref-literal',
				},
				{
					include: '#link-ref-shortcut',
				},
			],
		},
		ampersand: {
			comment: 'Markdown will convert this for us. We match it so that the HTML grammar will not mark it up as invalid.',
			match: '&(?!([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+);)',
			name: 'meta.other.valid-ampersand.markdown',
		},
		bold: {
			begin:
				'(?x) (?<open>(\\*\\*(?=\\w)|(?<!\\w)\\*\\*|(?<!\\w)\\b__))(?=\\S) (?=\n  (\n    <[^>]*+>              # HTML tags\n    | (?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>\n                      # Raw\n    | \\\\[\\\\`*_{}\\[\\]()#.!+\\->]?+      # Escapes\n    | \\[\n    (\n        (?<square>          # Named group\n          [^\\[\\]\\\\]        # Match most chars\n          | \\\\.            # Escaped chars\n          | \\[ \\g<square>*+ \\]    # Nested brackets\n        )*+\n      \\]\n      (\n        (              # Reference Link\n          [ ]?          # Optional space\n          \\[[^\\]]*+\\]        # Ref name\n        )\n        | (              # Inline Link\n          \\(            # Opening paren\n            [ \\t]*+        # Optional whitespace\n            <?(.*?)>?      # URL\n            [ \\t]*+        # Optional whitespace\n            (          # Optional Title\n              (?<title>[\'"])\n              (.*?)\n              \\k<title>\n            )?\n          \\)\n        )\n      )\n    )\n    | (?!(?<=\\S)\\k<open>).            # Everything besides\n                      # style closer\n  )++\n  (?<=\\S)(?=__\\b|\\*\\*)\\k<open>                # Close\n)\n',
			captures: {
				1: {
					name: 'punctuation.definition.bold.markdown',
				},
			},
			end: '(?<=\\S)(\\1)',
			name: 'markup.bold.markdown',
			patterns: [
				{
					applyEndPatternLast: 1,
					begin: '(?=<[^>]*?>)',
					end: '(?<=>)',
					patterns: [
						{
							include: 'text.html.derivative',
						},
					],
				},
				{
					include: '#escape',
				},
				{
					include: '#ampersand',
				},
				{
					include: '#bracket',
				},
				{
					include: '#raw',
				},
				{
					include: '#bold',
				},
				{
					include: '#italic',
				},
				{
					include: '#image-inline',
				},
				{
					include: '#link-inline',
				},
				{
					include: '#link-inet',
				},
				{
					include: '#link-email',
				},
				{
					include: '#image-ref',
				},
				{
					include: '#link-ref-literal',
				},
				{
					include: '#link-ref',
				},
				{
					include: '#link-ref-shortcut',
				},
				{
					include: '#strikethrough',
				},
			],
		},
		bracket: {
			comment: 'Markdown will convert this for us. We match it so that the HTML grammar will not mark it up as invalid.',
			match: '<(?![a-zA-Z/?\\$!])',
			name: 'meta.other.valid-bracket.markdown',
		},
		escape: {
			match: '\\\\[-`*_#+.!(){}\\[\\]\\\\>]',
			name: 'constant.character.escape.markdown',
		},
		'image-inline': {
			captures: {
				1: {
					name: 'punctuation.definition.link.description.begin.markdown',
				},
				2: {
					name: 'string.other.link.description.markdown',
				},
				4: {
					name: 'punctuation.definition.link.description.end.markdown',
				},
				5: {
					name: 'punctuation.definition.metadata.markdown',
				},
				7: {
					name: 'punctuation.definition.link.markdown',
				},
				8: {
					name: 'markup.underline.link.image.markdown',
				},
				9: {
					name: 'punctuation.definition.link.markdown',
				},
				10: {
					name: 'markup.underline.link.image.markdown',
				},
				12: {
					name: 'string.other.link.description.title.markdown',
				},
				13: {
					name: 'punctuation.definition.string.begin.markdown',
				},
				14: {
					name: 'punctuation.definition.string.end.markdown',
				},
				15: {
					name: 'string.other.link.description.title.markdown',
				},
				16: {
					name: 'punctuation.definition.string.begin.markdown',
				},
				17: {
					name: 'punctuation.definition.string.end.markdown',
				},
				18: {
					name: 'string.other.link.description.title.markdown',
				},
				19: {
					name: 'punctuation.definition.string.begin.markdown',
				},
				20: {
					name: 'punctuation.definition.string.end.markdown',
				},
				21: {
					name: 'punctuation.definition.metadata.markdown',
				},
			},
			match:
				'(?x)\n  (\\!\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])\n                # Match the link text.\n  (\\()            # Opening paren for url\n    # The url\n      [ \\t]*\n      (\n         (<)((?:\\\\[<>]|[^<>\\n])*)(>)\n         | ((?<url>(?>[^\\s()]+)|\\(\\g<url>*\\))*)\n      )\n      [ \\t]*\n    (?:\n        ((\\().+?(\\)))    # Match title in parens…\n      | ((").+?("))    # or in double quotes…\n      | ((\').+?(\'))    # or in single quotes.\n    )?            # Title is optional\n    \\s*            # Optional whitespace\n  (\\))\n',
			name: 'meta.image.inline.markdown',
		},
		'image-ref': {
			captures: {
				1: {
					name: 'punctuation.definition.link.description.begin.markdown',
				},
				2: {
					name: 'string.other.link.description.markdown',
				},
				4: {
					name: 'punctuation.definition.link.description.end.markdown',
				},
				5: {
					name: 'punctuation.definition.constant.markdown',
				},
				6: {
					name: 'constant.other.reference.link.markdown',
				},
				7: {
					name: 'punctuation.definition.constant.markdown',
				},
			},
			match: '(\\!\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])[ ]?(\\[)(.*?)(\\])',
			name: 'meta.image.reference.markdown',
		},
		italic: {
			begin:
				'(?x) (?<open>(\\*(?=\\w)|(?<!\\w)\\*|(?<!\\w)\\b_))(?=\\S)                # Open\n  (?=\n    (\n      <[^>]*+>              # HTML tags\n      | (?<raw>`+)([^`]|(?!(?<!`)\\k<raw>(?!`))`)*+\\k<raw>\n                        # Raw\n      | \\\\[\\\\`*_{}\\[\\]()#.!+\\->]?+      # Escapes\n      | \\[\n      (\n          (?<square>          # Named group\n            [^\\[\\]\\\\]        # Match most chars\n            | \\\\.            # Escaped chars\n            | \\[ \\g<square>*+ \\]    # Nested brackets\n          )*+\n        \\]\n        (\n          (              # Reference Link\n            [ ]?          # Optional space\n            \\[[^\\]]*+\\]        # Ref name\n          )\n          | (              # Inline Link\n            \\(            # Opening paren\n              [ \\t]*+        # Optional whtiespace\n              <?(.*?)>?      # URL\n              [ \\t]*+        # Optional whtiespace\n              (          # Optional Title\n                (?<title>[\'"])\n                (.*?)\n                \\k<title>\n              )?\n            \\)\n          )\n        )\n      )\n      | \\k<open>\\k<open>                   # Must be bold closer\n      | (?!(?<=\\S)\\k<open>).            # Everything besides\n                        # style closer\n    )++\n    (?<=\\S)(?=_\\b|\\*)\\k<open>                # Close\n  )\n',
			captures: {
				1: {
					name: 'punctuation.definition.italic.markdown',
				},
			},
			end: '(?<=\\S)(\\1)((?!\\1)|(?=\\1\\1))',
			name: 'markup.italic.markdown',
			patterns: [
				{
					applyEndPatternLast: 1,
					begin: '(?=<[^>]*?>)',
					end: '(?<=>)',
					patterns: [
						{
							include: 'text.html.derivative',
						},
					],
				},
				{
					include: '#escape',
				},
				{
					include: '#ampersand',
				},
				{
					include: '#bracket',
				},
				{
					include: '#raw',
				},
				{
					include: '#bold',
				},
				{
					include: '#image-inline',
				},
				{
					include: '#link-inline',
				},
				{
					include: '#link-inet',
				},
				{
					include: '#link-email',
				},
				{
					include: '#image-ref',
				},
				{
					include: '#link-ref-literal',
				},
				{
					include: '#link-ref',
				},
				{
					include: '#link-ref-shortcut',
				},
				{
					include: '#strikethrough',
				},
			],
		},
		'link-email': {
			captures: {
				1: {
					name: 'punctuation.definition.link.markdown',
				},
				2: {
					name: 'markup.underline.link.markdown',
				},
				4: {
					name: 'punctuation.definition.link.markdown',
				},
			},
			match: "(<)((?:mailto:)?[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*)(>)",
			name: 'meta.link.email.lt-gt.markdown',
		},
		'link-inet': {
			captures: {
				1: {
					name: 'punctuation.definition.link.markdown',
				},
				2: {
					name: 'markup.underline.link.markdown',
				},
				3: {
					name: 'punctuation.definition.link.markdown',
				},
			},
			match: '(<)((?:https?|ftp)://.*?)(>)',
			name: 'meta.link.inet.markdown',
		},
		'link-inline': {
			captures: {
				1: {
					name: 'punctuation.definition.link.title.begin.markdown',
				},
				2: {
					name: 'string.other.link.title.markdown',
					patterns: [
						{
							include: '#raw',
						},
						{
							include: '#bold',
						},
						{
							include: '#italic',
						},
						{
							include: '#strikethrough',
						},
						{
							include: '#image-inline',
						},
					],
				},
				4: {
					name: 'punctuation.definition.link.title.end.markdown',
				},
				5: {
					name: 'punctuation.definition.metadata.markdown',
				},
				7: {
					name: 'punctuation.definition.link.markdown',
				},
				8: {
					name: 'markup.underline.link.markdown',
				},
				9: {
					name: 'punctuation.definition.link.markdown',
				},
				10: {
					name: 'markup.underline.link.markdown',
				},
				12: {
					name: 'string.other.link.description.title.markdown',
				},
				13: {
					name: 'punctuation.definition.string.begin.markdown',
				},
				14: {
					name: 'punctuation.definition.string.end.markdown',
				},
				15: {
					name: 'string.other.link.description.title.markdown',
				},
				16: {
					name: 'punctuation.definition.string.begin.markdown',
				},
				17: {
					name: 'punctuation.definition.string.end.markdown',
				},
				18: {
					name: 'string.other.link.description.title.markdown',
				},
				19: {
					name: 'punctuation.definition.string.begin.markdown',
				},
				20: {
					name: 'punctuation.definition.string.end.markdown',
				},
				21: {
					name: 'punctuation.definition.metadata.markdown',
				},
			},
			match:
				'(?x)\n  (\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])\n                # Match the link text.\n  (\\()            # Opening paren for url\n    # The url\n      [ \\t]*\n      (\n         (<)((?:\\\\[<>]|[^<>\\n])*)(>)\n         | ((?<url>(?>[^\\s()]+)|\\(\\g<url>*\\))*)\n      )\n      [ \\t]*\n    # The title  \n    (?:\n        ((\\()[^()]*(\\)))    # Match title in parens…\n      | ((")[^"]*("))    # or in double quotes…\n      | ((\')[^\']*(\'))    # or in single quotes.\n    )?            # Title is optional\n    \\s*            # Optional whitespace\n  (\\))\n',
			name: 'meta.link.inline.markdown',
		},
		'link-ref': {
			captures: {
				1: {
					name: 'punctuation.definition.link.title.begin.markdown',
				},
				2: {
					name: 'string.other.link.title.markdown',
					patterns: [
						{
							include: '#raw',
						},
						{
							include: '#bold',
						},
						{
							include: '#italic',
						},
						{
							include: '#strikethrough',
						},
						{
							include: '#image-inline',
						},
					],
				},
				4: {
					name: 'punctuation.definition.link.title.end.markdown',
				},
				5: {
					name: 'punctuation.definition.constant.begin.markdown',
				},
				6: {
					name: 'constant.other.reference.link.markdown',
				},
				7: {
					name: 'punctuation.definition.constant.end.markdown',
				},
			},
			match: '(?<![\\]\\\\])(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])(\\[)([^\\]]*+)(\\])',
			name: 'meta.link.reference.markdown',
		},
		'link-ref-literal': {
			captures: {
				1: {
					name: 'punctuation.definition.link.title.begin.markdown',
				},
				2: {
					name: 'string.other.link.title.markdown',
				},
				4: {
					name: 'punctuation.definition.link.title.end.markdown',
				},
				5: {
					name: 'punctuation.definition.constant.begin.markdown',
				},
				6: {
					name: 'punctuation.definition.constant.end.markdown',
				},
			},
			match: '(?<![\\]\\\\])(\\[)((?<square>[^\\[\\]\\\\]|\\\\.|\\[\\g<square>*+\\])*+)(\\])[ ]?(\\[)(\\])',
			name: 'meta.link.reference.literal.markdown',
		},
		'link-ref-shortcut': {
			captures: {
				1: {
					name: 'punctuation.definition.link.title.begin.markdown',
				},
				2: {
					name: 'string.other.link.title.markdown',
				},
				3: {
					name: 'punctuation.definition.link.title.end.markdown',
				},
			},
			match: '(?<![\\]\\\\])(\\[)((?:[^\\s\\[\\]\\\\]|\\\\[\\[\\]])+?)((?<!\\\\)\\])',
			name: 'meta.link.reference.markdown',
		},
		raw: {
			captures: {
				1: {
					name: 'punctuation.definition.raw.markdown',
				},
				2: {
					name: 'meta.embedded.block.meta-bind',
					patterns: [
						{
							include: 'source.meta-bind',
						},
					],
				},
				3: {
					name: 'punctuation.definition.raw.markdown',
				},
			},
			match: '(`+)((?:[^`]|(?!(?<!`)\\1(?!`))`)*+)(\\1)',
			name: 'meta.embedded.block.meta-bind',
		},
		strikethrough: {
			captures: {
				1: {
					name: 'punctuation.definition.strikethrough.markdown',
				},
				2: {
					patterns: [
						{
							applyEndPatternLast: 1,
							begin: '(?=<[^>]*?>)',
							end: '(?<=>)',
							patterns: [
								{
									include: 'text.html.derivative',
								},
							],
						},
						{
							include: '#escape',
						},
						{
							include: '#ampersand',
						},
						{
							include: '#bracket',
						},
						{
							include: '#raw',
						},
						{
							include: '#bold',
						},
						{
							include: '#italic',
						},
						{
							include: '#image-inline',
						},
						{
							include: '#link-inline',
						},
						{
							include: '#link-inet',
						},
						{
							include: '#link-email',
						},
						{
							include: '#image-ref',
						},
						{
							include: '#link-ref-literal',
						},
						{
							include: '#link-ref',
						},
						{
							include: '#link-ref-shortcut',
						},
					],
				},
				3: {
					name: 'punctuation.definition.strikethrough.markdown',
				},
			},
			match: '(?<!\\\\)(~{2,})((?:[^~]|(?!(?<![~\\\\])\\1(?!~))~)*+)(\\1)',
			name: 'markup.strikethrough.markdown',
		},
	},
};
