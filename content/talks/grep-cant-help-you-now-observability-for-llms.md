---
title: "Grep Can't Help You Now: Observability for LLMs"
description: Texas Linux Fest
page_header_bg: images/background/page-title-bg.jpg
format: Presentation
when: "Saturday, October 4th, 3:00 PM - 3:45 PM"
where: Lil Tex
speakers:
  - name: Sophia Solomon
    image: images/speakers/sophia-solomon.jpg
    link: speakers/sophia-solomon/
---

LLMs generate, log, and trace enormous volumes of date, with some models
emitting tens of millions of logs per hour.  Tools like grep laid the
groundwork for logging, and while they served us well in the past, they have
quickly become inadequate when faced with the scale of LLMs.  The linear search
capabilities of grep are simply too slow for today's real-time demands.  In
this talk, I'll demonstrate how modern, robust observability tools can
transform the way we handle logs at scale.  I will explore how to use
OpenTelemetry (OTel) and Elastic Observability to tame the chaos, working with
data from Hugging Face and Mistral-based LLMs.  I'll start by showing how grep
struggles with high volume logs, and then contrast that with the power of
modern observability stacks.  We will walk through exporting telemetry data via
OTel and EDOT into Elastic, and we will compare the insights you can extract
from them versus grep.  For this talk, while some foundational observability
knowledge will be helpful, I want to make this accessible on all levels.  I
will explain the core concepts of observability of LLMs throughout the session.
Whether you are debugging LLMs or scaling AI infrastructure, this talk will
help you move from reactive grepping to proactive observability.
