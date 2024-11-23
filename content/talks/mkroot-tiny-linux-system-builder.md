---
title: "mkroot: tiny Linux system builder"
description: "Texas Linux Fest 2024"
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, April 13, 12:00 PM - 12:45 PM"
where: "Room 1"

speakers:
  - name: "Rob Landley"
    image: "images/speakers/rob-landley.jpg"
    link: "speakers/rob-landley/"
---

The script is at
https://github.com/landley/toybox/blob/master/mkroot/mkroot.sh and the talk
outline is at https://landley.net/talks/mkroot-2023.txt. This talk is a line
by line explanation of what that script is doing and why, with a lot of
backstory on the design decisions. Toybox is a BSD-licensed command line
utility package written by an ex-maintainer of busybox, which has provided
Android's command line since Marshmallow.

You can try out the resulting binaries at
https://landley.net/bin/mkroot/latest. The script to build the cross
compilers from source is at
https://github.com/landley/toybox/blob/master/scripts/mcm-buildall.sh (or use
the binaries from https://landley.net/bin/toolchains) and a script that
performs an automated smoketest on the resulting systems (to make sure they
mount a block device and talk to the network and so on) is at
https://github.com/landley/toybox/blob/master/mkroot/testroot.sh which also
provides an example of how to run arbitrary automated loads under QEMU and
examine the results.

The tiny systems are built from two source packages (linux and toybox), and
pull in code from the toolchain's C library (musl-libc for these toolchains),
packaged into an initramfs. The script creates an init script, directory
layout, and some /etc files, then builds and installs toybox's command line
utilities and packages the result into an initramfs. It then creates a kernel
config for the chosen architecture, compiles Linux, and packages the result
with a run-qemu.sh script to invoke the emulator.

The mkroot/packages directory provides examples of additional packages the
script can download, cross compile, and add to the image. One of those packages
builds busybox, if you prefer any of those utilities to toybox or would like to
compare them side by side.

