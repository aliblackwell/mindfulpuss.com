---
title: Welcome to Mindfulpuss
summary: The first podcast!
description: Be more cat.
layout: layouts/podcast.njk
tags: podcasts
permalink: /podcasts/inaugural-podcast/
file: /podcast-files/inaugural.mp3
duration: 00:02:12

---



<div id="footnote-container"></div>
<script src="/js/popcorn.js"></script>
<script src="/js/popcorn.footnote.js"></script>
<script src="/js/podcast.js"></script>

<figure>
    <figcaption>{{title}}</figcaption>
    <audio
        controls
        id="podcast"
        src="{{file}}">
            Your browser does not support the
            <code>audio</code> element.
    </audio>
</figure>