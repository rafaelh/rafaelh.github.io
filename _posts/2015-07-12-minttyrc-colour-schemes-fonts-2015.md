---
id: 634
title: '.minttyrc colour schemes &#038; fonts (2015)'
date: 2015-07-12T21:19:43+00:00
author: Rafael
layout: post
guid: http://cygwin.rafaelhart.com/?p=634
permalink: /2015/07/minttyrc-colour-schemes-fonts-2015/
dsq_thread_id:
  - "3883958721"
categories:
  - All
---
<p style="text-align: justify;">mintty is a fantastic terminal program; it's now the default with Cygwin for some time. There are a range of others such as xterm and rxvt, but mintty does the trick for me. You can change all the settings by right-clicking on the window and going into 'options', but that modifies a file called .minttyrc in your home directory, so you have the alternative of using a text editor if you wish. Mine goes like so:</p>

<pre>#
# .minttyrc - Configuration file for mintty terminal
#

BoldAsFont=no
Font=Anonymous Pro
FontHeight=12
Rows=45
Term=xterm-256color


ForegroundColour= 131, 148, 150
BackgroundColour= 0, 43, 54
CursorColour= 220, 50, 47

Black=7, 54, 66
BoldBlack=0, 43, 54
Red=220, 50, 47
BoldRed=203, 75, 22
Green=133, 153, 0
BoldGreen=88, 110, 117
Yellow=181, 137, 0
BoldYellow=101, 123, 131
Blue=38, 139, 210
BoldBlue=131, 148, 150
Magenta=211, 54, 130
BoldMagenta=108, 113, 196
Cyan=42, 161, 152
BoldCyan=147, 161, 161
White=238, 232, 213
BoldWhite=253, 246, 227

Scrollbar=none
</pre>
<p style="text-align: justify;">What this does, amongst other things, is set the terminal to use the colours from the 'solarized' colorscheme, by <a href="http://ethanschoonover.com/solarized">Ethan Schoonover</a>. Colourschemes are a personal thing, but this is a good choice. Another way of creating a colour scheme, or selecting from several other good options is to go to <a href="http://terminal.sexy">http://terminal.sexy</a>, selecting/creating a colour scheme, then exporting it, using the 'minTTY' option.</p>
<h2>Fonts</h2>
<p style="text-align: justify;">You may also notice above is a reference to the 'anonymous pro' font, which I am a big fan of. From the font's readme file:</p>
<a href="https://www.rafaelhart.com/wp-content/uploads/2014/02/anonymous.png"><img class="size-full wp-image-46 aligncenter" src="https://www.rafaelhart.com/wp-content/uploads/2014/02/anonymous.png" alt="anonymous" width="650" height="46" /></a>

Anonymous Pro is the work of Mark Simonson, and you can find the font at his site <a title="here" href="http://www.marksimonson.com/fonts/view/anonymous-pro" target="_blank">here</a>.