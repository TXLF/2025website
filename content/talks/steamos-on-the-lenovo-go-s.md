---
title: SteamOS™ on the Lenovo™ Go S
description: Texas Linux Fest
page_header_bg: images/background/page-title-bg.jpg
format: Presentation
when: Saturday, October 4th, 2:00 PM - 2:45 PM
where: Balcones
speakers:
  - name: Mario Limonciello
    image: images/speakers/mario-limonciello.jpg
    link: speakers/mario-limonciello/
---

The Lenovo™ Go S is a handheld gaming PC that launched this year.  It is sold
both with Windows™ and with SteamOS™.  There have been lots of positive
accolades in the press for how well SteamOS runs on the hardware, with many
reviewers preferring SteamOS to Windows.  Because SteamOS had been designed
specifically for the Steam Deck™ modifying it for SteamOS required extra
development in nearly every layer of the stack:

* Linux™ kernel driver work
* UEFI Firmware work
* MCU Firmware work
* Firmware updating
* Hardware abstraction
* Input Plumber
* TDP adjustment
* SteamOS manager
* Steam™ client work

I'll talk about the various changes that had to be made for each layer, and
more importantly why they had to be made.
