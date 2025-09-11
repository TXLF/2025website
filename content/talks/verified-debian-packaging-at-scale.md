---
description: Texas Linux Fest
page_header_bg: images/background/page-title-bg.jpg
title: Verified Debian Packaging at Scale
format: Presentation
when: "Saturday, October 4th, 2:00 PM - 2:45 PM"
where: Big Tex
speakers:
  - name: Chris Arges
    image: images/speakers/chris-arges.jpg
    link: speakers/chris-arges/
  - name: Fred Lawler
    image: images/speakers/fred-lawler.jpg
    link: speakers/fred-lawler/
---

Cloudflare's global network relies on Debian Linux machines across 330+ cities.
To enhance production security we wanted to ensure that our servers can only
run authorized software. For this we leverage the Linux Kernel's
IMA-Measurement feature to validate binary signatures before execution. Our
system encompasses first-party software, Docker containers, and open-source
Debian packages.

This talk illustrates how we successfully injected digital signatures into
every Debian package installed on our fleet. This involved deep dives into the
Linux Kernel, modifying dpkg, and building a mirroring system that could sign
upstream repositories. Learn about our journey enhancing software integrity on
a massive scale. This session is ideal for those interested in Linux security,
package management, and Internet-scale system administration.

