---
title: Installing Golang on Kali Linux
date: 2021-06-12
layout: post
permalink: /2021/06/installing-golang-on-kali-linux/
featured_image: /assets/img/2020/2020-03-29-golang-hacker.jpg
excerpt: Go is an opensource programming language that is lean, mean and built for concurrency. Large numbers of hacking tools are built in this language and it is becoming the default for automation tools as well. Here is the process to get it running in Kali Linux.
---

If you are anything like me, you are more likely to Google how to install a golang than do an apt search. If that brought you here, then this is what you are after:

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

At this point you should be ready to Go. You can test by writing and compiling the Hello World program from Golang's webpage.

``` go
package main

import "fmt"

func main() {
	fmt.Printf("hello, world\n")
}
```

Save this as `hello.go`. You can then build this with `go build hello.go`. This should yield an executable file named `hello`.

With this setup, Go modules will be downloaded to your home directory and compiled there. As you start to get more Go programs installed, they will all be put in `/go`, which may be what you want, but my preference is to install each program into a separate directory. As a result, I use something similar to the following python script to change the prefix for each Go module so that it installs into a separate `/opt` directory and soft links to `/usr/local/bin`. You'll need to change the list of modules to install to your preferences, but it should work as is:

``` python
#!/usr/bin/env python3

import os
import sys

def install_golang_module(module):
    ''' Install the specified Golang module '''
    modulename = module.split("/")[-1].lower()
    if not os.path.exists("/opt/" + modulename):
        print("Installing go module " + modulename)
        cmdseries = ["sudo -E GO111MODULE=on go get -v " + module,
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

The full update script I use normally does a bunch of additional things, in an effort to keep all my environments at parity. You can take a look at [github.com/rafaelh/update-kali](https://github.com/rafaelh/update-kali).

You will also see `GO111MODULE` in a lot of Go installation commands. I recommend the [following post](https://maelvls.dev/go111module-everywhere/) to understand what this is about.

Now that you have Go working, take a look at the following repositories:

* [gwdomains](https://github.com/fuzzerk/gwdomains)
* [subjack](https://github.com/haccer/subjack)
* [httprobe](https://github.com/tomnomnom/httprobe)
* [waybackurls](https://github.com/tomnomnom/waybackurls)
* [gitleaks](https://github.com/zricethezav/gitleaks)
* [gf](https://github.com/tomnomnom/gf)
* [assetfinder](https://github.com/tomnomnom/assetfinder)
* [anew](https://github.com/tomnomnom/anew)
* [dalfox](https://github.com/hahwul/dalfox)
* [nuclei](https://github.com/projectdiscovery/nuclei)

Happy hacking!
