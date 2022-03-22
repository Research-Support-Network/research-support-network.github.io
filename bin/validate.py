import sys
from glob import glob
from yaml import load

LENGTH = 400
EXITSTATUS = 0

for file in glob("_data/members/*"):
    with open(file) as fh:
        ymlf = load(fh)
        for key in ymlf:
            if len(ymlf[key]) > 400:
                print(f"File's '{file}' field '{key}' is larger than 400 characters")
                EXITSTATUS = 1

sys.exit(EXITSTATUS)
