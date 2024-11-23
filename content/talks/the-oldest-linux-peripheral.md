---
title: "The oldest Linux peripheral"
description: "Texas Linux Fest 2024"
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, April 12, 10:00 AM - 10:45 AM"
where: "Room 3"

resources:
  - name: "Slides"
    link: "slides/the-oldest-linux-peripheral.pdf"

speakers:
  - name: "Matt Mullins"
    image: "images/speakers/speaker-one.jpg"
    link: "speakers/matt-mullins/"
---

At the Connections Museum in Seattle, we proudly exhibit a Panel switch from
1923. We have it connected to a Linux system through a T1 line via a Western
Electric "D4" channel bank. Since support for the "revertive pulse" signaling
that it uses had never been needed in the outside world, we had to write our
own modifications to the analog telephony kernel drivers to make it run.

We now have working support in both directions - sending the signaling pulses
as well as receiving them. We believe that makes it the oldest working hardware
with support running in the Linux kernel.

I'll go over:

* the basics of the Panel switch itself, how it communicates with other analog
  switches, and how that turns into a digital trunk
* the architecture of Asterisk — what logic is in the kernel and why
* the painstaking process of adding this support to a kernel driver
* and how we use all this today to interface this century-old machine to the
  internet.
