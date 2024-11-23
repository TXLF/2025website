# Texas Linux Fest 2025 website

This repository contains the source code for [2025.texaslinuxfest.org][txlf].
It uses the [Hugo framework][hugo] with the [Eventre theme][eventre].

If you are making changes to the talks or speakers,
make sure to update the following files:

- `data/homepage.yml`
- `content/talks/<title>.md`
- `content/speakers/<name>.md`
- `static/images/speakers/<name>.<extension>`
- `static/images/speakers/<name>-thumb.<extension>`

If you are making changes to the sponsors,
make sure to update the following files:

- `data/homepage.yml`
- `static/images/sponsors/<name>.<extension>`

To preview your changes locally before submitting a pull request,
run the following command:

```
hugo server
```

[txlf]: https://2025d.texaslinuxfest.org/
[hugo]: https://gohugo.io/
[eventre]: https://docs.gethugothemes.com/eventre/
