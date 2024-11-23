---
title: "Enterprise Automation with AWX (upstream for Ansible Automation Platform)"
description: "Texas Linux Fest 2024"
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, April 12, 10:00 AM - 10:45 AM"
where: "Room 4"

resources:
  - name: "Slides"
    link: "slides/enterprise-automation-with-awx.pdf"

speakers:
  - name: "Thomas Cameron"
    image: "images/speakers/thomas-cameron.jpg"
    link: "speakers/thomas-cameron/"
---

Just like the Fedora Linux Project is the upstream for Red Hat Enterprise
Linux, the AWX Project is the upstream for Red Hat's Ansible Automation
Platform. In this session, Thomas Cameron will walk you through getting started
with AWX. This presentation will use nothing but Open Source projects like
CentOS Stream and AWX available at zero cost, but is applicable to the
commercial Ansible Automation Platform product.

In this session, Thomas Cameron will demonstrate installing AWX on CentOS
Stream. Then he will configure an organization, add systems to the AWX server,
ensure that the ssh key is configured, and demonstrate syncing playbooks from
public and/or private repositories so that you can run complex jobs on your
CentOS, Fedora, or other distributions.

This presentation will go through the various features of AWX, including how to
define a organizations (think teams, departments, or other corporate
organizations), define inventories (groups of hosts), define credentials (ssh
keys and how we escalate privileges and potentially a GitHUB credential),
define projects (playbooks you would add via public or private git
repositories), create templates (what playbooks you're going to run against
which systems), schedules (for repeating tasks), and notifications (send an
email if a job fails, for instance).

Once this is all set up, Thomas will do a live demo of taking a two systems
which have no software installed beyond the base operating system to a two-tier
application with a front end web server and a back end database server.

