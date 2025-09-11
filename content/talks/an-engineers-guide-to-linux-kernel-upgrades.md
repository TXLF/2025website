---
title: An engineer's guide to Linux Kernel upgrades
description: Texas Linux Fest
page_header_bg: images/background/page-title-bg.jpg
format: Presentation
when: "Saturday, October 4th, 10:00 AM - 10:45 AM"
where: Big Tex
speakers:
  - name: Ignat Korchagin
    image: images/speakers/ignat-korchagin.jpg
    link: speakers/ignat-korchagin/
---

The Linux Kernel lies at the heart of many high profile services and
applications.  And since the kernel code executes at the highest privilege
level it is very important to keep up with kernel updates to ensure the
production systems are patched in a timely manner for numerous security
vulnerabilities discovered almost every day.

Yet, because the kernel code executes at the highest privilege level and a
kernel bug usually crashes the whole system, many SREs, production engineers
and system administrators try to avoid upgrading the kernel too often just for
the sake of stability.  In many companies we have seen a tendency to create
more obstacles to Linux kernel releases (requiring more approvals, harder
update justifications, requiring more time in canary testing etc).  But
introducing all these obstacles and not treating kernel updates like any other
software updates usually significantly increases the risk for the company and
their service of being exploited.

One of the reasons SREs and production engineers are too afraid of ANY kernel
upgrade is that they don't actually know the details about Linux kernel release
process and policy.  This talk tries to demystify Linux Kernel releases and
provides a guide on how to distinguish a kernel bugfix release from a feature
release.  We also try to explore why commonly established perceptions and
patterns around production kernel releases are wrong and how you actually risk
the stability of your systems by not releasing the kernel regularly.  In the
end we describe how kernel releases are implemented in our company and propose
possible approaches to deploy kernel upgrades regularly with minimal risk.

