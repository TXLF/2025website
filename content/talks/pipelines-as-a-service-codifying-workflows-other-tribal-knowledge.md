---
title: "Pipelines as a Service: Codifying Workflows & Other Tribal Knowledge"
description: Texas Linux Fest
page_header_bg: images/background/page-title-bg.jpg
format: Workshop
when: "Friday, October 3rd, 3:00 PM - 4:30 PM"
where: Bevo
speakers:
  - name: Cody Lee Cochran
    image: images/speakers/cody-lee-cochran.jpg
    link: speakers/cody-lee-cochran/
---

Why Pipelines?

Teams often struggle with inconsistent development workflows, siloed knowledge,
and reinventing the wheel.  But what if your team, (or even your entire
organization), could treat pipelines as a first-class service, encapsulating
best practices, promoting shared understanding, and enabling repeatable,
scalable development and/or operations flows?

In this workshop, we'll walk through how to build and offer "Pipelines as a
Service" to your team or organization.  We'll explore a development pattern
that helps individuals and teams adopt shared workflows without sacrificing
flexibility or autonomy.  By leveraging Git hooks, reusable GitLab CI
pipelines, and containerized helper tooling, you'll learn how to turn
institutional knowledge into a portable, maintainable, and discoverable
resource.

Starting with a template repository, participants will implement a custom Git
workflow that includes local pre-commit and pre-push hooks and multi-stage CI
jobs—all tied together with clear documentation and intuitive entry points.
Whether yourre in DevOps, platform engineering, or internal tooling, this
workshop will show you how to scale your team's best practices through
automation and thoughtful defaults.

# Prerequisites

* An internet-connected Linux-based system
* Bash (v5.x)
* Git (v2.x)
* Docker or Podman (latest major version)
* Docker or Podman Compose (latest major version)
* A text editor
* A gitlab.com account (free to sign-up)

# Topics Covered

* Introduction: What does "Pipelines as a Service" mean?
* Anatomy of an effective workflow
* Writing and distributing Git hooks for local enablement
* Designing reusable CI pipelines with GitLab includes
* Containerizing helper scripts and CLI tools
* Sharing internal tools via templates and versioned releases
* Capturing tribal knowledge as code and documentation
* Empowering teams with discoverable, self-service automation
