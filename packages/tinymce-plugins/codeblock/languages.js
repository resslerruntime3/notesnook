module.exports = [
  { name: "Plain text", shortname: "plaintext", aliases: ["text", "txt"] },
  {
    name: "HTML, XML",
    shortname: "xml",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg",
    ],
  },
  { name: "Bash", shortname: "bash", aliases: ["sh"] },
  { name: "C", shortname: "c", aliases: ["h"] },
  {
    name: "C++",
    shortname: "cpp",
    aliases: ["cc", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
  },
  { name: "C#", shortname: "csharp", aliases: ["cs", "c#"] },
  { name: "CSS", shortname: "css" },
  { name: "Markdown", shortname: "markdown", aliases: ["md", "mkdown", "mkd"] },
  { name: "Diff", shortname: "diff", aliases: ["patch"] },
  {
    name: "Ruby",
    shortname: "ruby",
    aliases: ["rb", "gemspec", "podspec", "thor", "irb"],
  },
  { name: "Go", shortname: "go", aliases: ["golang"] },
  { name: "TOML, also INI", shortname: "ini", aliases: ["toml"] },
  { name: "Java", shortname: "java", aliases: ["jsp"] },
  {
    name: "Javascript",
    shortname: "javascript",
    aliases: ["js", "jsx", "mjs", "cjs"],
  },
  { name: "JSON", shortname: "json" },
  { name: "Kotlin", shortname: "kotlin", aliases: ["kt", "kts"] },
  { name: "Less", shortname: "less" },
  { name: "Lua", shortname: "lua" },
  { name: "Makefile", shortname: "makefile", aliases: ["mk", "mak", "make"] },
  { name: "Perl", shortname: "perl", aliases: ["pl", "pm"] },
  {
    name: "Objective-C",
    shortname: "objectivec",
    aliases: ["mm", "objc", "obj-c", "obj-c++", "objective-c++"],
  },
  { name: "php", shortname: "php" },
  { name: "PHP template", shortname: "php-template" },
  { name: "Python", shortname: "python", aliases: ["py", "gyp", "ipython"] },
  { name: "python-repl", shortname: "python-repl", aliases: ["pycon"] },
  { name: "R", shortname: "r" },
  { name: "Rust", shortname: "rust", aliases: ["rs"] },
  { name: "SCSS", shortname: "scss" },
  {
    name: "Shell Session",
    shortname: "shell",
    aliases: ["console", "shellsession"],
  },
  { name: "SQL", shortname: "sql" },
  { name: "Swift", shortname: "swift" },
  { name: "YAML", shortname: "yaml", aliases: ["yml"] },
  { name: "TypeScript", shortname: "typescript", aliases: ["ts", "tsx"] },
  { name: "Visual Basic .NET", shortname: "vbnet", aliases: ["vb"] },
  { name: "1C:Enterprise", shortname: "1c" },
  { name: "Augmented Backus-Naur Form", shortname: "abnf" },
  { name: "Apache Access Log", shortname: "accesslog" },
  { name: "ActionScript", shortname: "actionscript", aliases: ["as"] },
  { name: "Ada", shortname: "ada" },
  { name: "AngelScript", shortname: "angelscript", aliases: ["asc"] },
  { name: "Apache config", shortname: "apache", aliases: ["apacheconf"] },
  { name: "AppleScript", shortname: "applescript", aliases: ["osascript"] },
  { name: "ArcGIS Arcade", shortname: "arcade" },
  { name: "Arduino", shortname: "arduino", aliases: ["ino"] },
  { name: "ARM Assembly", shortname: "armasm", aliases: ["arm"] },
  { name: "AsciiDoc", shortname: "asciidoc", aliases: ["adoc"] },
  { name: "AspectJ", shortname: "aspectj" },
  { name: "AutoHotkey", shortname: "autohotkey", aliases: ["ahk"] },
  { name: "AutoIt", shortname: "autoit" },
  { name: "AVR Assembly", shortname: "avrasm" },
  { name: "Awk", shortname: "awk" },
  { name: "X++", shortname: "axapta", aliases: ["x++"] },
  { name: "BASIC", shortname: "basic" },
  { name: "Backus–Naur Form", shortname: "bnf" },
  { name: "Brainfuck", shortname: "brainfuck", aliases: ["bf"] },
  { name: "C/AL", shortname: "cal" },
  { name: "Cap’n Proto", shortname: "capnproto", aliases: ["capnp"] },
  { name: "Ceylon", shortname: "ceylon" },
  { name: "Clean", shortname: "clean", aliases: ["icl", "dcl"] },
  { name: "Clojure", shortname: "clojure", aliases: ["clj", "edn"] },
  { name: "Clojure REPL", shortname: "clojure-repl" },
  { name: "CMake", shortname: "cmake", aliases: ["cmake.in"] },
  {
    name: "CoffeeScript",
    shortname: "coffeescript",
    aliases: ["coffee", "cson", "iced"],
  },
  { name: "Coq", shortname: "coq" },
  { name: "Caché Object Script", shortname: "cos", aliases: ["cls"] },
  { name: "crmsh", shortname: "crmsh", aliases: ["crm", "pcmk"] },
  { name: "Crystal", shortname: "crystal", aliases: ["cr"] },
  { name: "CSP", shortname: "csp" },
  { name: "D", shortname: "d" },
  { name: "Dart", shortname: "dart" },
  {
    name: "Delphi",
    shortname: "delphi",
    aliases: ["dpr", "dfm", "pas", "pascal"],
  },
  { name: "Django", shortname: "django", aliases: ["jinja"] },
  { name: "DNS Zone", shortname: "dns", aliases: ["bind", "zone"] },
  { name: "Dockerfile", shortname: "dockerfile", aliases: ["docker"] },
  { name: "Batch file (DOS)", shortname: "dos", aliases: ["bat", "cmd"] },
  { name: "dsconfig", shortname: "dsconfig" },
  { name: "Device Tree", shortname: "dts" },
  { name: "Dust", shortname: "dust", aliases: ["dst"] },
  { name: "Extended Backus-Naur Form", shortname: "ebnf" },
  { name: "Elixir", shortname: "elixir", aliases: ["ex", "exs"] },
  { name: "Elm", shortname: "elm" },
  { name: "ERB", shortname: "erb" },
  { name: "Erlang REPL", shortname: "erlang-repl" },
  { name: "Erlang", shortname: "erlang", aliases: ["erl"] },
  { name: "Excel formulae", shortname: "excel", aliases: ["xlsx", "xls"] },
  { name: "FIX", shortname: "fix" },
  { name: "Flix", shortname: "flix" },
  { name: "Fortran", shortname: "fortran", aliases: ["f90", "f95"] },
  { name: "F#", shortname: "fsharp", aliases: ["fs", "f#"] },
  { name: "GAMS", shortname: "gams", aliases: ["gms"] },
  { name: "GAUSS", shortname: "gauss", aliases: ["gss"] },
  { name: "G-code (ISO 6983)", shortname: "gcode", aliases: ["nc"] },
  { name: "Gherkin", shortname: "gherkin", aliases: ["feature"] },
  { name: "GLSL", shortname: "glsl" },
  { name: "GML", shortname: "gml" },
  { name: "Golo", shortname: "golo" },
  { name: "Gradle", shortname: "gradle" },
  { name: "Groovy", shortname: "groovy" },
  { name: "HAML", shortname: "haml" },
  {
    name: "Handlebars",
    shortname: "handlebars",
    aliases: ["hbs", "html.hbs", "html.handlebars", "htmlbars"],
  },
  { name: "Haskell", shortname: "haskell", aliases: ["hs"] },
  { name: "Haxe", shortname: "haxe", aliases: ["hx"] },
  { name: "HSP", shortname: "hsp" },
  { name: "HTTP", shortname: "http", aliases: ["https"] },
  { name: "Hy", shortname: "hy", aliases: ["hylang"] },
  { name: "Inform 7", shortname: "inform7", aliases: ["i7"] },
  { name: "IRPF90", shortname: "irpf90" },
  { name: "ISBL", shortname: "isbl" },
  { name: "JBoss CLI", shortname: "jboss-cli", aliases: ["wildfly-cli"] },
  { name: "Julia", shortname: "julia" },
  { name: "Julia REPL", shortname: "julia-repl", aliases: ["jldoctest"] },
  { name: "Lasso", shortname: "lasso", aliases: ["ls", "lassoscript"] },
  { name: "LaTeX", shortname: "latex", aliases: ["tex"] },
  { name: "LDIF", shortname: "ldif" },
  { name: "Leaf", shortname: "leaf" },
  { name: "Lisp", shortname: "lisp" },
  { name: "LiveCode", shortname: "livecodeserver" },
  { name: "LiveScript", shortname: "livescript", aliases: ["ls"] },
  { name: "LLVM IR", shortname: "llvm" },
  { name: "LSL (Linden Scripting Language)", shortname: "lsl" },
  { name: "Mathematica", shortname: "mathematica", aliases: ["mma", "wl"] },
  { name: "Matlab", shortname: "matlab" },
  { name: "Maxima", shortname: "maxima" },
  { name: "MEL", shortname: "mel" },
  { name: "Mercury", shortname: "mercury", aliases: ["m", "moo"] },
  { name: "MIPS Assembly", shortname: "mipsasm", aliases: ["mips"] },
  { name: "Mizar", shortname: "mizar" },
  { name: "Mojolicious", shortname: "mojolicious" },
  { name: "Monkey", shortname: "monkey" },
  { name: "MoonScript", shortname: "moonscript", aliases: ["moon"] },
  { name: "N1QL", shortname: "n1ql" },
  { name: "Nested Text", shortname: "nestedtext", aliases: ["nt"] },
  { name: "Nginx config", shortname: "nginx", aliases: ["nginxconf"] },
  { name: "Nim", shortname: "nim" },
  { name: "Nix", shortname: "nix", aliases: ["nixos"] },
  { name: "Node REPL", shortname: "node-repl" },
  { name: "NSIS", shortname: "nsis" },
  { name: "OCaml", shortname: "ocaml", aliases: ["ml"] },
  { name: "OpenSCAD", shortname: "openscad", aliases: ["scad"] },
  { name: "Oxygene", shortname: "oxygene" },
  { name: "Parser3", shortname: "parser3" },
  { name: "Packet Filter config", shortname: "pf", aliases: ["pf.conf"] },
  {
    name: "PostgreSQL",
    shortname: "pgsql",
    aliases: ["postgres", "postgresql"],
  },
  { name: "Pony", shortname: "pony" },
  {
    name: "PowerShell",
    shortname: "powershell",
    aliases: ["pwsh", "ps", "ps1"],
  },
  { name: "Processing", shortname: "processing", aliases: ["pde"] },
  { name: "Python profiler", shortname: "profile" },
  { name: "Prolog", shortname: "prolog" },
  { name: ".properties", shortname: "properties" },
  { name: "Protocol Buffers", shortname: "protobuf" },
  { name: "Puppet", shortname: "puppet", aliases: ["pp"] },
  { name: "PureBASIC", shortname: "purebasic", aliases: ["pb", "pbi"] },
  { name: "Q", shortname: "q", aliases: ["k", "kdb"] },
  { name: "QML", shortname: "qml", aliases: ["qt"] },
  { name: "ReasonML", shortname: "reasonml", aliases: ["re"] },
  { name: "RenderMan RIB", shortname: "rib" },
  { name: "Roboconf", shortname: "roboconf", aliases: ["graph", "instances"] },
  {
    name: "Microtik RouterOS script",
    shortname: "routeros",
    aliases: ["mikrotik"],
  },
  { name: "RenderMan RSL", shortname: "rsl" },
  { name: "Oracle Rules Language", shortname: "ruleslanguage" },
  { name: "SAS", shortname: "sas" },
  { name: "Scala", shortname: "scala" },
  { name: "Scheme", shortname: "scheme" },
  { name: "Scilab", shortname: "scilab", aliases: ["sci"] },
  { name: "Smali", shortname: "smali" },
  { name: "Smalltalk", shortname: "smalltalk", aliases: ["st"] },
  { name: "SML (Standard ML)", shortname: "sml", aliases: ["ml"] },
  { name: "SQF", shortname: "sqf" },
  { name: "Stan", shortname: "stan", aliases: ["stanfuncs"] },
  { name: "Stata", shortname: "stata", aliases: ["do", "ado"] },
  {
    name: "STEP Part 21",
    shortname: "step21",
    aliases: ["p21", "step", "stp"],
  },
  { name: "Stylus", shortname: "stylus", aliases: ["styl"] },
  { name: "SubUnit", shortname: "subunit" },
  { name: "Tagger Script", shortname: "taggerscript" },
  { name: "Test Anything Protocol", shortname: "tap" },
  { name: "Tcl", shortname: "tcl", aliases: ["tk"] },
  { name: "Thrift", shortname: "thrift" },
  { name: "TP", shortname: "tp" },
  { name: "Twig", shortname: "twig", aliases: ["craftcms"] },
  { name: "Vala", shortname: "vala" },
  { name: "Visual Basic .NET", shortname: "vbnet", aliases: ["vb"] },
  { name: "VBScript", shortname: "vbscript", aliases: ["vbs"] },
  { name: "VBScript in HTML", shortname: "vbscript-html" },
  { name: "Verilog", shortname: "verilog", aliases: ["v", "sv", "svh"] },
  { name: "VHDL", shortname: "vhdl" },
  { name: "Vim Script", shortname: "vim" },
  { name: "WebAssembly", shortname: "wasm" },
  { name: "Wren", shortname: "wren" },
  { name: "Intel x86 Assembly", shortname: "x86asm" },
  { name: "XL", shortname: "xl", aliases: ["tao"] },
  { name: "XQuery", shortname: "xquery", aliases: ["xpath", "xq"] },
  { name: "Zephir", shortname: "zephir", aliases: ["zep"] },
];
