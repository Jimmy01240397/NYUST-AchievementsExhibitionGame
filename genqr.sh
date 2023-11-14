#!/bin/bash

while read line
do
    qrencode -o $line.png "$(echo "$line" | sha1sum | cut -d ' ' -f 1 | xxd -r -ps | base64)"
done < <(cat $1 | sed '1d' | cut -d ',' -f 1)
