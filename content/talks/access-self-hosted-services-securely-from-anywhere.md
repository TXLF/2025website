---
title: "Access self-hosted services securely from anywhere"
description: "Texas Linux Fest 2024"
page_header_bg: "images/background/page-title-bg.jpg"
format: "Presentation"
when: "Saturday, April 13, 4:30 PM - 5:15 PM"
where: "Room 4"

speakers:
  - name: "Alex Kretzschmar"
    image: "images/speakers/alex-kretzschmar.jpg"
    link: "speakers/alex-kretzschmar/"
---

Opening ports in your firewall to access services running in your LAN is an
insecure and outdated way to operate. Find out how to share any self-hosted
service, running anywhere in the world, behind almost any kind of NAT, with
friends and family without exposing your homelab to the internet.

I'll demonstrate how to self-host a few services like Jellyfin (Media Server),
Immich (photo backup) and Nextcloud and share them from a VM running in my
homelab basement behind a residential firewall with NAT using Tailscale node
sharing. I put a DNS entry in public Cloudflare with the Tailscale private IP
and show folks how they don't need to expose their homelabs to the internet any
longer and provide access via a secure and encrypted VPN tunnel. The homelab
runs Proxmox, NixOS and the services run mostly using docker.
