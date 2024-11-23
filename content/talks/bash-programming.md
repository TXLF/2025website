---
title: "Bash Programming"
description: "Texas Linux Fest 2024"
page_header_bg: "images/background/page-title-bg.jpg"
format: "Workshop"
when: "Friday, April 12, 4:30 PM - 5:45 PM"
where: "Room 1"

resources:
  - name: "Slides"
    link: "https://bash.codrcodz.io/"

speakers:
  - name:  "Cody Lee Cochran"
    image: "images/speakers/cody-lee-cochran.jpg"
    link:  "speakers/cody-lee-cochran/"
---

##### Why Bash?

Bash has been the default shell for many Linux distributions over the years.
Whether you are a system administrator, software developer, or DevOps engineer,
there is a good chance that you work with Bash on a daily basis. But, how well
do you really know it? How often do you reach out to external binaries or other
programming languages when the features you need to manipulate text, files, or
other resources are already right at your finger tips?

During this 60-minute workshop, we will explore all the ways in which Bash is a
Turing-complete, batteries-included programming language that can be your first
choice in many situations beyond just light shell scripting and glue code.
Starting from some pre-written boilerplate template code from a repository that
accompanies this presentation, we will walk through the existing code and use
it to build a very simple, but fully-functional, enterprise-ready, command line
interface tool (CLI) with Bash completion and colorized output. We will also
lint it, unit test it, functionally evaluate it, autodoc it, and then release
it as both a package and a containerized application using GitlabCI.

##### Prerequisites

* An internet-connected Linux-based system
* Bash (v5.x)
* Git (v2.x)
* A text editor
* A gitlab.com account, [sign-up for free here](https://gitlab.com/users/sign_up)

##### Topics Covered

* Introduction
* Using Bash variables and arrays
* Manipulating text with pure Bash (aka sub-string manipulation and regex)
* Reading-from and writing-to files with pure Bash
* Colorized program output
* Bash completion
* Parsing command-line options
* Logic (conditionals, cases, and test operators)
* Debugging code as you write it
* Linting Bash code
* Unit testing Bash functions
* Functional evaluation testing Bash programs
* Automatically documenting Bash programs
* Containerizing & packaging Bash programs
* Automated program release via GitlabCI
