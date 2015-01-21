# Take the filenames from allison's phone and turn it into a better format
# TODO: if there's two files from the same day, only one will remain! (all the
# others will get overwritten)

from os import listdir
from os.path import isfile, join
import os
import sys

months = {'Sep': '9', 'Oct': '10', 'Nov': '11', 'Dec': '12', 'Jan': '1'}

mypath = sys.argv[1]
onlyfiles = [ f for f in listdir(mypath) if isfile(join(mypath,f)) ]

for filename in onlyfiles:
    if filename[-4:] == '.jpg' and filename[:5] == 'Photo':
        parts = filename.split(' ')
        new_filename = '2015-' + months[parts[1]] + '-' + parts[2][:-1] + '.jpg'
        print(filename + "  => " + new_filename)
        os.system("mv \"" + join(mypath,filename) + "\" " + join(mypath,new_filename))
