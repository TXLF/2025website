---
title: Containers without Docker
description: Texas Linux Fest
page_header_bg: images/background/page-title-bg.jpg
format: Presentation
when: Saturday, October 4th, 10:00 AM - 10:45 AM
where: Stadium
speakers:
  - name: Fred Lawler
    image: images/speakers/fred-lawler.jpg
    link: speakers/fred-lawler/
---

Cloudflare heavily uses containerization for managing our global network and
products.  Sometimes, Docker can be too "heavy" to be useful in cases where all
we really want is network isolation for some processes.  Containers are simply
an operating system concept to isolate process features from each other and the
host.

We'll explore creating containers from scratch on Linux using namespaces.  I'll
map Docker image/runtime configuration to the unshare command arguments to
solve a real problem for network performance testing and debugging systemd
without the need for a virtual machine.
