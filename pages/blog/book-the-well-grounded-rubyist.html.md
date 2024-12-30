---
title: Bookclub - The Well-Grounded Rubyist
publish_at: June 25, 2021 01:40
layout: post
tags: book_summary, tech
---

Took me a few months to read this, jumping on and off. Reading [POOD book](/blog/book-POOD) and working with Ruby on Rails at Shopify, sparks ✨ a deep interest in me to understand more about the Ruby language. This book by David A. Black called ['The Well-Grounded Rubyist'](https://www.manning.com/books/the-well-grounded-rubyist-third-edition?gclid=Cj0KCQjwl_SHBhCQARIsAFIFRVVTvONzrTOZXYA7iDidLZwnwKe_ZIE-6AbOmf-zhHLtdVIWEGSHhukaAvliEALw_wcB) was actually recommended by one of my colleagues at work. As a beginner picking up the language, I learned new exciting things every chapter of this book which got me going.

'Understanding' to me is key when reading programming books. I feel like it's tempting, but completely unnecessary to try and memorize syntaxes or anything really. If you end up forgetting, that could just be a signal that the information isn't important to you. But nonetheless it's important to know what features are available in your toolbox, and it'll definitely improve my literacy when reading/understanding what's going on in other people's code as well.

### Ruby
In general, the language is very expressive. At its core almost everything in Ruby is an object (including classes, numbers, symbols..). You send messages (method call) to the receiver object, and it'll either make sense of them or complain. Going over some basic objects like strings, arrays, hash, date/time, I realize the methods those objects can respond to are SOOOO rich 💰. I guess whenever I ever wanna do something, there's probably a message that exists in that class which could help me do it idiomatically.

#### Class variables, scopes, variables
A cool new concept that is unique to Ruby is class methods (or singleton method of the class). Since a class is itself an object, it has its own method and state which isn't shared with the instance of itself.

The 3 types of variables are global (name starts with $var. Never go out of scope), local, and class variables (start with @@var. A way to share data between class and its instance).

It was also helpful to understand the Ruby scope first time learning it. Everything is top-level and the scope would change (thus, 'self' changes) after you call a class/method/module. Luckily classes/modules are defined by a constant. You could easily look a constant up through the namespace using the scope operator ::

#### Modules
Modules are just like classes, except they can't be instantiated. Generally use class to model an enitity, and use module to model a behavior. To mixin a module you can .include, .prepend, or .extend (includes the module to the singleton class. e.g. to add functionality to class methods).

#### Code blocks, Enumerable, Procs
Another really cool concept was how code block works. Methods that accepts a code block is an iterator which 'yields' value to the block, then the block runs, and when the block returns a value that value is returned to the yield call, and the iterator method continues running from the last yielded point.

Enumerable works the same way as iterator, except it's an object that yields. Enumerable is a good way to protect a collection from being modified. Classes that inherit from enumerable also has a rich set of methods available (i.e. You can use map/each/inject operations for a File object - this saves memory since you don't read it first).

A related concept is Proc (lambda is closely similar). They are simply callable objects like code blocks. Instead of passing a code block you could equivalently pass in a proc with the & prefix (synthetic sugar for .to_proc). Proc is also a way to implement closure since it carries its context with it.

#### Symbols
One thing that confuses me starting out Ruby was 'symbols' (which is often interchangeable with strings). Internally, all identifiers (variable names, method names, constants..) are stored in a symbol table. Ruby exposes this to the programmers, to save the compiler some trouble of having to translate the string to symbol internally (e.g. so you can use symbols to lookup a method directly).

#### Misc
One other interesting method is 'caller' which provides array of stacktrace, at any point during the program. I just thought that this would be a really helpful method to debug in combination to the debugger.

### Thoughts
When people say Ruby is easy to use, I can somewhat agree - but it does need some getting used to. When you start getting familiar with what's available to you, I feel like that's when the fun starts. As quoted from the book "The more you learn about the language, the more you can learn". I'm no where near that point, but I can see myself being more fluent with it. I didn't like it as much when I first started, I think because it feels very different from the languages I know.

But when I say expressive, Ruby is insanely expressive. You can build on objects during its lifetime, rewrite standard libraries, or create methods/classes dynamically at runtime. That's illegal! Nope. Not in ruby. The freedom in Ruby provides flexibility for whatever the programmer wants to express. In fact the last chapter of the book describes how Ruby can be coded in a functional style (e.g. use higher-order functions, immutable vs mutable objects, using 'yield_self' method to chain operations (like .tap but returns the result), using 'curry' method to turn your multi-argument functions into partial functions that accepts the arguments in sequence before being executed, or even support for tail-call optimization when doing recursion - reminds me of this [musical about TCO](https://www.youtube.com/watch?v=-PX0BV9hGZY) 😂)

### Future
Things that I can explore in the future:
- Ruby made it easy to use Regex since it's also an object that you send messages to. Regex is powerful, yet can be hard to maintain. I feel like a small rake script project involving regex parsing would be quite fun to explore. It can pattern match, replace captured patterns, or just play a bit more with quantifiers, anchors and lookahead assertions (constraints), modifiers..
- Ruby (fileutils, pathname) gives a handful of File tools, like creating directories, manipulating files in the disk.. A project involving file management could be interesting.
- Building a DSL that utililze method_missing. There was a cool code example in the book about building XML (writing ruby DSL syntax -> that can be converted into -> XML).
- Using Thread class to easily spawn threads. You can pause/resume a thread, or even use Thread keys to store thread-safe values. Furthermore, it's also easy to create server socket communication with TCPServer (e.g. a chat server). In the book we created a simple multiplayer rock-paper-scissor game which combines these 2 concepts.
