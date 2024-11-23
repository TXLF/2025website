---
title: "connect() - why you so slow?!"
description: "Texas Linux Fest 2024"
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, April 13, 12:00 PM - 12:45 PM"
where: "Room 4"

resources:
  - name: "Slides"
    link: "slides/connect-why-you-so-slow.pdf"

speakers:
  - name: "Fred Lawler"
    image: "images/speakers/fred-lawler.jpg"
    link: "speakers/fred-lawler/"
---

Through this talk we would like to share our story of what we have learned
about connect() implementation for TCP in Linux, both its strong and weak
sides. How connect() latency changes under pressure, and how to open connection
so that the syscall latency is deterministic and time-bound.

In this talk we would like to cover:

* Why Cloudflare services sometimes experience pressure, where we need to open
  lots of connections to just one destination.
* How we have been avoiding the connect() latency pitfall so far, and why it is
  no longer a viable option.
* Our efforts to benchmark connect() syscall and characterize its latency as
  the the number of open connections increases.
* Existing difficulties in tracing and monitoring connect() performance at
  scale in a production environment.
* A look at how connect() is implemented in Linux for TCP; its evolution and
  previous attempts dealing with high-latency under pressure.
* How to control how long connect() takes with existing Linux APIs - recipes
  for how to open TCP connections with predictable syscall latency.
