---
title: "False Positives, Real Gains: Valkey's Probabilistic Filters"
sponsor: Percona
description: Texas Linux Fest
page_header_bg: images/background/page-title-bg.jpg
format: Presentation
when: Friday, October 3rd, 10:30 AM - 12:00 PM
where: Lil Tex
speakers:
  - name: Matthew Boehm
    image: images/speakers/matthew-boehm.jpg
    link: speakers/matthew-boehm/
  - name: Alastair Turner
    image: images/speakers/alastair-turner.jpg
    link: speakers/alastair-turner/
---

In the world of large-scale data, asking simple questions like "Have I seen
this before?" needs to be fast and efficient, without eating up all your
memory.  That's where probabilistic data structures like Bloom filters and
Cuckoo filters come in.

In this talk, we'll explore how Valkey, high-performance, open-source fork of
Redis, uses Bloom, and Cuckoo filters to help developers tackle membership
tests without large footprints.  We will explore the fundamentals of what these
filters are, how they work, what makes them memory-efficient, why they
occasionally lie, and when to choose one over the other.

We'll cover some real-world use cases, practical tips for implementing, and
tuning these filters in Valkey.  Whether you're building a caching layer, or
fighting duplicate data, you'll leave with a clear understanding of how to get
the most out of these clever data structures.
