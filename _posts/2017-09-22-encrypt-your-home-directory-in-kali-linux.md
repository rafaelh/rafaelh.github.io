---
title: Encrypt your home directory in Kali Linux
date: 2017-09-22
layout: post
permalink: /2017/09/encrypt-your-home-directory-in-kali-linux/
featured_image: /assets/img/logos/lock.jpg
excerpt: Full disk encryption requires you to enter a password on boot, and isn't the smoothest experience. It is the best approach from a security point of view, but I'm a believer in practical compromises. With linux, for me that means transparent home folder encryption.
---
Full disk encryption requires you to enter a password on boot, and isn't the smoothest experience. It is the best approach from a security point of view, but I'm a believer in practical compromises. With linux, for me that means transparent home folder encryption.

First of all, make a copy of your home directory, so that this doesn't become a fancy way of wiping your computer. Make sure you are <span style="text-decoration: underline;">not logged in as the user whose directory is being encrypted</span>, otherwise you will get a failure saying that ecryptfs cannot proceed.

```
# As root, install the packages needed
apt install ecryptfs-utils

# Add the appropriate kernel module
modprobe ecryptfs

# Then add 'ecryptfs' to this file to make it persistant through reboots
vim /etc/modules-load.d/modules.conf

# Encrypt the home folder
ecryptfs-migrate-home -u &lt;username&gt;

# And then log in as that user, BEFORE REBOOTING
# If you were using dropbox, you'll need to re-login
```

Once this is done, you should generate a key for recovery, by running ```ecryptfs-unwrap-passphrase``` as the encrypted user.

For complete protection, if you can live without hibernate/resume capabilities, you can encrypt your swap space (you'll still keep suspend/resume) by running ```ecryptfs-setup-swap```.

**Note: While you can set this up for the root user, do not do this, and make sure you only update software from the account that has had it's files encrypted. Otherwise, when updates need to make changes to your .config directory, they won't be able to, and you may be left with an unusable account. I learnt this the hard way. For safety, I also recommend adding the following to your root's .bashrc:**

```
alias apt="echo \"Are you about to break something? If you're SURE, use apt-unsafe\""
alias apt-unsafe="apt"
```

From this point, you should really only use apt when your encrypted user is logged in.