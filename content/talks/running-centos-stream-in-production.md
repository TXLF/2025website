---
title: "Running CentOS Stream in Production"
description: Texas Linux Fest
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, October 4th, 3:00 PM - 3:45 PM"
where: Big Tex
speakers:
  - name:  "Robert Callicotte"
    image: "images/speakers/robert-callicotte.jpg"
    link:  "speakers/robert-callicotte/"
---

We've run 3,000+ CentOS Stream systems in production since 2020 with consistent
stability.  This talk covers the tech stack, reliability strategies, and how a
small team manages infrastructure at scale—real-world insights into CentOS
Stream in production.

To manage our fleet of over 3,000 CentOS Stream systems, we rely on a highly
automated and reproducible infrastructure built around a mix of upstream and
internal tooling.  For internal package builds, we use Koji as our RPM build
system.  It allows us to produce signed, traceable RPMs that integrate cleanly
into our CI/CD workflows and deployment pipelines.  Koji gives us fine-grained
control over package lifecycles, build isolation, and promotion, which is
critical to maintaining a stable and consistent environment.

For provisioning and repository management, we use Cobbler.  It handles
network-based OS installation across our infrastructure, allowing us to manage
PXE boot environments and installation profiles with ease.  Additionally, we
leverage Cobbler's repo mirroring capabilities to maintain local mirrors of
CentOS Stream and internal repositories.  This ensures fast, reliable package
access during provisioning and day-to-day operations, while giving us tighter
control over updates and availability.

SaltStack is central to our infrastructure automation.  We use it not only for
configuration management and enforcing system state, but also to deploy virtual
machines across our environment.  By integrating with our virtualization stack,
SaltStack enables us to provision, configure, and orchestrate VMs
programmatically, making it easier to scale up services, test new builds, or
recover from failures with minimal manual effort.

Jenkins plays a key role in our CI/CD pipeline, coordinating build, test, and
deployment workflows.  It also triggers rebuilds and tests for any package
changes, helping us catch issues early in the development cycle.

For system image creation, we use the KIWI plugin for Koji, which allows us to
build consistent, production-ready OS images directly within our existing build
system.  This integration ensures image builds are reproducible, versioned, and
traceable—just like our RPMs—while streamlining the process of rolling out
updates across our fleet.

Finally, DistGit is used to manage RPM spec files and source code in a
structured, version-controlled manner.  This gives our team fine-grained
control over the OS and application stack, supporting reproducibility and
collaboration.

Together, these tools allow a small team to manage thousands of CentOS Stream
nodes efficiently, with a strong focus on automation, consistency, and
reliability.
