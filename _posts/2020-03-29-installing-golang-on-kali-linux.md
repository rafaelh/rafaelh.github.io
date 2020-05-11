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

You should now be ready to install any Go programs that you want. They will be downloaded to your home directory and compiled there, which is a bit *messy* for my taste. As a result, I use something similar to the following python script to change the prefix for each Go module so that it installs into a separate `/opt` directory and soft links to `/usr/local/bin`. You'll need to change the list of modules to install to your preferences, but it should work as is:

``` python
#!/usr/bin/env python3

import os
import sys

def install_golang_module(module):
    ''' Install the specified Golang module '''
    modulename = module.split("/")[-1].lower()
    if not os.path.exists("/opt/" + modulename):
        print("Installing go module " + modulename)
        cmdseries = ["sudo -E go get -u " + module,
                     "sudo ln -s /opt/" + modulename + "/bin/" + \
		     modulename + " /usr/local/bin/" + modulename]
        os.environ["GOPATH"] = "/opt/" + modulename
        for cmdstring in cmdseries:
            os.system(cmdstring)

if __name__ == '__main__':
    ''' These go tools will be installed globally. '''
    
    golang_modules_to_install = ['github.com/tomnomnom/assetfinder',
                                 'github.com/lc/gau',
                                 'github.com/theblackturtle/wildcheck',
                                 'github.com/tomnomnom/httprobe',
                                 'github.com/hakluke/hakrawler',
                                 'github.com/tomnomnom/qsreplace',
                                 'github.com/hahwul/dalfox']
				
    for module in golang_modules_to_install:
        install_golang_module(module)
```

The full update script I use normally does a bunch of additional things - you can take a look at [github.com/rafaelh/update-kali](https://github.com/rafaelh/update-kali).

Now that you have Go working, take a look at the following repositories:

* [gwdomains](https://github.com/fuzzerk/gwdomains)
* [httprobe](https://github.com/tomnomnom/httprobe)
* [waybackurls](https://github.com/tomnomnom/waybackurls)
* [gf](https://github.com/tomnomnom/gf)
* [assetfinder](https://github.com/tomnomnom/assetfinder)
* [anew](https://github.com/tomnomnom/anew)
* [dalfox](github.com/hahwul/dalfox)

Happy hacking!
