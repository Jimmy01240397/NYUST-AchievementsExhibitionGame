import csv
import sys
import json

with open(sys.argv[1], newline='') as csvfile:
    rows = csv.DictReader(csvfile)
    orgdata = list(rows)

result = []

with open(sys.argv[2], 'w', newline='') as csvfile:
    fieldnames = ['id', 'quizid', 'quiz', 'ans', 'A', 'B', 'C', 'D']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for line in orgdata:
        if line['id'] == "":
            continue
        newrow = {}
        for a in fieldnames:
            newrow[a] = line[a]
        writer.writerow(newrow)
        choose = []
        for a in ['A', 'B', 'C', 'D']:
            choose.append(newrow[a])
            del newrow[a]
        newrow['choose'] = choose
        if len(newrow['ans']) == 1:
            newrow['ans'] = ord(newrow['ans']) - ord('A')
        else:
            newrow['ans'] = -1
        result.append(newrow)

with open(sys.argv[3], 'w', newline='') as f:
    f.write(json.dumps(result))
