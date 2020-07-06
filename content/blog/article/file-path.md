---
title: 파일 경로에 대해 알아보자 (아직 번역 중)
date: "2019-06-01"
tags: ["PATH", "SW-ENGINEERING"]
featuredImage: ../../assets/file_path.png
---

> 이 글은 [medium blog 원문](https://medium.com/@jalendport/what-exactly-is-your-shell-path-2f076f02deb4)을 저자의 동의를 얻어 번역한 번역본 입니다. 의역이 섞여 있습니다. 틀리게 번역이 되었다고 생각되는 부분은 자유롭게 의견을 댓글로 주시면 감사하겠습니다. 🙇‍♂️

I was recently attempting to explain to a friend what the PATH variable on his computer is used for. After writing up a nice long message in the Slack group we were conversing in, I realized it was good material for a blog post. So here goes…

최근 지인에게 그의 컴퓨터에 있는 PATH 변수가 왜 필요한지 설명을 시도했던 적이 있었다. Slack group 에서 아주 길게 잘 설명을 했는데, 마침 좋은 블로그 컨텐츠가 되겠다 생각했다. 자 여기에 풀어보자...

You've probably heard people and/or blog posts talking about editing your PATH or "such-and-such" not being present in your PATH. And you're just like, "Wait, what exactly is the PATH?". Good question!

여러분들은 사람들이 블로그 포스트에서 여러분들의 PATH 를 edit 해야 한다든지, 여러분들의 컴퓨터 PATH 에 존재하지 않는다든지에 대해 들어봤을 것이다. 혹은 터미널에서 특정 명령 라이브러리를 설치했음에도 불구하고 `command not found` 를 만나 많은 시간을 헤메이고 있을지도 모른다.
![cmd-not-found](../../assets/cmd_not_found.png)
The PATH variable is basically a list of directories your computer looks through to find a requested executable.
If that definition doesn't make a whole lot of sense at this point, read on and I'll explain how it all works in-depth…
PATH 변수(variable) 이란 그저 당신의 컴퓨터 디렉토리 리스트에서 요청한 실행부(executable)를 찾는 것이다. 이 시점에서 이 정의가 그리 와 닿지 않아도 괜찮다. 이 글을 읽어내려가면 모두 어떻게 동작되는지 자세히 설명하도록 하겠다.
your PATH is pretty much a bunch of directional signs telling your computer where to go
당신의 PATH는 당신의 컴퓨터에게 어느 쪽으로 가라는 것인지 여러 표지판(signs)라고 생각해도 된다.
A BRIEF INTRODUCTION TO THE FILE SYSTEM
Let's start at square 1️⃣. Your computer is comprised of files; of which there are two types. You've got data files (files that just contain information) and you've got executable files (files that are used to perform various functions and operations on your computer).
파일 시스템(FILE SYSTEM) 에 대한 간단한 소개
컴퓨터는 파일들로 구성되는데 그 파일들에는 두 가지 타입이 있다. 1. 데이터 파일(정보를 담고 있는 파일) 과 2. 실행파일(컴퓨터에서 여러 함수와 오퍼레이션이 수행되는 파일)이 그 둘이다.
Whenever you open a computer application, you're in essence just running its executable file(s). The same goes for commands you use in your Terminal — for example, cd and ls are just executable files. These executable files are usually stored in some specific directories. The executable files for your applications, for example, are stored in your Applications folder. Executable files for all your CLI programs/commands are typically stored in one of several places:
/bin → user utilities — contains some common executables used to navigate directories and manage files via the command line (cd, ls, rm, etc)
/sbin → system programs and administration utilities — contains executables that handle things like booting, restoring, recovering, and/or repairing the system (launchd, reboot, mount, etc)
/usr/bin → common utilities, programming tools, and applications — contains executables that aren't vital to the system's functionality but are still included in the operating system (ssh, php, vim, etc)
/usr/sbin → system daemons & system utilities — contains executables that are generally run as background processes ( cron, php-fpm, coreaudiod, etc)
/usr/local/bin, /usr/local/sbin → user-installed executables, libraries, etc. — contains executables that unlike the above folders aren't included by default with the operating system (custom shell scripts, and programs installed via Homebrew, utilities installed with and needed by certain GUI programs, etc.)
In addition to these standard directories, some programs use their own
/bin-like directories for storing executable files. For example, Homebrew, a popular package manager for macOS, puts any executable files it installs in /usr/local/Cellar (and those executable files are then symlinked into your /usr/local/bin folder for ease-of-use). Composer, a dependency manager for PHP, installs executable files in ~/.composer/vendor/bin. Depending on how you install MYSQL, some of its utilities (mysqldump for example) are installed in /usr/local/mysql/bin.
ALL ABOUT THE PATH
So, we've now get executable files strewn across our file system in these various folders. We can now access and use these executable files in the Terminal by typing out the full absolute path to the file. So, for example, if you wanted to use ls to list out the current directory's files, you could run
$ /bin/ls in your Terminal. Or if you have an awesome program installed in /usr/local/bin, you could run $ /usr/local/bin/my-program to access it. But do you really want to have to type out the full path to your executable each time? Would you not rather be able to run $ ls or $ my-program?
🤔 Remember: Don't copy/paste the dollar sign at the beginning of a command! It is used to resemble the prompt in your terminal and it's just there to let you know that this is command is meant to be run in the terminal.
That's where PATH comes in! Here's an analogy of how the PATH works: imagine you're a manager of several large warehouses. In each of these warehouses you've got a bunch of different products. You also have a spreadsheet or a map that lists out the location of each warehouse and what products are being stored at each one.
PATH works in a similar way — it's a global variable that contains a string of different paths separated by a :. When you type the name of an program without using the absolute path, your computer then uses this variable to understand what directories it should look in to find the executable you're requesting. Starting with the first directory in the list, it will search for a match to what you requested — which means that directories that comes first in the PATH take precedence over directories later on in the list.
🔥 Tip: If you want to see what your path is currently set to, run $ echo $PATH.
a directory in your PATH = a warehouse 📦
I popped open a Mac with a fresh install of macOS and on that machine the "default" PATH seems to be /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin. So out of the box, your Mac should automatically use the PATH to fulfill requests for any programs installed in the default/standard bin locations. But what if you're using another tool like Composer or Homebrew and want to add other directories to your PATH?
EDITING YOUR PATH
Since the PATH is essentially just a variable, we can access PATH on the command line or in a script by using $PATH or ${PATH}. The ${PATH} form is particularly helpful when you want to construct something like
$ echo ${PATH}foo, because running $ echo $PATHfoo would try to look for a variable named PATHfoo.
For example, let's say we want to add a new directory that takes precedence over the currently added directories (i.e. we want to add it in front of the others), we can run the following in our Terminal:
$ export PATH="/my/directory/bin:$PATH"
Now when we run $ echo $PATH you should see your new directory listed before the other directories in the PATH (something like /my/directory/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin).
But maybe you want to add this directory to the end of the PATH so it is the last directory to be searched. Then you could do something like this:
$ export PATH="\$PATH:/my/directory/bin"
And your new PATH will look something like /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/my/directory/bin.
Good work! 🎉 You've just successfully edited your PATH.
However, the changes you just made to the PATH are not going to persist; in other words, the next time you logout or reboot your Mac, you'll be back to your original PATH. We want the changes to our PATH to persist, so we're either going to have to edit the /etc/paths file or add the custom PATH declaration to our local shell files.
If we edit the /etc/paths file, the PATH changes will be applied globally across all the users on the system. If you open /etc/paths in a text editor, you'll notice there are a bunch of directories listed on individual lines. To add your custom directory, create a new line anywhere in the file and add your directory path (directories higher up in the file take precedence over any directories listed below it). However, if you're just interested in changing this for your local user, I'd recommend just adding the necessary line(s) to your local shell files.
If you're using Bash (the default shell on most UNIX systems), you're probably going to want to add this to either your ~/.bash_profile or your ~/.bashrc file. If you're using another shell, you can add it to whatever file(s) that shell uses (ZSH for example uses a ~/.zshrc file). Basically, all you need to do is just open the appropriate file in TextEdit or a code editor and somewhere in the file add the custom PATH declaration you need. For example, my ~/.bashrc contains the following lines:
export PATH="/usr/local/bin:/usr/local/sbin:$PATH"
export PATH="\$PATH:~/.composer/vendor/bin"
After you've added the necessary exports, save the file and quit and relaunch Terminal to load the new changes.
A PRACTICAL EXAMPLE
A common PATH-related issue I hear of all the time is certain applications or tools complaining about not being able to find the mysqldump executable (a database backup utility that is installed with MYSQL). And because it can't find this executable, it's getting hung up on whatever task it's trying to run and spitting out error codes at you. Like I mentioned earlier, MYSQL has it's own /bin-like directory where utilities like mysqldump are installed.
So what we want to do is add the path to this MYSQL /bin folder to our PATH variable so this tool we're trying to use will be able to access mysqldump to complete the task. We're going to opt for editing our shell files because we don't have a need at the moment to apply this PATH change globally to all the users on the computer. Also, we're using BASH on this particular computer.
Let's go ahead and open ~/.bash-profile in a text editor and add the following line:
export PATH="\$PATH:/usr/local/mysql/bin"
Next, we'll need to save the file, close our text editor, and then quit and relaunch Terminal so the new PATH will take effect.
Now we should be able to re-run the task we were trying to complete earlier and it should be able to find mysqldump in the PATH.
Hopefully now you've got a pretty good grasp of what your PATH is and how it works!
If you're having problems with any of the above or still trying to wrap your head around how PATH works, please reach out to me and I'll try to help you out. You can leave a comment below or reach me on Twitter (@jalendport).

## If you found this post helpful or enjoyed the read, please follow me here or on Twitter to see future posts!

- 현장에 필요한 실무 코딩 교육부트캠프, 코드스테이츠 에서 건강한 개발자를 양성하고 있습니다.
- SW 엔지니어의 역량 = 압도적인 소프트스킬 + 기술에 대한 사랑 + 장인정신(craftmanship)
- 소프트웨어 기술을 사랑하며 이를 공유하고 함께 나누는 멋진 분들을 존경합니다.
- 앞으로 더 다루었으면 하거나 번영이 되었으면 하는 내용들은 댓글로 적어주세요.
  [![codestates](https://miro.medium.com/max/2448/1*x9kUnyASEa_Ke21yQ9gBPw.png)](https://bit.ly/2ZOFM2L)
