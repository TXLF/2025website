---
title: "The Design & Implementation of the Darwin Operating System"
description: Texas Linux Fest 2025
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, October 4th, 11:00 AM - 11:45 AM"
where: Big Tex
speakers:
  - name:  "Kory Heard"
    image: "images/speakers/kory-heard.jpg"
    link:  "speakers/kory-heard/"
---

Darwin is the second most widely deployed UNIX in the world, quietly powering 
every iPhone, Mac, Apple Watch, and VisionPro. While often overlooked in open 
source circles, Darwin shares deep roots with Linux—and in many ways, the 
systems have borrowed from, inspired, or diverged from each other in fascinating
 ways.

In this talk, we’ll explore what makes Darwin tick: its hybrid kernel 
architecture, Mach messaging model, BSD subsystem, modern launch system, 
security policy, and how Apple blends open source with proprietary innovation. 
Then, we’ll take it a step further: comparing Darwin’s model to Linux 
distributions like Fedora Silverblue, where immutable infrastructure, service 
management, and user isolation take different but converging paths.

Topics include:

The hybrid XNU kernel: Mach + BSD Launchd vs systemd Mach IPC vs Unix domain 
sockets and D-Bus Sandboxing and Mandatory Access Control: Apple’s seatbelt vs 
SELinux Rootless, System Integrity Protection (SIP), and OS hardening Filesystem
 layout and application distribution vs Flatpak/Silverblue’s model This talk is 
for Linux users, OS developers, and reverse engineers who want to understand the
 system beneath Apple’s polished UI—and how it compares to modern Linux desktop
 efforts that emphasize security, reliability, and immutability.

Come see how Darwin and Linux approach the same problems differently—and why 
understanding both makes you a better systems thinker.

<https://www.youtube.com/watch?v=AmdXnr0rjlI>
