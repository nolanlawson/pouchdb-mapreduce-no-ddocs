Map Reduce No DDocs
=====

[![Build Status](https://travis-ci.org/nolanlawson/pouchdb-mapreduce-no-ddocs.svg)](https://travis-ci.org/nolanlawson/pouchdb-mapreduce-no-ddocs)

Fork of the [pouchdb-mapreduce](https://github.com/pouchdb/mapreduce) project to add additional APIs to allow secondary indexes without design docs.

See [pouchdb/mapreduce#134](https://github.com/pouchdb/mapreduce/pull/134) and [pouchdb/mapreduce#184](https://github.com/pouchdb/mapreduce/pull/184) for why I decided to fork.

**TLDR**: I don't like design docs, I needed this for [pouchdb-quick-search](https://github.com/nolanlawson/pouchdb-quick-search), and I couldn't convince myself or anyone else that it's really appropriate for mapreduce itself, so I did what's beautiful in open-source and just forked it.

Hosted on npm:

```
npm install pouchdb-mapreduce-no-ddocs
```

Building
----

    npm install
    npm run build

Testing
----

### In Node

    npm test

To run coverage tests:

    npm run coverage

To run individual tests:

    GREP=my_search_term npm test

### In the browser

Run 

    npm run dev
    
and then point your favorite browser to [http://127.0.0.1:8001/test/index.html](http://127.0.0.1:8001/test/index.html).

To run individual tests, load e.g.:

    http://127.0.0.1:8001/test/index.html?grep=my_search_term
