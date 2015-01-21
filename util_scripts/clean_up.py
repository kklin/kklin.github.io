# Takes the photos in the given dir and makes the file names better
# Makes LOTS of assumptions, don't bother trying to understand it

from os import listdir
from os.path import isfile, join
import os
import sys

months = {'Sep': '9', 'Oct': '10', 'Nov': '11', 'Dec': '12', 'Jan': '1'}

mypath = sys.argv[1]
onlyfiles = [ f for f in listdir(mypath) if isfile(join(mypath,f)) ]

for filename in onlyfiles:
    if filename[-4:] == '.jpg':
        parts = filename.split(' ')
        new_filename = '2014-' + months[parts[1]] + '-' + parts[2][:-1] + '.jpg'
        print(filename + "  => " + new_filename)
        os.system("mv \"" + join(mypath,filename) + "\" " + new_filename)
