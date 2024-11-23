---
title: "Automated container updates with GitHub & CoreOS"
description: "Texas Linux Fest 2024"
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, April 13, 4:30 PM - 5:15 PM"
where: "Room 2"

resources:
  - name: "Slides"
    link: "https://txlf24-containers.major.io/"

speakers:
  - name: "Major Hayden"
    image: "images/speakers/major-hayden.png"
    link: "speakers/major-hayden/"
---

We've all been there: overwhelmed by deployments on servers and cloud instances
with various versions of operating systems in various states of deployments.
Containers empowered us to break free from the OS constraints and deliver
software more independently. Let's take containers to the next level by
building them automatically in GitHub Actions, using Renovate to maintain the
container source, and running Watchtower on CoreOS to keep our deployment
updated on each server.

In this talk, you will learn how to set up a fully automated container pipeline
that has no costs outside of the server running your containers. All of this
eventually lands on CoreOS – a minimalist, container-centric operating system
that updates just like the phone in your pocket.
