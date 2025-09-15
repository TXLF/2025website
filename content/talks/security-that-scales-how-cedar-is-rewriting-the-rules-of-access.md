---
title: "Security That Scales: How Cedar is Rewriting the Rules of Access"
description: "Texas Linux Fest 2025"
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, October 4th, 11:00 AM - 11:45 AM"
where: "Stadium"

speakers:
  - name: "Mike Schwartz"
    image: "images/speakers/mike-schwartz.jpg"
    link: "speakers/mike-schwartz/"
---

The fine-grained access control challenge is no longer just who can access the 
database, but, what data they should see once access is granted.” In this talk, 
we introduce a Cedar policy plugin for OpenSearch that enforces data filtering 
decisions directly at query time—based on policies written in the Cedar syntax 
and evaluated using the “Cedarling”, a new component in the Linux Foundation 
Janssen Project distribution.

While there are many databases out there, OpenSearch is a good example for this 
talk. It’s a fork of the document database Elastic, also governed at the Linux 
Foundation. All functions of the OpenSearch database are exposed via REST 
endpoints. In our example, imagine a GET request to the /search endpoint which 
may contain both public and confidential documents. To prevent unauthorized 
disclosure, the OpenSearch plugin evaluates its policies for each document (in 
under 50 µs per decision), only permitting public records.

Because OpenSearch queries are HTTP requests, it’s also a good chance to show 
how to use JSON Web Tokens (“JWTs”) that are sent with the request as evidence 
of the principals of the authorization request. The principal is the “Who” part 
of the request–specifying what person is making the request, using what software
. Both the human and the software each have their own identities! This 
information is conveyed with JWTs, and it’s trusted because it’s signed by 
trusted JWT issuers.

This emerging approach to managing domain security, based on policies that 
require signed cryptographic evidence, is called Token Based Access Control or 
TBAC. It leverages new deterministic policy engines like Cedar and signed JWT 
tokens to create a cryptographic chain of custody for authorization from the 
identification of the person and workload to the decision to allow the 
capability.

The future of security will require more compute. Domains will need to 
constantly evaluate thousands of policies, and the impact of changing these 
policies as companies expand and contract. Predictive AI software is not that 
useful when we need to prove security–there is no room for AI hallucinations. 
The answer to security lies in a different aspect of computer science–in this 
case formal reasoning. Using the example of data security, this talk will give 
you a preview of what’s likely to become the new baseline for domain security, 
and how we can use provable universal statements like “No confidential data 
will ever be shared with the public”, to prove compliance.
