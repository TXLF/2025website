---
title: Mesh Network Sidecars for NixOS Services
description: Texas Linux Fest
page_header_bg: images/background/page-title-bg.jpg
format: Presentation
when: "Saturday, October 4th, 5:00 PM - 5:45 PM"
where: Big Tex
speakers:
  - name: Wes Payne
    image: images/speakers/wes-payne.jpg
    link: speakers/wes-payne/
---

Inspired by the popular container sidecar pattern, this talk demonstrates a
generic, open source NixOS module that brings the same security and isolation
to bare metal services.  We'll explore how to declaratively wrap any systemd
service, placing it in an isolated network namespace with its own mesh network
client (e.g., Tailscale or Netbird).  This approach makes services securely
accessible on your mesh, fully firewalled from the host—no application changes
required.  Good fit for folks exploring declarative infrastructure and looking
for practical ways to apply modern security patterns to their own servers.
