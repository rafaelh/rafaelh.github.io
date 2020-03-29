---
title: Installing Golang on Kali Linux
date: 2020-03-29
layout: post
permalink: /2020/03/installing-golang-on-kali-linux/
featured_image: /assets/img/2020/2020-03-29-golang-hacker.jpg
excerpt: You can probably find a number of articles on manually installing golang on kali linux from a while back, but Golang is available in the Kali repos now, requiring some slightly different defaults. Here is the process to get it running now.
---

You can probably find a number of articles on manually installing golang on kali linux from a while back, but Golang is available in the Kali repos now, requiring some slightly different defaults. Here is the process to install:

``` sh
# First, install the package
sudo apt install -y golang

# Then add the following to your .bashrc
export GOROOT=/usr/lib/go
export GOPATH=$HOME/go
export PATH=$GOPATH/bin:$GOROOT/bin:$PATH

# Reload your .bashrc
source .bashrc
```

At this point you should be ready to go. You can test by writing and compiling the Hello World program from Golang's webpage.

``` go
package main

import "fmt"

func main() {
	fmt.Printf("hello, world\n")
}
```

Save this as `hello.go`. You can then build this with `go build hello.go`. This should yield an executable file named `hello`.

Now that you have this working, take a look at the following repositories:

* [gwdomains](https://github.com/fuzzerk/gwdomains)
* [tok](https://github.com/tomnomnom/hacks/tok)
* [fff](https://github.com/tomnomnom/hacks/fff)
* [httprobe](https://github.com/tomnomnom/httprobe)
* [waybackurls](https://github.com/tomnomnom/waybackurls)
* [gf](https://github.com/tomnomnom/gf)
* [assetfinder](https://github.com/tomnomnom/assetfinder)
* [anew](https://github.com/tomnomnom/anew)
* [html-tool](https://github.com/tomnomnom/hacks/html-tool)

Happy hacking!
