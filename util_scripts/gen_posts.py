# make blog posts for all the food images in the given folder
from os import listdir
from os.path import isfile, join
import sys, string

POST_TEMPLATE = string.Template(
'''---
layout: post
title: Food Post
---

<img class="food-photo" src="$img">
'''
)

mypath = sys.argv[1]
outdir = sys.argv[2]
onlyfiles = [ f for f in listdir(mypath) if isfile(join(mypath,f)) ]

for filename in onlyfiles:
    if filename[-4:] == '.jpg':
        post = POST_TEMPLATE.substitute({ 'img': join('/themenu/images/food/', filename) })
        post_filename = join(outdir, filename[:-4] + "-Food.md")
        with open(post_filename, 'w') as outfile:
            outfile.write(post)
